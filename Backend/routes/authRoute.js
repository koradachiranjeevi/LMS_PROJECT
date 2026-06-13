const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Teacher OTP Login Flow
router.post("/teacher/send-otp", authController.sendTeacherOtp);
router.post("/teacher/verify-otp", authController.verifyTeacherOtp);

// Social Login
router.post("/google-login", authController.googleLogin);

module.exports = router;