<template>
    <div uk-sticky class="uk-navbar-container">
        <div class="navbar__outer">
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
                            <li>
                                <router-link :class="[checkActive('webshops') ? 'navbar__active' : '']" to="/webshops/retailers">
                                    {{ $t('nav.webshops') }}
                                    <span class="nav__triangle" uk-icon="icon: triangle-down"></span>
                                </router-link>
                            </li>

                            <div class="dropdown__menu-wrapper" uk-dropdown="offset: -15">
                                <ul class="uk-nav uk-dropdown-nav dropdown__nav">
                                    <li>
                                        <router-link to="/webshops/retailers">
                                            {{ $t('nav.webshops') }}
                                        </router-link>
                                    </li>
                                    <li v-if="$store.state.Authenticated && $store.state.status === 'webshop'">
                                        <router-link :class="[checkActive('webshops6') ? 'navbar__active' : '']"
                                                     to="/webshops/dashboard">{{ $t('nav.webshops_6') }}
                                        </router-link>
                                    </li>
                                    <!-- <li>
                                        <router-link :class="[checkActive('webshops') ? 'navbar__active' : '']"
                                                     to="/webshops">{{ $t('nav.webshops') }}
                                        </router-link>
                                    </li> -->
                                    <!-- <li>
                                        <router-link :class="[checkActive('webshops1') ? 'navbar__active' : '']"
                                                     to="/webshops/retailers">{{ $t('nav.webshops') }}
                                        </router-link>
                                    </li> -->
                                    <li>
                                        <router-link
                                            to="/webshops/cause-marketing">{{ $t('nav.webshops_2') }}
                                    </router-link>
                                     </li>

                                     <li>
                                        <router-link :to="{ path: '/', hash: '#ClimateFriendlyDelivery' }" @click.native="scrollFix('#ClimateFriendlyDelivery')">
                                            Climate Friendly Delivery
                                        </router-link>
                                    </li>

                                     <li>
                                        <!-- <router-link :class="[checkActive('webshops3') ? 'navbar__active' : '']"
                                                     to="/webshops/retailers/#pricing">{{ $t('nav.webshops_3') }}
                                        </router-link> -->
                                        <router-link :to="{ path: '/webshops/retailers', hash: '#pricing'}"  @click.native="scrollFix('#pricing')">
                                            {{ $t('nav.webshops_3') }}
                                        </router-link>
                                        <!-- <a href="/webshops/retailers/#pricing">{{ $t('nav.webshops_3') }}
                                        </a> -->
                                    </li>
                                    <!-- <li>
                                        <router-link :class="[checkActive('webshops7') ? 'navbar__active' : '']"
                                                     to="/webshops/plug-in-installation">{{ $t('nav.webshops_7') }}
                                        </router-link>
                                    </li> -->
                                    <li class="opval" @click="logout('consumer')"
                                        v-if="$store.state.Authenticated && $store.state.status === 'webshop'">
                                        <a>{{ $t('nav.consumers_2') }}</a></li>
                                    <li class="opval" v-else>
                                        <router-link :class="[checkActive('webshops4') ? 'navbar__active' : '']"
                                                     to="/webshops/login">{{ $t('nav.webshops_4') }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>

                            <li>
                                <router-link to="/how-it-works">
                                    How it works
                                </router-link>
                            </li>


                            <li v-if="$store.state.Authenticated &&  $store.state.status === 'ninja'">
                                <router-link to="/consumers/profile">{{ $t('nav.consumers') }}
                                    <span uk-icon="icon: triangle-down"
                                          class="animated bounceIn">
                                    </span>
                                </router-link>
                            </li>

                            <li v-else>
                                <li>
                                    <router-link
                                        to="/consumers">
                                        {{ $t('nav.consumers') }}
                                        <span class="nav__triangle" uk-icon="icon: triangle-down"></span>
                                    </router-link>
                                </li>
                            </li>

                            <div v-if="$store.state.Authenticated && $store.state.status === 'ninja'"
                                 class="dropdown__menu-wrapper"
                                 uk-dropdown="offset: -15">
                                <ul class="uk-nav uk-dropdown-nav dropdown__nav">
                                    <li>
                                        <router-link :class="[checkActive('webshops3') ? 'navbar__active' : '']"
                                                     to="/projects">{{ $t('nav.webshops_3') }}
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/consumers/profile">{{ $t('nav.consumers_1') }}</router-link>
                                    </li>
                                    <li @click="logout('consumer')"><a>{{ $t('nav.consumers_2') }}</a></li>
                                </ul>
                            </div>

                            <div v-else
                                 class="dropdown__menu-wrapper"
                                 uk-dropdown="offset: -15">
                                <ul class="uk-nav uk-dropdown-nav dropdown__nav">
                                    <li>
                                        <router-link
                                            to="/consumers">
                                            {{ $t('nav.consumers') }}
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link
                                                     to="/projects">{{ $t('footer.link7') }}
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link
                                            to="/co2-compensatie">
                                            {{ $t('nav.compensation') }}
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link
                                            :to="{ path: '/consumers' }" @click.native="scrollFix('#webshops')" >
                                            💚 Shops
                                            <!-- {{ $t('nav.compensation') }} -->
                                        </router-link>
                                    </li>
                                </ul>
                            </div>


                            <li>
                                <router-link :class="[checkActive('faq') ? 'navbar__active' : '']" to="/faq">
                                    {{ $t('nav.faq') }}
                                </router-link>
                            </li>
                        </ul>
                        <!-- <a rel="noopener" v-if="!$store.state.Authenticated" :href="this.$store.state.ninjaExtensionLink"
                           :target="this.$store.state.extensionLinkTarget" class="button">{{ $t('nav.extension') }}</a> -->
                        <router-link to="/webshops/get-started/" class="button">{{ $t('nav.extension') }}</router-link>
                        <!-- <ul v-else class="uk-navbar-nav">
                            <li @click="logout()">
                                <a>{{ $t('nav.consumers_2') }}</a>
                            </li>
                        </ul> -->

                        <div class="line"></div>
                        <transition enter-acitve-class="animated bounceIn"
                                    leave-active-class="animated bounceOut"
                                    mode="out-in">
                            <ul key="en" v-if="$i18n.locale === 'en'" class="uk-navbar-nav">
                                <li @click="switchLang('en')" style="cursor: pointer">
                                    <img alt="engelse vlag" class="language-icon english icon"
                                         src="../../assets/images/nav/english-icon.png">
                                    <span class="nav__triangle" uk-icon="icon: triangle-down"></span>
                                </li>
                                <div class="dropdown__menu-wrapper dropdown__smaller" uk-dropdown="offset:10">
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
                        <router-link to="/webshops/retailers">{{ $t('nav.webshops') }}</router-link>
                    </li>
                    <ul class="mobile__dropdown">
                        <li>
                            <router-link to="/webshops/retailers">{{ $t('nav.webshops') }}</router-link>
                        </li>
                        <li v-if="$store.state.Authenticated && $store.state.status === 'webshop'">
                            <router-link to="/webshops/dashboard">{{ $t('nav.webshops_6') }}</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/', hash: '#ClimateFriendlyDelivery'}" @click.native="scrollFix('#ClimateFriendlyDelivery')">
                                Climate Friendly Delivery
                            </router-link>
                        </li>
                        <!-- <li>
                            <router-link to="/webshops/retailers">{{ $t('nav.webshops_1') }}</router-link>
                        </li> -->
                        <li>
                            <router-link to="/webshops/cause-marketing">{{ $t('nav.webshops_2') }}</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/webshops/retailers', hash: '#pricing' }" @click.native="scrollFix('#pricing')">
                                {{ $t('nav.webshops_3') }}
                            </router-link>
                        </li>
                        <!-- <li>
                            <router-link to="/webshops/plug-in-installation">{{ $t('nav.webshops_7') }}</router-link>
                        </li> -->
                        <li>
                            <router-link to="/webshops/login">{{ $t('nav.webshops_4') }} webshop</router-link>
                        </li>
                    </ul>
                    <li>
                        <router-link to="/how-it-works">How it works</router-link>
                    </li>
                    <li v-if="$store.state.Authenticated && $store.state.status === 'ninja'">
                        <router-link to="/consumers/profile">{{ $t('nav.consumers_1') }}</router-link>
                    </li>
                    <li v-else>
                        <router-link to="/consumers">{{ $t('nav.consumers') }}</router-link>
                    </li>
                    <ul class="mobile__dropdown">
                        <li>
                            <router-link to="/consumers">{{ $t('nav.consumers') }}</router-link>
                        </li>
                        <li>
                            <router-link to="/projects">{{ $t('nav.projects') }}</router-link>
                        </li>
                        <li>
                            <router-link to="/co2-compensatie">{{ $t('nav.compensation') }}</router-link>
                        </li>
                        <li>
                            <router-link :class="[checkActive('webshops') ? 'navbar__active' : '']"
                                :to="{ path: '/consumers'} " @click.native="scrollFix('#webshops')">
                                💚 Shops
                                <!-- {{ $t('nav.compensation') }} -->
                            </router-link>
                        </li>
                    </ul>

                    <li>
                        <router-link to="/faq">{{ $t('nav.faq') }}</router-link>
                    </li>
                    <li style="margin-bottom: 10px !important;" @click="logout('consumer')"
                        v-if="$store.state.Authenticated && $store.state.status === 'webshop' || $store.state.Authenticated && $store.state.status === 'ninja'">
                        <a>Logout</a>
                    </li>
                </ul>
                <!-- <a rel="noopener" :href="this.$store.state.ninjaExtensionLink" :target="this.$store.state.extensionLinkTarget"
                   class="button">{{ $t('nav.extension') }}</a> -->
                <router-link to="/webshops/get-started/" class="button">{{ $t('nav.extension') }}</router-link>
                <hr>
                <transition enter-acitve-class="animated bounceIn"
                            leave-active-class="animated bounceOut"
                            mode="out-in">
                    <ul key="en" v-if="$i18n.locale === 'en'" class="uk-navbar-nav navbar__mobile">
                        <li @click="switchLang('en')" style="cursor: pointer">
                            <img alt="engelse vlag" class="language-icon english icon"
                                 src="../../assets/images/nav/english-icon.png">
                            <span class="nav__triangle" uk-icon="icon: triangle-down"></span>
                        </li>
                        <div class="dropdown__menu-wrapper" uk-dropdown="offset:10">
                            <ul class="uk-nav uk-dropdown-nav dropdown__nav dropdown__lang">
                                <li style="text-align: center;"  @click="switchLang('nl')">
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

        created() {
            this.$store.commit('installNinjaButton')
        },

        mounted() {
            if (this.$store.state.userData.length > 0) {
                this.userLoggedIn = true;
            }
        },

        methods: {
        scrollFix: function(hash) {
                  setTimeout(() => $('html, body').animate({
                  scrollTop: $(hash).offset().top
                  }, 10), 1)
                },

            switchLang(lang) {
                this.$i18n.locale = lang
            },

            logout() {
                axios
                    .post(`${this.$store.state.SITE_HOST}/logout/`, {
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
                        this.errorMessage(error)
                    })
            },

            checkActive(menu) {
                if (this.currentRouteName === menu.toLowerCase()) {
                    return true
                }

                if (menu === 'webshops1' && this.currentRouteName === 'retailers' || menu === 'webshops2' && this.currentRouteName === 'cause-marketing'
                    || menu === 'webshops3' && this.currentRouteName === 'projects'  || menu === 'webshops7' && this.currentRouteName === 'plug-in-installation'
                    || menu === 'webshops' && this.currentRouteName === 'webshops-register' || menu === 'webshops' && this.currentRouteName === 'webshops-login'
                    || menu === 'webshops' && this.currentRouteName === 'dashboard') {
                    return true
                }
            },

            scrollTo(refName) {
                
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