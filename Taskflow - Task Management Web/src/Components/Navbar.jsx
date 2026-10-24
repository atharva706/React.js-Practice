import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/taskflowLogo.png';

function Navbar(props) {
    return (
        <nav className="w-full bg-white shadow-md border-b border-gray-200 px-6 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="TaskFlow Logo"
                        className="w-10 h-10 object-contain"
                    />
                    <h2 className="text-2xl font-bold text-indigo-600 tracking-tight">
                        TaskFlow
                    </h2>
                </div>

                <div className="flex items-center gap-8">
                    <NavLink
                        to="/"
                        className="text-gray-600 font-medium hover:text-indigo-600 transition-colors duration-200"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className="text-gray-600 font-medium hover:text-indigo-600 transition-colors duration-200"
                    >
                        About Us
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className="text-gray-600 font-medium hover:text-indigo-600 transition-colors duration-200"
                    >
                        Contact
                    </NavLink>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;