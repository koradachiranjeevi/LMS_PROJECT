require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ConnectDb = require("./config/db");

const authRoutes = require("./routes/authRoute");
const studentRoute = require("./routes/studentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const {teacherRouter,adminRouter} = require("./routes/dashboard");
const { isTeacher } = require("./middleware/teacher.js");
const  {isAdmin} = require("./middleware/admin.js");
const { studentRouter, allteacherRouter} = require("./routes/totalCounts");
const {addStudentRouter,getStudentRouter,updateStudentRouter,deleteStudentRouter}=require("./routes/AddStudentRoute");

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


ConnectDb()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => console.log(err));