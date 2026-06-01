import { Link } from "react-router-dom";

function StudentLogin() {
  const handleGoogleLogin = () => {
    alert("Google Authentication will be integrated with backend");
  };

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center">
      <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl w-96">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Student Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:border-blue-500"
        />

        <button className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-white/10"></div>

          <span className="px-3 text-gray-400 text-sm">
            OR
          </span>

          <div className="flex-1 border-t border-white/10"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5"
          >
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303C33.655 32.657 29.193 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
            />
            <path
              fill="#FF3D00"
              d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.139 35.091 26.683 36 24 36c-5.172 0-9.627-3.328-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.084 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
            />
          </svg>

          Continue with Google
        </button>

        <p className="mt-4 text-center">
          <a
            href="#"
            className="text-blue-400 hover:underline text-sm"
          >
            Forgot Password?
          </a>
        </p>

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