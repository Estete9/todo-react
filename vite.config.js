import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { __dirname } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
});
