import React, { useState, useEffect } from "react";
import { Upload, AlertCircle, CheckCircle2, Search, ChevronLeft, ChevronRight } from "lucide-react"; 

function AdminStudents() {
  const [sname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Search & Pagination States
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5; // एक पेज पर कितने छात्र दिखाने हैं (इसे आप बदल सकते हैं)

  // Bulk Upload states
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: "",
  });

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

  // --- Bulk Student Upload Handlers ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setUploadStatus({ type: "", message: "" });
    }
  };

  const handleBulkUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setUploadStatus({ type: "error", message: "Please select a file first!" });
      return;
    }

    setUploading(true);
    setUploadStatus({ type: "", message: "" });

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/bulk-upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData, 
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setUploadStatus({
          type: "success",
          message: data.message || "Spreadsheet data parsed and added successfully!",
        });
        setSelectedFile(null);
        
        const fileInput = document.getElementById("bulkFileInput") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
        
        fetchStudents();
      } else {
        setUploadStatus({
          type: "error",
          message: data?.message || "File import processing failed on the backend server.",
        });
      }
    } catch (error) {
      console.error("Bulk upload operation failed:", error);
      setUploadStatus({
        type: "error",
        message: "Network configuration error: Could not reach the server resource.",
      });
    } finally {
      setUploading(false);
    }
  };

  // --- Search and Pagination Logic ---
  // 1. Filter students based on search term (Name, Email or Mobile)
  const filteredStudents = students.filter((student: any) => {
    const term = searchTerm.toLowerCase();
    return (
      student.name?.toLowerCase().includes(term) ||
      student.email?.toLowerCase().includes(term) ||
      student.mobile?.toLowerCase().includes(term)
    );
  });

  // 2. Calculate pagination indices
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  // 3. Total pages calculation
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  // Reset page to 1 when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Student Management</h1>
        <p className="text-slate-500 mb-8">Add and manage students</p>

        {/* Manual Form */}
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
              disabled={!!editingId}
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

        {/* --- BULK UPLOAD COMPONENT BLOCK --- */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8 border border-slate-100">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Bulk Student Upload</h2>
          <p className="text-sm text-slate-500 mb-5">
            Select a spreadsheet file (<code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600">.xlsx</code>, <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600">.xls</code>, or <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600">.csv</code>) containing matching columns: <code className="bg-slate-50 border px-1 py-0.5 rounded font-mono text-xs font-semibold">name, email, password, mobile</code>.
          </p>

          <form onSubmit={handleBulkUpload} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <input
              id="bulkFileInput"
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFileChange}
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2.5 file:px-4
                file:rounded-xl file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100 cursor-pointer border rounded-xl p-1"
            />
            <button
              type="submit"
              disabled={uploading}
              className={`bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition font-medium whitespace-nowrap ${
                uploading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <Upload size={18} />
              {uploading ? "Uploading..." : "Import Students"}
            </button>
          </form>

          {uploadStatus.type && (
            <div className={`mt-4 p-4 rounded-xl flex items-start gap-3 text-sm font-medium border ${
              uploadStatus.type === "success" 
                ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
                : "bg-rose-50 border-rose-200 text-rose-800"
            }`}>
              {uploadStatus.type === "success" ? <CheckCircle2 size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" /> : <AlertCircle size={18} className="text-rose-600 mt-0.5 flex-shrink-0" />}
              <div>{uploadStatus.message}</div>
            </div>
          )}
        </div>

        {/* --- SEARCH BAR SECTION --- */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6 flex items-center gap-3 border border-slate-100">
          <Search size={20} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search students by name, email, or mobile..."
            className="w-full bg-transparent outline-none text-slate-700 placeholder-slate-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Data Table */}
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
              {currentStudents.length > 0 ? (
                currentStudents.map((student: any) => (
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
                  <td colSpan={5} className="text-center p-6 text-slate-500">
                    {searchTerm ? "No Matching Students Found" : "No Students Found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* --- PAGINATION CONTROLS CONTROLLER --- */}
          {totalPages > 1 && (
            <div className="bg-slate-50 px-4 py-4 flex items-center justify-between border-t border-slate-200 sm:px-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-700">
                    Showing <span className="font-medium">{indexOfFirstStudent + 1}</span> to{" "}
                    <span className="font-medium">
                      {Math.min(indexOfLastStudent, filteredStudents.length)}
                    </span>{" "}
                    of <span className="font-medium">{filteredStudents.length}</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    
                    {/* Render Page Numbers */}
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          currentPage === index + 1
                            ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                            : "bg-white border-slate-300 text-slate-500 hover:bg-slate-50"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminStudents;