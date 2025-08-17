import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website-react/', // ชื่อ repo คุณ
})
// src/main.jsx