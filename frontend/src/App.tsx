import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import StudentLogin from "./pages/StudentLogin";
import StudentSignup from "./pages/StudentSignup";
import TeacherLogin from "./pages/TeacherLogin";
import AdminLogin from "./pages/AdminLogin";
import BookDemo from "./pages/BookDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/signup" element={<StudentSignup />} />

        <Route path="/teacher/login" element={<TeacherLogin />} />
        

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/booking-demo" element={<BookDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;