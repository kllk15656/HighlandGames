import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",          // 👈 for Render (NOT /HighlandGames/)
  plugins: [react()],
});

