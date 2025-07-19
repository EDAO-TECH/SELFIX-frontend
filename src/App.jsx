import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.tsx"; // Keep only .tsx
import Pricing from "./pages/Pricing.jsx";
import Success from "./pages/Success.tsx"; // Keep only .tsx
import Cancel from "./pages/Cancel.tsx";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <div className="p-6 max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
