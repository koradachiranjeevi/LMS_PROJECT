require("dotenv").config();

const express = require("express");
const cors = require("cors");

const ConnectDb = require("./config/db");

const authRoutes = require("./routes/authRoute");
const studentRoute = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const adminRoutes = require("./routes/adminRoutes");

const authMiddleware = require("./middleware/authMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

// Teacher Routes
app.use("/api/teacher", teacherRoutes);

// Student Routes
app.use("/api/student", studentRoute);

// Admin Routes
app.use("/api/admin", adminRoutes);

// Auth Routes (Google Login etc.)
app.use("/api/auth", authRoutes);

ConnectDb()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => console.log(err));