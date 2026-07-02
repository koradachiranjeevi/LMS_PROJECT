require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ConnectDb = require("./config/db");

const authRoutes = require("./routes/authRoute");
const studentRoute = require("./routes/studentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const { teacherRouter, adminRouter } = require("./routes/dashboard");
const { isTeacher } = require("./middleware/teacher.js");
const { isAdmin } = require("./middleware/admin.js");
const { studentRouter, allteacherRouter } = require("./routes/totalCounts");
const {
  addStudentRouter,
  getStudentRouter,
  updateStudentRouter,
  deleteStudentRouter,
  addBulkStudentRouter,
} = require("./routes/AddStudentRoute");

// --- नया कोर्स राउट यहाँ इम्पोर्ट किया गया है ---
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", studentRouter);
app.use("/api", allteacherRouter);

app.use("/api/auth", authRoutes);
app.use("/student", studentRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/teacher", isTeacher, teacherRouter);
app.use("/api/admin", isAdmin, adminRouter);
app.use("/api", addStudentRouter);
app.use("/api", getStudentRouter);
app.use("/api", updateStudentRouter);
app.use("/api", deleteStudentRouter);
app.use("/api", addBulkStudentRouter);

// --- कोर्स मैनेजमेंट मिडलवेयर राउट यहाँ रजिस्टर किया गया है ---
// यह आपके फ्रंटएंड पर URL: http://localhost:5000/api/admin/add-course और /get-courses को चालू कर देगा
app.use("/api/admin", courseRoutes);

ConnectDb()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.log(err));