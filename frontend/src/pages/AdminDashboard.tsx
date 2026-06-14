import {
  Users,
  UserCheck,
  BookOpen,
  Activity,
  LogOut,
  GraduationCap,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function AdminDashboard() {
  const[totalStudents, setTotalStudents] = useState(0);
  const[totalTeachers, setTotalTeachers] = useState(0);
  async function fetchTotalTeachers() {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/total-teachers", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setTotalTeachers(data.total);
    } catch (error) {
      console.error("Error fetching total teachers:", error);
    }
  }

  async function fetchTotalStudents() {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/total-students", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setTotalStudents(data.total);
    } catch (error) {
      console.error("Error fetching total students:", error);
    }
  }
  useEffect(() => {
    fetchTotalStudents();
    fetchTotalTeachers();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl text-white">
            <GraduationCap size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Codevirus LMS
            </h1>
            <p className="text-sm text-slate-500">
              Admin Panel
            </p>
          </div>
        </div>

        <div className="space-y-3">

          <Link
            to="/admin/dashboard"
            className="block w-full text-left px-4 py-3 rounded-xl bg-blue-50 text-blue-600 font-semibold"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/students"
            className="block w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-700"
          >
            Students
          </Link>

          <Link
            to="/admin/teachers"
            className="block w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-700"
          >
            Teachers
          </Link>

          <Link
            to="/admin/courses"
            className="block w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-700"
          >
            Courses
          </Link>

          <Link
            to="/admin/analytics"
            className="block w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-700"
          >
            Analytics
          </Link>

          <Link
            to="/admin/messages"
            className="block w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-700"
          >
            Messages
          </Link>

          <Link
            to="/admin/users"
            className="block w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-700"
          >
            User Management
          </Link>

          <Link
            to="/admin/teacher-approval"
            className="block w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-700"
          >
            Teacher Approval
          </Link>

          <Link
            to="/admin/reports"
            className="block w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-700"
          >
            Reports
          </Link>

        </div>

        <button
          onClick={handleLogout}
          className="mt-10 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Welcome Admin 👋
          </h1>

          <p className="text-slate-500 mt-2">
            Manage students, teachers, courses and monitor
            platform activity.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <div className="flex justify-between items-center">
              <Users className="text-blue-600" size={28} />
              <span className="text-sm text-slate-400">
                Students
              </span>
            </div>

            <h2 className="text-4xl font-bold mt-4 text-slate-900">
              {totalStudents}
            </h2>

            <p className="text-slate-500 mt-1">
              Total Students
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <div className="flex justify-between items-center">
              <UserCheck
                className="text-emerald-600"
                size={28}
              />
              <span className="text-sm text-slate-400">
                Teachers
              </span>
            </div>

            <h2 className="text-4xl font-bold mt-4 text-slate-900">
              {totalTeachers}
            </h2>

            <p className="text-slate-500 mt-1">
              Total Teachers
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <div className="flex justify-between items-center">
              <BookOpen
                className="text-indigo-600"
                size={28}
              />
              <span className="text-sm text-slate-400">
                Courses
              </span>
            </div>

            <h2 className="text-4xl font-bold mt-4 text-slate-900">
              120
            </h2>

            <p className="text-slate-500 mt-1">
              Total Courses
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <div className="flex justify-between items-center">
              <Activity
                className="text-orange-500"
                size={28}
              />
              <span className="text-sm text-slate-400">
                Active
              </span>
            </div>

            <h2 className="text-4xl font-bold mt-4 text-slate-900">
              540
            </h2>

            <p className="text-slate-500 mt-1">
              Active Users
            </p>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="mt-10 bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="p-4 rounded-xl bg-slate-50">
              New student registered successfully.
            </div>

            <div className="p-4 rounded-xl bg-slate-50">
              Teacher account approved.
            </div>

            <div className="p-4 rounded-xl bg-slate-50">
              New course published.
            </div>

            <div className="p-4 rounded-xl bg-slate-50">
              Platform backup completed.
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;