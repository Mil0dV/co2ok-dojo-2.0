<template>
    <div class="dashboard">
        <div class="dashboard__container">
            <div class="dashboard__header">
                <p class="dashboard__title">Dashboard</p>
                <p class="dashboard__welcome">Weclome, dfdfdfdf!</p>
            </div>

            <div class="dashboard__tabs">
                <p class="dashboard__mail">asdsadsadas</p>
                <v-tabs v-model="active" centered class="dashboard__tabs-group"
                        color="#F4F4F4" slider-color="#08BA4D">
                    <v-tab class="dashboard__tab-item text-capitalize"
                           style="background: transparent;"
                           :ripple="false">
                        Transactions
                    </v-tab>

                    <v-tab class="dashboard__tab-item text-capitalize"
                           style="background: transparent;"
                           :ripple="false">
                        Plug-in Settings
                    </v-tab>

                    <v-tab class="dashboard__tab-item text-capitalize"
                           style="background: transparent;"
                           :ripple="false">
                        My Profile
                    </v-tab>
                </v-tabs>
            </div>

            <v-tabs v-model="active" centered grow class="overflow-hidden;"
                    color="#F4F4F4" slider-color="#08BA4D">

                <v-tab  style="background: transparent; display: none;" :ripple="false">Transacties</v-tab>
                <v-tab  style="background: transparent; display: none;" :ripple="false">Plug-in Design</v-tab>
                <v-tab  style="background: transparent; display: none;" :ripple="false">Profiel</v-tab>

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
        </div>
    </div>
</template>

<script>
    const Transactions = () => import('@/components/Dashboard/Transactions')
    const Plugin = () => import('@/components/Dashboard/Plugin')
    const Profile = () => import('@/components/Dashboard/Profile')


    export default {
        name: "Dashboard",
        components: {
            Profile, Plugin, Transactions,

        },

        data() {
            return {
                active: null,
                userToken: this.$store.state.userToken,
                /*twee onderst data gebruiken alleen na dat de profile component 
                geladen(created en mounted) is*/
                userProfileData: this.$store.state.userData.userProfileData,
                userData: this.$store.state.userData.userdata
                //------------------------------------------------------------------
            }
        },

        created() {

            this.userLoginData();
        },

        methods: {

            userLoginData (){

                this.$store.commit('saveUserData');

            //   let self = this;
            //   this.$axios
            //     .get(`http://127.0.0.1:8000/user/authenticateUser/?id=${self.$store.state.userId}`, {

            //         headers: {
            //             "X-CSRFToken": '${self.$store.state.userAuthData.token}',
            //             Authorization: `token ${self.$store.state.userToken}`
            //         }

            //     })
            //     .then(response => {

            //         self.$store.commit('saveUserData', response.data);
            //         self.userProfileData = self.$store.state.userData.userProfileData;
            //         self.userData = self.$store.state.userData.userdata;
            //         console.log(response.data);
            //         console.log(this.$store.state.userData);


            //     })
            //     .catch(error => {
            //         console.log(eror);

            //         //  this.errorMessage()
            //     })
            }

        }
    }
</script>

<style scoped>
    .dashboard {
        margin: 0 auto;
        width: 100%;
        max-width: 1146px;
    }

    .dashboard__container {
        margin-top: 38px;
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
        max-width: 196px;
        width: 100%;
        font-family: 'Poppins', sans-serif;
        font-size: 17px;
        font-weight: 900;
    }

    .dashboard__content {
        margin-top: -28px;
        margin-bottom: 50px;
    }



</style>
