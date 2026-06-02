const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

// Student Login
router.post("/student/login", authController.studentLogin);

// Teacher OTP Login
router.post("/teacher/send-otp", authController.sendTeacherOtp);
router.post("/teacher/verify-otp", authController.verifyTeacherOtp);

module.exports = router;