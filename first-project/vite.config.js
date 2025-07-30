import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import.meta.env

 const VITE_API_URL = import.meta.env.VITE_API_URL;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/media': `${VITE__API_URL}`,
    },
  },
})

