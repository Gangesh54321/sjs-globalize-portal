import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/lqa': {
        target: 'https://sjsloblizelqa.vercel.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lqa/, '')
      }
    }
  }
})
