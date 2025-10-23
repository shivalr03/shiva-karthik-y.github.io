import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: command === 'build' ? '/shiva-karthik-y.github.io/' : '/',
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  build: { outDir: 'docs' },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
