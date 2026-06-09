import { Search, Plus, BookOpen } from "lucide-react";

function AdminCourses() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
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

          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl font-semibold flex items-center gap-2">
            <Plus size={18} />
            Add Course
          </button>
        </div>

        {/* Search */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-5 mb-6">
          <div className="flex items-center gap-3">
            <Search className="text-slate-400" size={20} />

            <input
              type="text"
              placeholder="Search course..."
              className="w-full outline-none text-slate-700"
            />
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6">
            <BookOpen className="text-blue-600 mb-4" size={28} />

            <h2 className="text-xl font-bold text-slate-900">
              Cyber Security
            </h2>

            <p className="text-slate-500 mt-2">
              Beginner to Advanced Security Training
            </p>

            <div className="mt-4 flex justify-between">
              <span className="text-sm text-slate-500">
                350 Students
              </span>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Active
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6">
            <BookOpen className="text-indigo-600 mb-4" size={28} />

            <h2 className="text-xl font-bold text-slate-900">
              Web Development
            </h2>

            <p className="text-slate-500 mt-2">
              HTML, CSS, React & Backend
            </p>

            <div className="mt-4 flex justify-between">
              <span className="text-sm text-slate-500">
                420 Students
              </span>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Active
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6">
            <BookOpen className="text-emerald-600 mb-4" size={28} />

            <h2 className="text-xl font-bold text-slate-900">
              AI & ML
            </h2>

            <p className="text-slate-500 mt-2">
              Machine Learning Fundamentals
            </p>

            <div className="mt-4 flex justify-between">
              <span className="text-sm text-slate-500">
                290 Students
              </span>

              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                Draft
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminCourses;