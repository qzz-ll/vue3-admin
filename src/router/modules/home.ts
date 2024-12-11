/*
 * @Descripttion: 
 * @Author: luoli
 * @Date: 2024-08-09 17:33:24
 * @LastEditors: luoli
 * @LastEditTime: 2024-08-09 17:33:59
 */
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/welcome",
  meta: {
    icon: "ep:home-filled",
    title: "首页",
    rank: 0
  },
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: "首页",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;