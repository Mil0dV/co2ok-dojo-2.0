import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        modalMessage: '',
        modalStatus: false,
    },

    mutations: {
        modalStatus(state, payload) {
            if (payload.status === true) {
                state.modalStatus = true
                state.modalMessage = payload.message
            } else {
                state.modalStatus = false
            }
        },
    },

    actions: {

    }
})
