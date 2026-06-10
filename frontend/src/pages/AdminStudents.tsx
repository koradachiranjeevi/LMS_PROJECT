function AdminStudents() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">
          Student Management
        </h1>

        <p className="text-slate-500 mb-8">
          View and manage all registered students.
        </p>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Course</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-4">Sourabh</td>
                <td className="p-4">sourabh@gmail.com</td>
                <td className="p-4">Cyber Security</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Abhiteesh</td>
                <td className="p-4">abhi@gmail.com</td>
                <td className="p-4">Web Development</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4">chiranjeevi</td>
                <td className="p-4">chiru@gmail.com</td>
                <td className="p-4">AI & ML</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminStudents;