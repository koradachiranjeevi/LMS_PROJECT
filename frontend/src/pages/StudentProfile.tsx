import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Edit,
  Lock,
} from "lucide-react";

function StudentProfile() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Student Profile
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your personal information and account settings.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Profile Picture */}
            <div className="w-36 h-36 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">
              <User size={60} />
            </div>

            {/* Profile Details */}
            <div className="flex-1">

              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Chiranjeevi
              </h2>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-slate-700">
                    chiru@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-green-600" size={20} />
                  <span className="text-slate-700">
                    +91 7413454377
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <GraduationCap
                    className="text-indigo-600"
                    size={20}
                  />
                  <span className="text-slate-700">
                    B.Tech Computer Science
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold">
              <Edit size={18} />
              Edit Profile
            </button>

            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold">
              <Lock size={18} />
              Change Password
            </button>

          </div>

        </div>

        {/* Learning Summary */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <h3 className="text-3xl font-bold text-blue-600">
              5
            </h3>
            <p className="text-slate-500 mt-2">
              Enrolled Courses
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <h3 className="text-3xl font-bold text-green-600">
              92%
            </h3>
            <p className="text-slate-500 mt-2">
              Attendance
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <h3 className="text-3xl font-bold text-indigo-600">
              2
            </h3>
            <p className="text-slate-500 mt-2">
              Certificates Earned
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default StudentProfile;