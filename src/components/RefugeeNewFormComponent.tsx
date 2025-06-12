import { ChevronDownIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { createRefugee } from "../service/RefugeeService";
import { useNavigate } from "react-router-dom";

export default function RefugeeNewFormComponent() {
  const navigator=useNavigate();
  // State initialization
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    nationality: "",
    bgInfo: "",
    status: "",
    arrivalDate: "",
    campId: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "campId" ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createRefugee(formData)
      .then(res => {
        console.log(res.data);
        navigator("/home");
      })
      .catch(err => console.error(err));

  };

  return (
    <div className="isolate bg-white w-full px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          New Refugee Profile
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Personal Information
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-900">
              Full Name *
            </label>
            <div className="mt-2">
              <input
                required
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter full name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="block text-sm font-semibold text-gray-900">
              Age *
            </label>
            <div className="mt-2">
              <input
                required
                name="age"
                type="number"
                min="0"
                max="120"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email Address
            </label>
            <div className="mt-2">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
              Phone Number *
            </label>
            <div className="mt-2">
              <input
                required
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-900">
              Date of Birth *
            </label>
            <div className="mt-2">
              <input
                required
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-semibold text-gray-900">
              Gender *
            </label>
            <div className="mt-2 relative">
              <select
                required
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              >
                <option value="">Select gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Nationality */}
          <div>
            <label htmlFor="nationality" className="block text-sm font-semibold text-gray-900">
              Nationality *
            </label>
            <div className="mt-2">
              <input
                required
                name="nationality"
                type="text"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Enter nationality"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          {/* Camp ID */}
          <div>
            <label htmlFor="campId" className="block text-sm font-semibold text-gray-900">
              Camp ID *
            </label>
            <div className="mt-2">
              <input
                required
                name="campId"
                type="number"
                min="1"
                value={formData.campId}
                onChange={handleChange}
                placeholder="Enter camp ID"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          {/* Address */}
          <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-semibold text-gray-900">
              Address
            </label>
            <div className="mt-2">
              <input
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter current address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          {/* Background Info */}
          <div className="sm:col-span-2">
            <label htmlFor="bgInfo" className="block text-sm font-semibold text-gray-900">
              Background Information
            </label>
            <div className="mt-2">
              <input
                name="bgInfo"
                type="text"
                value={formData.bgInfo}
                onChange={handleChange}
                placeholder="Medical conditions, special needs, etc."
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-semibold text-gray-900">
              Current Status *
            </label>
            <div className="mt-2 relative">
              <select
                required
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              >
                <option value="">Select status</option>
                <option value="ACTIVE">Active</option>
                <option value="RELOCATED">Relocated</option>
                <option value="REPATRIATED">Repatriated</option>
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Arrival Date */}
          <div>
            <label htmlFor="arrivalDate" className="block text-sm font-semibold text-gray-900">
              Arrival Date *
            </label>
            <div className="mt-2">
              <input
                required
                name="arrivalDate"
                type="date"
                value={formData.arrivalDate}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Refugee Profile
          </button>
        </div>
      </form>
    </div>
  );
}