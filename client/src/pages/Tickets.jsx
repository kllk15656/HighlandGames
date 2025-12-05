import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Tickets() {
  return (
    <div className="w-full min-h-screen bg-gold/10">
      <Header />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-10 text-black">
          Tickets
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-primary rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-xl font-bold text-gold">Adult Ticket</h2>
            <p className="text-cream mt-2">Ages 16+</p>
            <p className="text-3xl font-bold mt-4 text-gold">£12</p>

            <a
              href="https://www.eventbrite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-5 py-2 rounded-lg bg-gold text-black font-semibold hover:bg-accent-red transition"
            >
              Buy Ticket
            </a>
          </div>

          <div className="bg-primary rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-xl font-bold text-gold">Child Ticket</h2>
            <p className="text-cream mt-2">Ages 5–15</p>
            <p className="text-3xl font-bold mt-4 text-gold">£6</p>

            <a
              href="https://www.eventbrite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-5 py-2 rounded-lg bg-gold text-black font-semibold hover:bg-accent-red transition"
            >
              Buy Ticket
            </a>
          </div>

          <div className="bg-primary rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-xl font-bold text-gold">Family Pass</h2>
            <p className="text-cream mt-2">2 adults + 2 children</p>
            <p className="text-3xl font-bold mt-4 text-gold">£30</p>

            <a
              href="https://www.eventbrite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-5 py-2 rounded-lg bg-gold text-black font-semibold hover:bg-accent-red transition"
            >
              Buy Ticket
            </a>
          </div>

        </div>
        {/* Extra Info */} <div className="bg-primary rounded-xl shadow-lg p-6 mt-10 text-center"> <h2 className="text-xl font-bold text-accent text-cream ">Additional Information</h2> <p className="text-cream mt-3"> All tickets allow full-day access to the Paisley Highland Games, including events, vendors, and live entertainment. Tickets can be shown digitally on your phone. </p> </div>
      </main>

      <footer className="w-full bg-primary text-white text-center py-2 fixed bottom-0">
        © {new Date().getFullYear()} Paisley's Highland Games
      </footer>
    </div>
  );
}
