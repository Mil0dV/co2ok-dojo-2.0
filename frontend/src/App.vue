<template>
    <v-app id="app">
        <div class="body">
            <Nav/>
            <router-view class="view-route animated fadeIn"></router-view>
        </div>
        <Footer/>
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
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        // background: #F4F4F4;
        // background: #F4F4F4;   zou je deze propertie alleen in pagina's waar de achterground #f4f4f4 is, anders wordt het in de hele app gebruikt als defauld background
        padding: 0;
        margin: 0;
        /*width: 100vw;*/
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .body {
        min-height: 100vh;
        height: 100%;
    }

    .view-route {
        min-height: 97vh;
        height: 100%;
    }

    input:focus {
        border: 1px solid #08BA4D !important;
        box-shadow: 0 0 1px #08BA4D;
        outline: none;
    }
</style>