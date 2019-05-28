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
        component: 'news', //use in blo.vue as dynamic template
        generatedNinjaName: '',
        ninjaExtensionLink: '',
        extensionLinkTarget: '',
        browserLogo: ''

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
            if (payload === 'true') {
                Vue.set(state.userStatus, status, true)
            } else {
                Vue.set(state.userStatus, status, false)
            }
        },

        saveUser(state, payload) {
            state.userAuthData = payload
        },

        // merchant profile en user data
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
                        if(response.data.authData){
                            if (state.userData.length == 0) {
                                //user array is empty, push userdata
                                state.userData = response.data;
                                state.userStatus = true;

                            } else {
                                // user array !empty, empty it and push user data
                                state.userData = '';
                                state.userData = response.data;
                            }
                        }else{
                            console.log('user should be redirect to the login page');
                            
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
                            id: window.localStorage.getItem('userId'),
                            // token: window.localStorage.getItem('userToken')
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
                        // console.log(response.data);
                        

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
        },

        //ninja extension install button link adapter(check if user is using chrome/firefox, desktop/mobile/tablet)
        installNinjaButton(state){
            if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
                    if (navigator.userAgent.indexOf("Chrome") > -1) {
                        state.extensionLinkTarget = '_blank'
                        state.ninjaExtensionLink = 'https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe'
                        state.browserLogo = 'chrome.svg'
                    } else if (navigator.userAgent.indexOf("Firefox") > -1) {
                        state.extensionLinkTarget = '_blank'
                        state.ninjaExtensionLink = 'https://addons.mozilla.org/en-US/firefox/addon/co2ok-ninja/'
                        state.browserLogo = 'firefox.svg'
                    } else if (navigator.userAgent.match(/iPad/i) != null) {
                       state.extensionLinkTarget = '_self'
                        // button.attr('href', '/partner-stores/');
                    } else if (navigator.userAgent.match(/i(Phone|Pod)/i)) {
                       state.extensionLinkTarget = '_self'
                        // button.attr('href', '/partner-stores/');
                    } else {
                       state.extensionLinkTarget = '_self'
                       state.ninjaExtensionLink = '/faq'
                    //    state.ninjaExtensionLink = 'http://co2ok.eco/faq-co2ok-ninja-without-extension/#ninja-without-extension-desktop'
                    }
            }else if (navigator.userAgent.indexOf("Chrome") > -1) {
                state.extensionLinkTarget = '_blank'
                state.ninjaExtensionLink = 'https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe'
                state.browserLogo = 'chrome.svg'
            } else if (navigator.userAgent.indexOf("Firefox") > -1) {
                state.extensionLinkTarget = '_blank'
                state.ninjaExtensionLink = 'https://addons.mozilla.org/en-US/firefox/addon/co2ok-ninja/'
                state.browserLogo = 'firefox.svg'
            } else if (navigator.userAgent.indexOf("Safari") > -1) {
               state.extensionLinkTarget = '_self'
                // button.attr('href', '/partner-stores/');
            } else if (navigator.userAgent.match(/iPad/i) != null) {
               state.extensionLinkTarget = '_self'
                // button.attr('href', '/partner-stores/');
            } else if (navigator.userAgent.match(/i(Phone|Pod)/i)) {
               state.extensionLinkTarget = '_self'
                // button.attr('href', '/partner-stores/');
            } else {
                // alert('This browser isn\'t supported \r\n(only Chrome and FireFox are currently supported)');
               state.extensionLinkTarget = '_self'
               state.ninjaExtensionLink = '/faq'
            //    state.ninjaExtensionLink = 'http://co2ok.eco/faq-co2ok-ninja-without-extension/#ninja-without-extension-desktop'
            }

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
