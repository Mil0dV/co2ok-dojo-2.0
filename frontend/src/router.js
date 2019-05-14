import Vue from 'vue'
import Router from 'vue-router'

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
            path: '/',
            name: 'home',
            component: () => import('./views/Home'),
        },
        {
            path: '/register/:merchantId',
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
            path: '/faq',
            name: 'faq',
            component: () => import( './views/Faq'),
        },
        {
            path: '/about/how-it-works',
            name: 'steps',
            component: () => import( './views/Steps'),
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: () => import('./views/Privacy'),

        },
        //404 page route
        {
            path: '*',
            name: '404',
            component: () => import('./views/404')
        }
    ],

    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
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
