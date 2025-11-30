import React from 'react';
/**
 * Mobile menu that appears when hamburger is toggled.
 * 'open' prop controls visibility.
 */
export default function MobileMenu({ open }) {
  if (!open) return null;
  return (
    <div className="bg-white border-t shadow-lg w-full absolute top-16 left-0 z-30 p-4 flex flex-col space-y-3 md:hidden">
      <a href="/" className="text-lg font-semibold">Home</a>
      <a href="/tickets" className="text-lg font-semibold">Tickets</a>
      <a href="/events" className="text-lg font-semibold">Events</a>
      <a href="/leaderboard" className="text-lg font-semibold">Leaderboard</a>
      <a href="/contact" className="text-lg font-semibold">Contact</a>
      <a href="/login" className="text-lg font-semibold text-accent">Login</a>
    </div>
  );
}
