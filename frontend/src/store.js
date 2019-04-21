import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        modalMessage: '',
        modalStatus: false,
        userData: [],
    },

    mutations: {
        modalStatus(state, payload) {
            if(!state.modalStatus) {
                state.modalStatus = true
                state.modalMessage = payload.message
            } else {
                state.modalStatus = false
            }
        },

        saveUser(state, payload) {
            state.userData = payload
        }
    },

    actions: {}
})
