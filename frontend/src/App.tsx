import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import StudentLogin from "./pages/StudentLogin";
import StudentSignup from "./pages/StudentSignup";
import StudentProfile from "./pages/StudentProfile";
import MyCourses from "./pages/MyCourses";
import Assignments from "./pages/Assignments";
import Certificates from "./pages/Certificates";
import Notifications from "./pages/Notifications";
import SupportTickets from "./pages/SupportTickets";

import TeacherLogin from "./pages/TeacherLogin";
import TeacherDashboard from "./pages/TeacherDashboard";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminStudents from "./pages/AdminStudents";
import AdminTeachers from "./pages/AdminTeachers";
import AdminCourses from "./pages/AdminCourses";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminMessages from "./pages/AdminMessages";
import AdminBulkUpload from "./pages/AdminBulkUpload";
import AdminSettings from "./pages/AdminSettings";
import StudentDashboard from "./pages/StudentDashboard";
import BookDemo from "./pages/BookDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Student */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/signup" element={<StudentSignup />} />
        <Route
  path="/student/profile"
  element={<StudentProfile />}
/>
<Route
  path="/student/my-courses"
  element={<MyCourses />}
/>
<Route
  path="/student/assignments"
  element={<Assignments />}
/>
<Route
  path="/student/certificates"
  element={<Certificates />}
/>
<Route
  path="/student/notifications"
  element={<Notifications />}
/>
<Route
  path="/student/support"
  element={<SupportTickets />}
/>
        {/* Teacher */}
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="/admin/teachers" element={<AdminTeachers />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        <Route path="/admin/messages" element={<AdminMessages />} />
        <Route path="/admin/bulk-upload" element={<AdminBulkUpload />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route
  path="/student/dashboard"
  element={<StudentDashboard />}
/>

        {/* Demo */}
        <Route path="/booking-demo" element={<BookDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;