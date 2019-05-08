import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import VAnimateCss from 'v-animate-css'
import Vuetify from 'vuetify'
import store from './store'
import Vuex from 'vuex'
// vue-moment imports
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

import 'vuetify/dist/vuetify.min.css'

Axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
Axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
Axios.defaults.withCredentials = true

// Vue.use(VeeValidate);
Vue.use(VAnimateCss);
Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueMoment);

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
  router,
  store,
  moment,
  render: h => h(App)
}).$mount('#app')
