const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// OTP Routes
router.post('/send-otp', authController.sendOTP);
router.post('/resend-otp', authController.resendOTP);

// Registration Routes
router.post('/register/donor', authController.registerDonor);
router.post('/register/admin', authController.registerAdmin);

// Authentication Routes
router.post('/login', authController.login);
router.post('/logout', authController.logout);

// Password Recovery Routes
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);

module.exports = router;