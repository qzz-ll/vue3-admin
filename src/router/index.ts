/*
 * @Descripttion: 路由创建
 * @Author: luoli
 * @Date: 2024-08-09 13:59:25
 * @LastEditors: luoli
 * @LastEditTime: 2024-11-01 18:58:24
 */

import Layout from '@/layout/index.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// 常量的路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  }
]

// 顶部路由
export const topRoutes: Array<RouteRecordRaw> = [
  {
    name: 'Config',
    path: '/config',
    component: Layout,
    redirect: '/config/index',
    meta: {
      title: '配置'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/config/index.vue'),
      }
    ]
  }
];

// 左侧导航
export const sideRoutes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: Layout,
    redirect: '/welcome',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'welcome',
        component: () => import('@/views/welcome/index.vue'),
      }
    ]
  },
  {
    name: 'Components',
    path: '/components',
    component: Layout,
    redirect: '/components/message',
    meta: {
      title: '组件'
    },
    children: [
      {
        path: 'message',
        name: 'Message',
        meta: {
          title: '消息提示'
        },
        component: () => import('@/views/components/message.vue'),
      },
      /* {
        path: 'dialog',
        name: 'Dialog',
        meta: {
          title: '函数式弹框'
        },
        component: () => import('@/views/components/dialog.vue'),
      }, */
      {
        path: 'el-button',
        name: 'ElButton',
        meta: {
          title: '按钮'
        },
        component: () => import('@/views/components/el-button.vue'),
      },
      {
        path: 'check-button',
        name: 'CheckButton',
        meta: {
          title: '可选按钮'
        },
        component: () => import('@/views/components/check-button.vue'),
      },
      {
        path: 'progress',
        name: 'Progress',
        meta: {
          title: '进度条'
        },
        component: () => import('@/views/components/progress.vue'),
      },
      {
        path: 'tag',
        name: 'Tag',
        meta: {
          title: '标签'
        },
        component: () => import('@/views/components/tag.vue'),
      }
    ]
  }
]

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes as RouteRecordRaw[],
});

export default router;
