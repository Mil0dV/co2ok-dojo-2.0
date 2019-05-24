import Vue from 'vue'
import Vuex from 'vuex'
import {
    stat
} from 'fs';
// import axios from 'axios'

Vue.use(Vuex)
import axios from 'axios'
// import {router} from "../src/router.js"

export default new Vuex.Store({
    state: {
        SITE_HOST: 'http://127.0.0.1:8000',
        domain: window.location.protocol + '//' + window.location.hostname + ':' + window.location.port,
        count: 0,
        modalMessage: '',
        modalStatus: false,
        userAuthData: [],
        userData: [],
        ninjaData: [],
        userStatus: false,
        // userAuthLocalData: [],
        userToken: window.localStorage.getItem('userToken'),
        userId: window.localStorage.getItem('userId'),
        //return a booleam of user login status
        Authenticated: window.localStorage.getItem('Authenticated'),
        //graph variabels
        x_asLabel: [],
        graphData: [],
        blogs: [],
        component: 'blog', //use in blo.vue as dynamic template
        generatedNinjaName: '',

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
           if (window.localStorage.getItem('Authenticated')) {
                axios
                    .get(`${state.SITE_HOST}/user/userData/`, {
                        params: {
                            id: window.localStorage.getItem('userId')
                        },
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

                    })
                    .catch(error => {
                        console.log(error);
                        //  this.errorMessage()
                    })
           }else{
            console.log('not authenticated');
            
           }

        },

        ninjaUserData(state){

            if (window.localStorage.getItem('Authenticated')) {
                axios
                    .get(`${state.SITE_HOST}/ninja/ninjaData/`, {
                        params: {
                            id: window.localStorage.getItem('userId')
                        },
                        headers: {
                            "X-CSRFToken": `${state.userToken}`,
                            Authorization: `token ${window.localStorage.getItem('userToken')}`
                        }
                    }).then(response => {

                        //verify if the userdata array is empty
                        if (state.ninjaData.length == 0) {
                            //user array is empty, push userdata
                            state.ninjaData = response.data;
                            state.userStatus = true;

                        } else {
                            // user array !empty, empty it and push user data
                            state.ninjaData = '';
                            state.ninjaData = response.data;
                        }
                        console.log(response.data);
                        

                    }).catch(error => {
                        console.log(error);
                        
                    })
            }

        },

        generateUserName(state) {
            let result = 'ninja@'
             state.generatedNinjaName = result += Math.random().toString(36).substring(2, 7)
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

        //haal de merchant huidige maand en jaar transacties data uit de dynamoDB
        merchantTransactionsGraphData(state) {

            // let currentMonth = this.$moment().format('M')
            let currentYear = this.$moment().year()
            let merchantId = this.$route.params.merchantId

            axios.get(`${state.SITE_HOST}/transactionsData/
            ?year=${currentYear}+
            id=${merchantId}`, {
                headers: {
                    "X-CSRFToken": `${state.userToken}`,
                    Authorization: `token ${window.localStorage.getItem('userToken')}`
                }
            }).then(response => {
                console.log(response);

            }).catch(error => {
                console.log(error);

            })

        },

        yearGraphData(state, data) {
            state.x_asLabel = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']
            state.graphData = data
        },

        weekGraphData(state, data) {
            state.x_asLabel = ['MON', 'TUE', 'WED', 'THU', 'FRY', 'SAT', 'SUN']
            state.graphData = data
            
        },

        roundGraphData(state, data){
            let roundedData = Math.round(data)
            return roundedData
        },

        getBlogs(state, data){
            state.blogs = data
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
        },

        commitNinjaUserData(store){
            store.commit('ninjaUserData')
        }
    }
})
