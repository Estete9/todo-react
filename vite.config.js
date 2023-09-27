import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


// Use import.meta.url to get the current module's URL and convert it to a file path
const currentModuleUrl = import.meta.url;
// Use fileURLToPath to convert the URL to a file path
const currentModulePath = fileURLToPath(currentModuleUrl);
// Use dirname to get the directory name from the file path
const __dirname = dirname(currentModulePath);

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
