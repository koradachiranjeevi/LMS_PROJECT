import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft, Mail, Lock } from "lucide-react";

function AdminLogin() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center relative px-4 py-12 font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-300/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-purple-300/10 blur-[100px] pointer-events-none" />

      {/* Back button */}
      <Link
        to="/"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition"
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div className="w-full max-w-md bg-white border border-slate-100 p-8 rounded-3xl shadow-xl shadow-slate-200/50 relative z-10 animate-scale-in">
        {/* Logo/Icon */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-violet-50 text-violet-600 p-3 rounded-2xl mb-3">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight text-center">
            Admin Login
          </h1>
          <p className="text-slate-400 text-sm mt-1.5 text-center">
            Log in to access platform analytics and configurations
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Administrator Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="email"
                placeholder="admin@codevirus.com"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Secret Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
              />
            </div>
          </div>
        </div>

        <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.98] transition-all cursor-pointer">
          Verify & Sign In
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;