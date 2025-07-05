import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest: manifest })],
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
    cors: {
      origin: ["chrome-extension://*"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    },
  },
});
