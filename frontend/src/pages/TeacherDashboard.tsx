import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileText,
  CalendarCheck,
  LogOut,
  CheckCircle2,
  Activity,
  GraduationCap,
} from "lucide-react";

function TeacherDashboard() {
  const fetchDashboard = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "http://localhost:5000/api/teacher/dashboard",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  fetchDashboard();
}, []);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200/60 p-6 flex flex-col justify-between shrink-0">
        <div>
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5 mb-10 px-2">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl text-white">
              <GraduationCap size={20} />
            </div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              CodeVirus <span className="text-blue-600">Teacher</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-600 font-semibold shadow-sm transition-all text-left">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 font-medium transition-all text-left">
              <BookOpen size={18} />
              <span>Courses</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 font-medium transition-all text-left">
              <Users size={18} />
              <span>Students</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 font-medium transition-all text-left">
              <FileText size={18} />
              <span>Assignments</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 font-medium transition-all text-left">
              <CalendarCheck size={18} />
              <span>Attendance</span>
            </button>
          </div>
        </div>

        {/* User Footer Profile */}
        <div className="border-t border-slate-100 pt-4 px-2">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Logged in as</p>
          <p className="text-sm font-bold text-slate-800 mt-0.5">Professor CodeVirus</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Teacher Dashboard
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Here is a summary of your classroom metrics and activities.
            </p>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/teacher/login";
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-red-50 hover:text-red-600 text-slate-600 font-semibold shadow-sm hover:border-red-100 active:scale-[0.98] transition-all cursor-pointer"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid md:grid-cols-4 gap-6 animate-fade-up">
          {/* Card 1 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-0.5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm font-semibold">Total Courses</span>
              <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl">
                <BookOpen size={18} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-extrabold text-slate-900">12</p>
              <p className="text-xs text-blue-600 font-medium mt-1">3 new courses this term</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-0.5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm font-semibold">Active Students</span>
              <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl">
                <Users size={18} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-extrabold text-slate-900">240</p>
              <p className="text-xs text-emerald-600 font-medium mt-1">12 enrolled today</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-0.5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm font-semibold">Assignments</span>
              <div className="bg-amber-50 text-amber-600 p-2.5 rounded-xl">
                <FileText size={18} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-extrabold text-slate-900">18</p>
              <p className="text-xs text-amber-600 font-medium mt-1">4 pending evaluations</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-0.5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm font-semibold">Avg. Attendance</span>
              <div className="bg-indigo-50 text-indigo-600 p-2.5 rounded-xl">
                <Activity size={18} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-extrabold text-slate-900">92%</p>
              <p className="text-xs text-indigo-600 font-medium mt-1">+1.5% compared to last week</p>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <section className="mt-8 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm animate-fade-up animation-delay-100">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-blue-50 text-blue-600 p-2 rounded-xl">
              <Activity size={18} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Recent activity log
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 text-slate-600 border-b border-slate-50 pb-3 last:border-b-0 last:pb-0">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <div>
                <p className="text-sm font-medium text-slate-800">Assignment uploaded for AI Course</p>
                <p className="text-xs text-slate-400 mt-0.5">Today at 10:30 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-slate-600 border-b border-slate-50 pb-3 last:border-b-0 last:pb-0">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <div>
                <p className="text-sm font-medium text-slate-800">Attendance marked for Section A</p>
                <p className="text-xs text-slate-400 mt-0.5">Yesterday at 2:15 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-slate-600 border-b border-slate-50 pb-3 last:border-b-0 last:pb-0">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <div>
                <p className="text-sm font-medium text-slate-800">New student enrolled in Python Course</p>
                <p className="text-xs text-slate-400 mt-0.5">Oct 12 at 4:50 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-slate-600 border-b border-slate-50 pb-3 last:border-b-0 last:pb-0">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <div>
                <p className="text-sm font-medium text-slate-800">Quiz created for Machine Learning</p>
                <p className="text-xs text-slate-400 mt-0.5">Oct 10 at 11:00 AM</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TeacherDashboard;