import { MessageSquare, Upload, Send } from "lucide-react";

function TeacherInteraction() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Student Interaction
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Reply to doubts, share resources and communicate with students.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <MessageSquare className="text-blue-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">48</h2>
            <p className="text-slate-500">Doubts Raised</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <Send className="text-green-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">39</h2>
            <p className="text-slate-500">Replies Sent</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <Upload className="text-indigo-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">15</h2>
            <p className="text-slate-500">Resources Shared</p>
          </div>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 mb-8">

          <h2 className="text-2xl font-bold mb-4">
            Reply to Student Doubt
          </h2>

          <input
            type="text"
            placeholder="Student Question"
            className="w-full border border-slate-200 rounded-xl p-3 mb-4"
          />

          <textarea
            rows={4}
            placeholder="Write your response..."
            className="w-full border border-slate-200 rounded-xl p-3 mb-4"
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Send Reply
          </button>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">

          <h2 className="text-2xl font-bold mb-4">
            Share Resource
          </h2>

          <input
            type="text"
            placeholder="Resource Title"
            className="w-full border border-slate-200 rounded-xl p-3 mb-4"
          />

          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl">
            Upload Resource
          </button>

        </div>

      </div>
    </div>
  );
}

export default TeacherInteraction;