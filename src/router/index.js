import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/qeydiyyat',
      name: 'qeydiyyat',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/giris',
      name: 'giris',
      component: () => import('../views/SigninView.vue')
    },
    {
      path: '/xeberler',
      name: 'xeberler',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/fealiyyet',
      name: 'fealiyyet',
      component: () => import('../views/ActivityView.vue')
    },
    {
      path: '/admin/login',
      name: 'admin/login',
      component: () => import('../views/AdminloginView.vue')
    },
    {
      path: '/admin/mezun',
      name: 'admin/mezun',
      component: () => import('../views/AdminmezunView.vue')
    },
    {
      path: '/admin/inbox',
      name: 'admin/inbox',
      component: () => import('../views/AdmininboxView.vue')
    },
    {
      path: '/admin/home',
      name: 'admin/home',
      component: () => import('../views/AdminhomeView.vue')
    },
    {
      path: '/millibayramlar',
      name: 'millibayramlar',
      component: () => import('../views/NationalView.vue')
    }
  ]
})

export default router
