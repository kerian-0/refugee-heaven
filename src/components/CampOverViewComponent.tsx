import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../service/RefugeeService";
import type { CampDto } from "../dto/RefugeeDto";

const CampOverview = () => {
  const { id } = useParams();
  const [camps, setCamps] = useState<CampDto>();


  useEffect(() => {
    if (!id) return;

    const numericId = Number(id);
    if (isNaN(numericId)) {
      console.log("Invalid camp id:", id);
      return;
    }

    getById(numericId)
      .then((res) => {
        setCamps(res.data);
        console.log("Camp data:", res.data);
      })
      .catch((error) => {
        console.error("Error fetching camp data:", error);
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Camp Overview</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Detailed information about the selected refugee camp.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Camp Details Card */}
        {camps && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
              <h2 className="text-xl font-bold text-white">Camp Details</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex border-b pb-2">
                    <span className="font-medium text-gray-700 w-40">Camp Name</span>
                    <span className="text-gray-900 font-semibold">{camps.campName}</span>
                  </div>
                  <div className="flex border-b pb-2">
                    <span className="font-medium text-gray-700 w-40">Capacity</span>
                    <span className="text-gray-900">{camps.capacity}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex border-b pb-2">
                    <span className="font-medium text-gray-700 w-40">City</span>
                    <span className="text-gray-900">{camps.city}</span>
                  </div>
                  <div className="flex border-b pb-2">
                    <span className="font-medium text-gray-700 w-40">Location</span>
                    <span className="text-gray-900">{camps.country || "N/A"}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium text-gray-700 mb-3">Available Services</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Medical</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Food</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">Shelter</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Education</span>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">Water</span>
                  <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">Security</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Camp Management Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
            <h2 className="text-xl font-bold text-white">Camp Management</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { name: "Sarah Johnson", role: "Camp Director", email: "sarah.johnson@email.com" },
                    { name: "David Lee", role: "Medical Coordinator", email: "david.lee@email.com" },
                    { name: "Maria Rodriguez", role: "Shelter Manager", email: "maria.rodriguez@email.com" },
                    { name: "James Wilson", role: "Education Coordinator", email: "james.wilson@email.com" },
                  ].map((staff, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                          <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{staff.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{staff.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-gray-500">Showing 4 key staff members</div>
              <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                <span>View All Staff</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
            <div className="text-3xl font-bold mb-2">4,200</div>
            <div className="text-blue-100">Current Refugees</div>
            <div className="flex items-center mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">84% capacity</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
            <div className="text-3xl font-bold mb-2">12</div>
            <div className="text-green-100">Active Services</div>
            <div className="flex items-center mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Fully operational</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white shadow-lg">
            <div className="text-3xl font-bold mb-2">32</div>
            <div className="text-amber-100">Staff Members</div>
            <div className="flex items-center mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-sm">4 teams</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampOverview;
