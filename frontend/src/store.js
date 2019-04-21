import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        modalMessage: '',
        modalStatus: false,
        userAuthData: [],
        userData: [],
        // userAuthLocalData: [],
        userToken: window.localStorage.getItem('userToken'),
        userId: window.localStorage.getItem('userId')
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
            state.userAuthData = payload
        },

        saveUserData(state, data){
            //verify if the userdata array is empty
            if(state.userData.length == 0){
               //user array is empty, push userdata
               state.userData = data
            }else{
              // user array !empty, empty it and push user data
              state.userData = '';
              state.userData = data
            }
        },

        setLocalUserData(state, data){
           window.localStorage.setItem('userToken',data.token);
           window.localStorage.setItem('userId', data.id);
        //    let getLocalData = {
        //        userToken: window.localStorage.getItem('userToken'),
        //        userId: window.localStorage.getItem('userId')
        //    }
        //     state.userAuthLocalData = getLocalData;
        },

        removeLocalUserData(state){
            let localData = state.userAuthLocalData;
            localData.forEach(data => {
                window.localStorage.removeItem(data);
            });
        }
    },

    actions: {
       commitSaveUser(store, payload){
           store.commit('saveUser', payload);
       },

        commitRemoveLocalUserData(store, data){
            store.commit('removeLocalUserData', data);
        },

        commitSaveUserData(store, data){
            store.commit('saveUserData', data);
        }
    }
})
