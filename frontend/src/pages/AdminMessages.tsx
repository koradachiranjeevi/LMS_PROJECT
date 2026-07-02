import { Send, Users, UserCheck, MessageSquare } from "lucide-react";

function AdminMessages() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Messages & Announcements
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Communicate with students and teachers
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <Users className="text-blue-600 mb-3" size={30} />
            <h2 className="text-xl font-bold">All Students</h2>
            <p className="text-slate-500 mt-2">
              Send messages to all students.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <UserCheck className="text-emerald-600 mb-3" size={30} />
            <h2 className="text-xl font-bold">All Teachers</h2>
            <p className="text-slate-500 mt-2">
              Send messages to all teachers.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <MessageSquare className="text-indigo-600 mb-3" size={30} />
            <h2 className="text-xl font-bold">Announcements</h2>
            <p className="text-slate-500 mt-2">
              Publish platform-wide announcements.
            </p>
          </div>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Send New Message
          </h2>

          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-slate-200 rounded-xl p-3 mb-4"
          />

          <textarea
            rows={6}
            placeholder="Write your message..."
            className="w-full border border-slate-200 rounded-xl p-3 mb-4"
          />

          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl flex items-center gap-2">
            <Send size={18} />
            Send Message
          </button>
        </div>

      </div>
    </div>
  );
}

export default AdminMessages;