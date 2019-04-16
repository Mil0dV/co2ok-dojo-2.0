<template>
    <div class="dashboard">
        <p>DASHBOARD</p>
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
            Profile, Plugin, Transactions
        },

        data () {
            return {
                active: null,
            }
        },

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