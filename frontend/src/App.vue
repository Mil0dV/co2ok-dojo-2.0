<template>
    <v-app id="app">
        <Nav :routeName="currentRouteName"/>
            <Header :routeName="currentRouteName" v-if="checkHeader()"/>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
            <router-view :routeName="currentRouteName" style="flex:1 1 auto; "></router-view>
        </transition>
        <!--<Footer/>-->
        <Modal v-if="$store.state.modalStatus"/>
    </v-app>
</template>

<script>
    const Modal = () => import('@/components/modals/Modal')
    const Nav = () => import('@/components/layout/Nav')
    const Header = () => import('@/components//layout/Header')
    const Footer = () => import('@/components/layout/Footer')

    export default {
        name: 'App',
        components: {
            Modal, Nav, Header, Footer
        },

        data() {
            return {
                headerTitle: [
                    {steps: 'CO₂-compensation'}
                ]
            }
        },

        methods: {
            checkHeader() {
                if (this.currentRouteName !== 'dashboard' || 'home' || 'register' || 'login') {
                    return true
                }
            }
        },


        computed: {
            currentRouteName() {
                return this.$route.name;
            }
        },

    }
</script>

<style lang="scss">
    #app {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        // background: #F4F4F4;   zou je deze propertie alleen in pagina's waar de achterground #f4f4f4 is, anders wordt het in de hele app gebruikt als defauld background
        padding: 0;
        margin: 0;
        width: 100vw;
        min-height: 100vh;
        display: flex;
    }

    input:focus {
        border: 1px solid #08BA4D !important;
        box-shadow: 0 0 1px #08BA4D;
        outline: none;
    }
</style>