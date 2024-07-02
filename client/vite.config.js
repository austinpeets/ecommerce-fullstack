import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const serverPort = process.env.PORT || 8000;
console.log(`api need to run on ${serverPort} for vite server`);
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': `http://localhost:${serverPort}`
    }
  }
})
