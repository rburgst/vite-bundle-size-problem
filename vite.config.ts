import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import * as path from "path";

const resolvedPath = path.resolve(__dirname, "./src/index.ts");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: "./dist",
    lib: {
      entry: resolvedPath,
      name: "vite-bm-video",
    },
  },
});
