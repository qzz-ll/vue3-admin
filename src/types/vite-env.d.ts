/*
 * @Descripttion: 
 * @Author: luoli
 * @Date: 2024-08-09 13:51:08
 * @LastEditors: luoli
 * @LastEditTime: 2024-08-09 13:52:59
 */
/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}