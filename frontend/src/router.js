import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'

Vue.use(Router)

// const ifAuthenticated = (to, from, next) => {
//     if (localStorage.getItem('Authenticated')) {
//         return next('/dashboard')
//     } else {
//         this.$router.push('login')
//         // return
//     }
// // next()
// }

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // {
        //     path: '/ninja',
        //     name: 'ninja',
        //     component: () => import('./views/Home'),
        // },
        // {
        //     path: '/en/ninja',
        //     name: 'ninja',
        //     component: () => import('./views/Home'),
        // },
        {
            path: '/',
            name: 'home2',
            component: () => import('./views/Ahome'),
        },
        {
            path: '/consumers',
            name: 'consumers',
            component: () => import('./views/consumer/Consumers')
        },
        {
            path: '/how-it-works',
            name: 'how-it-works',
            component: () => import('./views/HowItWorks')
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
            path: '/co2-compensatie',
            name: 'compensation',
            component: () => import( './views/Compensation'),
        },
        {
            path: '/corona',
            name: 'corona',
            component: () => import( './views/Corona'),
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: () => import('./views/Privacy'),

        },
        {
            path: '/news',
            name: 'news',
            component: () => import('./views/Blog')
        },
        {
          path: '/news/:id(\\d+)',
          name: 'article',
          component: () => import('./views/Article')
        },
        {
            path: '/webshops',
            name: 'webshops',
            component: () => import('./views/webshops/Webshops')
        },
        {
            path: '/webshops/retailers',
            name: 'retailers',
            component: () => import('./views/webshops/Retailers')
        },
        {
            path: '/retailers',
            name: 'retailers',
            component: () => import('./views/webshops/Retailers')
        },
        {
            path: '/webshops/cause-marketing',
            name: 'cause-marketing',
            component: () => import('./views/webshops/Cause')
        },
        {
            path: '/webshops/get-started',
            name: 'get-started',
            component: () => import('./views/webshops/Installation')
        },
        {
            path: '/webshops/webwinkelkeur',
            name: 'webwinkelkeur',
            component: () => import('./views/webshops/WebwinkelkeurForm')
        },
        {
            path: '/fight-corona',
            name: 'fight-corona',
            component: () => import('./views/webshops/Corona-Installation')
        },
        {
            path: '/webshops/register/:merchantId',
            name: 'webshops-register',
            component: () => import( './views/dashboard/Register.vue')
        },
        {
            path: '/webshops/login',
            name: 'webshops-login',
            component: () => import( './views/dashboard/Login.vue')
        },
        {
            path: '/webshops/dashboard',
            name: 'dashboard',
            component: () => import( './views/dashboard/Dashboard'),
            // beforeEnter: ifAuthenticated
        },
        {
            path: '/webshops/get-started',
            name: 'wc-guide',
            component: () => import('./views/webshops/Installation')
        },
        {
            path: '/webshops/get-started',
            name: 'magento-guide',
            component: () => import('./views/webshops/Installation')
        },
        {
            path: '/webshops/get-started',
            name: 'shopify-guide',
            component: () => import('./views/webshops/Installation')
        },
        {
            path: '/webshops/get-started',
            name: 'shopware-guide',
            component: () => import('./views/webshops/Installation')
        },
        {
            path: '/webshops/get-started',
            name: 'lightspeed-guide',
            component: () => import('./views/webshops/Installation')
        },
        {
            path: '/webshops/get-started',
            name: 'mijnwebwinkel-guide',
            component: () => import('./views/webshops/Installation')
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('./views/Projects')
        },
        {
            path: '/consumers/profile',
            name: 'consumers-profile',
            component: () => import('./views/consumer/Consumer'),
            // beforeEnter: ifAuthenticated
        },
        {
            path: '/consumers/login',
            name: 'consumers-login',
            component: () => import('./views/consumer/LoginConsumer')
        },
        {
            path: '/:id(\\d+)',
            name: 'consumers-invitation',
            component: () => import('./views/consumer/Invitation')
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: () => import('./views/consumer/Welcome')
        },
        {
            path: '/clients',
            name: 'clients',
            component: () => import('./views/clients/Clients')
        },
        {
            path: '/#ClimateFriendlyDelivery',
            hash: '#ClimateFriendlyDelivery',
            //uploads BBAPI component
            component: () => import('./views/landing/BBApi')
        },
        //pricing
        // {
        //     path: '/#pricing',
        //     hash: '#pricing',
        //     component: () => import('./views/webshops/Retailers')
        // },
        { //404 page, redirects back to home (= /)
            path: '*', redirect: '/'
        }
    ],

    scrollBehavior (to) {
        if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 };
        }
    }
});


Vue.use(VueAnalytics, {
    id: 'UA-108940950-1',
    router
  })

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
