import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TeacherLogin() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);

  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/teacher/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("OTP Sent Successfully");
        setShowOtpField(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/teacher/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Login Successful");

        // Future JWT Integration
        // localStorage.setItem("token", data.token);

        navigate("/teacher/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Teacher Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
        />

        {!showOtpField ? (
          <button
            onClick={handleSendOtp}
            className="w-full bg-emerald-600 py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Send OTP
          </button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 mt-4 mb-4 rounded-lg bg-black/20 border border-white/10"
            />

            <button
              onClick={handleVerifyOtp}
              className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TeacherLogin;