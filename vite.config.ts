import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Workshop-And-Hackathon/", // Replace with your GitHub repository name
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
