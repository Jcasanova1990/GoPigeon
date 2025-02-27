import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.VITE_PORT || 5173,
  },
  build: {
    outDir: 'public/dist',
    emptyOutDir: false,
  },
});
