import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  GraduationCap,
  Mail,
  Lock,
  User,
} from "lucide-react";

function StudentSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function SignupData() {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/student/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Signup Successful");

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center relative px-4 py-12">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-300/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-indigo-300/10 blur-[100px] pointer-events-none" />

      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      {/* Signup Card */}
      <div className="w-full max-w-md bg-white border border-slate-100 p-8 rounded-3xl shadow-xl shadow-slate-200/50 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl mb-3">
            <GraduationCap size={32} />
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 text-center">
            Student Signup
          </h1>

          <p className="text-slate-400 text-sm mt-2 text-center">
            Create your account and start learning
          </p>
        </div>

        {/* Full Name */}
        <div className="relative mb-4">
          <User
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none"
          />
        </div>

        {/* Email */}
        <div className="relative mb-4">
          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none"
          />
        </div>

        {/* Password */}
        <div className="relative mb-4">
          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none"
          />
        </div>

        {/* Confirm Password */}
        <div className="relative mb-6">
          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none"
          />
        </div>

        <button
          onClick={SignupData}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all"
        >
          Create Account
        </button>

        <p className="mt-6 text-center text-slate-500 text-sm">
          Already have an account?{" "}
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

export default StudentSignup;