import { Search, UserCheck, UserX, Plus } from "lucide-react";

function AdminTeachers() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Teacher Management
            </h1>

            <p className="text-slate-500 mt-2">
              Manage teachers and approval requests.
            </p>
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl font-semibold flex items-center gap-2">
            <Plus size={18} />
            Add Teacher
          </button>
        </div>

        {/* Search */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-5 mb-6">
          <div className="flex items-center gap-3">
            <Search className="text-slate-400" size={20} />

            <input
              type="text"
              placeholder="Search teacher..."
              className="w-full outline-none text-slate-700"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Domain</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-4">Prabhas</td>
                <td className="p-4">prabhas@gmail.com</td>
                <td className="p-4">Cyber Security</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Pending
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="bg-green-500 text-white px-3 py-2 rounded-lg flex items-center gap-1">
                      <UserCheck size={16} />
                      Approve
                    </button>

                    <button className="bg-red-500 text-white px-3 py-2 rounded-lg flex items-center gap-1">
                      <UserX size={16} />
                      Reject
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4">srinivas</td>
                <td className="p-4">srinivas@gmail.com</td>
                <td className="p-4">Web Development</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Approved
                  </span>
                </td>

                <td className="p-4">
                  <button className="bg-slate-200 px-3 py-2 rounded-lg">
                    View
                  </button>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Abhishek</td>
                <td className="p-4">abhishek@gmail.com</td>
                <td className="p-4">AI & ML</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Approved
                  </span>
                </td>

                <td className="p-4">
                  <button className="bg-slate-200 px-3 py-2 rounded-lg">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default AdminTeachers;