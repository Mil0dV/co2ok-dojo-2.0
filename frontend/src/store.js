import Vue from 'vue'
import Vuex from 'vuex'
import {
    stat
} from 'fs';
import axios from 'axios'

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
            if (!state.modalStatus) {
                state.modalStatus = true
                state.modalMessage = payload.message
            } else {
                state.modalStatus = false
            }
        },

        saveUser(state, payload) {
            state.userAuthData = payload
        },

        saveUserData(state) {

            axios
                .get(`http://127.0.0.1:8000/user/authenticateUser/?id=${state.userId}`, {
                    headers: {
                        "X-CSRFToken": `${state.userToken}`,
                        Authorization: `token ${state.userToken}`
                    }
                })
                .then(response => {
                    //verify if the userdata array is empty
                    if (state.userData.length == 0) {
                        //user array is empty, push userdata
                        state.userData = response.data;
                    } else {
                        // user array !empty, empty it and push user data
                        state.userData = '';
                        state.userData = response.data;
                    }
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                    //  this.errorMessage()
                })

        },

        setLocalUserData(state, data) {
            window.localStorage.setItem('userToken', data.token);
            window.localStorage.setItem('userId', data.id);
            //    let getLocalData = {
            //        userToken: window.localStorage.getItem('userToken'),
            //        userId: window.localStorage.getItem('userId')
            //    }
            //     state.userAuthLocalData = getLocalData;
        },

        removeLocalUserData(state) {
            window.localStorage.removeItem('userToken');
            window.localStorage.removeItem('userId');
            state.userData = '';
        }

    },

    actions: {
        commitSaveUser(store, payload) {
            store.commit('saveUser', payload);
        },

        commitRemoveLocalUserData(store) {
            store.commit('removeLocalUserData');
        }

        // commitSaveUserData(store, data){
        //     store.commit('saveUserData', data);
        // }
    }
})
