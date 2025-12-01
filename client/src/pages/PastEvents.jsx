import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function PastEvents() {
  return (
    <div className="w-full min-h-screen bg-primary/10">
      <Header />
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-accent text-center">
          Past Highland Games Events
        </h1>

        {/* INTRO */}
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <p className="text-gray-700 text-lg leading-relaxed">
            Take a look back at previous Highland Games events hosted in
            Paisley. Each year brings incredible athleticism, culture, and
            community spirit. Explore highlights, results, and photo galleries
            from past competitions.
          </p>
        </section>

        {/* EVENT HISTORY GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* EVENT CARD 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/past2024.jpg"
              alt="Highland Games 2024"
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-secondary">Highland Games 2024</h2>
              <p className="text-gray-700 mt-2 text-sm">
                A huge turnout with strong performances in the Caber Toss,
                Hammer Throw, and Tug of War finals.
              </p>
              <p className="mt-2 text-gray-600 text-sm">Date: 21st July 2024</p>

              <a
                href="/gallery/2024"
                className="inline-block mt-4 bg-accent text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                View Gallery
              </a>
            </div>
          </div>

          {/* EVENT CARD 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/past2023.jpg"
              alt="Highland Games 2023"
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-secondary">Highland Games 2023</h2>
              <p className="text-gray-700 mt-2 text-sm">
                Known for its intense Stone Put competition and a memorable
                pipe band procession.
              </p>
              <p className="mt-2 text-gray-600 text-sm">Date: 23rd July 2023</p>

              <a
                href="/gallery/2023"
                className="inline-block mt-4 bg-accent text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                View Gallery
              </a>
            </div>
          </div>

          {/* EVENT CARD 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/past2022.jpg"
              alt="Highland Games 2022"
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-secondary">Highland Games 2022</h2>
              <p className="text-gray-700 mt-2 text-sm">
                A crowd favourite year featuring excellent weather and thrilling
                family-friendly games.
              </p>
              <p className="mt-2 text-gray-600 text-sm">Date: 19th July 2022</p>

              <a
                href="/gallery/2022"
                className="inline-block mt-4 bg-accent text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                View Gallery
              </a>
            </div>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full bg-secondary text-white text-center py-4 mt-10">
        © {new Date().getFullYear()} Paisley's Highland Games
      </footer>
    </div>
  );
}
