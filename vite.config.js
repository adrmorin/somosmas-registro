import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

// Helper to find all HTML files in the project root to treat them as entry points
const getHtmlInput = () => {
  const inputs = {}
  const files = fs.readdirSync('.')
  files.forEach(file => {
    if (file.endsWith('.html')) {
      const name = file.replace('.html', '')
      inputs[name] = resolve(__dirname, file)
    }
  })
  return inputs
}

export default defineConfig({
  base: '/somosmas-registro/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: getHtmlInput()
    }
  }
})
