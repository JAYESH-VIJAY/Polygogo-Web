import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ViteSvgLoader from "vite-svg-loader";
import { visualizer } from "rollup-plugin-visualizer"; // Import the Visualizer plugin
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react(), ViteSvgLoader()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(
          new URL("./src/shared/assets", import.meta.url)
        ),
      },
    ],
  },
  build: {
    rollupOptions: {
      plugins: [
        visualizer({ open: true, gzipSize: true }), // Configure the Visualizer plugin
        // ... other Rollup plugins ...
      ],
    },
  },
});
