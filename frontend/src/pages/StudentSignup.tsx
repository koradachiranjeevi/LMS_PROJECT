import { useState } from "react";
import { Link } from "react-router-dom";

function StudentSignup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function SignupData() {

    // Confirm Password Validation

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
    <div className="min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center">

      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-96">

        <h1 className="text-3xl font-bold mb-6">
          Student Signup
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 py-3 rounded-lg"
          onClick={SignupData}
        >
          Create Account
        </button>

        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/student/login"
            className="text-blue-500"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default StudentSignup;