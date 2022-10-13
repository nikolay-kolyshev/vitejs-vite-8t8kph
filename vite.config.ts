import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import {fileURLToPath} from "url";

export default function () {
  return defineConfig({
    plugins: [react(), legacy()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      }
    }
  })
}