/*
 * @Descripttion: 路由进行状态管理
 * @Author: luoli
 * @Date: 2024-09-11 17:35:16
 * @LastEditors: luoli
 * @LastEditTime: 2024-09-13 17:48:08
 */
import { defineStore } from 'pinia'
import { topRoutes, sideRoutes } from "@/router/index.ts"

export const useRouteStore = defineStore('route', {
  state: () => {
    return {
      topNavRoutes: [],
      sideNavRoutes: [],
      
    }
  },
  getters: {
    topNav_permission_routers: (state) => state.topNavRoutes
  },
  actions: {
    countRoute() {
      this.topNavRoutes = generatTopNavRouters(topRoutes)
      this.sideNavRoutes = generatTopNavRouters(sideRoutes)
    }
  }
})

function generatTopNavRouters(routes: []) {
  // 当前侧边栏所有应用类型
  routes.forEach((value: any) => {
    // products返回的是在license范围中的类型
    value.hidden = true
  })
  return routes
}