import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-slate-50">
            <Sidebar />

            <main className="flex-1 min-w-0">
                {/*children*/}
                <Outlet/>  {/*for nested routes*/}
            </main>
        </div>
    );
}

export default MainLayout;