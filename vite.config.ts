import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts(),
    viteStaticCopy({
      targets: [{ src: "src/index.css", dest: "" }],
    }),
  ],
  build: {
    lib: {
      fileName: (format) => `index.${format}.js`,
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "mirr-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
