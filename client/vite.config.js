import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/HighlandGames/", // MUST MATCH your GitHub repo name exactly
});
