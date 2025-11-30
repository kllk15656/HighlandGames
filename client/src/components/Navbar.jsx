import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 bg-gold/90">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo / Title */}
        <div className="text-2xl font-extrabold tracking-wide text-accent">
          Paisley's Highland Games
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="/" className="hover:text-primary transition">Home</a>
          <a href="/tickets" className="hover:text-primary transition">Tickets</a>
          <a href="/events" className="hover:text-primary transition">Events</a>
          <a href="/leaderboard" className="hover:text-primary transition">Leaderboard</a>
          <a href="/contact" className="hover:text-primary transition">Contact</a>
          <a href="/login" className="text-accent font-semibold hover:text-red-700 transition">Login</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-7 h-1 bg-black"></span>
          <span className="block w-7 h-1 bg-black"></span>
          <span className="block w-7 h-1 bg-black"></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <MobileMenu open={open} />
    </nav>
  );
}
