const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const OtpModel = require('../models/otp.model');
const Admin = require('../models/admin.model');
const Donor = require('../models/bloodDonor.model');
const sendEmail = require('../utils/sendEmail');
require('dotenv').config();

const generateToken = (userId, role) =>
  jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: '7d' });

// Send OTP via Email
exports.sendOTP = async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    await OtpModel.findOneAndUpdate(
      { email },
      { otp, createdAt: new Date() },
      { upsert: true, new: true }
    );

    await sendEmail(email, 'Your OTP Code', `Your OTP is: ${otp}`);
    res.status(200).json({ message: 'OTP sent to your email' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send OTP', error: err.message });
  }
};

// Resend OTP
exports.resendOTP = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if previous OTP exists
    const existingOTP = await OtpModel.findOne({ email });
    if (existingOTP) {
      // Check if the previous OTP was sent less than 1 minute ago
      const timeSinceLastOTP = new Date() - existingOTP.createdAt;
      if (timeSinceLastOTP < 60 * 1000) {
        return res.status(429).json({ 
          message: 'Please wait at least 1 minute before requesting a new OTP',
          retryAfter: Math.ceil((60 * 1000 - timeSinceLastOTP) / 1000)
        });
      }
    }

    // Generate and send new OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await OtpModel.findOneAndUpdate(
      { email },
      { otp, createdAt: new Date() },
      { upsert: true, new: true }
    );

    await sendEmail(email, 'Your New OTP Code', `Your new OTP is: ${otp}`);
    res.status(200).json({ message: 'New OTP sent to your email' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to resend OTP', error: err.message });
  }
};

exports.registerDonor = async (req, res) => {
  const {
    name, email, phone, password, age, weight, gender,
    bloodGroup, medicalHistory, address, otp
  } = req.body;

  try {
    const validOtp = await OtpModel.findOne({
      email,
      otp: String(otp),
      createdAt: { $gt: new Date(Date.now() - 5 * 60 * 1000) }, // OTP valid for 5 minutes
    });
    console.log('Valid OTP:', validOtp);
    if (!validOtp) return res.status(400).json({ message: 'Invalid or expired OTP' });

    const existingDonor = await Donor.findOne({ $or: [{ email }, { phone }] });
    if (existingDonor) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newDonor = await Donor.create({
      name,
      email,
      phone,
      password: hashedPassword,
      age,
      weight,
      gender,
      bloodGroup,
      medicalHistory,
      address,
    });

    await newDonor.save();

    await OtpModel.deleteOne({ email });
    const token = generateToken(newDonor._id, 'Donor');

    res.status(201).json({ message: 'Donor registered successfully', token });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

exports.registerAdmin = async (req, res) => {
  const { name, email, phone, password, otp } = req.body;

  try {
    const validOtp = await OtpModel.findOne({
      email,
      otp: String(otp),
      createdAt: { $gt: new Date(Date.now() - 5 * 60 * 1000) }, // OTP valid for 5 minutes
    });
    if (!validOtp) return res.status(400).json({ message: 'Invalid or expired OTP' });

    const existingAdmin = await Admin.findOne({ $or: [{ email }, { phone }] });
    if (existingAdmin) return res.status(400).json({ message: 'Admin already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await Admin.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });
    await newAdmin.save();

    await OtpModel.deleteOne({ email });

    const token = generateToken(newAdmin._id, 'Admin');
    res.status(201).json({ message: 'Admin registered successfully', token });
  } catch (err) {
    res.status(500).json({ message: 'Admin registration failed', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    if (!email || !password || !role) {
      return res.status(400).json({ message: 'Email, password, and role are required' });
    }

    if (role !== 'Donor' && role !== 'Admin') {
      return res.status(400).json({ message: 'Invalid role. Must be either Donor or Admin' });
    }

    const Model = role === 'Admin' ? Admin : Donor;
    const user = await Model.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = generateToken(user._id, role);
    res.status(200).json({
      message: `${role} logged in successfully`,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role,
        ...(role === 'Donor' && {
          bloodGroup: user.bloodGroup,
          phone: user.phone
        })
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

exports.logout = async (req, res) => {
  try {
    // In a stateless JWT system, logout is handled client-side by discarding the token
    // If you need server-side logout, you would need a token blacklist system
    
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Logout failed', error: err.message });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email, role } = req.body;

  try {
    if (!email || !role) {
      return res.status(400).json({ message: 'Email and role are required' });
    }

    const Model = role === 'Admin' ? Admin : Donor;
    const user = await Model.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate reset token (valid for 1 hour)
    const resetToken = jwt.sign(
      { userId: user._id, role, action: 'password_reset' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send email with reset link
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    await sendEmail(
      email,
      'Password Reset Request',
      `Click the following link to reset your password: ${resetUrl}\n\nThis link will expire in 1 hour.`
    );

    res.status(200).json({ message: 'Password reset link sent to your email' });
  } catch (err) {
    res.status(500).json({ message: 'Password reset failed', error: err.message });
  }
};

exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    if (!token || !newPassword) {
      return res.status(400).json({ message: 'Token and new password are required' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if (decoded.action !== 'password_reset') {
      return res.status(400).json({ message: 'Invalid token' });
    }

    const Model = decoded.role === 'Admin' ? Admin : Donor;
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await Model.findByIdAndUpdate(decoded.userId, { password: hashedPassword });

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(400).json({ message: 'Password reset link has expired' });
    }
    res.status(500).json({ message: 'Password reset failed', error: err.message });
  }
};