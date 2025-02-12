import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/valentin2025/', // 👈 Asegúrate de cambiarlo
});
