<template>
    <v-app class="dashboard">
        <div class="dashboard__container" v-if="Authenticated">
            <div class="dashboard__header">
                <h1 class="dashboard__title">Dashboard</h1>
                <h5 class="dashboard__welcome">Weclome, {{this.$store.state.userData.userdata.username}}!</h5>
            </div>

            <div class="dashboard__tabs hidden-xs-only">
                <p class="dashboard__mail hidden-sm-and-down">{{this.$store.state.userData.userdata.email}}</p>
                <v-tabs v-model="active" centered class="dashboard__tabs-group"
                        color="#F4F4F4" slider-color="#08BA4D">
                    <v-tab class="dashboard__tab-item text-capitalize"
                           style="background: transparent;" @click.native="changeTab(active)"
                           :ripple="false">
                        <p>Transactions</p>
                        <v-icon class="tab__icon" style="transform: rotate(120deg);">sync</v-icon>
                    </v-tab>

                    <v-tab class="dashboard__tab-item text-capitalize"
                           style="background: transparent;" @click.native="changeTab(active)"
                           :ripple="false">
                        <p>Plug-in Settings</p>
                        <v-icon class="tab__icon">edit</v-icon>
                    </v-tab>

                    <v-tab class="dashboard__tab-item text-capitalize"
                           style="background: transparent;" @click.native="changeTab(active)"
                           :ripple="false">
                        <p>My Profile</p>
                        <v-icon class="tab__icon">person</v-icon>
                    </v-tab>
                </v-tabs>
            </div>

            <v-tabs v-model="active" centered grow class="hidden-xs-only"
                    color="#F4F4F4" slider-color="#08BA4D">

                <v-tab style="background: transparent; display: none;" :ripple="false">Transacties</v-tab>
                <v-tab style="background: transparent; display: none;" :ripple="false">Plug-in Design</v-tab>
                <v-tab style="background: transparent; display: none;" :ripple="false">Profiel</v-tab>

                <v-tab-item class="dashboard__content">
                    <Transactions class="animated fadeInt"></Transactions>
                </v-tab-item>

                <v-tab-item class="dashboard__content">
                    <Plugin class="animated fadeIn"></Plugin>
                </v-tab-item>

                <v-tab-item class="dashboard__content">
                    <Profile class="animated fadeIn"></Profile>
                </v-tab-item>
            </v-tabs>

            <!--Mobile menu-->
            <v-card class="hidden-sm-and-up mobile__tab">
                <v-bottom-nav
                        class="bottomBar"
                        :active.sync="view"
                        :value="true"
                        color="transparent">
                    <v-btn :ripple="false" color="#10DC87" flat value="Transactions"
                           @click.native="changeTab(0)">
                        <span>Transactions</span>
                        <v-icon style="transform: rotate(120deg);">sync</v-icon>
                    </v-btn>

                    <v-btn :ripple="false" color="#10DC87" flat value="Plugin"
                           @click.native="changeTab(1)">
                        <span>Plug-in</span>
                        <v-icon>edit</v-icon>
                    </v-btn>

                    <v-btn :ripple="false" color="#10DC87" flat value="Profile"
                           @click.native="changeTab(2)">
                        <span>Profile</span>
                        <v-icon>person</v-icon>
                    </v-btn>
                </v-bottom-nav>
                <v-spacer></v-spacer>

                <v-card-text style="overflow: hidden;">
                    <transition enter-active-class="animated fadeIn"
                                leave-active-class="animated fadeOut"
                                enter mode="out-in">
                        <component :is="view"></component>
                    </transition>
                </v-card-text>
            </v-card>
        </div>

    </v-app>
</template>

