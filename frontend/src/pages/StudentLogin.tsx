import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/student/login",
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
    <div className="min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center">
      <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Student Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-white/10"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 border-t border-white/10"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-lg"
        >
          Continue with Google
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