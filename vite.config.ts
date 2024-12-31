import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer';
import postcss from 'postcss-import'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    {
      name: 'postcss',
      plugins: [
        autoprefixer(),
        postcss()
      ]
    }
  ],
})
