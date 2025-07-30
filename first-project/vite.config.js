import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  // Load env variables based on mode (development/production)
  const env = loadEnv(mode, process.cwd());

  // Access your VITE_API_URL here safely
  const API_URL = env.VITE_API_URL;

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        '/media': {
          target: API_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  });
};
