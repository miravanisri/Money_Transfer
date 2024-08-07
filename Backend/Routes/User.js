const express = require('express');
const zod = require('zod');
const router = express.Router();
const User = require('../db.js');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config.js');

const UserSchema = zod.object({
    Username: zod.string().email(),
    Firstname: zod.string(),
    Lastname: zod.string(),
    Password: zod.string().min(6)
});

router.post('/Signup', async (req, res) => {
    const Body = req.body;

    const validation = UserSchema.safeParse(Body);
    if (!validation.success) {
        return res.status(400).json({
            message: 'Invalid inputs',
            error: validation.error.errors
        });
    }

    const { Username, Firstname, Lastname, Password } = Body;

    try {
        const user = await User.findOne({ Username });
        if (user) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const newUser = await User.create({ Username, Firstname, Lastname, Password });

        const userId = newUser._id;
        const token = jwt.sign({ userId }, JWT_SECRET);
        return res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});


module.exports = router;
