const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// ==========================================
// 1. ADD NEW COURSE (POST)
// ==========================================
router.post("/add-course", async (req, res) => {
  try {
    const { title, description, students, status } = req.body;

    if (!title || !description) {
      return res.status(400).json({ 
        success: false, 
        message: "Please fill all required fields" 
      });
    }

    const newCourse = new Course({
      title,
      description,
      students: Number(students) || 0,
      status: status || "Active",
    });

    await newCourse.save();

    res.status(201).json({
      success: true,
      message: "Course added successfully!",
      course: newCourse,
    });
  } catch (error) {
    console.error("Add Course Backend Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ==========================================
// 2. GET ALL COURSES WITH SEARCH (GET)
// ==========================================
router.get("/get-courses", async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    // अगर फ्रंटएंड से कोई सर्च क्वेरी आती है, तो MongoDB में Regex सर्च चलाएँ
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } }
        ]
      };
    }

    // नए कोर्सेस पहले दिखाने के लिए sorted by latest (createdAt: -1)
    const courses = await Course.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    console.error("Get Courses Backend Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;