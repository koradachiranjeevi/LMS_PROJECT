import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft, Mail } from "lucide-react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {
    if (!email) {
      alert("Enter Email");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/admin/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("OTP Sent Successfully");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-slate-600"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-violet-50 p-3 rounded-2xl">
            <ShieldCheck size={30} />
          </div>

          <h1 className="text-3xl font-bold mt-4">
            Admin Login
          </h1>

          <p className="text-slate-500 text-center mt-2">
            Login with Email OTP
          </p>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Admin Email
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full pl-11 pr-4 py-3 border rounded-xl"
            />
          </div>
        </div>

        <button
          onClick={sendOtp}
          disabled={loading}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl"
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;