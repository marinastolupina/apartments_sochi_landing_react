import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/apartments_sochi_landing_react/',
  plugins: [react()],
})
