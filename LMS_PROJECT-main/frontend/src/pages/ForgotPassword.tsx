import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  ArrowLeft,
  Mail,
  Send,
} from "lucide-react";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");

  const handleSendOTP = (): void => {
    if (email.trim() === "") {
      alert("Please enter your registered email.");
      return;
    }

    // Frontend only
    alert("OTP sent successfully!");

    navigate("/student/verify-otp", {
      state: { email },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center relative px-4 py-12 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-300/10 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-indigo-300/10 blur-[100px]" />

      {/* Back Button */}
      <Link
        to="/student/login"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition"
      >
        <ArrowLeft size={16} />
        Back to Login
      </Link>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/50 p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">

          <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl mb-4">
            <GraduationCap size={34} />
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900">
            Forgot Password
          </h1>

          <p className="text-sm text-slate-400 text-center mt-2 leading-6">
            Enter your registered email address.
            <br />
            We'll send you an OTP to reset your password.
          </p>

        </div>

        {/* Email */}
        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address
          </label>

          <div className="relative">

            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition"
            />

          </div>

        </div>

        {/* Button */}
        <button
          onClick={handleSendOTP}
          className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Send size={18} />
          Send OTP
        </button>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 border-t border-slate-200"></div>

          <span className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
            OR
          </span>

          <div className="flex-1 border-t border-slate-200"></div>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-slate-500">
          Remember your password?{" "}
          <Link
            to="/student/login"
            className="text-blue-600 hover:text-blue-700 font-bold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default ForgotPassword;