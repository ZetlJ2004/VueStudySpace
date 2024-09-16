import { createAlertDialog } from '@/components/message'
import * as consty from '@/datasource/Const'
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
  },
  {
    path: '/exa06-1',
    component: () => import('@/views/example06/Exa06-1.vue')
  },
  {
    path: '/exa06-2',
    component: () => import('@/views/example06/Exa06-2.vue')
  },
  {
    path: '/exa07-1',
    component: () => import('@/views/example07/Exa07-1.vue')
  },
  {
    path: '/exa07-2',
    component: () => import('@/views/example07/Exa07-2.vue')
  },
  {
    path: '/exa08-1',
    component: () => import('@/views/example08/Exa08-1.vue')
  },
  {
    path: '/exa08-2',
    component: () => import('@/views/example08/Exa08-2.vue')
  },
  {
    path: '/exa08-3',
    component: () => import('@/views/example08/Exa08-3.vue')
  },
  {
    path: '/exa08-4',
    component: () => import('@/views/example08/Exa08-4.vue')
  },
  {
    path: '/exa09-1',
    component: () => import('@/views/example09/Example09-1.vue')
  },
  {
    path: '/exa09-2',
    component: () => import('@/views/example09/Example09-2.vue')
  },
  {
    path: '/exa09-3',
    component: () => import('@/views/example09/Example09-3.vue')
  },
  {
    path: '/exa09-4',
    component: () => import('@/views/example09/Example09-4.vue')
  },
  {
    path: '/exa09-5',
    component: () => import('@/views/example09/Example09-5.vue')
  },
  {
    path: '/exa10-1',
    component: () => import('@/views/example10/Example10-1.vue')
  },
  {
    path: '/exa10-2',
    component: () => import('@/views/example10/Example10-2.vue')
  },
  {
    path: '/exa11-1',
    component: () => import('@/views/example11/Example11-1.vue')
  },
  {
    path: '/exa11-2',
    component: () => import('@/views/example11/Example11-2.vue')
  },
  {
    path: '/exa11-3',
    component: () => import('@/views/example11/Example11-3.vue')
  },
  {
    path: '/exa12-1',
    component: () => import('@/views/example12/Example12-1.vue'),
    children: [
      {
        // 空，默认加载的组件。
        // 即路由至/example12-01，router-view直接加载此组件。也可不设置
        path: '',
        component: () => import('@/views/example12/CourseAbout.vue')
      },
      {
        // 声明相对路径。则路由到此组件的路径包含父组件路径
        // /example12-01/course
        path: 'course',
        components: {
          default: () => import('@/views/example12/CourseHome.vue'),
          button: () => import('@/views/example12/AddCourseButton.vue')
        }
      },
      {
        // 声明根路径。则路由到此组件的路径不包括父组件路径
        path: '/homework',
        components: {
          default: () => import('@/views/example12/CourseHomework.vue'),
          button: () => import('@/views/example12/AddHomeworkButton.vue')
        }
      }
    ]
  },
  {
    path: '/exa13',
    component: () => import('@/views/example13/GuardContainer.vue'),
    children: [
      {
        name: 'login-g',
        path: 'login',
        component: () => import('@/views/example13/GuardLogin.vue')
      },
      {
        path: 'user',
        component: () => import('@/views/example13/GuardUser.vue'),
        meta: {
          role: consty.USER
        }
      },
      {
        path: 'admin',
        component: () => import('@/views/example13/GuardAdmin.vue'),
        meta: {
          role: consty.ADMIN
        }
      },
      {
        name: 'nomatch',
        path: ':pathMatch(.*)*', // 如果是全局匹配，应加上`/`，/:pathMatch(.*)*
        redirect: { name: 'login-g' }
      }
    ]
  },
  {
    path: '/exa15-1',
    component: () => import('@/views/example15/Example15-1.vue')
  },
  {
    path: '/exa15-2',
    component: () => import('@/views/example15/Example15-2.vue')
  },
  {
    path: '/exa16',
    component: () => import('@/views/example16/Example16View.vue')
  },
  {
    path: '/exa17',
    component: () => import('@/views/example17/Example17View.vue')
  },
  {
    path: '/exa18',
    component: () => import('@/views/example18/IndexView.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/example18/Example18-1.vue')
      }
    ]
  },
  // -------------- homework
  {
    path: '/exp02',
    component: () => import('@/views/exp02/IndexView.vue')
  },
  {
    path: '/exp03',
    component: () => import('@/views/exp03/HomeView.vue'),
    children: [
      {
        path: 'location',
        component: () => import('@/views/exp03/LocationView.vue')
      },
      {
        path: 'shoplist',
        component: () => import('@/views/exp03/ShopListView.vue')
      },
      {
        path: 'shops/:sid',
        component: () => import('@/views/exp03/ShopView.vue')
      },
      {
        path: 'orders',
        component: () => import('@/views/exp03/OrderView.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from) => {
  // 排除，没有声明角色权限的路由
  if (!to.meta.role) {
    return true
  }

  if (to.meta.role != sessionStorage.getItem('role')) {
    createAlertDialog('无权限')
    // 直接返回路由地址
    // return '/example13/login'
    // 支持返回路由对象
    return { name: 'login-g' }
  }
  return true
})
export default router
