import Vue from 'vue'
import Router from 'vue-router'
import store from './store';

Vue.use(Router)

const router = new Router({
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
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = store.state.userStatus

  if(authRequired && !loggedIn) {
    return next('/login')
  }

  next();

});

export default router;
