const express = require("express");

const router = express.Router();

const {
  sendAdminOtp,
  verifyAdminOtp,
} = require("../controllers/adminController");

router.post("/send-otp", sendAdminOtp);

router.post("/verify-otp", verifyAdminOtp);
module.exports=router;