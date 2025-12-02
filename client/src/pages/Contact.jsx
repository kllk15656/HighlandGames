import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-gold/20">
      {/* Header + Navigation */}
      <Header />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">

        {/* ------------------------ */}
        {/* Contact Title */}
        {/* ------------------------ */}
        <h1 className="text-3xl font-bold text-center text-primary">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Have questions about the event, tickets, or activities?  
          Send us a message and we’ll get back to you as soon as possible.
        </p>

        {/* ------------------------ */}
        {/* Contact Form */}
        {/* ------------------------ */}
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-primary font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded-lg focus:outline-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-primary font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-2 border rounded-lg focus:outline-primary"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-primary font-semibold mb-1">Message</label>
              <textarea
                placeholder="Write your message here..."
                rows="5"
                className="w-full p-2 border rounded-lg focus:outline-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 mt-4 rounded-lg hover:bg-primary/80"
            >
              Send Message
            </button>
          </form>
        </section>

     
       
      </main>

      {/* Footer */}
      <footer className="w-full bg-primary-light text-white text-center py-4 mt-10">
        © {new Date().getFullYear()} Paisley's Highland Games
      </footer>
    </div>
  );
}
