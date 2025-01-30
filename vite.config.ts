import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  base: "/MyPortfolio/",  // 👈 Viktigt!
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    outDir: "dist", // 👈 Se till att bygget går till "dist"
    assetsDir: "assets", // 👈 Ser till att assets ligger rätt
  },
  publicDir: "public", // 👈 Säkerställ att public-mappen används
})
