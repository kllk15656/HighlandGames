import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function EventInfo() {
  return (
    <div className="w-full min-h-screen bg-primary/10">
      {/* Header + Navigation */}
      <Header />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-accent text-center">
          Event Information
        </h1>

        {/* EVENT DESCRIPTION */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-secondary">Overview</h2>
          <p className="text-gray-700 mt-2 leading-relaxed">
            The Paisley Highland Games brings together traditional Scottish
            athletics, music, food, and culture for a full family day out.
            Visitors can enjoy world-famous competitive events and fun
            attractions suitable for all ages.
          </p>
        </section>

        {/* EVENTS LIST */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-secondary">Main Competitions</h2>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
            <li>Caber Toss — Strength and balance test</li>
            <li>Hammer Throw — Traditional heavy athletics</li>
            <li>Stone Put — The original shot put</li>
            <li>Tug of War — Team battle of power</li>
            <li>Highland Dancing — Classic Scottish dance competition</li>
            <li>Junior Games — Kids mini-events and races</li>
          </ul>
        </section>

        {/* TIMES & LOCATION */}
        <section className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Times */}
          <div>
            <h2 className="text-2xl font-bold text-secondary">Schedule</h2>
            <ul className="mt-3 text-gray-700 space-y-2">
              <li><b>Gates Open:</b> 10:00 AM</li>
              <li><b>Main Events:</b> 11:00 AM – 4:00 PM</li>
              <li><b>Vendors & Food:</b> All day</li>
              <li><b>Closing Ceremony:</b> 4:15 PM</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-2xl font-bold text-secondary">Location</h2>
            <p className="mt-3 text-gray-700">
              Paisley Highland Games  
              <br />
              High Street, Paisley PA1 2BE  
              <br />
              21st July 2026
            </p>
          </div>
        </section>

        {/* CHECKLIST / WHAT TO BRING */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-secondary">What to Bring</h2>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
            <li>Comfortable outdoor footwear</li>
            <li>Weather-appropriate clothing</li>
            <li>Camera for photos</li>
            <li>Cash/card for food stalls</li>
            <li>Picnic blanket or chairs (optional)</li>
          </ul>
        </section>

        {/* CALL TO ACTION */}
        <section className="text-center mt-6">
          <a
            href="/signup"
            className="bg-accent text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-accent/80"
          >
            Register to Compete
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-secondary text-white text-center py-4 mt-10">
        © {new Date().getFullYear()} Paisley's Highland Games
      </footer>
    </div>
  );
}
