import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { CampDto } from "../dto/RefugeeDto";
import { getAllCamps, isLoggedIn} from "../service/RefugeeService";

export default function CampComponent() {
  const [camps, setCamps] = useState<CampDto[]>([]);
  const [allCamps, setAllCamps] = useState<CampDto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // if (!isLoggedIn()) {
    //   navigate("/login");
    //   return;
    // }
    loadCamps();
  }, [navigate]);

  const loadCamps = () => {
    getAllCamps()
      .then((res) => {
        console.log("API response:", res.data);

        const data: CampDto[] | { camps: CampDto[] } = res.data;
        let campsList: CampDto[] = [];
        if (Array.isArray(data)) {
          campsList = data;
        } else if (data && Array.isArray((data as any).camps)) {
          campsList = (data as { camps: CampDto[] }).camps;
        }
        setCamps(campsList);
        setAllCamps(campsList);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load camps. Please try again later.");
      });
  };

  useEffect(() => {
    if (!searchTerm) {
      setCamps(allCamps);
    } else {
      const filtered = allCamps.filter(
        (camp) =>
          camp.campName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          String(camp.id).includes(searchTerm)
      );
      setCamps(filtered);
    }
  }, [searchTerm, allCamps]);

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  

  return (
    <div className="p-8 mt-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Camp List</h1>
        <p className="text-gray-500 text-sm">
          Manage and search camps within the system.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by camp name or ID"
          className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {
          isLoggedIn() && (
            <>
              <button
                onClick={handleClearSearch}
                className="bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Clear
              </button>
              <Link
                to="/new-camps"
                className="bg-info text-white font-medium px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Add Camp
              </Link>
            </>
          )
        }
      </div>

      {error && <div className="text-red-500 font-medium mb-4">{error}</div>}

      <div className="overflow-x-auto border rounded shadow-sm">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-medium">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Camp Name</th>
              <th className="px-4 py-3 text-left">Manager</th>
              <th className="px-4 py-3 text-left">Capacity</th>
              <th className="px-4 py-3 text-left">City</th>
              <th className="px-4 py-3 text-left">Postal Code</th>
              <th className="px-4 py-3 text-left">Country</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {camps.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  No camps found.
                </td>
              </tr>
            ) : (
              camps.map((camp) => (
                <tr key={camp.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-blue-600 font-medium">{camp.id}</td>
                  <td className="px-4 py-3 text-gray-800">{camp.campName}</td>
                  <td className="px-4 py-3 text-gray-800">{camp.manager}</td>
                  <td className="px-4 py-3 text-gray-800">{camp.capacity}</td>
                  <td className="px-4 py-3 text-gray-800">{camp.city}</td>
                  <td className="px-4 py-3 text-gray-800">{camp.postalCode}</td>
                  <td className="px-4 py-3 text-blue-600">{camp.country}</td>
                  <td className="px-4 py-3">
                    <Link
                      to={`/camp-overview/${camp.id}`}
                      className="text-blue-500 hover:underline font-medium"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
     
    </div>
    
  );
}
