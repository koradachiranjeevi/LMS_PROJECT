import { Settings, Bell, Shield, Moon } from "lucide-react";

function AdminSettings() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Settings
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Configure platform preferences.
        </p>

        <div className="space-y-6">

          <div className="bg-white rounded-3xl p-6 shadow-lg flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Bell className="text-blue-600" />
              <span>Email Notifications</span>
            </div>

            <input type="checkbox" />
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Moon className="text-indigo-600" />
              <span>Dark Mode</span>
            </div>

            <input type="checkbox" />
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Shield className="text-green-600" />
              <span>Security Settings</span>
            </div>

            <button className="bg-slate-100 px-4 py-2 rounded-xl">
              Configure
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Settings className="text-orange-500" />
              <span>Platform Preferences</span>
            </div>

            <button className="bg-slate-100 px-4 py-2 rounded-xl">
              Edit
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminSettings;