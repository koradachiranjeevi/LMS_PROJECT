const express = require("express");
const router = express.Router();
const Course = require("../models/Course"); 

// अपने एडमिन मिडलवेयर को यहाँ इम्पोर्ट करें
const { isAdmin } = require("../middleware/admin.js");

// ==========================================
// 1. नया कोर्स जोड़ने का API एंडपॉइंट (POST)
// ==========================================
router.post("/add-course", isAdmin, async (req, res) => {
  try {
    // 🟢 बदलाव: req.body से price, duration और category को भी बाहर निकाला
    const { title, description, students, price, duration, category, status } = req.body;

    if (!title || !description) {
      return res.status(400).json({ 
        success: false, 
        message: "Course title and description are required" 
      });
    }

    // 🟢 बदलाव: नए फ़ील्ड्स को Mongoose Model में मैश किया ताकि MongoDB में सेव हो सकें
    const newCourse = new Course({
      title,
      description,
      students: Number(students) || 0,
      price: Number(price) || 0,           // फ़्रंटएंड की कीमत यहाँ सेव होगी
      duration: Number(duration) || 0,     // ड्यूरेशन हफ़्तों में यहाँ सेव होगी
      category: category || "Programming", // कैटेगरी यहाँ सेव होगी
      status: status || "Active",
    });

    await newCourse.save();

    res.status(201).json({
      success: true,
      message: "Course added successfully!",
      course: newCourse,
    });
  } catch (error) {
    console.error("Add Course Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// ==========================================
// 2. कोर्स गेट करने और लाइव सर्च करने का API एंडपॉइंट (GET)
// ==========================================
router.get("/get-courses", isAdmin, async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    // अगर फ़्रंटएंड से सर्च इनपुट आता है, तो MongoDB में लाइव फ़िल्टर करें
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
          { category: { $regex: search, $options: "i" } } // 🟢 कैटेगरी के आधार पर भी सर्च कर सकते हैं
        ]
      };
    }

    // नए कोर्स हमेशा पहले देखने के लिए sort लगाया है
    const courses = await Course.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    console.error("Get Courses Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;