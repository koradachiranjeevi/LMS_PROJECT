import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  Globe,
  LifeBuoy,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative overflow-hidden font-sans">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-300/10 to-indigo-300/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-300/10 to-blue-300/10 blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/60 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2.5 rounded-xl shadow-md shadow-blue-500/20 text-white">
              <GraduationCap size={24} />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
              Codevirus <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">LMS</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-blue-600 transition flex items-center gap-1">
              <LifeBuoy size={16} />
            </a>
            <a href="#" className="hover:text-blue-600 transition flex items-center gap-1">
              <HelpCircle size={16} /> Help Center
            </a>
            <a href="#" className="hover:text-blue-600 transition flex items-center gap-1">
              <MessageSquare size={16} /> Testimonials
            </a>
            <a href="#" className="hover:text-blue-600 transition flex items-center gap-1">
              <Globe size={16} /> FAQ
            </a>

            <Link
              to="/booking-demo"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center px-6 pt-24 pb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-6 animate-fade-in">
           Next Generation Learning Platform
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15] animate-fade-up">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Learn Smarter.</span>
          <br />
          Teach Better.
          <br />
          Manage Effortlessly.
        </h1>

        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mt-6 animate-fade-up animation-delay-100">
          Welcome to CodeVirus LMS. An all-in-one education ecosystem designed to simplify online classrooms, track metrics, and scale standard curricula.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 animate-fade-up animation-delay-200">
          <Link
            to="/booking-demo"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </header>

      {/* Portals Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-24 relative z-10">
        {/* Student Portal */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between h-full animate-fade-up animation-delay-100">
          <div>
            <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl w-14 h-14 flex items-center justify-center">
              <GraduationCap size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-6">
              Student Portal
            </h2>
            <p className="text-slate-500 mt-3 leading-relaxed">
              Log in to access your customized dashboard, enroll in classes, submit assignments, and download certificates.
            </p>
          </div>

          <Link
            to="/student/login"
            className="block text-center w-full mt-8 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Student Login
          </Link>
        </div>

        {/* Teacher Portal */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between h-full animate-fade-up animation-delay-200">
          <div>
            <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl w-14 h-14 flex items-center justify-center">
              <BookOpen size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-6">
              Teacher Portal
            </h2>
            <p className="text-slate-500 mt-3 leading-relaxed">
              Design curricula, track attendance, evaluate assignments, and keep in touch with students through robust communication logs.
            </p>
          </div>

          <Link
            to="/teacher/login"
            className="block text-center w-full mt-8 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Teacher Login
          </Link>
        </div>

        {/* Admin Portal */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between h-full animate-fade-up animation-delay-300">
          <div>
            <div className="bg-indigo-50 text-indigo-600 p-4 rounded-2xl w-14 h-14 flex items-center justify-center">
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-6">
              Admin Portal
            </h2>
            <p className="text-slate-500 mt-3 leading-relaxed">
              Manage security configurations, control user registrations, monitor platform performance, and pull analytical logs.
            </p>
          </div>

          <Link
            to="/admin/login"
            className="block text-center w-full mt-8 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-950 hover:from-slate-900 hover:to-black text-white font-semibold shadow-lg shadow-slate-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Admin Login
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;