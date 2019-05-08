import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import VAnimateCss from 'v-animate-css'
import Vuetify from 'vuetify'
// import VeeValidate from 'vee-validate'
import store from './store'
import Vuex from 'vuex'
// vue-moment imports
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

import 'vuetify/dist/vuetify.min.css'
import store from './store'

// import Vuikit from 'vuikit'
// import VuikitIcons from '@vuikit/icons'
// import '@vuikit/theme'

Axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
Axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
Axios.defaults.withCredentials = true


import 'vuetify/dist/vuetify.min.css'

// Vue.use(VeeValidate);
Vue.use(VAnimateCss);
Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueMoment);
// Vue.use(require('vue-moment'));

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
// Vue.prototype.$moment = VueMoment

new Vue({
  router,
  store,
  moment,
  render: h => h(App)
}).$mount('#app')
