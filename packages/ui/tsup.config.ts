import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    target: 'ES2020',
    shims: true,
    minify: 'terser',
    format: ['esm'],
    outDir: 'dist',
});