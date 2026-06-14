import { Search, UserX, Plus, Edit, KeyRound } from "lucide-react";
import { useEffect, useState } from "react";

interface Teacher {
  _id: string;
  teacherId: string;
  name: string;
  email: string;
  phone?: string;
  role: string;
}

function AdminTeachers() {
  const [editingId, setEditingId] = useState("");
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // OTP Deletion State Variables
  const [deleteEmail, setDeleteEmail] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [deletionOtp, setDeletionOtp] = useState("");
  const [loading, setLoading] = useState(false);

  // ==========================================
  // 1. FETCH ALL TEACHERS
  // ==========================================
  const fetchTeachers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/get-teachers");
      const data = await response.json();

      if (data.success) {
        setTeachers(data.teachers);
      }
    } catch (error) {
      console.error("Fetch Teachers Error:", error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleEditClick = (teacher: Teacher) => {
    setEditingId(teacher._id);
    setName(teacher.name);
    setEmail(teacher.email);
    setPhone(teacher.phone || "");
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setEditingId("");
  };

  // ==========================================
  // 2. ADD / UPDATE TEACHER HANDLER
  // ==========================================
  const saveTeacher = async () => {
    if (!name || !email) {
      alert("Please fill all required fields");
      return;
    }

    try {
      let response;
      if (editingId) {
        // Naya route for Update (admin flow se linked)
        response = await fetch(`http://localhost:5000/api/admin/update-teacher/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone }),
        });
      } else {
        // Corrected Add Teacher Endpoint URL
        response = await fetch("http://localhost:5000/api/admin/add-teacher", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone }),
        });
      }

      const data = await response.json();

      if (data.success) {
        alert(editingId ? "Teacher updated successfully!" : "Teacher added successfully!");
        resetForm();
        fetchTeachers();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Save Teacher Error:", error);
    }
  };

  // ==========================================
  // 3. STEP 1: REQUEST DELETE (TRIGGER OTP)
  // ==========================================
  const handleRequestDelete = async (teacherEmail: string) => {
    const confirmDelete = window.confirm(`Are you sure you want to trigger account deletion for ${teacherEmail}?`);
    if (!confirmDelete) return;

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/admin/request-delete-teacher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: teacherEmail }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Deletion OTP Sent Successfully! Check terminal/email.");
        setDeleteEmail(teacherEmail);
        setShowOtpModal(true); // Open Secure OTP Dialog box
      } else {
        alert(data.message || "Failed to trigger deletion process.");
      }
    } catch (error) {
      console.error("Request Delete Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // 4. STEP 2: VERIFY OTP & PERMANENT DELETE
  // ==========================================
  const handleVerifyAndDelete = async () => {
    if (!deletionOtp) {
      alert("Please enter the verification OTP");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/admin/verify-delete-teacher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: deleteEmail, otp: deletionOtp }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Teacher Account Permanently Deleted!");
        setShowOtpModal(false);
        setDeletionOtp("");
        setDeleteEmail("");
        fetchTeachers();
      } else {
        alert(data.message || "Invalid Verification OTP Code.");
      }
    } catch (error) {
      console.error("Verify Delete Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(search.toLowerCase()) ||
      teacher.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Teacher Management</h1>
          <p className="text-slate-500 mt-2">Add and manage teachers.</p>
        </div>

        {/* Input Form Module */}
        <div className="bg-white rounded-3xl p-6 shadow mb-6">
          <h2 className="text-xl font-bold mb-4">
            {editingId ? "Edit Teacher Details" : "Add New Teacher"}
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Teacher Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Teacher Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={saveTeacher}
              className={`px-5 py-3 rounded-xl flex items-center gap-2 text-white font-medium cursor-pointer transition-colors ${
                editingId ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {editingId ? <Edit size={18} /> : <Plus size={18} />}
              {editingId ? "Update Teacher" : "Add Teacher"}
            </button>

            {editingId && (
              <button
                onClick={resetForm}
                className="bg-slate-500 hover:bg-slate-600 font-medium text-white px-5 py-3 rounded-xl cursor-pointer transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* Search Field */}
        <div className="bg-white rounded-3xl p-5 shadow mb-6">
          <div className="flex items-center gap-3">
            <Search className="text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search Teacher by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none bg-transparent text-slate-700"
            />
          </div>
        </div>

        {/* Teachers DataTable */}
        <div className="bg-white rounded-3xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-4 text-slate-600 font-semibold">Teacher ID</th>
                <th className="text-left p-4 text-slate-600 font-semibold">Name</th>
                <th className="text-left p-4 text-slate-600 font-semibold">Email</th>
                <th className="text-left p-4 text-slate-600 font-semibold">Phone</th>
                <th className="text-left p-4 text-slate-600 font-semibold">Role</th>
                <th className="text-left p-4 text-slate-600 font-semibold">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredTeachers.map((teacher) => (
                <tr key={teacher._id} className="border-t hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-blue-600">{teacher.teacherId || "N/A"}</td>
                  <td className="p-4 font-medium text-slate-800">{teacher.name}</td>
                  <td className="p-4 text-slate-600">{teacher.email}</td>
                  <td className="p-4 text-slate-600">{teacher.phone || "-"}</td>
                  <td className="p-4">
                    <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {teacher.role || "teacher"}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditClick(teacher)}
                        className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-lg flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer"
                      >
                        <Edit size={16} />
                        Edit
                      </button>

                      <button
                        onClick={() => handleRequestDelete(teacher.email)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer"
                      >
                        <UserX size={16} />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredTeachers.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center p-8 text-slate-400 font-medium">
                    No Teachers Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECURE POPUP MODAL FOR DELETION VERIFICATION */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-3xl shadow-2xl max-w-sm w-full animate-fade-in">
            <div className="flex flex-col items-center mb-4">
              <div className="bg-red-50 p-3 rounded-2xl text-red-500 mb-3">
                <KeyRound size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Confirm Deletion</h3>
              <p className="text-slate-500 text-sm text-center mt-1">
                Enter the secret OTP sent for verifying deletion of <b>{deleteEmail}</b>.
              </p>
            </div>

            <input
              type="text"
              maxLength={6}
              placeholder="Enter 6-Digit OTP"
              value={deletionOtp}
              onChange={(e) => setDeletionOtp(e.target.value)}
              className="w-full text-center p-3 border border-slate-200 rounded-xl font-semibold tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
            />

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setShowOtpModal(false);
                  setDeletionOtp("");
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleVerifyAndDelete}
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-xl transition-colors cursor-pointer disabled:bg-red-400"
              >
                {loading ? "Deleting..." : "Verify & Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminTeachers;