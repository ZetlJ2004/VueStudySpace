import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/WelcomeView.vue')
  },
  {
    path: '/exa01-1',
    component: () => import('@/views/example01/Exa01-1.vue')
  },
  {
    path: '/exa02-1',
    component: () => import('@/views/example02/Exa02-1.vue')
  },
  {
    path: '/exa02-2',
    component: () => import('@/views/example02/Exa02-2.vue')
  },
  {
    path: '/exa02-3',
    component: () => import('@/views/example02/Exa02-3.vue')
  },
  {
    path: '/exa02-4',
    component: () => import('@/views/example02/Exa02-4.vue')
  },
  {
    path: '/exa03-1/students/:sid/homeworks/:hid',
    component: () => import('@/views/example03/Exa03-1.vue')
  },
  {
    path: '/exa05-1',
    component: () => import('@/views/example05/Exa05-1.vue')
  },
  {
    path: '/exa05-2',
    component: () => import('@/views/example05/Exa05-2.vue')
  },
  {
    path: '/exa05-3',
    component: () => import('@/views/example05/Exa05-3.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
