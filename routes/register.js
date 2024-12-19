// routes/register.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const sendOTP = require('../utils/sendOTP'); // Utility to send OTP

// POST register
router.post('/', async (req, res) => {
    const { email, password } = req.body; // Assuming email and password from frontend
    const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate 4-digit OTP

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const newUser = new User({ email, password, otp }); // Create new user
        await newUser.save(); // Save new user

        await sendOTP(email, otp); // Call function to send OTP
        return res.status(201).json({ message: 'User registered, OTP sent to email' });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

module.exports = router;
