// models/Teacher.js

const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: String,

    approved: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      default: "teacher",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", teacherSchema);