import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  target: 'esnext',
  dts: true,
  shims: true,
  minify: 'terser',
  format: ['esm', 'cjs'],
  external: ['react', 'react-dom'],
  outDir: 'dist',
  sourcemap: true,
  clean: true,
  loader: {
    '.css': 'css',
  },
  injectStyle: false,
  splitting: true,
  treeshake: true,
  outExtension: ({ format }) => ({
    js: format === 'cjs' ? '.cjs' : '.js', // Use .cjs for CommonJS builds
  }),
});
