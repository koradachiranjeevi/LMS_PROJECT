import {
  GraduationCap,
  PlayCircle,
  Clock,
} from "lucide-react";

function MyCourses() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            My Courses
          </h1>

          <p className="text-slate-500 mt-2">
            Continue learning and track your progress.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {/* Course 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <GraduationCap
              className="text-blue-600 mb-4"
              size={32}
            />

            <h2 className="text-xl font-bold text-slate-900">
              Cyber Security
            </h2>

            <p className="text-slate-500 mt-2">
              Learn ethical hacking, networking and security.
            </p>

            <div className="mt-5">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>70%</span>
              </div>

              <div className="w-full h-3 bg-slate-200 rounded-full">
                <div className="h-3 w-[70%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 text-slate-500 text-sm">
              <Clock size={16} />
              12 Lessons Remaining
            </div>

            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2">
              <PlayCircle size={18} />
              Continue Learning
            </button>
          </div>

          {/* Course 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <GraduationCap
              className="text-indigo-600 mb-4"
              size={32}
            />

            <h2 className="text-xl font-bold text-slate-900">
              Web Development
            </h2>

            <p className="text-slate-500 mt-2">
              Master HTML, CSS, JavaScript and React.
            </p>

            <div className="mt-5">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>55%</span>
              </div>

              <div className="w-full h-3 bg-slate-200 rounded-full">
                <div className="h-3 w-[55%] bg-indigo-600 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 text-slate-500 text-sm">
              <Clock size={16} />
              18 Lessons Remaining
            </div>

            <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl flex items-center justify-center gap-2">
              <PlayCircle size={18} />
              Continue Learning
            </button>
          </div>

          {/* Course 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <GraduationCap
              className="text-emerald-600 mb-4"
              size={32}
            />

            <h2 className="text-xl font-bold text-slate-900">
              AI & ML
            </h2>

            <p className="text-slate-500 mt-2">
              Learn Machine Learning and Artificial Intelligence.
            </p>

            <div className="mt-5">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>35%</span>
              </div>

              <div className="w-full h-3 bg-slate-200 rounded-full">
                <div className="h-3 w-[35%] bg-emerald-600 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 text-slate-500 text-sm">
              <Clock size={16} />
              25 Lessons Remaining
            </div>

            <button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl flex items-center justify-center gap-2">
              <PlayCircle size={18} />
              Continue Learning
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MyCourses;