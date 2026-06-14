const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    teacherId: {
      type: String,
      unique: true,
    },

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



module.exports =
  mongoose.models.Teacher ||
  mongoose.model("Teacher", teacherSchema);