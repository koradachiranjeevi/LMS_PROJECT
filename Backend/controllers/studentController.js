const Student = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function studentSignup(req, res) {

  try {

    const { name, email, password } = req.body;

    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {

      return res.status(400).json({
        success: false,
        message: "Student already exists",
      });

    }

    // ================= HASH PASSWORD =================

    const hashedPassword = await bcrypt.hash(password, 10);

    // ================= CREATE STUDENT =================

    const student = await Student.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "Signup Successful",
      student,
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