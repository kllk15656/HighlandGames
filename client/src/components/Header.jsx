import React from 'react';
/**
 * Header component displays a wide image (responsive).
 * Uses the header.jpg file placed in public/.
 * Mobile-first heights set in Tailwind classes.
 */
export default function Header() {
  return (
 <img
  src="/header.png"
  class="w-full h-48 sm:h-64 lg:h-72 object-contain"
  alt="Highland Games"
/>



  );
}
