const Otp = require("../models/Otp");
const Teacher = require("../models/Teacher");
const generateOtp = require("../services/otpService");

// ================= ADD TEACHER =================

const addTeacher = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const teacherExists = await Teacher.findOne({ email });

    if (teacherExists) {
      return res.status(400).json({
        success: false,
        message: "Teacher already exists",
      });
    }

    const count = await Teacher.countDocuments();

    const teacherId = `TCH${String(
      count + 1
    ).padStart(3, "0")}`;

    const teacher = await Teacher.create({
      teacherId,
      name,
      email,
      phone,
    });

    return res.status(201).json({
      success: true,
      message: "Teacher Added Successfully",
      teacher,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE TEACHER =================

const updateTeacher = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const teacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        phone,
      },
      { new: true }
    );

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Teacher updated successfully",
      teacher,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= SEND OTP =================

const sendTeacherOtp = async (req, res) => {
  try {
    const { email, teacherId } = req.body;

    let teacher;

    if (email) {
      teacher = await Teacher.findOne({ email });
    } else if (teacherId) {
      teacher = await Teacher.findOne({ teacherId });
    } else {
      return res.status(400).json({
        success: false,
        message: "Email or Teacher ID is required",
      });
    }

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

   

    await generateOtp(teacher.email);

    return res.status(200).json({
      success: true,
      message: "OTP Sent Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= VERIFY OTP =================


const verifyTeacherOtp = async (req, res) => {
  try {
    console.log("VERIFY BODY =>", req.body);

    const { email, teacherId, otp } = req.body;

    let teacher;

    if (email) {
      teacher = await Teacher.findOne({ email });
    } else if (teacherId) {
      teacher = await Teacher.findOne({ teacherId });
    } else {
      return res.status(400).json({
        success: false,
        message: "Email or Teacher ID is required",
      });
    }

    console.log("TEACHER =>", teacher);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    const otpData = await Otp.findOne({
      email: teacher.email,
    });

    console.log("OTP DATA =>", otpData);
    console.log("ENTERED OTP =>", otp);

    if (!otpData) {
      return res.status(400).json({
        success: false,
        message: "OTP not found or expired",
      });
    }

    if (String(otpData.otp) !== String(otp)) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    await Otp.deleteOne({
      email: teacher.email,
    });

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      teacher,
    });
  } catch (error) {
    console.log("VERIFY ERROR =>", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET ALL TEACHERS =================

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();

    return res.status(200).json({
      success: true,
      teachers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= APPROVE TEACHER =================

const approveTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Teacher Approved Successfully",
      teacher,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= DELETE TEACHER =================

const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(
      req.params.id
    );

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Teacher Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addTeacher,
  updateTeacher,
  sendTeacherOtp,
  verifyTeacherOtp,
  getAllTeachers,
  approveTeacher,
  deleteTeacher,
};