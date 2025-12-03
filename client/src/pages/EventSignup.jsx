import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function EventSignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    event: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Update form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-gold/5">
      {/* Header + Navbar */}
      <Header />
      <Navbar />

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-4 bg-primary-light rounded-xl shadow-lg">
        {/* Heading with top margin to clear fixed Navbar */}
        <h1 className="text-3xl font-bold text-white text-center mt-24 mb-8">
          Event Sign-Up
        </h1>

        {/* Success Message */}
        {submitted ? (
          <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-xl shadow mb-10">
            🎉 <b>Thank you!</b> Your sign-up has been received.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-primary-light p-6 rounded-xl shadow-lg space-y-5"
          >
            {/* Full Name */}
            <div>
              <label className="block text-white font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-semibold mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-white font-semibold mb-1">Age</label>
              <input
                type="number"
                name="age"
                required
                min="5"
                max="120"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Event Selection */}
            <div>
              <label className="block text-white font-semibold mb-1">Select Event</label>
              <select
                name="event"
                required
                value={formData.event}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent"
              >
                <option value="">Choose an event…</option>
                <option value="Caber Toss">Caber Toss</option>
                <option value="Stone Put">Stone Put</option>
                <option value="Hammer Throw">Hammer Throw</option>
                <option value="Tug of War">Tug of War</option>
                <option value="Highland Dance">Highland Dance</option>
                <option value="Archery">Archery</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gold text-white font-semibold rounded-lg hover:bg-accent-red transition"
            >
              Submit Registration
            </button>
          </form>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-primary-light text-white text-center  shadow-md fixed bottom-0 left-0 z-50">
        © {new Date().getFullYear()} Paisley's Highland Games
      </footer>
    </div>
  );
}
