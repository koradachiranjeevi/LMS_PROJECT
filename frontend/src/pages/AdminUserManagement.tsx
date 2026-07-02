import { Search, Users, UserX, Edit, Trash2 } from "lucide-react";

function AdminUserManagement() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            User Management
          </h1>

          <p className="text-slate-500 mt-2">
            Manage students, teachers and platform users.
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-5 mb-8">
          <div className="flex items-center gap-3">
            <Search className="text-slate-400" size={20} />

            <input
              type="text"
              placeholder="Search users..."
              className="w-full outline-none text-slate-700"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <Users className="text-blue-600 mb-3" size={28} />
            <h2 className="text-4xl font-bold">850</h2>
            <p className="text-slate-500">Students</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <Users className="text-emerald-600 mb-3" size={28} />
            <h2 className="text-4xl font-bold">95</h2>
            <p className="text-slate-500">Teachers</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <Users className="text-indigo-600 mb-3" size={28} />
            <h2 className="text-4xl font-bold">12</h2>
            <p className="text-slate-500">Admins</p>
          </div>

        </div>

        {/* Users Table */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-t">
                <td className="p-4">Chiru</td>
                <td className="p-4">chiru@gmail.com</td>
                <td className="p-4">Student</td>

                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Active
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">

                    <button className="bg-blue-500 text-white p-2 rounded-lg">
                      <Edit size={16} />
                    </button>

                    <button className="bg-yellow-500 text-white p-2 rounded-lg">
                      <UserX size={16} />
                    </button>

                    <button className="bg-red-500 text-white p-2 rounded-lg">
                      <Trash2 size={16} />
                    </button>

                  </div>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Abhishek</td>
                <td className="p-4">abhishek@gmail.com</td>
                <td className="p-4">Teacher</td>

                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Active
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">

                    <button className="bg-blue-500 text-white p-2 rounded-lg">
                      <Edit size={16} />
                    </button>

                    <button className="bg-yellow-500 text-white p-2 rounded-lg">
                      <UserX size={16} />
                    </button>

                    <button className="bg-red-500 text-white p-2 rounded-lg">
                      <Trash2 size={16} />
                    </button>

                  </div>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default AdminUserManagement;