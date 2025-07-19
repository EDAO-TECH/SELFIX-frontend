// src/pages/Login.tsx
import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 mb-3"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
