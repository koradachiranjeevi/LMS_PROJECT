import {
  BookOpen,
  ClipboardList,
  Award,
  Activity,
  GraduationCap,
  PlayCircle,
} from "lucide-react";

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Welcome Back 👋
          </h1>

          <p className="text-slate-500 mt-2">
            Track your learning progress and activities.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <BookOpen className="text-blue-600 mb-3" size={28} />
            <h2 className="text-4xl font-bold text-slate-900">
              5
            </h2>
            <p className="text-slate-500 mt-1">
              Enrolled Courses
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <ClipboardList
              className="text-orange-500 mb-3"
              size={28}
            />
            <h2 className="text-4xl font-bold text-slate-900">
              3
            </h2>
            <p className="text-slate-500 mt-1">
              Pending Assignments
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <Activity
              className="text-green-600 mb-3"
              size={28}
            />
            <h2 className="text-4xl font-bold text-slate-900">
              92%
            </h2>
            <p className="text-slate-500 mt-1">
              Attendance
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <Award
              className="text-indigo-600 mb-3"
              size={28}
            />
            <h2 className="text-4xl font-bold text-slate-900">
              2
            </h2>
            <p className="text-slate-500 mt-1">
              Certificates
            </p>
          </div>

        </div>

        {/* Continue Learning */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Continue Learning
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border border-slate-200 rounded-2xl p-5">
              <GraduationCap
                className="text-blue-600 mb-3"
                size={28}
              />

              <h3 className="font-bold text-lg">
                Cyber Security
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                Progress: 70%
              </p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2">
                <PlayCircle size={18} />
                Continue
              </button>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5">
              <GraduationCap
                className="text-indigo-600 mb-3"
                size={28}
              />

              <h3 className="font-bold text-lg">
                Web Development
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                Progress: 55%
              </p>

              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-xl flex items-center gap-2">
                <PlayCircle size={18} />
                Continue
              </button>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5">
              <GraduationCap
                className="text-emerald-600 mb-3"
                size={28}
              />

              <h3 className="font-bold text-lg">
                AI & ML
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                Progress: 35%
              </p>

              <button className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-xl flex items-center gap-2">
                <PlayCircle size={18} />
                Continue
              </button>
            </div>

          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-50 p-4 rounded-xl">
              ✅ Assignment submitted successfully.
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              🎯 Quiz completed with 88% score.
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              🏆 Certificate earned in Web Development.
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              📚 New lesson unlocked in Cyber Security.
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default StudentDashboard;