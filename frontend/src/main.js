import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import VAnimateCss from 'v-animate-css'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import 'vuetify/dist/vuetify.min.css'

Vue.use(VeeValidate)
Vue.use(VAnimateCss);
Vue.use(Vuetify);

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
