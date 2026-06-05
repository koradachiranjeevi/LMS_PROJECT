const Student = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



async function studentSignup(req, res) {
  try {

    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check existing user
    const existingStudent = await Student.findOne({
      email: email.toLowerCase(),
    });

    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Student already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create student
    const student = await Student.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: "student",
    });

    return res.status(201).json({
      success: true,
      message: "Signup Successful",
      student: {
        id: student._id,
        name: student.name,
        email: student.email,
        role: student.role,
      },
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
}



// ================= STUDENT LOGIN =================


async function studentLogin(req, res) {

  try {

    const { email, password } = req.body;

    // ================= CHECK STUDENT =================

    const student = await Student.findOne({ email });

    if (!student) {

      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });

    }

    // ================= COMPARE PASSWORD =================

    const isMatch = await bcrypt.compare(
      password,
      student.password
    );

    if (!isMatch) {

      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });

    }

    // ================= REMOVE PASSWORD =================

    student.password = undefined;
    const token = jwt.sign(
  {
    id: student._id,
    email: student.email,
    role: student.role
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d"
  }
);

    return res.status(200).json({

      success: true,
      message: "Login Successful",
      student,
      token:token

    });

  }

  catch (error) {

    console.log(error);

    return res.status(500).json({

      success: false,
      message: "Server Error",

    });

  }

}

module.exports = {
  studentSignup,
  studentLogin
};