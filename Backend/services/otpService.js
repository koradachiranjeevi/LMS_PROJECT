const Otp = require("../models/Otp");
const sendEmail = require("./emailService");

const generateOtp = async (email) => {
  const otp = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  await Otp.deleteMany({ email });

  await Otp.create({
    email,
    otp,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000),
  });

  await sendEmail(email, otp);

  return otp;
};

module.exports = generateOtp;