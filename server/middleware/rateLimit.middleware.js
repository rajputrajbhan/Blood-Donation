const OTP = require('../models/otp.model');

async function otpResendLimiter(req, res, next) {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ message: 'Phone is required' });
  const record = await OTP.findOne({ phone });
  if (record) {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    if (record.updatedAt > oneHourAgo && record.resendCount >= 3) {
      return res.status(429).json({ message: 'OTP resend limit reached. Try again later.' });
    }
    // Reset resendCount if more than 1 hour passed
    if (record.updatedAt < oneHourAgo) {
      record.resendCount = 0;
      await record.save();
    }
  }
  next();
}

module.exports = { otpResendLimiter }; 