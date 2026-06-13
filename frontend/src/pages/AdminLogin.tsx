import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, ArrowLeft, Mail, KeyRound } from "lucide-react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false); // Track karega ki kab OTP input dikhana hai
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate(); // Login ke baad dashboard par bhejne ke liye

  // ==========================================
  // 1. SEND OTP HANDLER
  // ==========================================
  const sendOtp = async () => {
    if (!email) {
      alert("Please enter your admin email");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/admin/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        alert("OTP Sent Successfully! (Check your email or backend terminal)");
        setIsOtpSent(true); // OTP field visible karein
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("Send OTP Error:", error);
      alert("Something went wrong while sending OTP");
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // 2. VERIFY OTP HANDLER
  // ==========================================
  const verifyOtp = async () => {
    if (!otp) {
      alert("Please enter the 6-digit OTP");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/admin/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Admin Logged In Successfully!");
        
        // Token aur Admin details local storage mein save karein
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("adminData", JSON.stringify(data.admin));

        // Redirect to admin dashboard (apne route ke mutabik change kar sakte hain)
        navigate("/admin/dashboard");
      } else {
        alert(data.message || "Invalid OTP");
      }
    } catch (error) {
      console.error("Verify OTP Error:", error);
      alert("Something went wrong during verification");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      {/* Back button */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg">
        {/* Header Icon & Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-violet-50 p-3 rounded-2xl text-violet-600">
            <ShieldCheck size={30} />
          </div>
          <h1 className="text-3xl font-bold mt-4">Admin Login</h1>
          <p className="text-slate-500 text-center mt-2">
            {isOtpSent ? `OTP sent to ${email}` : "Login with Email OTP"}
          </p>
        </div>

        {/* Form Inputs Container */}
        <div className="space-y-4">
          {/* EMAIL INPUT (Hamesha dikhega, par OTP jaane ke baad disabled ho jayega) */}
          <div>
            <label className="block mb-2 font-medium text-slate-700">Admin Email</label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="email"
                placeholder="admin@gmail.com"
                value={email}
                disabled={isOtpSent} // OTP jaane ke baad email change na ho sake
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border rounded-xl bg-slate-50 disabled:bg-slate-100 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* OTP INPUT (Sirf tabhi dikhega jab isOtpSent true hoga) */}
          {isOtpSent && (
            <div className="animate-fade-in">
              <label className="block mb-2 font-medium text-slate-700">Enter OTP</label>
              <div className="relative">
                <KeyRound
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  maxLength="6"
                  placeholder="X X X X X X"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border rounded-xl tracking-widest font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>
          )}
        </div>

        {/* DYNAMIC ACTION BUTTON */}
        {!isOtpSent ? (
          <button
            onClick={sendOtp}
            disabled={loading}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors disabled:bg-blue-400 cursor-pointer"
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        ) : (
          <div className="space-y-2">
            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl transition-colors disabled:bg-emerald-400 cursor-pointer"
            >
              {loading ? "Verifying..." : "Verify & Login"}
            </button>
            
            {/* Change Email button in case of typo */}
            <button
              onClick={() => setIsOtpSent(false)}
              className="w-full text-center text-sm text-slate-500 hover:text-blue-600 mt-2 transition-colors cursor-pointer"
            >
              Change Email ID
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminLogin;