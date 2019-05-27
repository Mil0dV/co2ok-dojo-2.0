<template>
    <div uk-sticky class="uk-navbar-container">
        <div>
            <div class="uk-container">
                <nav class="nav--wrapper" uk-navbar>
                    <div class="uk-navbar-left">
                        <router-link to="/" class="uk-logo"><img :src="require('@/assets/images/nav/logo.png')">
                        </router-link>
                        <p>{{this.$store.state.userStatus}}</p>
                    </div>

                    <div class="uk-navbar-right uk-visible@m">
                        <ul class="uk-navbar-nav">
                            <li :class="[checkActive('about') ? 'navbar__active' : '']">
                                <router-link to="/about">About</router-link>
                            </li>
                            <li :class="[checkActive('webshops') ? 'navbar__active' : '']">
                                <router-link to="/webshops">Webshops <span class="nav__triangle"
                                                                           uk-icon="icon: triangle-down"></span>
                                </router-link>
                            </li>
                            <div class="dropdown__menu-wrapper" uk-dropdown="offset: -15">
                                <ul class="uk-nav uk-dropdown-nav dropdown__nav">
                                    <li>
                                        <router-link to="/webshops">Webshops</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/webshops/retailers">Retailers</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/webshops/cause-marketing">Cause Marketing</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/webshops/projects">Projects</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/webshops/login">Login</router-link>
                                    </li>
                                </ul>
                            </div>

                            <li v-if="!$store.state.userStatus"
                                :class="[checkActive('consumers') ? 'navbar__active' : '']">
                                <router-link  to="/consumers/login">
                                    Consumers
                                </router-link>
                            </li>
                            <li v-else>
                                <router-link to="/consumers/profile">Consumers
                                    <span uk-icon="icon: triangle-down"
                                          class="animated bounceIn">
                                    </span>
                                </router-link>
                            </li>
                            <div v-if="$store.state.userStatus" class="dropdown__menu-wrapper" uk-dropdown="offset: -15">
                                <ul class="uk-nav uk-dropdown-nav dropdown__nav">
                                    <li>
                                        <router-link to="/consumers/profile">Profile</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/consumers/login">Logout</router-link>
                                    </li>
                                </ul>
                            </div>

                            <li :class="[checkActive('news') ? 'navbar__active' : '']">
                                <router-link to="/news">News</router-link>
                            </li>
                            <li :class="[checkActive('faq') ? 'navbar__active' : '']">
                                <router-link to="/faq">FAQ</router-link>
                            </li>
                        </ul>
                        <a v-if="!$store.state.userStatus" :href="this.$store.state.ninjaExtensionLink"
                           :target="this.$store.state.extensionLinkTarget" class="button">Extension</a>
                        <ul v-else class="uk-navbar-nav">
                            <li @click="logout()">
                                <a>Logout</a>
                            </li>
                        </ul>

                        <div class="line"></div>
                        <p>
                            <img class="language-icon english icon" src="../../assets/images/nav/english-icon.png">
                            <span class="nav__triangle" uk-icon="icon: triangle-down"></span>
                        </p>
                    </div>

                    <div class="uk-navbar-right uk-hidden@m">
                        <a class="uk-navbar-toggle" uk-toggle="target: #offcanvas-nav">
                            <span uk-navbar-toggle-icon></span>
                            <!--<span class="uk-margin-small-left">Menu</span>-->
                        </a>
                    </div>

                </nav>
            </div>
        </div>

        <div id="offcanvas-nav" uk-offcanvas="overlay: true; flip: true">
            <div class="uk-offcanvas-bar">

                <ul class="uk-nav uk-nav-default">
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                    <li>
                        <router-link to="/webshops">Webshops</router-link>
                    </li>
                    <li>
                        <router-link to="/webshops/retailers">Retailers</router-link>
                    </li>
                    <li>
                        <router-link to="/webshops/cause-marketing">Cause Marketing</router-link>
                    </li>
                    <li>
                        <router-link to="/webshops/projects">Projects</router-link>
                    </li>
                    <li>
                        <router-link to="/webshops/login">Login webshop</router-link>
                    </li>
                    <li>
                        <router-link to="/consumers/login">Consumers</router-link>
                    </li>
                    <li>
                        <router-link to="/news">News</router-link>
                    </li>
                    <li>
                        <router-link to="/faq">FAQ</router-link>
                    </li>
                </ul>
                <a :href="this.$store.state.ninjaExtensionLink" :target="this.$store.state.extensionLinkTarget"
                   class="button">Extension</a>
                <hr>
                <a><img class="language-icon english icon" src="../../assets/images/nav/english-icon.png"></a>
                <!--<a><img class="language-icon dutch-icon" src="assets/files/dutch-icon.png"></a>-->

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Nav",

        data() {
            return {
                userLoggedIn: null,
                menu: [
                    {title: 'About', link: '/about'},
                    {title: 'Webshops', link: '/webshops'},
                    {title: 'Consumers', link: '/consumers'},
                    {title: 'News', link: '/news'},
                    {title: 'FAQ', link: '/faq'},
                ]
            }
        },

        mounted() {
            if (this.$store.state.userData.length > 0) {
                this.userLoggedIn = true;
            }
        },

        methods: {
            logout() {
                axios
                    .post('http://127.0.0.1:8000/logout/', {
                        // header: {"X-CSRFToken": 'gZvnzSFeGp7h68WjCzmFky6wMkiJZXDU',}
                    })
                    .then(response => {
                        if (response.data.logout) {
                            this.$store.commit('isLoggedIn', false)
                            this.$store.commit('removeLocalUserData')
                            this.$router.push('/')
                        }
                    })
                    .catch(error => {
                        this.errorMessage()
                    })
            },

            checkActive(menu) {
                if (this.currentRouteName === menu.toLowerCase()) {
                    return true
                }

                if (menu === 'webshops' && this.currentRouteName === 'retailers' || menu === 'webshops' && this.currentRouteName === 'cause-marketing'
                    || menu === 'webshops' && this.currentRouteName === 'plug-in-installation' || menu === 'webshops' && this.currentRouteName === 'webshops-register'
                    || menu === 'webshops' && this.currentRouteName === 'webshops-login' || menu === 'webshops' && this.currentRouteName === 'dashboard') {
                    console.log(this.currentRouteName)
                    return true
                }
            }
        },

        computed: {
            currentRouteName() {
                return this.$route.name;
            }
        },

        watch: {
            '$route'() {
                this.userLoggedIn = this.$router.currentRoute['name'] === 'dashboard';
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/layout/nav';

    .navbar__active {
        border-bottom: 4px solid #10DC87;
    }
</style>