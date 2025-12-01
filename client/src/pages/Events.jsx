import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Event() {
  return (
    <div className="w-full min-h-screen bg-primary/10">
      {/* Top banner */}
      <Header />
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-accent text-center">
          Highland Games Events
        </h1>

        {/* EVENT INTRO */}
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <p className="text-gray-700 text-lg leading-relaxed">
            Explore all competitions happening at the Paisley Highland Games.
            Athletes of all levels are welcome to participate.  
            Each event includes classic Scottish athletic traditions and
            friendly competition for spectators to enjoy.
          </p>
        </section>

        {/* EVENT GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* EVENT BOX 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-secondary">Caber Toss</h2>
            <p className="text-gray-700 mt-2">
              Competitors lift and toss a large tapered log, aiming to flip it
              perfectly end-over-end. A true test of technique and power.
            </p>
            <p className="mt-3 font-semibold">Time: 11:30 AM</p>

            <div className="mt-4 flex gap-4">
              <a
                href="/signup"
                className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Sign Up
              </a>
            </div>
          </div>

          {/* EVENT BOX 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-secondary">Hammer Throw</h2>
            <p className="text-gray-700 mt-2">
              Athletes spin and throw a heavy hammer as far as possible using
              strength, balance, and perfect footwork.
            </p>
            <p className="mt-3 font-semibold">Time: 12:15 PM</p>

            <div className="mt-4 flex gap-4">
              <a
                href="/signup"
                className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Sign Up
              </a>
            </div>
          </div>

          {/* EVENT BOX 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-secondary">Stone Put</h2>
            <p className="text-gray-700 mt-2">
              The original shot-put event. Contestants throw a heavy stone with
              maximum distance and perfect control.
            </p>
            <p className="mt-3 font-semibold">Time: 1:00 PM</p>

            <div className="mt-4 flex gap-4">
              <a
                href="/signup"
                className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Sign Up
              </a>
            </div>
          </div>

          {/* EVENT BOX 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-secondary">Tug of War</h2>
            <p className="text-gray-700 mt-2">
              Teams battle in this classic strength showdown. Requires teamwork,
              strategy, and grit.
            </p>
            <p className="mt-3 font-semibold">Time: 2:30 PM</p>

            <div className="mt-4 flex gap-4">
              <a
                href="/signup"
                className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Sign Up
              </a>
            </div>
          </div>

        </section>

        {/* CALL TO ACTION */}
        <div className="text-center mt-6">
          <a
            href="/signup"
            className="bg-secondary text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-orange-800"
          >
            Register for Multiple Events
          </a>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="w-full bg-secondary text-white text-center py-4 mt-10">
        © {new Date().getFullYear()} Paisley's Highland Games
      </footer>
    </div>
  );
}
