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
        }
    ],

    scrollBehavior(to) { //(smooth)Scroll to the top of the page when accessing a new route
        if (to.hash) {
            return window.scrollTo({ top: document.querySelector(to.hash).offsetTop, behavior: 'smooth' });
        }
        return window.scrollTo({ top: 0, behavior: 'smooth' });
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
