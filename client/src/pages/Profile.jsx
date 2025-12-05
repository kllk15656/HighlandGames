import React from "react";
import Navbar from "../components/Navbar";

export default function Profile() {
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    window.location.href = "/login"; // redirect
  };

  return (
    <div className="w-full min-h-screen bg-gold/10">

      {/* Small Navbar only */}
      <Navbar onLogout={handleLogout} />

      {/* Profile Card */}
      <main className="max-w-md mx-auto mt-20 p-6 bg-primary-light rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-black mb-6">Profile</h1>

        <div className="bg-primary text-white p-10 rounded-xl shadow">
          Welcome to your profile page
        </div>
      </main>


      {/* Footer */}
       <footer className="w-full bg-primary-light text-white text-center  shadow-md fixed bottom-0 left-0 z-50">
        © {new Date().getFullYear()} Paisley's Highland Games
      </footer>
    </div>
  );
}
