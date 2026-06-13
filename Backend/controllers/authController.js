const Otp = require("../models/Otp");
const generateOtp = require("../services/otpService");

const User = require("../models/user");
const Teacher = require("../models/Teacher");

const jwt = require("jsonwebtoken");

const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

// ================= TEACHER SEND OTP =================

const sendTeacherOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const teacher = await Teacher.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

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

// ================= VERIFY TEACHER OTP =================

const verifyTeacherOtp = async (req, res) => {
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

    const teacher = await Teacher.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    const token = jwt.sign(
      {
        id: teacher._id,
        email: teacher.email,
        role: teacher.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    await Otp.deleteOne({ email });

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: teacher,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GOOGLE LOGIN =================

const googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { email, name, picture } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        password: "google-auth-user",
        role: "student",
        profilePic: picture,
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Google Login Successful",
      token,
      user,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Google Login Failed",
    });
  }
};

module.exports = {
  sendTeacherOtp,
  verifyTeacherOtp,
  googleLogin,
};