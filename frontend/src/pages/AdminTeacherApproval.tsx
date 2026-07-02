import { CheckCircle, XCircle, Shield, UserX } from "lucide-react";

function AdminTeacherApproval() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Teacher Approval & Role Management
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Manage teacher approvals, user roles and account access.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <CheckCircle className="text-green-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">24</h2>
            <p className="text-slate-500">Approved Teachers</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <XCircle className="text-red-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">5</h2>
            <p className="text-slate-500">Pending Requests</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <Shield className="text-indigo-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">3</h2>
            <p className="text-slate-500">Roles Available</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <UserX className="text-orange-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">2</h2>
            <p className="text-slate-500">Suspended Users</p>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-t">
                <td className="p-4">prakash</td>
                <td className="p-4">prakash@gmail.com</td>
                <td className="p-4">Teacher</td>
                <td className="p-4 flex gap-2">
                  <button className="bg-green-600 text-white px-3 py-2 rounded-lg">
                    Approve
                  </button>
                  <button className="bg-red-600 text-white px-3 py-2 rounded-lg">
                    Reject
                  </button>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4">abhishek</td>
                <td className="p-4">abhishek@gmail.com</td>
                <td className="p-4">Teacher</td>
                <td className="p-4 flex gap-2">
                  <button className="bg-orange-600 text-white px-3 py-2 rounded-lg">
                    Suspend
                  </button>
                  <button className="bg-slate-800 text-white px-3 py-2 rounded-lg">
                    Assign Role
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

export default AdminTeacherApproval;