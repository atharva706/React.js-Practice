
import { NavLink } from "react-router-dom";

function Sidebar() {
    const navItems = [
        { title: "Dashboard", path: "/", icon: "📊" },
        { title: "All Tasks", path: "/tasks", icon: "📋" },
        { title: "Settings", path: "/settings", icon: "⚙️" }
    ];

    return (
        <aside className="w-64 shrink-0 min-h-screen bg-white border-r border-slate-200 p-5">
            <h2 className="text-2xl font-bold text-indigo-600 mb-10">
                TaskFlow
            </h2>

            <nav className="space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/"}
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-xl p-3 transition ${
                                isActive
                                    ? "bg-indigo-50 text-indigo-700 font-semibold"
                                    : "text-slate-600 hover:bg-slate-100"
                            }`
                        }
                    >
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;
