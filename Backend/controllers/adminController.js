const Teacher = require("../models/Teacher");

// Add Teacher
const addTeacher = async (req, res) => {
  try {
    const { name, email } = req.body;

    const teacherExists = await Teacher.findOne({ email });

    if (teacherExists) {
      return res.status(400).json({
        success: false,
        message: "Teacher already exists",
      });
    }

    const teacher = await Teacher.create({
      name,
      email,
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

// Get All Teachers
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

// Delete Teacher
const deleteTeacher = async (req, res) => {
  try {
    const { email } = req.body;

    const teacher = await Teacher.findOne({ email });

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    if (!teacher.approved) {
      return res.status(403).json({
        success: false,
        message: "Teacher not approved",
      });
    }

    const otp = await generateOtp(email);

    await sendEmail(
      email,
      "Teacher Login OTP",
      `Your OTP is ${otp}`
    );

    return res.status(200).json({
      success: true,
      message: "OTP Sent Successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};