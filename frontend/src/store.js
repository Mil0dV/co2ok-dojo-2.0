import Vue from 'vue'
import Vuex from 'vuex'
import {
    stat
} from 'fs';
// import axios from 'axios'

Vue.use(Vuex)
import axios from 'axios'

export default new Vuex.Store({
    state: {
        SITE_HOST: 'http://127.0.0.1:8000', 
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
        Authenticated: window.localStorage.getItem('Authenticated'),
        //graph variabels
        x_asLabel: [],
        graphData: []

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
            if (payload) {
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
                .get(`${state.SITE_HOST}/user/authenticateUser/?id=${window.localStorage.getItem('userId')}`, {
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
        },

        monthGraphData(state) {
          state.x_asLabel = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']
          state.graphData = [0, 100, 50, 200, 150, 250, 55, 23, 71, 220, 171, 58]
        },

        weekGraphData(state) {
          state.x_asLabel = ['MON', 'TUE', 'WED', 'THU', 'FRY', 'SAT', 'SUN']
          state.graphData = [2, 40, 71, 35, 100, 21, 333]
        }

    },

    actions: {
        commitSaveUser(store, payload) {
            store.commit('saveUser', payload);
        },

        commitRemoveLocalUserData(store) {
            store.commit('removeLocalUserData');
        },

        commitGetUserData(store) {
            store.commit('getUserData');
        }
    }
})
