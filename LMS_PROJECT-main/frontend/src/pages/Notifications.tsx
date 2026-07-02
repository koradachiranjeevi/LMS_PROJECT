import { Bell, CheckCircle, AlertCircle } from "lucide-react";

function Notifications() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Notifications
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Stay updated with your latest activities.
        </p>

        <div className="space-y-5">

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 flex items-start gap-4">
            <CheckCircle className="text-green-600 mt-1" size={24} />

            <div>
              <h2 className="font-bold text-lg">
                Assignment Submitted
              </h2>

              <p className="text-slate-500 mt-1">
                Your Cyber Security assignment has been submitted successfully.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 flex items-start gap-4">
            <Bell className="text-blue-600 mt-1" size={24} />

            <div>
              <h2 className="font-bold text-lg">
                New Course Available
              </h2>

              <p className="text-slate-500 mt-1">
                AI & ML Advanced course has been added.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 flex items-start gap-4">
            <AlertCircle className="text-orange-500 mt-1" size={24} />

            <div>
              <h2 className="font-bold text-lg">
                Assignment Due Soon
              </h2>

              <p className="text-slate-500 mt-1">
                React Project assignment is due in 2 days.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Notifications;