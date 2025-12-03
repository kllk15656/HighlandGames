import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Leaderboard() {
  // demo data (later you can fetch this from MongoDB)
  const rankings = [
    { name: "John MacLeod", score: 98 },
    { name: "Fiona Campbell", score: 92 },
    { name: "Angus McDonald", score: 89 },
    { name: "Calum Fraser", score: 78 },
    { name: "Eilidh Stewart", score: 72 },
  ];

  return (
    <div className="w-full min-h-screen bg-gold/5">
      {/* Header + Navbar */}
      <Header />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-accent text-center mb-10">
          Leaderboard
        </h1>

        <div className="bg-primary-light p-6 rounded-xl shadow-lg overflow-x-auto shadow-lg space-y-5">
          <table className="w-full text-left min-w-[400px]">
            <thead>
              <tr className="text-gold text-lg border-b-2 border-gray-200">
                <th className="py-2">Rank</th>
                <th className="py-2">Name</th>
                <th className="py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((person, i) => (
                <tr
                  key={i}
                  className={`border-b last:border-none ${
                    i === 0
                      ? "bg-yellow-100"
                      : i === 1
                      ? "bg-gray-100"
                      : i === 2
                      ? "bg-orange-100"
                      : ""
                  }`}
                >
                  <td className="py-3 font-bold text-black">{i + 1}</td>
                  <td className="py-3  font-bold text-black">{person.name}</td>
                  <td className="py-3 font-bold  text-black">{person.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Information Box */}
        <div className="bg-primary rounded-xl shadow-lg p-6 mt-10 text-center shadow-lg space-y-5">
          <h2 className="text-xl font-bold text-gold">About the Rankings</h2>
          <p className="text-cream">
            Scores are calculated based on overall performance in all Highland
            Games events, including caber toss, hammer throw, and stone put.
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

