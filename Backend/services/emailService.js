const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

const sendEmail = async (email, otp) => {
  try {
    const info = await transporter.sendMail({
      from: `"LMS Portal" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Teacher Login OTP",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Teacher Login OTP</h2>
          <p>Your One Time Password is:</p>
          <h1 style="color:#2563eb;">${otp}</h1>
          <p>This OTP is valid for 5 minutes.</p>
        </div>
      `,
    });

    console.log("Email Sent:", info.messageId);
    return true;
  } catch (error) {
    console.log("Email Error:", error);
    throw error;
  }
};

module.exports = sendEmail;