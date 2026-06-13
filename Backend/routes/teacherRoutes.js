const express = require("express");
const router = express.Router();

const {
  addTeacher,
  sendTeacherOtp,
  verifyTeacherOtp,
  getAllTeachers,
  approveTeacher,
  deleteTeacher,
  updateTeacher,
} = require("../controllers/teacherController");

// ================= ADMIN =================

// Add Teacher
router.post("/add", addTeacher);

// Get All Teachers
router.get("/all", getAllTeachers);

// Approve Teacher
router.put("/approve/:id", approveTeacher);

// Delete Teacher
router.delete("/delete/:id", deleteTeacher);
// Update Teacher
router.put("/update/:id", updateTeacher);
// ================= TEACHER LOGIN =================

// Send OTP
router.post("/send-otp", sendTeacherOtp);

// Verify OTP
router.post("/verify-otp", verifyTeacherOtp);

module.exports = router;