import { Upload, FileSpreadsheet, FileText } from "lucide-react";

function AdminBulkUpload() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Bulk Student Upload
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Upload students using Excel or PDF files.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <FileSpreadsheet
              className="text-green-600 mb-4"
              size={40}
            />

            <h2 className="text-2xl font-bold">
              Excel Upload
            </h2>

            <p className="text-slate-500 mt-3">
              Upload .xlsx files containing student data.
            </p>

            <input
              type="file"
              className="mt-6 w-full"
            />
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <FileText
              className="text-red-600 mb-4"
              size={40}
            />

            <h2 className="text-2xl font-bold">
              PDF Upload
            </h2>

            <p className="text-slate-500 mt-3">
              Upload PDF files for bulk processing.
            </p>

            <input
              type="file"
              className="mt-6 w-full"
            />
          </div>

        </div>

        <button className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl flex items-center gap-2">
          <Upload size={18} />
          Upload Students
        </button>

      </div>
    </div>
  );
}

export default AdminBulkUpload;