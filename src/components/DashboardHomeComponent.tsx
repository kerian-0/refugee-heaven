import {  useNavigate } from 'react-router-dom';
import { getLoggedInUserName, isLoggedIn } from '../service/RefugeeService';

export default function DashboardHomeComponent() {
     const navigator=useNavigate();
     const logoutHandler = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigator("/login");
    window.location.reload();
  };
  return (
   <>
    {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Menu Bar */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between h-16 px-6">
          <div className="flex items-center">
            <button className="md:hidden mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <h2 className="text-lg font-medium">Overview</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-1 rounded-full hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
            
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="flex items-center space-x-2 cursor-pointer">
                <div className="avatar placeholder">
                  <div className="bg-primary text-white rounded-full w-8 h-8">
                    <span>JD</span>
                  </div>
                </div>
                {
                  isLoggedIn() && (
                    <span className="hidden md:inline">{getLoggedInUserName()?.toLocaleUpperCase()}</span>
                  )
                }
              </div>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-2">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a onClick={logoutHandler}>Logout</a></li>
              </ul>
              </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards */}
            <div className="card bg-white shadow">
              <div className="card-body">
                <h3 className="card-title">Total Refugees</h3>
                <p className="text-3xl font-bold">1,234</p>
                <p className="text-sm text-success">↑ 12% from last month</p>
              </div>
            </div>
            
            <div className="card bg-white shadow">
              <div className="card-body">
                <h3 className="card-title">Camps</h3>
                <p className="text-3xl font-bold">25</p>
                <p className="text-sm text-success">↑ 8% from last month</p>
              </div>
            </div>
            
            <div className="card bg-white shadow">
              <div className="card-body">
                <h3 className="card-title">Active Projects</h3>
                <p className="text-3xl font-bold">24</p>
                <p className="text-sm text-error">↓ 2 from last month</p>
              </div>
            </div>
          </div>
          
          {/* Recent Activity Section */}
          <div className="mt-8 card bg-white shadow">
            <div className="card-body">
              <h3 className="card-title">Recent Activity</h3>
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>User</th>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Login</td>
                      <td>john@example.com</td>
                      <td>2 mins ago</td>
                      <td><span className="badge badge-success">Success</span></td>
                    </tr>
                    <tr>
                      <td>Purchase</td>
                      <td>sarah@example.com</td>
                      <td>15 mins ago</td>
                      <td><span className="badge badge-success">Success</span></td>
                    </tr>
                    <tr>
                      <td>Failed Login</td>
                      <td>unknown@example.com</td>
                      <td>1 hour ago</td>
                      <td><span className="badge badge-error">Failed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>

       
      </div>
      
     
   </>
  )
}
