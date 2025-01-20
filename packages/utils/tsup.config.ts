import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  target: ['esnext'],
  shims: true,
  minify: 'terser',
  format: ['esm'],
  outDir: 'dist',
});
