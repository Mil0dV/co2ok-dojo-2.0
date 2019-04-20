<template>
    <div class="dashboard">
        <p>DASHBOARD</p>
        <p>{{userToken}}</p>
        <br>

        <div>
            <v-tabs v-model="active"
                    centered grow
                    slider-color="green">

                <v-tab ripple>Transacties</v-tab>
                <v-tab ripple>Plug-in Design</v-tab>
                <v-tab ripple>Profiel</v-tab>

                <v-tab-item class="dashboard__content">
                    <Transactions></Transactions>
                </v-tab-item>

                <v-tab-item class="dashboard__content">
                    <Plugin></Plugin>
                </v-tab-item>

                <v-tab-item class="dashboard__content">
                    <Profile></Profile>
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
                userToken: this.$store.state.userData[0].token
            }
        },

        mounted() {
            this.getUserData();
            console.log(this.$store.state.userData);
            
        },

        methods: {

            getUserData() {

                let self = this;

              this.$axios
                        .get('http://127.0.0.1:8000/user/?pk='+self.$store.state.userData[0].id, {

                            body: {
                                userId: self.$store.state.userData[0].id,
                                userToken: self.$store.state.userData[0].token,
                            },

                            headers: {
                                // "X-CSRFToken": self.$store.state.userData[0].token,
                                Authorization: `token ${this.$store.state.userData[0].token}`,
                                // Authorization: 'token 432b96d13cc2142cee0eb07380150fd3c6b136d0',
                                // 'Access-Control-Allow-Origin': '*',
                                // 'Content-Type': 'application/json'
                                // 'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',
                                // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
                            }

                        })
                        .then(response => {

                            console.log(response);
                            
                        })
                        .catch(error => {
                            // this.errorMessage()
                        })

            }

        }
    }
</script>

<style scoped>
    .dashboard {
        margin: 0 auto;
        width: 80%;
    }

    .dashboard__content {
        padding-top: 50px;
    }

</style>