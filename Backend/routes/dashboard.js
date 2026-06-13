const express = require("express");

const teacherRouter = express.Router();
const adminRouter = express.Router();

teacherRouter.get("/dashboard", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the teacher dashboard!",
  });
});

adminRouter.get("/dashboard", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the admin dashboard!",
  });
});

module.exports = {
  teacherRouter,
  adminRouter,
};