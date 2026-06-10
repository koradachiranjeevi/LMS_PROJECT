import { Users, TrendingUp, Calendar } from "lucide-react";

function TeacherStudents() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Students Management
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Monitor student attendance, progress and performance.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <Users className="text-blue-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">245</h2>
            <p className="text-slate-500">Total Students</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <Calendar className="text-green-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">88%</h2>
            <p className="text-slate-500">Attendance</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <TrendingUp className="text-indigo-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">91%</h2>
            <p className="text-slate-500">Performance Rate</p>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-4">Student</th>
                <th className="text-left p-4">Course</th>
                <th className="text-left p-4">Attendance</th>
                <th className="text-left p-4">Progress</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-t">
                <td className="p-4">ABHITEESH</td>
                <td className="p-4">Web Development</td>
                <td className="p-4">92%</td>
                <td className="p-4">85%</td>
              </tr>

              <tr className="border-t">
                <td className="p-4">SOURABH</td>
                <td className="p-4">Cyber Security</td>
                <td className="p-4">88%</td>
                <td className="p-4">79%</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default TeacherStudents;