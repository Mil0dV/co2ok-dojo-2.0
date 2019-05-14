<template>
    <v-app id="app">
        <div class="body">
            <Nav :routeName="currentRouteName"/>
            <!--<transition-group enter-active-class="animated fadeIn" mode="out-in">-->
            <Header :key="showHeader" :routeName="currentRouteName" v-if="showHeader"/>
            <router-view class="view" :key="currentRouteName" :routeName="currentRouteName"></router-view>
            <!--</transition-group>-->
        </div>
        <Footer/>
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
                showHeader: false
            }
        },

        methods: {
            checkHeader() {
                if (this.currentRouteName === 'dashboard' || this.currentRouteName === 'register' ||
                    this.currentRouteName === 'login' || this.currentRouteName === 'home') {
                    this.showHeader = false
                } else {
                    this.showHeader = true
                }
            }
        },

        mounted() {
            this.checkHeader()
        },

        computed: {
            currentRouteName() {
                return this.$route.name;
            }
        },

        watch: {
            currentRouteName: function () {
                this.checkHeader()
            }
        }

    }
</script>

<style lang="scss">
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
        width: 100vw;
        min-height: 100vh;
        display: flex;
        overflow: hidden;
    }

    .body {
        min-height: 100vh;
        height: 100%;
    }

    .view {
        height: 100%;
    }

    input:focus {
        border: 1px solid #08BA4D !important;
        box-shadow: 0 0 1px #08BA4D;
        outline: none;
    }

    $main-color: #08BA4D;
    $secondary-color: #10DC87;
    $main-gradient: linear-gradient(to bottom, #10dc87 0%, #08ba4d 100%);
    $text-color: #2F2F2F;

    /* ------- Main things ------- */

    h1, h2, h3, p, a, label, input, ::placeholder {
        font-family: 'Poppins', sans-serif !important;
        margin: 0;
        padding: 0;
    }

    h1 {
        color: #606468;
        font-weight: 600;
        margin: 0;
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 20px;
    }

    .subheading {
        color: $main-color;
        font-size: 18px;
    }

    p, a, input, ::placeholder {
        font-size: 16px !important;
    }

    p, label, input {
        color: $text-color;
    }

    p {
        margin: 0;
        padding: 0;
    }

    label {
        font-size: 14px;
    }

    input {
        display: block;
        margin-top: 4px;
        margin-bottom: 15px;
        border-radius: 3px;
        border: 1px solid #BCBCBC;
        padding: 13px;
        width: 100%;
        box-sizing: border-box;

        &:focus {
            outline: none;
            border: 1px solid $main-color;
        }
    }

    ::placeholder {
        color: #959595;
    }

    a {
        &:hover {
            text-decoration: none !important;
        }
    }

    .link {
        color: $main-color;
        padding: 0 !important;
        margin: 0 !important;

        &:hover {
            color: $main-color;
            text-decoration: underline;
        }
    }
</style>