const express = require('express');
const {Accounts}=require('../db2.js')
const router = express.Router();
const {authMiddleware}=require('../middleware.js')
const mongoose = require('mongoose');

router.get('/balance',authMiddleware,async(req,res)=>{

    const account = await Accounts.findOne({
        userId: req.userId
    });

    res.json({
        Balance: account.Balance
    })

    

})




router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Accounts.findOne({ userId: req.userId }).session(session);

    if (!account || account.Balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Accounts.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Accounts.updateOne({ userId: req.userId }, { $inc: { Balance: -amount } }).session(session);
    await Accounts.updateOne({ userId: to }, { $inc: { Balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
});

module.exports = router;
