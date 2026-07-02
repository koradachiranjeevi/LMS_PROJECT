import {
  User,
  Mail,
  Phone,
  BookOpen,
  Edit,
} from "lucide-react";

function TeacherProfile() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Teacher Profile
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your profile and teaching information.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="w-36 h-36 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white">
              <User size={60} />
            </div>

            <div className="flex-1">

              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Abhishek
              </h2>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <span>abhishek@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-green-600" size={20} />
                  <span>+91 9xxxxxxxxx</span>
                </div>

                <div className="flex items-center gap-3">
                  <BookOpen className="text-indigo-600" size={20} />
                  <span>Computer Science Department</span>
                </div>

              </div>

            </div>

          </div>

          <button className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl flex items-center gap-2">
            <Edit size={18} />
            Edit Profile
          </button>

        </div>

      </div>
    </div>
  );
}

export default TeacherProfile;