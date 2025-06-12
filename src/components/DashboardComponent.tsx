import {
  
  FiFileText,
  FiHome,
  FiLogOut,
  FiSettings,
} from "react-icons/fi";
import { PiFinnTheHuman } from "react-icons/pi";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function DashboardComponent() {
  const navigator = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigator("/login");
    window.location.reload();
  };
  return (
    <div className="flex h-screen mt-20 bg-gray-50">
      {/* Left Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <h1 className="text-xl font-bold text-primary">Dashboard</h1>
        </div>

        <div className="flex flex-col flex-grow p-4 overflow-auto">
          <nav className="flex-1 space-y-2">
            <Link
              to="/dashboard"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-primary text-white"
            >
              <FiHome  />
              Dashboard
            </Link>
            <Link
              to="/dashboard/new-camps"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <FiHome  />
              Create Camp
            </Link>
            <Link
              to="/dashboard/new-ref"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <PiFinnTheHuman  />
             New Refugee
            </Link>
            <Link
              to="#"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <FiFileText  />
              Reports
            </Link>
            <Link
              to="#"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <FiSettings  />
              Settings
            </Link>
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-200">
            <Link
              to="#"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <FiLogOut  />
              Logout
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
