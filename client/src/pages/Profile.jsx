import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Profile() {
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    window.location.href = "/login"; 
  };

  return (
    <div className="w-full min-h-screen bg-gold/10">
      {/* Header + Navbar */}
      <Header />
      <Navbar onLogout={handleLogout} />

      {/* Main Profile Container */}
      <main className="max-w-md mx-auto text-center mt-24 bg-primary-light p-6 rounded-xl shadow-lg">
        
        <h1 className="text-2xl font-bold text-black mb-6">Profile</h1>

        <div className="bg-primary text-white px-6 py-12 rounded-xl shadow text-sm">
          Welcome to your profile page
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-primary text-white center-center py-2 mt-10">
        © {new Date().getFullYear()} Paisley's Highland Games
      </footer>
    </div>
  );
}
