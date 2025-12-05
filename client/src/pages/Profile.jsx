import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onLogout }) {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  // Default logout (used if parent does not pass onLogout)
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="w-full bg-gold px-6 py-3 shadow-md flex justify-between items-center">
      <Link to="/" className="text-primary font-bold text-lg">
        Paisley's Highland Games
      </Link>

      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tickets" className="hover:underline">Tickets</Link>
        <Link to="/events" className="hover:underline">Events</Link>
        <Link to="/leaderboard" className="hover:underline">Leaderboard</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>

        {!isLoggedIn ? (
          <Link
            to="/login"
            className="text-black font-semibold hover:underline"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={onLogout || handleLogout}
            className="bg-accent-red text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            Log out
          </button>
        )}
      </div>
    </nav>
  );
}
