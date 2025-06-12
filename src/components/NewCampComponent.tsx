import { useEffect, useState } from "react";
import { createCamp } from "../service/RefugeeService";
import { useNavigate } from "react-router-dom";
/*

 String campName;
     Long capacity;
     String manager;
     String city;
     String state;
     String country;
     String postalCode;

*/

export default function NewCampComponent() {
  const navigator=useNavigate();
  const [campName, setCampName] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [manager, setManager] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const campDto = {
    campName,
    capacity,
    manager,
    city,
    state,
    country,
    postalCode,
  };
  

  const createHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCamp(campDto)
      .then((res) => {
        console.log(res.data);
        navigator("/home");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="isolate w-full bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            New Camp
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">Camp Infomation</p>
        </div>
        <form
          onSubmit={createHandler}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Camp Name
              </label>
              <div className="mt-2.5">
                <input
                  value={campName}
                  onChange={(e) => setCampName(e.target.value)}
                  placeholder="Enter Camp Name"
                  type="text"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="capacity"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Capacity
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  placeholder="Enter Capacity"
                  value={capacity}
                  onChange={(e) => setCapacity(Number(e.target.value))}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="manager"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Manager
              </label>
              <div className="mt-2.5">
                <input
                 
                  placeholder="Enter Manager"
                
                  type="text"
                  value={manager}
                  onChange={(e)=>setManager(e.target.value)}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                City
              </label>
              <div className="mt-2.5">
                <input
                  placeholder="Enter City"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                State
              </label>
              <div className="mt-2.5">
                <input
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Enter State"
                  type="text"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Country
              </label>
              <div className="mt-2.5">
                <input
                  placeholder="Enter Country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  autoComplete="country"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="postalCode"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Postal Code
              </label>
              <div className="mt-2.5">
                <input
                  placeholder="Enter PostalCode"
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save Refugee
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
