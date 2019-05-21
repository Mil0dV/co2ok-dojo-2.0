<template>
    <div uk-sticky class="uk-navbar-container">
        <div>
            <div class="uk-container">
                <nav uk-navbar>
                    <div class="uk-navbar-left">
                        <router-link to="/" class="uk-logo"><img :src="require('@/assets/images/nav/logo.png')">
                        </router-link>
                    </div>

                    <div class="uk-navbar-right uk-visible@m">
                        <ul class="uk-navbar-nav">
                            <li :class="[checkActive('about') ? 'navbar__active' : '']">
                                <router-link to="/about">About</router-link>
                            </li>
                            <li :class="[checkActive('webshops') ? 'navbar__active' : '']">
                                <router-link to="/webshops">Webshops <span uk-icon="icon: triangle-down"></span>
                                </router-link>
                            </li>
                            <div uk-dropdown="offset: -15">
                                <ul class="uk-nav uk-dropdown-nav dropdown__nav">
                                    <li :class="[checkActive('webshops') ? 'navbar__active' : '']">
                                        <router-link to="/webshops">Webshops</router-link>
                                    </li>
                                    <li :class="[checkActive('retailers') ? 'navbar__active' : '']">
                                        <router-link to="/webshops/retailers">Retailers</router-link>
                                    </li>
                                    <li :class="[checkActive('cause-marketing') ? 'navbar__active' : '']">
                                        <router-link to="/webshops/cause-marketing">Cause Marketing</router-link>
                                    </li>
                                </ul>
                            </div>

                            <li :class="[checkActive('consumers') ? 'navbar__active' : '']">
                                <router-link to="/consumers">Consumers</router-link>
                            </li>
                            <li :class="[checkActive('news') ? 'navbar__active' : '']">
                                <router-link to="/news">News</router-link>
                            </li>
                            <li :class="[checkActive('faq') ? 'navbar__active' : '']">
                                <router-link to="/faq">FAQ</router-link>
                            </li>
                        </ul>
                        <a href="https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe" class="button">Extension</a>
                        <div class="line"></div>
                        <a>
                            <img class="language-icon english icon" src="../../assets/images/nav/english-icon.png">
                            <span uk-icon="icon: triangle-down"></span>
                        </a>
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
                        <router-link to="/consumers">Consumers</router-link>
                    </li>
                    <li>
                        <router-link to="/news">News</router-link>
                    </li>
                    <li>
                        <router-link to="/faq">FAQ</router-link>
                    </li>
                </ul>
                <a class="button">Extension</a>
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
                        header: {"X-CSRFToken": 'gZvnzSFeGp7h68WjCzmFky6wMkiJZXDU',}

                    })
                    .then(response => {
                        if (response.data.logout) {
                            this.$store.commit('removeLocalUserData')
                            this.$router.push('/login')
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
    .uk-navbar-container /deep/ {
        @import "~uikit/dist/css/uikit.min.css";
    }

    @import '../../styles/main.scss';
    @import '../../styles/nav.scss';

    .navbar__active {
        border-bottom: 4px solid #10DC87;
    }
</style>