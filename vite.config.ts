import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ViteSvgLoader from 'vite-svg-loader'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),ViteSvgLoader()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
