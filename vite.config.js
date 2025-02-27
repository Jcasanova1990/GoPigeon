import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.VITE_PORT || 5173, // Use env variable for port
  },
  build: {
    outDir: 'public/dist', // Moves the build output to 'public/dist'
    emptyOutDir: true, // Clears old files before build
  },
});
