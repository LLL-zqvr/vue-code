import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/WelcomeView.vue')
  }
]

const router = createRouter({
  //HTML5 Mode.createWebHistory()函数，生产环境下需要web容器完成转发
  //createWebHashHistory()函数仍使用#符号，无需配置
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router
