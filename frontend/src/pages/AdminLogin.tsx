import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, ArrowLeft, Mail } from "lucide-react";

function AdminLogin() {
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [otp, setOtp] = useState("");
const [otpSent, setOtpSent] = useState(false);

// Send OTP
const handleSendOtp = async () => {
try {
const response = await fetch(
"http://localhost:5000/api/admin/send-otp",
{
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
email,
}),
}
);


  const data = await response.json();

  if (data.success) {
    alert("OTP Sent Successfully");
    setOtpSent(true);
  } else {
    alert(data.message);
  }
} catch (error) {
  console.log(error);
  alert("Something went wrong");
}


};

// Verify OTP
const handleVerifyOtp = async () => {
try {
const response = await fetch(
"http://localhost:5000/api/admin/verify-otp",
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


  const data = await response.json();

  if (data.success) {
    localStorage.setItem("token", data.token);

    alert("Login Successful");

    navigate("/admin/dashboard");
  } else {
    alert(data.message);
  }
} catch (error) {
  console.log(error);
  alert("Something went wrong");
}


};

return ( <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4"> <Link
     to="/"
     className="absolute top-6 left-6 flex items-center gap-2 text-slate-500 hover:text-blue-600"
   > <ArrowLeft size={16} />
Back </Link>


  <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl">
    <div className="text-center mb-6">
      <div className="inline-flex p-3 rounded-2xl bg-violet-100 text-violet-600">
        <ShieldCheck size={32} />
      </div>

        <h1 className="text-3xl font-bold mb-6">
          Admin Login
        </h1>

      <p className="text-slate-500 mt-2">
        Login using Email OTP
      </p>
    </div>

    {/* Email Input */}
    <div className="mb-4">
      <label className="font-medium text-sm">
        Admin Email
      </label>

      <div className="relative mt-2">
        <Mail
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="email"
          placeholder="admin@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    {/* OTP Input */}
    {otpSent && (
      <div className="mb-4">
        <label className="font-medium text-sm">
          Enter OTP
        </label>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border rounded-xl py-3 px-4 mt-2 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    )}

    {!otpSent ? (
      <button
        onClick={handleSendOtp}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
      >
        Send OTP
      </button>
    ) : (
      <button
        onClick={handleVerifyOtp}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
      >
        Verify OTP & Login
        </button>
    )}
      </div>
    </div>


  );
}

export default AdminLogin;
