import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import { useLocation } from 'react-router-dom'; // If using React Router

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // gets current path

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tickets', path: '/tickets' },
    { name: 'Events', path: '/events' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav className="w-full shadow-md fixed top-0 left-0 z-50 bg-gold">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo / Title */}
        <div className="text-2xl font-extrabold tracking-wide text-accent text-primary-light">
          Paisley's Highland Games
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <a
                key={link.name}
                href={link.path}
                className={`transition ${
                  isActive
                    ? 'text-cream border-b-2 border-cream'
                    : 'text-accent hover:text-cream'
                }`}
              >
                {link.name}
              </a>
            );
          })}
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
