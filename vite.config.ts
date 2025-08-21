import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 启用 SCSS 调试信息输出
        logger: {
          warn: function (message: string) {
            console.log('SCSS WARN:', message)
          },
          debug: function (message: string) {
            console.log('SCSS DEBUG:', message)
          }
        },
        // 启用详细输出
        verbose: true
      }
    }
  }
})
