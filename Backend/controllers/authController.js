const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Otp = require("../models/Otp");
const generateOtp = require("../services/otpService");

// ================= STUDENT LOGIN =================

exports.studentLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await Student.findOne({
      email,
      password,
    });

    if (!student) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      student,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ================= TEACHER SEND OTP =================

exports.sendTeacherOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const otp = await generateOtp(email);

    console.log("Generated OTP:", otp);

    return res.status(200).json({
      success: true,
      message: "OTP Sent",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= VERIFY OTP =================

exports.verifyTeacherOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const otpData = await Otp.findOne({ email });

    if (!otpData) {
      return res.status(400).json({
        success: false,
        message: "OTP not found",
      });
    }

    if (otpData.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    await Otp.deleteOne({ email });

    return res.status(200).json({
      success: true,
      message: "Login Successful",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};