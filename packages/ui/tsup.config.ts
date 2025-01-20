import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'esnext',
  // dts: true,
  shims: true,
  minify: 'terser',
  format: ['esm'],
  outDir: 'dist',
});
