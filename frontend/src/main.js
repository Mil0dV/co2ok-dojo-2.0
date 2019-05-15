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

Axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
Axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
Axios.defaults.withCredentials = true

Vue.use(VAnimateCss);
Vue.use(Vuex);
Vue.use(VueMoment);

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  moment,
  render: h => h(App)
}).$mount('#app')
