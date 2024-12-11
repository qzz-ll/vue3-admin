/*
 * @Descripttion: 
 * @Author: luoli
 * @Date: 2024-08-09 13:51:08
 * @LastEditors: luoli
 * @LastEditTime: 2024-08-09 17:54:57
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})
