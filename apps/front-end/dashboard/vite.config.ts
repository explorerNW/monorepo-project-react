import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: 'terser',
    target: ['esnext'],
    rollupOptions: {
      output: {
        manualChunks: {},
      },
      cache: true,
      perf: true,
      maxParallelFileOps: 4,
      treeshake: {
        moduleSideEffects: 'no-external',
        preset: 'recommended',
      },
      plugins: [visualizer({ open: true, gzipSize: true, brotliSize: true })],
    },
  },
});
