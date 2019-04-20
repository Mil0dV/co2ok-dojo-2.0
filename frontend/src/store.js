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
            if (payload.status === true) {
                state.modalStatus = true
                state.modalMessage = payload
            } else {
                state.modalStatus = false
            }
        },

        saveUser(state, payload) {
            state.userData.push(payload);
        }
    },

    actions: {

      commitUserData(store, payload){
       store.commit('saveUser', payload);
      }

    } 
})
