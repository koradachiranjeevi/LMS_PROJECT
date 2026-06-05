function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white flex">

      {/* Sidebar */}
      <div className="w-64 bg-black/20 border-r border-white/10 p-6">
        <h1 className="text-2xl font-bold mb-10">
          LMS Teacher
        </h1>

        <div className="space-y-4">
          <button className="w-full text-left px-4 py-3 rounded-lg bg-blue-600">
            Dashboard
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10">
            Courses
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10">
            Students
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10">
            Assignments
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10">
            Attendance
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            Teacher Dashboard
          </h1>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/teacher/login";
            }}
            className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-gray-400">
              Total Courses
            </h3>
            <p className="text-4xl font-bold mt-2">
              12
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-gray-400">
              Students
            </h3>
            <p className="text-4xl font-bold mt-2">
              240
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-gray-400">
              Assignments
            </h3>
            <p className="text-4xl font-bold mt-2">
              18
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-gray-400">
              Attendance
            </h3>
            <p className="text-4xl font-bold mt-2">
              92%
            </p>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>✅ Assignment uploaded for AI Course</li>
            <li>✅ Attendance marked for Section A</li>
            <li>✅ New student enrolled in Python Course</li>
            <li>✅ Quiz created for Machine Learning</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default TeacherDashboard;