import {
  Users,
  BookOpen,
  Activity,
  TrendingUp,
} from "lucide-react";

function AdminAnalytics() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Analytics Dashboard
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Platform performance overview
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <Users className="text-blue-600 mb-3" />
            <h2 className="text-4xl font-bold">1335</h2>
            <p className="text-slate-500">Total Users</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <Activity className="text-green-600 mb-3" />
            <h2 className="text-4xl font-bold">540</h2>
            <p className="text-slate-500">Active Users</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <BookOpen className="text-indigo-600 mb-3" />
            <h2 className="text-4xl font-bold">120</h2>
            <p className="text-slate-500">Courses</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <TrendingUp className="text-orange-500 mb-3" />
            <h2 className="text-4xl font-bold">89%</h2>
            <p className="text-slate-500">Engagement</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminAnalytics;