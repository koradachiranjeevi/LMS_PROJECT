const express = require("express");
const Student = require("../controllers/AddAdminStudent");
const User = require("../models/user.js");


const addStudentRouter = express.Router();
const getStudentRouter = express.Router();
const updateStudentRouter = express.Router();
const deleteStudentRouter = express.Router();

addStudentRouter.post("/add-student", Student.Student);
getStudentRouter.get("/students", Student.getAllStudents);

updateStudentRouter.put("/update-student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, mobile } = req.body;

    const updatedStudent = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        mobile,
        password,
      },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      student: updatedStudent,
    });

  } catch (error) {
    console.error("Error updating student:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});


deleteStudentRouter.delete("/delete-student/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await User.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });

  } catch (error) {
    console.error("Error deleting student:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = { addStudentRouter, getStudentRouter, updateStudentRouter, deleteStudentRouter };