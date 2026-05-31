import {
  GraduationCap,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold">
          CodeVirus LMS
        </h1>

        <button className="bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-2 rounded-xl hover:scale-105 transition-all duration-300">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Learn Smarter.
          <br />
          Teach Better.
          <br />
          Manage Effortlessly.
        </h1>

        <p className="text-gray-400 text-xl mt-6">
          The next generation Learning Management System.
        </p>
      </section>

      {/* Login Cards */}
      <section className="grid md:grid-cols-3 gap-8 px-8 pb-16">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">
          <GraduationCap size={40} className="text-blue-500" />

          <h2 className="text-2xl font-bold mt-4">
            Student Portal
          </h2>

          <p className="text-gray-400 mt-3">
            Access courses, assignments and certificates.
          </p>

          <button className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500">
            Student Login
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">
          <BookOpen size={40} className="text-emerald-500" />

          <h2 className="text-2xl font-bold mt-4">
            Teacher Portal
          </h2>

          <p className="text-gray-400 mt-3">
            Create courses and manage students.
          </p>

          <button className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600">
            Teacher Login
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">
          <ShieldCheck size={40} className="text-violet-500" />

          <h2 className="text-2xl font-bold mt-4">
            Admin Portal
          </h2>

          <p className="text-gray-400 mt-3">
            Manage users, analytics and platform settings.
          </p>

          <button className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600">
            Admin Login
          </button>
        </div>

      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 pb-16">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-500">
            10K+
          </h3>
          <p className="text-gray-400">Students</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-emerald-500">
            500+
          </h3>
          <p className="text-gray-400">Courses</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-violet-500">
            100+
          </h3>
          <p className="text-gray-400">Teachers</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-cyan-500">
            98%
          </h3>
          <p className="text-gray-400">Completion Rate</p>
        </div>

      </section>

    </div>
  );
}

export default App;