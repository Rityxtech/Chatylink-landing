import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  // Set VITE_BASE_URL in your environment or hardcode your exact GitHub repo name (case-sensitive)
  // For root deployment (username.github.io), use '/'
  // For project pages (username.github.io/RepoName), use '/RepoName/'
  // CRITICAL: This must exactly match your GitHub repo name (case-sensitive) as it appears in the URL
  // URL: https://rityxtech.github.io/Rankflow/ → base = '/Rankflow/'
  const base = process.env.VITE_BASE_URL ?? '/';
  return {
    plugins: [react(), tailwindcss()],
    base,
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
