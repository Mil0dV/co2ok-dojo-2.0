<template>
    <div uk-sticky class="uk-navbar-container">
        <div>
            <div class="uk-container">
                <nav class="nav--wrapper" uk-navbar>
                    <div class="uk-navbar-left">
                        <router-link to="/" class="uk-logo">
                            <img alt="co2ok logo"
                                 :src="require('@/assets/images/nav/logo.png')">
                        </router-link>
                    </div>

                    <div class="uk-navbar-right uk-visible@m">
                        <ul class="uk-navbar-nav">
                            <li :class="[checkActive('about') ? 'navbar__active' : '']">
                                <router-link to="/about">{{locale.about}}asd</router-link>
                            </li>
                            <li :class="[checkActive('webshops') ? 'navbar__active' : '']">
                                <router-link to="/webshops">{{locale.webshops}}
                                    <span class="nav__triangle" uk-icon="icon: triangle-down"></span>
                                </router-link>
                            </li>
                            <div class="dropdown__menu-wrapper" uk-dropdown="offset: -15">
                                <ul class="uk-nav uk-dropdown-nav dropdown__nav">
                                    <li v-if="$store.state.Authenticated && $store.state.status === 'webshop'">
                                        <router-link to="/webshops/dashboard">{{locale.webshops_6}}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/webshops">{{locale.webshops}}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/webshops/retailers">{{locale.webshops_1}}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/webshops/cause-marketing">{{locale.webshops_2}}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/projects">{{locale.webshops_3}}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/webshops/plug-in-installation">{{locale.webshops_7}}
                                        </router-link>
                                    </li>
                                    <li @click="logout('consumer')"
                                        v-if="$store.state.Authenticated && $store.state.status === 'webshop'">
                                        <a>{{locale.consumers_2}}</a></li>
                                    <li v-else>
                                        <router-link to="/webshops/login">{{locale.webshops_4}}</router-link>
                                    </li>
                                </ul>
                            </div>

                            <li v-if="$store.state.Authenticated &&  $store.state.status === 'ninja'">
                                <router-link to="/consumers/profile">{{locale.consumers}}
                                    <span uk-icon="icon: triangle-down"
                                          class="animated bounceIn">
                                    </span>
                                </router-link>
                            </li>

                            <li v-else
                                :class="[checkActive('consumers') ? 'navbar__active' : '']">
                                <router-link to="/consumers/login">
                                    {{locale.consumers}}
                                </router-link>
                            </li>

                            <div v-if="$store.state.Authenticated && $store.state.status === 'ninja'"
                                 class="dropdown__menu-wrapper"
                                 uk-dropdown="offset: -15">
                                <ul class="uk-nav uk-dropdown-nav dropdown__nav">
                                    <li>
                                        <router-link to="/consumers/profile">{{locale.consumers_1}}</router-link>
                                    </li>
                                    <li @click="logout('consumer')"><a>{{locale.consumers_2}}</a></li>
                                </ul>
                            </div>

                            <li :class="[checkActive('news') ? 'navbar__active' : '']">
                                <router-link to="/news">{{locale.news}}</router-link>
                            </li>
                            <li :class="[checkActive('faq') ? 'navbar__active' : '']">
                                <router-link to="/faq">{{locale.faq}}</router-link>
                            </li>
                        </ul>
                        <a v-if="!$store.state.Authenticated" :href="this.$store.state.ninjaExtensionLink"
                           :target="this.$store.state.extensionLinkTarget" class="button">{{locale.extension}}</a>
                        <ul v-else class="uk-navbar-nav">
                            <li @click="logout()">
                                <a>{{locale.consumers_2}}</a>
                            </li>
                        </ul>

                        <div class="line"></div>
                        <transition enter-acitve-class="animated bounceIn"
                                    leave-active-class="animated bounceOut"
                                    mode="out-in">
                            <ul key="en" v-if="$store.state.language === 'en'" class="uk-navbar-nav">
                                <li @click="switchLang('en')" style="cursor: pointer">
                                    <img alt="engelse vlag" class="language-icon english icon"
                                         src="../../assets/images/nav/english-icon.png">
                                    <span class="nav__triangle" uk-icon="icon: triangle-down"></span>
                                </li>
                                <div class="dropdown__menu-wrapper" uk-dropdown="offset:10">
                                    <ul class="uk-nav uk-dropdown-nav dropdown__nav dropdown__lang">
                                        <li @click="switchLang('nl')">
                                            <img alt="nederlandse vlag" class="language-icon english icon"
                                                 src="../../assets/images/nav/dutch-icon.png">
                                        </li>
                                    </ul>
                                </div>
                            </ul>
                            <ul v-else class="uk-navbar-nav" key="nl">
                                <li @click="switchLang('nl')" style="cursor: pointer">
                                    <img alt="engelse vlag" class="language-icon english icon"
                                         src="../../assets/images/nav/dutch-icon.png">
                                    <span class="nav__triangle" uk-icon="icon: triangle-down"></span>
                                </li>
                                <div class="dropdown__menu-wrapper" uk-dropdown="offset:10">
                                    <ul class="uk-nav uk-dropdown-nav dropdown__nav dropdown__lang">
                                        <li @click="switchLang('en')">
                                            <img alt="nederlandse vlag" class="language-icon english icon"
                                                 src="../../assets/images/nav/english-icon.png">
                                        </li>
                                    </ul>
                                </div>
                            </ul>
                        </transition>
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
                        <router-link to="/about">{{locale.about}}</router-link>
                    </li>
                    <li>
                        <router-link to="/webshops">{{locale.webshops}}</router-link>
                    </li>
                    <ul class="mobile__dropdown">
                        <li v-if="$store.state.Authenticated && $store.state.status === 'webshop'">
                            <router-link to="/webshops/dashboard">{{locale.webshops_6}}</router-link>
                        </li>
                        <li>
                            <router-link to="/webshops/retailers">{{locale.webshops_1}}</router-link>
                        </li>
                        <li>
                            <router-link to="/webshops/cause-marketing">{{locale.webshops_2}}</router-link>
                        </li>
                        <li>
                            <router-link to="/projects">{{locale.webshops_3}}</router-link>
                        </li>
                        <li>
                            <router-link to="/webshops/plug-in-installation">{{locale.webshops_7}}</router-link>
                        </li>
                        <li>
                            <router-link to="/webshops/login">{{locale.webshops_4}} webshop</router-link>
                        </li>
                    </ul>
                    <li v-if="$store.state.Authenticated && $store.state.status === 'ninja'">
                        <router-link to="/consumers/profile">{{locale.consumers_1}}</router-link>
                    </li>
                    <li v-else>
                        <router-link to="/consumers/login">{{locale.consumers}}</router-link>
                    </li>
                    <li>
                        <router-link to="/news">{{locale.news}}</router-link>
                    </li>
                    <li>
                        <router-link to="/faq">{{locale.faq}}</router-link>
                    </li>
                    <li @click="logout('consumer')"
                        v-if="$store.state.Authenticated && $store.state.status === 'webshop' || $store.state.Authenticated && $store.state.status === 'ninja'">
                        <a>Logout</a></li>
                </ul>
                <a :href="this.$store.state.ninjaExtensionLink" :target="this.$store.state.extensionLinkTarget"
                   class="button">{{locale.extension}}</a>
                <hr>
                <transition enter-acitve-class="animated bounceIn"
                            leave-active-class="animated bounceOut"
                            mode="out-in">
                    <ul key="en" v-if="$store.state.language === 'en'" class="uk-navbar-nav">
                        <li @click="switchLang('en')" style="cursor: pointer">
                            <img alt="engelse vlag" class="language-icon english icon"
                                 src="../../assets/images/nav/english-icon.png">
                            <span class="nav__triangle" uk-icon="icon: triangle-down"></span>
                        </li>
                        <div class="dropdown__menu-wrapper" uk-dropdown="offset:10">
                            <ul class="uk-nav uk-dropdown-nav dropdown__nav dropdown__lang">
                                <li @click="switchLang('nl')">
                                    <img alt="nederlandse vlag" class="language-icon english icon"
                                         src="../../assets/images/nav/dutch-icon.png">
                                </li>
                            </ul>
                        </div>
                    </ul>
                    <ul v-else class="uk-navbar-nav" key="nl">
                        <li @click="switchLang('nl')" style="cursor: pointer">
                            <img alt="engelse vlag" class="language-icon english icon"
                                 src="../../assets/images/nav/dutch-icon.png">
                            <span class="nav__triangle" uk-icon="icon: triangle-down"></span>
                        </li>
                        <div class="dropdown__menu-wrapper" uk-dropdown="offset:10">
                            <ul class="uk-nav uk-dropdown-nav dropdown__nav dropdown__lang">
                                <li @click="switchLang('en')">
                                    <img alt="nederlandse vlag" class="language-icon english icon"
                                         src="../../assets/images/nav/english-icon.png">
                                </li>
                            </ul>
                        </div>
                    </ul>
                </transition>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import navLang from '../../lang/lang_nav'

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
                ],
                locale: navLang,
            }
        },

        created() {
            this.$store.commit('installNinjaButton')
        },

        mounted() {
            if (this.$store.state.userData.length > 0) {
                this.userLoggedIn = true;
            }
            this.checkLanguage()

        },

        methods: {
            switchLang(lang) {
                this.$store.commit('languageStatus', lang)
            },

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
                    return true
                }
            },

            checkLanguage(lang) {
                if (lang === 'en') {
                    this.locale = navLang.lang_en_nav
                } else {
                    if (this.currentLanguage === 'en') {
                        this.locale = navLang.lang_en_nav
                    } else {
                        this.locale = navLang.lang_nl_nav
                    }
                }
            }
        },

        computed: {
            currentRouteName() {
                return this.$route.name;
            },

            currentLanguage() {
                return this.$store.state.language
            }
        },

        watch: {
            '$route'() {
                this.userLoggedIn = this.$router.currentRoute['name'] === 'dashboard';
            },

            currentLanguage(value) {
                this.checkLanguage(value)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/layout/nav';

    .navbar__active {
        border-bottom: 4px solid #10DC87;
    }
</style>