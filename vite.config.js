/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'c8' // or 'c8'
    },
    globals: true,
    environment: "jsdom",
    setupFiles: './src/test/setup.ts',
    exclude: ["**/node_modules/**/*"],
  }
})