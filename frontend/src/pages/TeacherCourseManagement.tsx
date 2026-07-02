import { BookOpen, Upload, PlusCircle } from "lucide-react";

function TeacherCourseManagement() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Course Management
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Create and manage courses, modules and learning content.
        </p>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <BookOpen className="text-emerald-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">12</h2>
            <p className="text-slate-500">Courses Created</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <Upload className="text-blue-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">85</h2>
            <p className="text-slate-500">Content Uploads</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <PlusCircle className="text-indigo-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">34</h2>
            <p className="text-slate-500">Modules Added</p>
          </div>

        </div>

        {/* Create Course */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8">

          <h2 className="text-2xl font-bold mb-6">
            Create New Course
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Course Title"
              className="border border-slate-200 rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Course Category"
              className="border border-slate-200 rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Course Price"
              className="border border-slate-200 rounded-xl p-3"
            />

            <select className="border border-slate-200 rounded-xl p-3">
              <option>Public</option>
              <option>Private</option>
            </select>

          </div>

          <textarea
            rows={5}
            placeholder="Course Description"
            className="w-full mt-4 border border-slate-200 rounded-xl p-3"
          />

          <div className="flex flex-wrap gap-4 mt-4">

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
              Add Module
            </button>

            <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl">
              Upload Content
            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl">
              Create Course
            </button>

          </div>

        </div>

        {/* Upload Learning Content */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Upload Learning Content
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Video Title"
              className="border border-slate-200 rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Notes File"
              className="border border-slate-200 rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Assignment File"
              className="border border-slate-200 rounded-xl p-3"
            />

          </div>

          <button className="mt-5 bg-emerald-600 text-white px-6 py-3 rounded-xl">
            Upload Content
          </button>

        </div>

        {/* Batch Wise Content Release */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Batch Wise Content Release
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Batch Name"
              className="border border-slate-200 rounded-xl p-3"
            />

            <input
              type="date"
              className="border border-slate-200 rounded-xl p-3"
            />

          </div>

          <button className="mt-5 bg-indigo-600 text-white px-6 py-3 rounded-xl">
            Release Content
          </button>

        </div>

      </div>
    </div>
  );
}

export default TeacherCourseManagement;