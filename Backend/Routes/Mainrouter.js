

const express=require('express');
const AccountRouter=require('../Routes/Account.js');
const UserRouter=require('./User2.js');
const app=express();


const router=express.Router();


router.use('/User',UserRouter);
router.use('/Account',AccountRouter);

module.exports=router;





