import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// ================= STUDENT =================
import StudentLogin from "./pages/StudentLogin";
import StudentSignup from "./pages/StudentSignup";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./pages/StudentProfile";
import BrowseCourses from "./pages/BrowseCourses";
import MyCourses from "./pages/MyCourses";
import Assignments from "./pages/Assignments";
import Certificates from "./pages/Certificates";
import Notifications from "./pages/Notifications";
import SupportTickets from "./pages/SupportTickets";
import ForgotPassword from "./pages/ForgotPassword";

// ================= TEACHER =================
import TeacherLogin from "./pages/TeacherLogin";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherProfile from "./pages/TeacherProfile";
import TeacherCourses from "./pages/TeacherCourses";
import TeacherCourseManagement from "./pages/TeacherCourseManagement";
import TeacherEvaluation from "./pages/TeacherEvaluation";
import TeacherStudents from "./pages/TeacherStudents";
import TeacherLiveClasses from "./pages/TeacherLiveClasses";
import TeacherInteraction from "./pages/TeacherInteraction";
import TeacherAnalytics from "./pages/TeacherAnalytics";

// ================= ADMIN =================
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminStudents from "./pages/AdminStudents";
import AdminTeachers from "./pages/AdminTeachers";
import AdminCourses from "./pages/AdminCourses";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminMessages from "./pages/AdminMessages";
import AdminBulkUpload from "./pages/AdminBulkUpload";
import AdminSettings from "./pages/AdminSettings";
import AdminUserManagement from "./pages/AdminUserManagement";
import AdminTeacherApproval from "./pages/AdminTeacherApproval";
import AdminReports from "./pages/AdminReports";

// ================= OTHERS =================
import BookDemo from "./pages/BookDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />

        {/* ================= STUDENT ================= */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/signup" element={<StudentSignup />} />
        <Route
          path="/student/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />
        <Route
          path="/student/profile"
          element={<StudentProfile />}
        />
        <Route
          path="/student/browse-courses"
          element={<BrowseCourses />}
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

        {/* ================= TEACHER ================= */}
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route
          path="/teacher/dashboard"
          element={<TeacherDashboard />}
        />
        <Route
          path="/teacher/profile"
          element={<TeacherProfile />}
        />
        <Route
          path="/teacher/courses"
          element={<TeacherCourses />}
        />
        <Route
          path="/teacher/course-management"
          element={<TeacherCourseManagement />}
        />
        <Route
          path="/teacher/evaluation"
          element={<TeacherEvaluation />}
        />
        <Route
          path="/teacher/students"
          element={<TeacherStudents />}
        />
        <Route
          path="/teacher/live-classes"
          element={<TeacherLiveClasses />}
        />
        <Route
          path="/teacher/interaction"
          element={<TeacherInteraction />}
        />
        <Route
          path="/teacher/analytics"
          element={<TeacherAnalytics />}
        />

        {/* ================= ADMIN ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />
        <Route
          path="/admin/students"
          element={<AdminStudents />}
        />
        <Route
          path="/admin/teachers"
          element={<AdminTeachers />}
        />
        <Route
          path="/admin/courses"
          element={<AdminCourses />}
        />
        <Route
          path="/admin/analytics"
          element={<AdminAnalytics />}
        />
        <Route
          path="/admin/messages"
          element={<AdminMessages />}
        />
        <Route
          path="/admin/bulk-upload"
          element={<AdminBulkUpload />}
        />
        <Route
          path="/admin/settings"
          element={<AdminSettings />}
        />
        <Route
          path="/admin/users"
          element={<AdminUserManagement />}
        />
        <Route
          path="/admin/teacher-approval"
          element={<AdminTeacherApproval />}
        />
        <Route
          path="/admin/reports"
          element={<AdminReports />}
        />

        {/* ================= DEMO ================= */}
        <Route
          path="/booking-demo"
          element={<BookDemo />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;