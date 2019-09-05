import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
//Vuex imports
import store from './store'
import Vuex from 'vuex'
import VAnimateCss from 'v-animate-css'

//Aos imports
import AOS from 'aos'
import 'aos/dist/aos.css'
// vue-moment imports
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
// Internationalization
import { i18n } from '@/plugins/i18n'
// Vue lodash
import VueLodash from 'vue-lodash'

import './registerServiceWorker'

import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-108940950-1'
})

Axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
Axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
Axios.defaults.withCredentials = true

Vue.use(VAnimateCss);
Vue.use(Vuex);
Vue.use(VueMoment);
Vue.use(VueLodash);

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
  created () {
    AOS.init()
  },
  router,
  i18n,
  store,
  moment,
  render: h => h(App)
}).$mount('#app')
