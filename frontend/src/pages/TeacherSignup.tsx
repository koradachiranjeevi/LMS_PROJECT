import { Link } from "react-router-dom";

function TeacherSignup() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-96">

        <h1 className="text-3xl font-bold mb-6">
          Teacher Signup
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
        />

        <button className="w-full bg-emerald-600 py-3 rounded-lg">
          Create Account
        </button>

        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/teacher/login"
            className="text-emerald-500 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default TeacherSignup;