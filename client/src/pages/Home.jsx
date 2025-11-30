import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CalendarWidget from "../components/CalendarWidget";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gold/30">
      {/* Header + Navigation */}
      <Header />
      <Navbar />

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">

        {/* ------------------------------------------------ */}
        {/*     PHOTO / INTRO SECTION                        */}
        {/* ------------------------------------------------ */}
        <section className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6 bg-primary/90">

          {/* Photo on the left */}
          <div className="w-full md:w-1/2 ">
            <img
              src="/image1.png"
              alt="Highland Games"
              className="rounded-lg object-cover w-full h-48 md:h-64"
            />
          </div>

          {/* Event info on the right */}
          <div className="w-full md:w-1/2 text-center md:text-left " >
            <h2 className="text-2xl font-bold text-cream">Photo</h2>
            <p className="text-cream mt-2 leading-relaxed">
              Details about the upcoming event:
              <br />• List of events
              <br />• Times and schedules
              <br />• Special Guests
              <br />• Vendors & food
            </p>

            <div className="mt-4 flex gap-4 justify-center md:justify-start">
              <a
                href="/tickets"
                className="bg-accent-yellow text-black px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Get Tickets
              </a>

              <a
                href="/events"
                className="bg-accent-yellow text-black px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Join Event Today
              </a>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ */}
        {/*     CALENDAR + MAP GRID                          */}
        {/* ------------------------------------------------ */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Calendar box */}
          <div className="bg-white rounded-xl shadow-lg p-6 bg-primary/90">
            <CalendarWidget />
          </div>

          {/* Location / Map box */}
          <div className=" rounded-xl shadow-lg p-6 bg-secondary/90">
            <h2 className="text-xl text-cream font-bold text-accent text-center">
              Event Location
            </h2>

            <div className="mt-3 text-center text-cream">
              <p className="font-semibold text-lg">Paisley Highland Games</p>
              <p>21st July 2026</p>
              <p>Time: 11am – 4pm</p>
              <p className="mt-2">Address: High St, Paisley PA1 2BE</p>
            </div>

            {/* Larger Google Maps Embed */}
            <div className="mt-5 h-64 md:h-80">
              <iframe
                className="w-full h-full rounded-xl border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2231.428645301614!2d-4.4244!3d55.8440!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4889cf379403b013%3A0xb25658c136c8e180!2sPaisley%2C%20PA1!5e0!3m2!1sen!2suk!4v0000000000"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-primary-light text-white text-center py-4 mt-10">
        © {new Date().getFullYear()} Paisley's Highland Games
      </footer>
    </div>
  );
}
