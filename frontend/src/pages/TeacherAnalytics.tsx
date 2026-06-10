import {
  Users,
  GraduationCap,
  BarChart3,
  IndianRupee,
  FileCheck,
} from "lucide-react";

function TeacherAnalytics() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Teaching Analytics
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Track course performance and student engagement.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <Users className="text-blue-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">320</h2>
            <p className="text-slate-500">Enrollments</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <GraduationCap className="text-green-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">82%</h2>
            <p className="text-slate-500">Completion Rate</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <BarChart3 className="text-indigo-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">76%</h2>
            <p className="text-slate-500">Lecture Watch Rate</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <FileCheck className="text-orange-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">89%</h2>
            <p className="text-slate-500">Assignment Performance</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <IndianRupee className="text-emerald-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">₹1.2L</h2>
            <p className="text-slate-500">Revenue</p>
          </div>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Performance Summary
          </h2>

          <div className="space-y-4">

            <div>
              <p className="font-medium mb-2">
                Course Completion
              </p>

              <div className="w-full bg-slate-200 h-3 rounded-full">
                <div className="bg-green-600 h-3 rounded-full w-[82%]"></div>
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">
                Lecture Engagement
              </p>

              <div className="w-full bg-slate-200 h-3 rounded-full">
                <div className="bg-blue-600 h-3 rounded-full w-[76%]"></div>
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">
                Assignment Success
              </p>

              <div className="w-full bg-slate-200 h-3 rounded-full">
                <div className="bg-orange-600 h-3 rounded-full w-[89%]"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default TeacherAnalytics;