/*
 * @Descripttion: 全局注册页面
 * @Author: luoli
 * @Date: 2024-08-09 13:51:08
 * @LastEditors: luoli
 * @LastEditTime: 2024-09-11 17:21:39
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element-plus 英文转中文
import { zhCn } from 'element-plus/es/locales.mjs'
import '@/styles/index.scss' // global css
import App from './App.vue'
import router from './router'

import './permission' // permission control

const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus, { locale: zhCn })
app.use(router)
app.use(pinia)

app.mount('#app')
