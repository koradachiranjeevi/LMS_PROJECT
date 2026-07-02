import { Search, Plus, BookOpen, X, DollarSign, Clock, Tag } from "lucide-react";
import { useState, useEffect } from "react";

// कोर्स डेटा के लिए इंटरफ़ेस टाइप डेफ़िनेशन
interface Course {
  _id?: string;
  id?: number;
  title: string;
  description: string;
  students: number;
  price: number;       // 🆕 जोड़ा गया
  duration: number;    // 🆕 जोड़ा गया
  category: string;    // 🆕 जोड़ा गया
  status: "Active" | "Draft";
}

function AdminCourses() {
  // डेटाबेस से आने वाले कोर्सेज के लिए स्टेट
  const [courses, setCourses] = useState<Course[]>([]);
  
  // सर्च टर्म और पॉपअप मॉडल (Modal) की स्टेट्स
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  // नया कोर्स जोड़ने के लिए इनपुट फ़ील्ड्स की स्टेट्स
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [studentsCount, setStudentsCount] = useState("");
  const [price, setPrice] = useState("");               // 🆕 जोड़ा गया
  const [duration, setDuration] = useState("");         // 🆕 जोड़ा गया
  const [category, setCategory] = useState("Programming"); // 🆕 जोड़ा गया
  const [status, setStatus] = useState<"Active" | "Draft">("Active");

  // ==========================================
  // 1. FETCH COURSES FROM BACKEND
  // ==========================================
  const fetchCourses = async (searchQuery = "") => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/api/admin/get-courses?search=${searchQuery}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      const data = await response.json();
      if (data.success) {
        setCourses(data.courses);
      }
    } catch (error) {
      console.error("Error fetching courses from server:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    fetchCourses(search);
  }, [search]);

  // फ़ॉर्म रीसेट करने और मॉडल बंद करने का फ़ंक्शन
  const closeModal = () => {
    setShowModal(false);
    setTitle("");
    setDescription("");
    setStudentsCount("");
    setPrice("");
    setDuration("");
    setCategory("Programming");
    setStatus("Active");
  };

  // ==========================================
  // 2. SAVE NEW COURSE TO BACKEND (POST)
  // ==========================================
  const handleAddCourse = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("कृपया ज़रूरी फ़ील्ड्स भरें!");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/api/admin/add-course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          students: Number(studentsCount) || 0,
          price: Number(price) || 0,        // 🆕 बैकएंड को सेंड होगा
          duration: Number(duration) || 0,  // 🆕 बैकएंड को सेंड होगा
          category,                         // 🆕 बैकएंड को सेंड होगा
          status,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message || "Course added successfully!");
        closeModal();
        fetchCourses(search);
      } else {
        alert(data.message || "Failed to add course");
      }
    } catch (error) {
      console.error("Error adding course to server:", error);
      alert("Could not reach the backend server.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Course Management
            </h1>
            <p className="text-slate-500 mt-2">
              Manage all LMS courses.
            </p>
          </div>

          <button 
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl font-semibold flex items-center gap-2 cursor-pointer shadow-md hover:opacity-95 transition-opacity"
          >
            <Plus size={18} />
            Add Course
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-5 mb-6">
          <div className="flex items-center gap-3">
            <Search className="text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search course by title, description or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none text-slate-700 bg-transparent"
            />
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course._id || course.id} className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <BookOpen 
                      className={` ${
                        course.status === "Active" ? "text-blue-600" : "text-yellow-600"
                      }`} 
                      size={28} 
                    />
                    {/* Category Tag Badge */}
                    <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium">
                      {course.category || "General"}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 line-clamp-1">
                    {course.title}
                  </h2>

                  <p className="text-slate-500 mt-2 text-sm leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  {/* 🆕 Extra Vital Info Badges (Price & Duration) */}
                  <div className="flex gap-4 mt-4 text-xs font-semibold text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1">
                      <DollarSign size={14} className="text-emerald-600" />
                      <span>{course.price === 0 ? "Free" : `₹${course.price}`}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-indigo-500" />
                      <span>{course.duration || 0} Weeks</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-sm text-slate-500 font-medium">
                    {course.students} Students
                  </span>

                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    course.status === "Active" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {course.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-400 font-medium">
              {search ? "No Matching Courses Found" : "No Courses Found"}
            </div>
          )}
        </div>
      </div>

      {/* --- ADD COURSE POPUP MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white p-6 rounded-3xl shadow-2xl max-w-md w-full relative border border-slate-100 my-8">
            
            {/* Modal Close Header */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-2xl font-bold text-slate-900">Add New Course</h3>
              <button 
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={handleAddCourse} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Course Title *</label>
                <input
                  type="text"
                  placeholder="e.g., Full Stack Development"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Description *</label>
                <textarea
                  placeholder="Enter short details about this course..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={2}
                  className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 resize-none"
                  required
                />
              </div>

              {/* 🆕 New Row for Price and Duration Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Price (₹) *</label>
                  <input
                    type="number"
                    placeholder="0 for Free"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Duration (Weeks)</label>
                  <input
                    type="number"
                    placeholder="e.g. 8"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Students Count</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={studentsCount}
                    onChange={(e) => setStudentsCount(e.target.value)}
                    className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-slate-200 p-3 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="Programming">Programming</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="AI & ML">AI & ML</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Design">Design</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as "Active" | "Draft")}
                  className="w-full border border-slate-200 p-3 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <option value="Active">Active</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 rounded-xl font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition-colors cursor-pointer shadow-md"
                >
                  Save Course
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCourses;