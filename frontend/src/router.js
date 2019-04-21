import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/register',
      name: 'register',
      component: () => import( './views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( './views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import( './views/Dashboard.vue')
    }
  ]
})
