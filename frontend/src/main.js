import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import VAnimateCss from 'v-animate-css'
import Vuetify from 'vuetify'
<<<<<<< HEAD
import VeeValidate from 'vee-validate'
import Vuex from 'vuex'
=======
import Axios from 'axios'
// import vue-jquery from 'vue-jquery'

Axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
Axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
Axios.defaults.withCredentials = true
>>>>>>> login configuration with vue done

import 'vuetify/dist/vuetify.min.css'
import store from './store'

Vue.use(VeeValidate);
Vue.use(VAnimateCss);
<<<<<<< HEAD
Vue.use(Vuetify);
Vue.use(Vuex);
=======
Vue.use(Vuetify)
// Vue.use(vue-jquery)
>>>>>>> login configuration with vue done

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
