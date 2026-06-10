import { Video, Users, Calendar, BarChart3 } from "lucide-react";

function TeacherLiveClasses() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Live Classes
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Schedule and manage live classes.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <Video className="text-blue-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">24</h2>
            <p className="text-slate-500">Classes Conducted</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <Users className="text-green-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">210</h2>
            <p className="text-slate-500">Students Joined</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <Calendar className="text-indigo-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">8</h2>
            <p className="text-slate-500">Upcoming Classes</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <BarChart3 className="text-orange-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">89%</h2>
            <p className="text-slate-500">Attendance Rate</p>
          </div>

        </div>

        {/* Schedule Class */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">

          <h2 className="text-2xl font-bold mb-5">
            Schedule New Live Class
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Class Title"
              className="border border-slate-200 rounded-xl p-3"
            />

            <input
              type="date"
              className="border border-slate-200 rounded-xl p-3"
            />

            <input
              type="time"
              className="border border-slate-200 rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Meeting Link"
              className="border border-slate-200 rounded-xl p-3"
            />

          </div>

          <textarea
            rows={4}
            placeholder="Class Description"
            className="w-full mt-4 border border-slate-200 rounded-xl p-3"
          />

          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl">
            Schedule Class
          </button>

        </div>

        {/* Poll Management */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Conduct Poll
          </h2>

          <input
            type="text"
            placeholder="Poll Question"
            className="w-full border border-slate-200 rounded-xl p-3 mb-4"
          />

          <input
            type="text"
            placeholder="Option 1"
            className="w-full border border-slate-200 rounded-xl p-3 mb-4"
          />

          <input
            type="text"
            placeholder="Option 2"
            className="w-full border border-slate-200 rounded-xl p-3 mb-4"
          />

          <button className="bg-orange-600 text-white px-6 py-3 rounded-xl">
            Launch Poll
          </button>

          <div className="mt-8 border-t pt-6">

            <h3 className="text-xl font-semibold mb-4">
              Poll Results
            </h3>

            <div className="space-y-4">

              <div>
                <p className="mb-2">Option 1 - 65%</p>
                <div className="w-full bg-slate-200 h-3 rounded-full">
                  <div className="bg-orange-500 h-3 rounded-full w-[65%]"></div>
                </div>
              </div>

              <div>
                <p className="mb-2">Option 2 - 35%</p>
                <div className="w-full bg-slate-200 h-3 rounded-full">
                  <div className="bg-blue-500 h-3 rounded-full w-[35%]"></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default TeacherLiveClasses;