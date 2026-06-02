const Teacher = require("../models/Teacher");
const Otp = require("../models/Otp");

const sendEmail = require("../services/emailService");
const generateOtp = require("../services/otpService");

const generateToken = require("../utils/generateToken");

exports.sendTeacherOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const teacher = await Teacher.findOne({ email });

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    if (!teacher.approved) {
      return res.status(403).json({
        success: false,
        message: "Teacher not approved",
      });
    }

    const otp = await generateOtp(email);

    await sendEmail(
      email,
      "Teacher Login OTP",
      `Your OTP is ${otp}`
    );

    return res.status(200).json({
      success: true,
      message: "OTP Sent Successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};