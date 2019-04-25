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
        userStatus: false,
        // userAuthLocalData: [],
        userToken: window.localStorage.getItem('userToken'),
        userId: window.localStorage.getItem('userId'),
        //return a booleam of user login status
        Authenticated: window.localStorage.getItem('Authenticated')
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

        isLoggedIn(state, payload) {
            if(payload){
                state.userStatus = true
            } else {
                state.userStatus = false
            }
        },

        saveUser(state, payload) {
            state.userAuthData = payload
        },

        getUserData(state) {
            axios
                .get(`http://127.0.0.1:8000/user/authenticateUser/?id=${window.localStorage.getItem('userId')}`, {
                    headers: {
                        "X-CSRFToken": `${state.userToken}`,
                        Authorization: `token ${window.localStorage.getItem('userToken')}`
                    }
                })
                .then(response => {
                    //verify if the userdata array is empty
                    if (state.userData.length == 0) {
                        //user array is empty, push userdata
                        state.userData = response.data;
                        state.userStatus = true;

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
            window.localStorage.setItem('Authenticated', true)
            //    let getLocalData = {
            //        userToken: window.localStorage.getItem('userToken'),
            //        userId: window.localStorage.getItem('userId')
            //    }
            //     state.userAuthLocalData = getLocalData;
        },

        // empty user authenticate data if the are logout
        removeLocalUserData(state) {
            window.localStorage.removeItem('userToken');
            window.localStorage.removeItem('userId');
            window.localStorage.setItem('Authenticated', false);
            state.userData = '';
            state.userStatus = false
        }

    },

    actions: {
        commitSaveUser(store, payload) {
            store.commit('saveUser', payload);
        },

        commitRemoveLocalUserData(store) {
            store.commit('removeLocalUserData');
        },

        commitGetUserData(store){
            store.commit('getUserData');
        }
    }
})
