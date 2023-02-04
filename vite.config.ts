import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginFonts } from 'vite-plugin-fonts'

const config: UserConfig = {
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: [
          'Roboto'
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name].mjs',
        chunkFileNames: 'assets/[name].mjs',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
}

if (process.env.BASE != null) {
  console.log(`using base : ${String(process.env.BASE)}`)
  config.base = process.env.BASE
}

// https://vitejs.dev/config/
export default defineConfig(config)
