const express = require("express");
const Student = require("../controllers/AddAdminStudent");
const User = require("../models/user.js");
const upload = require("../multerConfig.js");

const addStudentRouter = express.Router();
const getStudentRouter = express.Router();
const updateStudentRouter = express.Router();
const deleteStudentRouter = express.Router();
const addBulkStudentRouter = express.Router();

// Add single student manual entry
addStudentRouter.post("/add-student", Student.Student);

// Get list of all students
getStudentRouter.get("/students", Student.getAllStudents);

// Update existing student details safely
updateStudentRouter.put("/update-student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, mobile, password } = req.body; // Added password extraction variable here

    // Dynamically build the update payload body
    const updateFields = { name, email, mobile };
    if (password) {
      updateFields.password = password;
    }

    const updatedStudent = await User.findByIdAndUpdate(
      id,
      updateFields,
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

// Remove student from database collection
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

// Bulk spreadsheet upload handling pipeline
addBulkStudentRouter.post(
  "/bulk-upload",
  upload.single("file"),
  Student.bulkUploadStudents
);

module.exports = { 
  addStudentRouter, 
  getStudentRouter, 
  updateStudentRouter, 
  deleteStudentRouter, 
  addBulkStudentRouter 
};