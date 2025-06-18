const OTP = require('../models/otp.model');
const bcrypt = require('bcryptjs');
const { sendOTPviaSMS } = require('../services/twilio.service');
const dotenv = require('dotenv');

dotenv.config();

// Configurable limits
const OTP_EXPIRY_MINUTES = parseInt(process.env.OTP_EXPIRY_MINUTES || '10');
const OTP_MAX_ATTEMPTS = parseInt(process.env.OTP_MAX_ATTEMPTS || '3');

// Generate random 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Generate and send OTP
const generateAndSendOTP = async (phone, signupData) => {
  try {
    const otp = generateOTP();
    const hashedOtp = await bcrypt.hash(otp, 10);

    await OTP.findOneAndUpdate(
      { phone },
      {
        otp: hashedOtp,
        signupData,
        createdAt: new Date(),
        verified: false,
        attempts: 0
      },
      { upsert: true, new: true }
    );

    const message = `Your OTP for blood donor signup is: ${otp}. It is valid for ${OTP_EXPIRY_MINUTES} minutes.`;
    const smsResult = await sendOTPviaSMS(phone, message);

    if (!smsResult.success) {
      throw new Error('Failed to send SMS');
    }

    console.log(`✅ OTP sent to ${phone}`);

    return {
      success: true,
      ...(process.env.NODE_ENV === 'development' && { otp }) // Return raw OTP in dev only
    };
  } catch (error) {
    console.error('🔴 Error in generateAndSendOTP:', error);
    return { success: false, error: error.message };
  }
};

// Verify OTP
const verifyOTP = async (phone, inputOtp) => {
  try {
    const otpRecord = await OTP.findOne({ phone });
    if (!otpRecord) {
      console.warn(`❌ No OTP record for ${phone}`);
      return false;
    }

    // Check expiry
    const now = new Date();
    const ageInMinutes = (now - new Date(otpRecord.createdAt)) / (1000 * 60);
    if (ageInMinutes > OTP_EXPIRY_MINUTES) {
      await OTP.deleteOne({ phone });
      console.warn(`⏰ OTP expired for ${phone}`);
      return false;
    }

    // Check attempts
    if (otpRecord.attempts >= OTP_MAX_ATTEMPTS) {
      await OTP.deleteOne({ phone });
      console.warn(`❌ Max attempts exceeded for ${phone}`);
      return false;
    }

    // Check match
    const isMatch = await bcrypt.compare(inputOtp, otpRecord.otp);
    if (!isMatch) {
      await OTP.updateOne({ phone }, { $inc: { attempts: 1 } });
      console.warn(`❌ OTP mismatch for ${phone}`);
      return false;
    }

    // Verified ✅
    await OTP.updateOne({ phone }, { verified: true });
    console.log(`✅ OTP verified for ${phone}`);

    // Optional: Auto-clear after 1 minute
    setTimeout(() => clearOTP(phone), 60 * 1000);

    return true;
  } catch (error) {
    console.error('🔴 Error in verifyOTP:', error);
    return false;
  }
};

// Get OTP record after verification
const getOTPRecord = async (phone) => {
  try {
    return await OTP.findOne({ phone, verified: true });
  } catch (error) {
    console.error('🔴 Error in getOTPRecord:', error);
    return null;
  }
};

// Delete OTP after use
const clearOTP = async (phone) => {
  try {
    await OTP.deleteOne({ phone });
    console.log(`🗑️ OTP record cleared for ${phone}`);
    return true;
  } catch (error) {
    console.error('🔴 Error in clearOTP:', error);
    return false;
  }
};

module.exports = {
  generateAndSendOTP,
  verifyOTP,
  getOTPRecord,
  clearOTP
};
