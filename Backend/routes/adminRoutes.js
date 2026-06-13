const express = require("express");
const router = express.Router();

// 1. Admin Auth Controllers Import (Yeh dono bilkul sahi hain)
const adminController = require("../controllers/adminController");
const sendAdminOtp = adminController.sendAdminOtp;
const verifyAdminOtp = adminController.verifyAdminOtp;

// 2. Teacher Controllers Import
const teacherController = require("../controllers/teacherController");

const addTeacher = teacherController.addTeacher;
const getAllTeachers = teacherController.getAllTeachers;
const requestDeleteTeacher = teacherController.requestDeleteTeacher;
const verifyAndDeleteTeacher = teacherController.verifyAndDeleteTeacher;

// ==========================================
// 🛡️ CRASH GUARD & DEBUGGER LOG
// ==========================================
console.log("--- 🔍 CHECKING CONTROLLERS ---");
console.log("sendAdminOtp:", sendAdminOtp ? "✅ READY" : "❌ UNDEFINED");
console.log("verifyAdminOtp:", verifyAdminOtp ? "✅ READY" : "❌ UNDEFINED");
console.log("addTeacher:", addTeacher ? "✅ READY" : "❌ UNDEFINED");
console.log("getAllTeachers:", getAllTeachers ? "✅ READY" : "❌ UNDEFINED");
console.log("requestDeleteTeacher:", requestDeleteTeacher ? "✅ READY" : "❌ UNDEFINED");
console.log("verifyAndDeleteTeacher:", verifyAndDeleteTeacher ? "✅ READY" : "❌ UNDEFINED");
console.log("---------------------------------");

// Safe checks taaki agar koi undefined ho toh placeholder function chal jaye aur app crash na ho
const safeHandler = (name) => (req, res) => res.status(500).json({ error: `${name} is not implemented properly.` });

// ==========================================
// ADMIN FLOW
// ==========================================
router.post("/send-otp", sendAdminOtp || safeHandler("sendAdminOtp"));
router.post("/verify-otp", verifyAdminOtp || safeHandler("verifyAdminOtp"));

// ==========================================
// TEACHER FLOW (Line 25 is safe now)
// ==========================================
router.post("/add-teacher", addTeacher || safeHandler("addTeacher"));
router.get("/get-teachers", getAllTeachers || safeHandler("getAllTeachers"));
router.post("/request-delete-teacher", requestDeleteTeacher || safeHandler("requestDeleteTeacher"));
router.post("/verify-delete-teacher", verifyAndDeleteTeacher || safeHandler("verifyAndDeleteTeacher"));

module.exports = router;