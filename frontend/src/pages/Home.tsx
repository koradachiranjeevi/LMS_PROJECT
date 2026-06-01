import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[120px]" />

      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold">
          CodeVirus LMS
        </h1>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-blue-400 transition">
            Support
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Help Center
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Testimonials
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            FAQ
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Blog
          </a>

          <Link
            to="/booking-demo"
            className="bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-2 rounded-xl hover:scale-105 transition"
          >
            Book Demo
          </Link>
        </div>
      </nav>

      <section className="text-center px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Learn Smarter.
          <br />
          Teach Better.
          <br />
          Manage Effortlessly.
        </h1>

        <p className="text-gray-400 text-xl mt-6">
          Next Generation Learning Management System
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-8 pb-16">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
          <GraduationCap size={40} className="text-blue-500" />

          <h2 className="text-2xl font-bold mt-4">
            Student Portal
          </h2>

          <p className="text-gray-400 mt-3">
            Access courses, assignments and certificates.
          </p>

          <Link
            to="/student/login"
            className="block text-center w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500"
          >
            Student Login
          </Link>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
          <BookOpen size={40} className="text-emerald-500" />

          <h2 className="text-2xl font-bold mt-4">
            Teacher Portal
          </h2>

          <p className="text-gray-400 mt-3">
            Create courses and manage students.
          </p>

          <Link
            to="/teacher/login"
            className="block text-center w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600"
          >
            Teacher Login
          </Link>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
          <ShieldCheck size={40} className="text-violet-500" />

          <h2 className="text-2xl font-bold mt-4">
            Admin Portal
          </h2>

          <p className="text-gray-400 mt-3">
            Manage users, analytics and platform settings.
          </p>

          <Link
            to="/admin/login"
            className="block text-center w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600"
          >
            Admin Login
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;