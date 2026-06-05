const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

// Teacher OTP Login
router.post("/teacher/send-otp", authController.sendTeacherOtp);

router.post("/teacher/verify-otp", authController.verifyTeacherOtp);

// Google Login
router.post("/google-login", authController.googleLogin);

module.exports = router;