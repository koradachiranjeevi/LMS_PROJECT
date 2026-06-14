import React, { useState, useEffect } from "react";

function AdminStudents() {
  const [sname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch Students
  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/students", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        setStudents(data.students);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setEditingId(null);
  };

  const handleEditClick = (student) => {
    setEditingId(student._id);
    setName(student.name);
    setEmail(student.email);
    setMobile(student.mobile || "");
    setPassword(""); 
  };

  // Add / Update Student
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      if (editingId) {
        // --- UPDATE STUDENT (URL me ID bhej rahe hain) ---
        const response = await fetch(`http://localhost:5000/api/update-student/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: sname,
            email,
            mobile,
          }),
        });

        const data = await response.json();
        if (data.success) {
          alert("Student Updated Successfully");
          resetForm();
          fetchStudents();
        } else {
          alert(data.message || "Update failed");
        }
      } else {
        // --- ADD STUDENT ---
        const response = await fetch("http://localhost:5000/api/add-student", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: sname,
            email,
            password,
            mobile,
          }),
        });

        const data = await response.json();
        if (data.success) {
          alert("Student Added Successfully");
          resetForm();
          fetchStudents();
        } else {
          alert(data.message || "Addition failed");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Delete Student
  const deleteStudent = async (studentId) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      const token = localStorage.getItem("token");
      
      // Backend ke /delete-student/:id ke hisab se URL:
      const response = await fetch(`http://localhost:5000/api/delete-student/${studentId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        alert("Student Deleted Successfully");
        fetchStudents();
      } else {
        alert(data.message || "Delete failed");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Student Management</h1>
        <p className="text-slate-500 mb-8">Add and manage students</p>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {editingId ? "Edit Student" : "Add Student"}
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Student Name"
              className="border p-3 rounded-lg"
              value={sname}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Student Email"
              className="border p-3 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder={editingId ? "Password field disabled in edit" : "Password"}
              className="border p-3 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!!editingId} // Update me password require nahi hai abhi backend par
              required={!editingId}
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="border p-3 rounded-lg"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            <div className="md:col-span-2 flex gap-2">
              <button
                type="submit"
                className={`flex-1 py-3 rounded-lg text-white font-medium ${
                  editingId ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {editingId ? "Update Student" : "Add Student"}
              </button>
              
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-400"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Mobile</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student._id} className="border-b hover:bg-slate-50">
                    <td className="p-4">{student.name}</td>
                    <td className="p-4">{student.email}</td>
                    <td className="p-4">{student.mobile || "N/A"}</td>
                    <td className="p-4">{student.role || "student"}</td>

                    <td className="p-4">
                      <button
                        onClick={() => handleEditClick(student)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteStudent(student._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded ml-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center p-6 text-slate-500">
                    No Students Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminStudents;