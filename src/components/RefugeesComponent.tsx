
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { RefugeeDto } from "../dto/RefugeeDto";
import { getAllRefugees, isLoggedIn} from "../service/RefugeeService";

export default function RefugeesComponent() {
  const [refugees, setRefugees] = useState<RefugeeDto[]>([]);
  const [allRefugees, setAllRefugees] = useState<RefugeeDto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // if (!isLoggedIn()) {
    //   navigate("/login");
    //   return;
    // }
    loadRefugees();
  }, [navigate]);

  const loadRefugees = () => {
    getAllRefugees()
      .then((res) => {
        console.log("API response:"+ res.data);

        const data = res.data as RefugeeDto[] | { refugees: RefugeeDto[] };
        let refList: RefugeeDto[] = [];
        if (Array.isArray(data)) {
          refList = data;
        } else if (data && Array.isArray((data as { refugees?: RefugeeDto[] }).refugees)) {
          refList = (data as { refugees: RefugeeDto[] }).refugees;
        }
        setRefugees(refList);
        setAllRefugees(refList);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load camps. Please try again later.");
      });
  };

  useEffect(() => {
    if (!searchTerm) {
      setRefugees(allRefugees);
    } else {
      const filtered = allRefugees.filter(
        (ref) =>
          ref.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          String(ref.id).includes(searchTerm)
      );
      setRefugees(filtered);
    }
  }, [searchTerm, allRefugees]);

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="p-8 mt-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Refugee List</h1>
        <p className="text-gray-500 text-sm">
          Manage and search Refugee within the system.
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
               <th className="px-4 py-3 text-left">Name</th>
               <th className="px-4 py-3 text-left">Status</th>
               <th className="px-4 py-3 text-left">Country of Origin</th>
               <th className="px-4 py-3 text-left">Registration Date</th>
               <th className="px-4 py-3 text-left">Camp Id</th>
               <th className="px-4 py-3 text-left">Actions</th>
             </tr>
           </thead>
          <tbody className="divide-y divide-gray-200">
            {refugees.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-500">No refugees found.</td>
              </tr>
            ) : (
              refugees.map((ref) => (
                <tr key={ref.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-blue-600">
                    <Link to={`/refugee/${ref.id}`}>{ref.id}</Link>
                  </td>
                  <td className="px-4 py-3">{ref.username}</td>
                  <td className="px-4 py-3">{ref.status}</td>
                  <td className="px-4 py-3">{ref.nationality}</td>
                  <td className="px-4 py-3">{ref.arrivalDate}</td>
                  <td className="px-4 py-3">{ref.campId}</td>
                  <td className="px-4 py-3">
                    <Link
                      to={`/ref-overview/${ref.id}`}
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
