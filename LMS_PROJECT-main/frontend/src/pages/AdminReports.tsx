import {
  BarChart3,
  Users,
  BookOpen,
  IndianRupee,
  ClipboardList,
  GraduationCap,
} from "lucide-react";

function AdminReports() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Reports & Analytics
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Monitor attendance, performance, engagement and revenue.
        </p>

        <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-6">

          <div className="bg-white p-6 rounded-3xl shadow-lg border">
            <ClipboardList className="mb-3 text-blue-600" size={28} />
            <h2 className="text-2xl font-bold">92%</h2>
            <p className="text-slate-500">Attendance</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border">
            <BookOpen className="mb-3 text-green-600" size={28} />
            <h2 className="text-2xl font-bold">84%</h2>
            <p className="text-slate-500">Course Performance</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border">
            <GraduationCap className="mb-3 text-indigo-600" size={28} />
            <h2 className="text-2xl font-bold">88%</h2>
            <p className="text-slate-500">Teacher Performance</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border">
            <Users className="mb-3 text-orange-600" size={28} />
            <h2 className="text-2xl font-bold">76%</h2>
            <p className="text-slate-500">Engagement</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border">
            <IndianRupee className="mb-3 text-emerald-600" size={28} />
            <h2 className="text-2xl font-bold">₹2.4L</h2>
            <p className="text-slate-500">Payments</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border">
            <BarChart3 className="mb-3 text-red-600" size={28} />
            <h2 className="text-2xl font-bold">₹5.8L</h2>
            <p className="text-slate-500">Revenue</p>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-lg border p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Performance Summary
          </h2>

          <div className="space-y-5">

            <div>
              <p className="mb-2">Attendance Report</p>
              <div className="w-full bg-slate-200 h-3 rounded-full">
                <div className="bg-blue-600 h-3 rounded-full w-[92%]"></div>
              </div>
            </div>

            <div>
              <p className="mb-2">Course Performance</p>
              <div className="w-full bg-slate-200 h-3 rounded-full">
                <div className="bg-green-600 h-3 rounded-full w-[84%]"></div>
              </div>
            </div>

            <div>
              <p className="mb-2">Student Engagement</p>
              <div className="w-full bg-slate-200 h-3 rounded-full">
                <div className="bg-orange-600 h-3 rounded-full w-[76%]"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminReports;