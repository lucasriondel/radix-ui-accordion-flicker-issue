// https://vitejs.dev/config/
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.js"),
      formats: ["es"],
      fileName: "main",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});
