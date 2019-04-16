import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VAnimateCss from 'v-animate-css'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import Vuetify from 'vuetify'

import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(VAnimateCss);
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
