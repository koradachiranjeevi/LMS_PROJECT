import { LifeBuoy, Send } from "lucide-react";

function SupportTickets() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Support Tickets
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Raise issues and track support requests.
        </p>

        {/* Create Ticket */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 mb-8">

          <h2 className="text-2xl font-bold mb-5">
            Create New Ticket
          </h2>

          <input
            type="text"
            placeholder="Ticket Subject"
            className="w-full border border-slate-200 rounded-xl p-3 mb-4"
          />

          <textarea
            rows={5}
            placeholder="Describe your issue..."
            className="w-full border border-slate-200 rounded-xl p-3 mb-4"
          />

          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl flex items-center gap-2">
            <Send size={18} />
            Submit Ticket
          </button>

        </div>

        {/* Ticket History */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">

          <h2 className="text-2xl font-bold mb-5">
            Ticket History
          </h2>

          <div className="space-y-4">

            <div className="border border-slate-200 rounded-2xl p-5 flex justify-between items-center">
              <div>
                <h3 className="font-bold">
                  Unable to access course
                </h3>
                <p className="text-slate-500 text-sm">
                  Ticket ID: #1001
                </p>
              </div>

              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
                Open
              </span>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5 flex justify-between items-center">
              <div>
                <h3 className="font-bold">
                  Certificate download issue
                </h3>
                <p className="text-slate-500 text-sm">
                  Ticket ID: #1002
                </p>
              </div>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                Closed
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default SupportTickets;