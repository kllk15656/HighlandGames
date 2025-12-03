import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Tickets() {
  return (
    <div className="w-full min-h-screen ">
      {/* Header + Navbar */}
      <Header />
      <Navbar />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-10 bg-gold/5">
        <h1 className="text-3xl font-bold text-accent text-center mb-10">
          Tickets
        </h1>

        {/* Ticket Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Ticket 1 */}
          <div className="bg-primary rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-gold">Adult Ticket</h2>
            <p className="text-cream mt-2 ">Ages 16+</p>
            <p className="text-3xl font-bold  mt-4 text-gold">£12</p>

            <button className="mt-6 px-5 py-2 rounded-lg bg-accent text-white hover:bg-accent-red bg-gold">
              Buy Ticket
            </button>
          </div>

          {/* Ticket 2 */}
          <div className="bg-primary rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-gold">Child Ticket</h2>
            <p className="text-cream mt-2">Ages 5–15</p>
            <p className="text-3xl font-bold  mt-4 text-gold">£6</p>

            <button className="mt-6 px-5 py-2 rounded-lg bg-accent text-white hover:bg-accent-red bg-gold">
              Buy Ticket
            </button>
          </div>

          {/* Ticket 3 */}
          <div className="bg-primary rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-gold">Family Pass</h2>
            <p className="text-cream mt-2 ">2 adults + 2 children</p>
            <p className="text-3xl font-bold text- mt-4 text-gold">£30</p>

            <button className="mt-6 px-5 py-2 rounded-lg bg-accent text-white hover:bg-accent-red bg-gold">
              Buy Ticket
            </button>
          </div>

        </div>

        {/* Extra Info */}
        <div className="bg-primary rounded-xl shadow-lg p-6 mt-10 text-center">
          <h2 className="text-xl font-bold text-accent text-cream ">Additional Information</h2>
          <p className="text-cream mt-3">
            All tickets allow full-day access to the Paisley Highland Games,
            including events, vendors, and live entertainment.
            Tickets can be shown digitally on your phone.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-primary-light text-white text-center  shadow-md fixed bottom-0 left-0 z-50">
        © {new Date().getFullYear()} Paisley's Highland Games
      </footer>
    </div>
  );
}

