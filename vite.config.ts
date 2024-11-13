import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: "dist",
    rollupOptions: { input: resolve(__dirname, "index.html") },
  },
  css: {
    preprocessorOptions: { scss: { api: "modern-compiler" } },
  },
  plugins: [react(), viteSingleFile()],
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"], // Add this line
  root: ".",
});
