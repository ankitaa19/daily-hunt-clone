// models/User.js
const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    otp: { type: String, required: false }, // Store OTP if needed
    isVerified: { type: Boolean, default: false }, // Check if email is verified
});

// Create and export the model
module.exports = mongoose.model('User', UserSchema);
