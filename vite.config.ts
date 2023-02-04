//import { fileURLToPath } from 'url'
import { defineConfig, UserConfig, UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginFonts } from 'vite-plugin-fonts'

const config = {
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: [
          'Roboto'
        ],
      },
    }),
  ],
} as UserConfig;

if (process.env.BASE) {
  console.log(`using base : ${process.env.BASE}`);
  config.base = process.env.BASE;
}

// https://vitejs.dev/config/
export default defineConfig(config)
