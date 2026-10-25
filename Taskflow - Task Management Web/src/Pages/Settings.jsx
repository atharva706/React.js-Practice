import { useState } from "react";
import { Link } from "react-router-dom";

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: false,
    publicProfile: true,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const Toggle = ({ label, description, settingKey }) => (
    <div className="flex items-center justify-between gap-4 py-4">
      <div>
        <h3 className="font-medium text-gray-800">{label}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>

      <button
        type="button"
        onClick={() => handleToggle(settingKey)}
        aria-pressed={settings[settingKey]}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          settings[settingKey] ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
            settings[settingKey] ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );

  const handleSave = () => {
    console.log("Settings saved:", settings);
    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="mt-2 mb-8 text-gray-500">
          Manage your account preferences and application settings.
        </p>

        {/* Profile Settings */}
        <section className="mb-6 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Profile Settings
          </h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="mb-6 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Notifications
          </h2>

          <div className="divide-y divide-gray-100">
            <Toggle
              label="Push Notifications"
              description="Receive updates about your activities."
              settingKey="notifications"
            />

            <Toggle
              label="Email Updates"
              description="Receive updates and announcements by email."
              settingKey="emailUpdates"
            />
          </div>
        </section>

        {/* Preferences */}
        <section className="mb-6 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Preferences
          </h2>

          <div className="divide-y divide-gray-100">
            <Toggle
              label="Dark Mode"
              description="Enable your dark appearance preference."
              settingKey="darkMode"
            />

            <Toggle
              label="Public Profile"
              description="Allow other users to view your profile."
              settingKey="publicProfile"
            />
          </div>
        </section>

        {/* Security */}
        <section className="mb-6 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Security
          </h2>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-medium text-gray-800">Password</h3>
              <p className="mt-1 text-sm text-gray-500">
                Keep your account secure with a strong password.
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() =>
                alert("Connect your password reset flow here.")
              }
            >
              Change Password
            </button>
          </div>
        </section>

        {/* Save Changes */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;