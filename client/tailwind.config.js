/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F3A4A",          // deep tartan blue
        "primary-light": "#1C5A73", // medium plaid blue
        gold: "#E4B64E",            // header text color
        cream: "#FAF4E6",           // light background
        "accent-red": "#8B1D22",    // tartan red stripe
        "accent-yellow": "#E0C879", // tartan yellow lines
        secondary: "#244C34"        // Celtic green
      },
    },
  },
  plugins: [],
};
