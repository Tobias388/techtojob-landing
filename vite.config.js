import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        avisoLegal: resolve(__dirname, 'aviso-legal.html'),
        politicas: resolve(__dirname, 'politicas.html'),
      },
    },
  },
});
