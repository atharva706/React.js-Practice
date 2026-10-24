
function Sidebar() {
    const navItems = [
        { id: 1, title: "Dashboard", icon: "📊", active: true },
        { id: 2, title: "All Tasks", icon: "📋", active: false },
        { id: 3, title: "Upcoming", icon: "📅", active: false },
    ];

    const settingsItems = [
        { id: 4, title: "Settings", icon: "⚙️" },
    ];

    return (
        <aside className="w-64 shrink-0 min-h-screen bg-white border-r border-slate-200 p-5 flex flex-col">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-10">
                <div className="bg-indigo-600 text-white p-2 rounded-xl text-xl">
                    ✓
                </div>

                <div>
                    <h2 className="text-xl font-bold text-slate-900">
                        TaskFlow
                    </h2>
                    <p className="text-xs text-slate-500">
                        Personal workspace
                    </p>
                </div>
            </div>

            {/* Main navigation */}
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Workspace
            </p>

            <nav className="space-y-2">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
                        ${
                            item.active
                                ? "bg-indigo-50 text-indigo-700"
                                : "text-slate-600 hover:bg-slate-100"
                        }`}
                    >
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                    </button>
                ))}
            </nav>

            {/* Settings */}
            <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Preferences
                </p>

                <nav className="space-y-2">
                    {settingsItems.map((item) => (
                        <button
                            key={item.id}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition"
                        >
                            <span>{item.icon}</span>
                            <span>{item.title}</span>
                        </button>
                    ))}
                </nav>
            </div>

            {/* Profile at bottom */}
            <div className="mt-auto pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                        T
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-slate-800">
                            TaskFlow User
                        </p>
                        <p className="text-xs text-slate-500">
                            Personal account
                        </p>
                    </div>
                </div>
            </div>

        </aside>
    );
}

export default Sidebar;
