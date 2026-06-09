import { ClipboardList, Calendar, Upload } from "lucide-react";

function Assignments() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Assignments
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Track and submit your assignments.
        </p>

        <div className="space-y-6">

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">
                  Cyber Security Assignment
                </h2>

                <div className="flex items-center gap-2 text-slate-500 mt-2">
                  <Calendar size={16} />
                  Due: 15 June 2026
                </div>
              </div>

              <button className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2">
                <Upload size={18} />
                Submit
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">
                  React Project
                </h2>

                <div className="flex items-center gap-2 text-slate-500 mt-2">
                  <Calendar size={16} />
                  Due: 20 June 2026
                </div>
              </div>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                Submitted
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Assignments;