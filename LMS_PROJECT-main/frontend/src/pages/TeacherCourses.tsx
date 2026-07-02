import { BookOpen, Users, Eye } from "lucide-react";

function TeacherCourses() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          My Courses
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Manage assigned courses and student progress.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <BookOpen className="text-emerald-600 mb-4" size={32} />

            <h2 className="text-xl font-bold">
              Web Development
            </h2>

            <p className="text-slate-500 mt-2">
              Assigned Students: 120
            </p>

            <div className="mt-5">
              <div className="w-full h-3 bg-slate-200 rounded-full">
                <div className="h-3 w-[80%] bg-emerald-600 rounded-full"></div>
              </div>
            </div>

            <button className="mt-5 w-full bg-emerald-600 text-white py-3 rounded-xl flex items-center justify-center gap-2">
              <Eye size={18} />
              Manage Course
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <BookOpen className="text-blue-600 mb-4" size={32} />

            <h2 className="text-xl font-bold">
              Cyber Security
            </h2>

            <p className="text-slate-500 mt-2">
              Assigned Students: 85
            </p>

            <div className="mt-5">
              <div className="w-full h-3 bg-slate-200 rounded-full">
                <div className="h-3 w-[65%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2">
              <Eye size={18} />
              Manage Course
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default TeacherCourses;