// models/Course.js
const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    students: { type: Number, default: 0 },
    price: { type: Number, default: 0 },       // 🆕 स्कीमा में जोड़ा
    duration: { type: Number, default: 0 },    // 🆕 स्कीमा में जोड़ा
    category: { type: String, default: "Programming" }, // 🆕 स्कीमा में जोड़ा
    status: { type: String, enum: ["Active", "Draft"], default: "Active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);