<script>
    import Vue from 'vue'
    import Vuetify from 'vuetify'
    import 'vuetify/dist/vuetify.min.css'

    Vue.use(Vuetify);

    const Transactions = () => import('@/components/dashboard/Transactions')
    const Plugin = () => import('@/components/dashboard/Plugin')
    const Profile = () => import('@/components/dashboard/Profile')
    export default {
        name: "Dashboard",
        components: {
            'Profile': Profile, 'Plugin': Plugin,
            'Transactions': Transactions

        },

        data() {
            return {
                active: null,
                userToken: this.$store.state.userToken,
                /*twee onderste data gebruiken alleen na dat de profile component 
                geladen(created en mounted) is*/
                userProfileData: this.$store.state.userData.userProfileData,
                userData: this.$store.state.userData.userdata,
                bottomNav: 'Transactions',
                view: 'Transactions',
                Authenticated: window.localStorage.getItem('Authenticated')
                //------------------------------------------------------------------
            }
        },

        created() {
            if (this.Authenticated == null) {
               this.$router.push('/webshops/login')
            }
        },

        mounted() {

            this.$store.dispatch('commitGetUserData');    
            console.log(this.Authenticated);
                    

        },

        methods: {
            changeTab(order) {
                if (order === 0) {
                    this.view = 'Transactions'
                    this.active = 0
                } else if (order === 1) {
                    // con
                    this.view = 'Plugin'
                    this.active = 1
                } else if (order === 2) {
                    this.view = 'Profile'
                    this.active = 2
                }
            },

            // deze functie checkt de gebruikers loggin status(boolean) en stuur ze naar
            // de account/login pagina
            ifAuthenticated() {
                alert(localStorage.getItem('Authenticated'))
                if (localStorage.getItem('Authenticated')) {
                    alert('logged in')
                } else {
                    this.$router.push('login')
                    alert('not auth')
                }
            }

        }
    }
</script>

<style scoped>
    .dashboard {
        border: 1px solid transparent;
        background: #F4F4F4;
        margin: 0 auto;
        width: 100%;
        padding: 0 60px;
        height: 100%;
        min-height: 93vh;
    }

    .dashboard__container {
        width: 100%;
        max-width: 1146px;
        margin: 38px auto 100px;
        display: flex;
        flex-direction: column;
    }

    .dashboard__title {
        font-size: 36px;
        font-weight: 600;
        color: #08BA4D;
        text-align: left;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
    }

    .dashboard__welcome {
        margin: 0;
        padding: 0;
        color: #2F2F2F;
        font-size: 24px;
        text-align: left;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
    }

    .dashboard__mail {
        margin: 0;
        padding: 0;
        text-align: left;
        color: #2F2F2F;
        font-size: 18px;
        flex: 1;
        font-family: 'Source Sans Pro', sans-serif;
    }

    .dashboard__tabs {
        max-height: 65px;
        height: 100%;
        margin-top: -10px;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #E2E2E2;
    }

    .dashboard__tabs-group {
        max-width: 632px;
        width: 100%;
        flex: 2;
    }

    .dashboard__tab-item {
        margin-right: 22px;
        max-width: 300px;
        width: 100%;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 900;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .dashboard__tab-item p {
        padding: 0;
        margin: 0;
    }

    .tab__icon {
        color: black;
        margin-left: 10px;
    }

    .dashboard__content {
        margin-top: -28px;
        margin-bottom: 50px;
    }


    @media (max-width: 980px) {
        .dashboard {
            padding: 0 20px;
            margin-bottom: 30px;
        }

        .dashboard__container {
            width: 100%;
        }

        .dashboard__tabs {
            justify-content: center;
            margin-top: 10px;
        }

        .dashboard__tab-item {
            font-size: 15px;
            max-width: none;
            margin-right: 0;
        }

        .dashboard__title {
            font-size: 26px;
        }

        .dashboard__welcome {
            font-size: 18px;
        }

        .tab__icon {
            font-size: 18px;
        }

        .dashboard__tabs-group {
            max-width: none;
        }
    }

    @media (max-width: 600px) {
        .mobile__tab {
            margin-top: 20px;
            border-radius: 4px;
        }

        .bottomBar {
            background: white !important;
        }

        .dashboard__header {
            overflow: hidden;
        }
    }
</style>
