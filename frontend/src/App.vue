<template>
    <v-app id="app">
        <div class="body">
            <Nav class="animated fadeInDown"/>
            <router-view class="animated fadeIn"></router-view>
            <Footer/>
        </div>
        <Modal v-if="$store.state.modalStatus"/>
    </v-app>
</template>

<script>
    import Vue from 'vue'
    import Vuetify from 'vuetify'
    import Nav from '@/components/layout/Nav'
    import Footer from '@/components/layout/Footer'
    const Modal = () => import('@/components/modals/Modal')

    Vue.use(Vuetify);

    export default {
        name: 'App',
        components: {
            Nav, Footer, Modal
        },

        computed: {
            loginStatus: function() {
                return this.$store.state.userStatus;
            },
        },
    }
</script>

<style lang="scss">
    @import 'styles/layout/main';
    @import '../node_modules/uikit/dist/css/uikit.min.css';


    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        font-family: 'Poppins', sans-serif;
    }

    @font-face {
        font-display: auto;
        font-family: 'Poppins', sans-serif;
    }

    .body {
        min-height: 100vh;
        height: auto;
    }

    input:focus {
        border: 1px solid #08BA4D !important;
        box-shadow: 0 0 1px #08BA4D;
        outline: none;
    }
</style>