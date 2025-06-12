import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, setLoggedInUserName, setToken } from "../service/RefugeeService";

export default function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();

    login(username, password)
      .then((res) => {
        console.log("User logged in successfully", res.data);
        const token = "Basic " + btoa(`${username}:${password}`);
        setToken(token);
        setLoggedInUserName(username);
        navigate("/home");
      })
      .catch((err) => console.log("Error logging in user: " + err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Login</h1>
        <p className="text-gray-600 mb-6">
          Please enter your username and password to login.
        </p>

        <form onSubmit={loginHandler}>
          <div className="space-y-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter username"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
