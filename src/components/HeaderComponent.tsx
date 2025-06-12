import { PiFinnTheHumanLight } from "react-icons/pi";
import { SiRescuetime } from "react-icons/si";
import { Link } from "react-router-dom";
import {
  getLoggedInUserName,
  isLoggedIn,
  logOut,
} from "../service/RefugeeService";
import { useNavigate } from "react-router-dom"; // Added for proper navigation

export default function HeaderComponent() {
  const navigate = useNavigate();
  const isLoggedInUser = isLoggedIn();

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    logOut();
    navigate("/login"); // Use navigate instead of Link for programmatic redirection
  };

  return (
    <div className="navbar bg-transparent shadow-sm text-info font-bold fixed top-0 left-0 w-full z-50">
      <div className="navbar-start flex font-bold">
        <SiRescuetime size={30} />
        <span> Refugee Connect</span>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-info hover:text-white hover:border-0 text-info">
            <Link to="/home">Home</Link>
          </li>
          <li className="hover:bg-info hover:text-white hover:border-0 text-info">
            <Link to="/service">Service</Link>
          </li>

          <li className="hover:bg-info hover:text-white hover:border-0 text-info">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:bg-info hover:border-0 hover:text-white text-info">
            <Link to="/about">About</Link>
          </li>

          <li className="hover:bg-info hover:border-0 hover:text-white text-info">
            <Link to="/refugees">Refugees</Link>
          </li>

          <li className="hover:bg-info hover:border-0 hover:text-white text-info">
            <Link to="/camps">Camps</Link>
          </li>

          {isLoggedInUser && (
            <li className="hover:bg-info hover:border-0 hover:text-white text-info">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}

          {isLoggedInUser && (
            <li className="hover:bg-info hover:border-0 hover:text-white text-info">
              <a href="/login" onClick={handleLogout}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        {!isLoggedInUser && (
          <Link
            to="/login"
            className="bg-transparent border-none cursor-pointer px-1 py-1 flex hover:bg-info hover:text-white hover:border-0 text-info"
          >
            <span>Login</span>
            <PiFinnTheHumanLight size={30} />
          </Link>
        )}
        {isLoggedInUser && (
          <div className="flex items-center gap-2">
            <span>Welcome!{getLoggedInUserName()}</span>
            <div className="w-10 h-10 rounded-full bg-info flex text-white items-center justify-center">
              <PiFinnTheHumanLight size={24} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
