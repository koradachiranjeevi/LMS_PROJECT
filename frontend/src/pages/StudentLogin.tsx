import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, ArrowLeft, Mail, Lock } from "lucide-react";

function StudentLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/student/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        alert("Login Successful");
        navigate("/student/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  const handleGoogleLogin = () => {
    alert("Google Authentication will be integrated with backend");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center relative px-4 py-12 font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-300/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-indigo-300/10 blur-[100px] pointer-events-none" />

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
          <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl mb-3">
            <GraduationCap size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight text-center">
            Student Login
          </h1>
          <p className="text-slate-400 text-sm mt-1.5 text-center">
            Log in to manage your homework and access classes
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.98] transition-all cursor-pointer"
        >
          Login
        </button>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-slate-200"></div>
          <span className="px-3 text-slate-400 text-xs font-bold uppercase tracking-wider">OR</span>
          <div className="flex-1 border-t border-slate-200"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-800 py-3.5 rounded-xl font-semibold shadow-sm hover:bg-slate-50 active:scale-[0.98] transition-all cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.187 4.114-3.48 0-6.3-2.82-6.3-6.3s2.82-6.3 6.3-6.3c1.554 0 2.97.564 4.07 1.498l3.056-3.056C19.167 2.457 15.932 1.3 12.24 1.3 6.136 1.3 1.2 6.236 1.2 12.34s4.936 11.04 11.04 11.04c6.357 0 11.04-4.473 11.04-11.04 0-.742-.086-1.423-.245-2.057H12.24Z"
            />
          </svg>
          Continue with Google
        </button>

        <p className="mt-6 text-center text-slate-500 text-sm">
          Don't have an account?{" "}
          <Link
            to="/student/signup"
            className="text-blue-600 hover:text-blue-700 font-bold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default StudentLogin;