import { Link } from "react-router-dom";

function StudentLogin() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-96">

        <h1 className="text-3xl font-bold mb-6">
          Student Login
        </h1>

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

        <button className="w-full bg-blue-600 py-3 rounded-lg">
          Login
        </button>

        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/student/signup"
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}

export default StudentLogin;