import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',              // ensure relative paths, e.g. in index.html
  build: {
    outDir: 'dist',      // gets deployed to github pages
    assetsDir: 'assets', // static assets (images, js, css, etc.)
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
});