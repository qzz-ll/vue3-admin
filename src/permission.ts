/*
 * @Descripttion: 路由前置后置导航
 * @Author: luoli
 * @Date: 2024-09-10 21:05:18
 * @LastEditors: luoli
 * @LastEditTime: 2024-09-24 18:58:57
 */
import router from './router'
import { useRouteStore } from "@/store/route.ts"
import LoadingBar from "@/components/LoadingBar/index.vue"
import { createVNode, render } from 'vue'

let token = localStorage.getItem("token")
let whiteList = ["/login"]

// 进度条挂载body上
let Vnode = createVNode(LoadingBar)
render(Vnode, document.body)

/* 
拦截：
登录后-正常跳转
未登录-跳转到登录页
*/
router.beforeEach((to, from, next) => {
  Vnode.component?.exposed?.startLoading()
  // console.log(0, to, token)
  // const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // console.log('requiresAuth', requiresAuth)
  const routeStore = useRouteStore()
  // 检查登录, 未登录进入登录页
  if (!token) {
    if (to.path === "/login") {
      next()
    } else {
      // 如果用户未登录且尝试访问需要认证的路由，则重定向到登录页面
      next("/login")
    }

  } else if (!whiteList.includes(to.path) && routeStore.topNav_permission_routers && !routeStore.topNav_permission_routers.length) {
    // 如果用户已登录，并且我们还没有添加新的路由，则动态添加
    loadRouters(to,from,next)

  } else {
    // 用户已登录且路由已存在，正常进入
    next()
  }

})

// 获取侧边栏，顶部导航栏的store状态数据
function getRoute() {
  const routeStore = useRouteStore()
  routeStore.countRoute()
  // 返回顶部导航，侧边导航
  return [routeStore.topNavRoutes, routeStore.sideNavRoutes]
}

// 用于生成路由表
function loadRouters(to: any, from: any, next: any): void {
  const [topNavRoutes, sideNavRoutes] = getRoute()
  // 侧边栏
  sideNavRoutes.forEach((sideItem: any) => {
    router.addRoute(sideItem)
  })
  // 顶部栏
  topNavRoutes.forEach((topItem: any) => {
    router.addRoute(topItem)
  })
  next({ ...to, replace: true })
}

router.afterEach((to, from) => {
  Vnode.component?.exposed?.endLoading()
})
