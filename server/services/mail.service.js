const { transporter, mailFrom } = require('../config/mail.config');

async function sendMail(to, subject, html) {
  try {
    const result = await transporter.sendMail({
      from: mailFrom,
      to,
      subject,
      html
    });
    console.log('Email sent:', result.response);
    return { success: true };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error: error.message };
  }
}

module.exports = { sendMail };
