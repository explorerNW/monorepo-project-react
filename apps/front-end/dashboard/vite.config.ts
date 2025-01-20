import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: ['esnext'],
    rollupOptions: {
      plugins: [visualizer({ open: true, gzipSize: true, brotliSize: true })],
    },
  },
});
