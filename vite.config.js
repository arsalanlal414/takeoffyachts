import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set this if you're hosting the app in a subdirectory
  build: {
    outDir: 'dist'
  },
  server: {
    historyApiFallback: true, // Fallback to index.html for client-side routing
  },
});
