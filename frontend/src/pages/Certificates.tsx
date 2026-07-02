import { Award, Download, Calendar } from "lucide-react";

function Certificates() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Certificates
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          View and download your earned certificates.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <Award className="text-yellow-500 mb-4" size={40} />

            <h2 className="text-xl font-bold">
              Web Development
            </h2>

            <div className="flex items-center gap-2 text-slate-500 mt-3">
              <Calendar size={16} />
              Issued: 10 May 2026
            </div>

            <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2">
              <Download size={18} />
              Download
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <Award className="text-yellow-500 mb-4" size={40} />

            <h2 className="text-xl font-bold">
              Cyber Security
            </h2>

            <div className="flex items-center gap-2 text-slate-500 mt-3">
              <Calendar size={16} />
              Issued: 02 June 2026
            </div>

            <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2">
              <Download size={18} />
              Download
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Certificates;