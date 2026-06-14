const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");


// Nodemailer Config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

// ==========================================
// 1. SEND ADMIN OTP (SAFE & CRASH-PROOF)
// ==========================================
const sendAdminOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    // Database access
    const adminCollection = mongoose.connection.collection("admins");
    const admin = await adminCollection.findOne({ email: email.trim().toLowerCase() });

    if (!admin || admin.role !== "admin") {
      return res.status(404).json({ 
        success: false, 
        message: "Access Denied: Yeh email admin panel ke liye registered nahi hai." 
      });
    }

    // 6-digit का random OTP generate karein
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpire = new Date(Date.now() + 5 * 60 * 1000); 

    // Database mein OTP save karein
    await adminCollection.updateOne(
      { email: email.trim().toLowerCase() },
      { $set: { otp: otp, otpExpire: otpExpire } }
    );

    // 🔥 EMERGENCY FALLBACK: Terminal par hamesha OTP dikhega bhale hi email chale na chale!
    console.log(`\n==============================================`);
    console.log(`🔑 [DEBUG MODE] Admin OTP for ${email} is: ${otp}`);
    console.log(`==============================================\n`);

    // 🛡️ CRASH GUARD: Email failure se server error nahi aane dega
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: admin.email,
        subject: "School-ERP Admin Control Panel - Login OTP",
        text: `Hello ${admin.name || "Admin"},\n\nYour secret login OTP is ${otp}.\nThis OTP is confidential and valid only for 5 minutes.\n\nRegards,\nSchool-ERP Team`,
      };

      await transporter.sendMail(mailOptions);
      
      return res.status(200).json({
        success: true,
        message: "Admin verification OTP sent successfully to your email.",
      });

    } catch (mailError) {
      console.error("⚠️ Nodemailer failed to send email, but OTP is generated in terminal:", mailError.message);
      
      // Email fail ho gayi fir bhi hum response success de rahe hain taaki login ho sake!
      return res.status(200).json({
        success: true,
        message: "OTP generated successfully! Check your VS Code Backend Terminal for the code.",
      });
    }

  } catch (error) {
    console.error("Error in sendAdminOtp:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ==========================================
// 2. VERIFY ADMIN OTP
// ==========================================
const verifyAdminOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ success: false, message: "Email and OTP are required" });
    }

    const adminCollection = mongoose.connection.collection("admins");
    const admin = await adminCollection.findOne({ email: email.trim().toLowerCase() });

    if (!admin) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }

    // OTP check karein
    if (!admin.otp || admin.otp !== String(otp)) {
      return res.status(400).json({ success: false, message: "Invalid OTP code" });
    }

    // Expiry check karein
    if (new Date() > admin.otpExpire) {
      return res.status(400).json({ success: false, message: "OTP has expired. Please try again." });
    }

    // Clear OTP fields after use
    await adminCollection.updateOne(
      { email: email.trim().toLowerCase() },
      { $set: { otp: null, otpExpire: null } }
    );

    // Token generate karein
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET || "super_secret_school_erp_key",
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      message: "Admin Authenticated Successfully",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });

  } catch (error) {
    console.error("Error in verifyAdminOtp:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};


module.exports = {
  sendAdminOtp,
  verifyAdminOtp,
  
};