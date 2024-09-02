import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'loginPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/LoginPage.vue')
  },
  {
    path:'/signup',
    name:'singUpPage',
    component: () => import('../views/SingUpPage.vue')
  },
  {
    path:'/listausuarios',
    name:'usuarios',
    component: () => import('../views/UsuariosPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
