import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
    if (localStorage.getItem('Authenticated')) {
        return next('/dashboard')
    } else {
        this.$router.push('login')
        // return
    }
// next()
}

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
            component: () => import( './views/Dashboard'),
            // beforeEnter: ifAuthenticated
        },
        {
            path: '/about',
            name: 'about',
            component: () => import( './views/About'),
        },
        {
            path: '/about/how-it-works',
            name: 'steps',
            component: () => import( './views/Steps'),
        },
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home'),
        }
    ]
});


// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register']
//   const authRequired = !publicPages.includes(to.path)
//   const loggedIn = window.localStorage.getItem('Authenticated')

//   if(authRequired && !loggedIn) {
//     return next('/login')
//   }

//   next();

// });

export default router;
