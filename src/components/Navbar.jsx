import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-4 py-3 mb-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          Selfix
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-indigo-600">Pricing</Link>
          <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
