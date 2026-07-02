const Otp = require("../models/Otp");
const Teacher = require("../models/Teacher");
const generateOtp = require("../services/otpService");
const jwt = require("jsonwebtoken");

// ==========================================
// 1. ADD TEACHER
// ==========================================
const addTeacher = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, message: "Name and Email are required" });
    }

    const teacherExists = await Teacher.findOne({ email: email.toLowerCase().trim() });

    if (teacherExists) {
      return res.status(400).json({
        success: false,
        message: "Teacher already exists",
      });
    }

    // Ek unique, sequential Teacher ID generate karein
    const count = await Teacher.countDocuments();
    const teacherId = `TCH${String(count + 1).padStart(3, "0")}`;

    const teacher = await Teacher.create({
      teacherId,
      name,
      email: email.toLowerCase().trim(),
      phone,
    });

    return res.status(201).json({
      success: true,
      message: "Teacher Added Successfully",
      teacher,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// 2. UPDATE TEACHER
// ==========================================
const updateTeacher = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const teacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email: email ? email.toLowerCase().trim() : undefined,
        phone,
      },
      { new: true, runValidators: true }
    );

    if (!teacher) {
      return res.status(404).json({ success: false, message: "Teacher not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Teacher updated successfully",
      teacher,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// 3. SEND TEACHER OTP (LOGIN KE LIYE)
// ==========================================
const sendTeacherOtp = async (req, res) => {
  try {
    const { email, teacherId } = req.body;
    let teacher;

    if (email) {
      teacher = await Teacher.findOne({ email: email.toLowerCase().trim() });
    } else if (teacherId) {
      teacher = await Teacher.findOne({ teacherId: teacherId.toUpperCase().trim() });
    } else {
      return res.status(400).json({
        success: false,
        message: "Email or Teacher ID is required",
      });
    }

    if (!teacher) {
      return res.status(404).json({ success: false, message: "Teacher not found" });
    }

    // Aapki imported otpService se OTP generate aur email par send karein
    await generateOtp(teacher.email);

    return res.status(200).json({
      success: true,
      message: "OTP Sent Successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// 4. VERIFY TEACHER OTP & LOGIN
// ==========================================
const verifyTeacherOtp = async (req, res) => {
  try {
    const { email, teacherId, otp } = req.body;

    if (!otp) {
      return res.status(400).json({ success: false, message: "OTP is required" });
    }

    let teacher;
    if (email) {
      teacher = await Teacher.findOne({ email: email.toLowerCase().trim() });
    } else if (teacherId) {
      teacher = await Teacher.findOne({ teacherId: teacherId.toUpperCase().trim() });
    } else {
      return res.status(400).json({ success: false, message: "Email or Teacher ID is required" });
    }

    if (!teacher) {
      return res.status(404).json({ success: false, message: "Teacher not found" });
    }

    // Otp collection se data verify karein
    const otpData = await Otp.findOne({ email: teacher.email });

    if (!otpData) {
      return res.status(400).json({
        success: false,
        message: "OTP not found or expired",
      });
    }

    if (String(otpData.otp) !== String(otp)) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    // Verification ke baad used OTP record saaf karein
    await Otp.deleteOne({ email: teacher.email });

    // JWT Token generate karein taaki Frontend teacher ko login rakh sake
    const token = jwt.sign(
      { id: teacher._id, role: "teacher" },
      process.env.JWT_SECRET || "super_secret_school_erp_key",
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      teacher,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// 5. GET ALL TEACHERS
// ==========================================
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    return res.status(200).json({ success: true, teachers });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// 6. APPROVE TEACHER
// ==========================================
const approveTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );

    if (!teacher) {
      return res.status(404).json({ success: false, message: "Teacher not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Teacher Approved Successfully",
      teacher,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// 7. ADMIN REQUEST DELETE TEACHER (Sends OTP to Admin)
// ==========================================
const requestDeleteTeacher = async (req, res) => {
  try {
    const { email } = req.body; // Teacher ka email jise delete karna hai

    if (!email) {
      return res.status(400).json({ success: false, message: "Teacher's email is required" });
    }

    const teacher = await Teacher.findOne({ email: email.toLowerCase().trim() });
    if (!teacher) {
      return res.status(404).json({ success: false, message: "Teacher not found" });
    }

    // Admin ke email panel verification ke liye OTP generate karein (Aapki service se)
    // Aap chahein toh admin ke email par directly trigger karwa sakte hain
    await generateOtp(teacher.email); 

    return res.status(200).json({
      success: true,
      message: "Account deletion OTP verification triggered successfully.",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// 8. ADMIN VERIFY OTP & DELETE TEACHER PERMANENTLY
// ==========================================
const verifyAndDeleteTeacher = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ success: false, message: "Email and OTP are required" });
    }

    const teacher = await Teacher.findOne({ email: email.toLowerCase().trim() });
    if (!teacher) {
      return res.status(404).json({ success: false, message: "Teacher not found" });
    }

    // OTP Verify karein
    const otpData = await Otp.findOne({ email: teacher.email });
    if (!otpData || String(otpData.otp) !== String(otp)) {
      return res.status(400).json({ success: false, message: "Invalid or expired deletion OTP" });
    }

    // OTP verification clear karein aur teacher delete karein
    await Otp.deleteOne({ email: teacher.email });
    await Teacher.findOneAndDelete({ email: teacher.email });

    return res.status(200).json({
      success: true,
      message: "Teacher account has been permanently deleted from School-ERP.",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Pure routes setup ke liye standard module exports
module.exports = {
  addTeacher,
  updateTeacher,
  sendTeacherOtp,
  verifyTeacherOtp,
  getAllTeachers,
  approveTeacher,
  requestDeleteTeacher,
  verifyAndDeleteTeacher,
};