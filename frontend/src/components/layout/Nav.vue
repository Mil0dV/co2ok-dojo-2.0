<template>
    <v-toolbar uk-sticky class="navbar__container uk-n">
        <div class="navbar__wrapper">
            <router-link to="/">
                <v-toolbar-title style="cursor: pointer">
                    <v-img
                            :src="require('@/assets/images/nav/logo.png')"
                            max-height="125"
                            contain
                            class="navbar__logo"
                    ></v-img>
                </v-toolbar-title>
            </router-link>

            <v-menu class="hidden-md-and-up">
                <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
                <v-list>
                    <v-list-tile v-for="item in menu" :key="item.icon">
                        <router-link class="menu__link" :to="item.link">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </router-link>
                    </v-list-tile>

                    <v-list-tile>
                        <a href="https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe">
                            <v-list-tile-content>
                                <v-list-tile-title>Extension</v-list-tile-title>
                            </v-list-tile-content>
                        </a>
                    </v-list-tile>

                    <v-list-tile v-if="$store.state.userStatus">
                        <v-list-tile-content>
                            <v-list-tile-title>Logout</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>Login</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-toolbar-items class="hidden-sm-and-down navbar__desktop">
                <v-btn v-for="item in menu" :key="item.link"
                       :ripple="false" flat>
                    <span class="text-capitalize navbar__items" style="height: 75px;" @click="$router.push(item.link)"
                          :class="[checkActive(item.title) ? 'navbar__active' : '']">
                        {{item.title}}
                    </span>
                </v-btn>

                <v-spacer></v-spacer>


                <transition enter-active-class="animated bounceIn"
                            leave-active-class="animated bounceOut"
                            mode="out-in">

                    <div v-if="$store.state.userStatus" key="nav1" class="user__logged">
                        <div class="navbar__pic__container">
                            <div class="navbar__user-wrapper">
                                <img class="navbar__pic" src="//logo.clearbit.com/bol.com">
                            </div>

                            <div @click="logout()" class="navbar__logout">
                                <img src="../../assets/images/nav/logout.png" alt="logout">
                            </div>
                        </div>

                        <v-divider class="ml-4 nav-divider" vertical></v-divider>

                    </div>

                    <div v-else key="nav2" class="user__extension">
                        <a class="extension__button"
                           href="https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe">
                            <v-btn class="text-capitalize navbar__items navbar__extension"
                                   style="height: 42px;"
                                   :ripple="false" flat>Extension
                            </v-btn>
                        </a>

                        <v-divider class="ml-4 nav-divider" vertical></v-divider>

                    </div>
                </transition>


                <v-menu open-on-hover transition="slide-x-transition"
                        bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn class="text-capitalize navbar__items" :ripple="false" flat>
                            <v-avatar size="25" color="grey lighten-4" v-on="on">
                                <img src="../../assets/images/nav/english-icon.png" alt="avatar">
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-tile key="Dashboard">
                            <v-list-tile-title style="border-bottom: 1px solid black;">Engels</v-list-tile-title>
                        </v-list-tile>

                        <v-list-tile key="Settings">
                            <v-list-tile-title>Nederlands</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </div>
    </v-toolbar>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Nav",
        props: {
            routeName: String
        },

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
                if (this.routeName === menu.toLowerCase() || this.routeName === 'steps' && menu.toLowerCase() === 'about')
                    return true
            }
        },


        watch: {
            '$route'() {
                this.userLoggedIn = this.$router.currentRoute['name'] === 'dashboard';
            },
        }
    }
</script>

<style scoped>
    .navbar__container {
        font-family: 'Poppins', sans-serif;
        font-weight: 800;
        flex: 0 1 auto;
        height: 75px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        background: white;
        overflow: hidden;
        box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.25);

    }

    .navbar__wrapper {
        margin: 0 auto;
        max-width: 1100px;
        width: 100%;
        height: 75px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .navbar__logo {
        margin: 10px 0;
        width: 75px;
        height: 32px;
    }

    .navbar__desktop {
        padding: 0;
        margin: 0;
    }

    .navbar__items {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 800;
        font-size: 17px;
        border-bottom: 4px solid transparent;
        margin: 0;
    }

    .menu__link, .menu__link:visited {
        color: black;
        text-decoration: none;
    }

    .nav-divider {
        background: #BCBCBC;
        align-self: center;
        height: 50%;
        min-height: unset;
    }

    .user__extension {
        text-decoration: none !important;
    }

    .navbar__active {
        border-bottom: 4px solid #08BA4D;
    }

    .v-btn:hover:before {
        background-color: transparent;
    }

    .navbar__extension {
        font-weight: 100;
        min-width: 125px;
        color: white;
        border-radius: 5px;
        background: linear-gradient(to right, #10DC87, #08BA4D);
        box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.25);
        position: relative;
        top: 0px;
        transition: 0.2s ease-in-out;
    }

    .user__logged {
        display: flex;
        flex-direction: row;
        color: black;
        align-items: center;
    }

    .navbar__extension:hover {
        top: -4px;
        transition: 0.2s ease-in-out;
    }

    .user__extension {
        display: flex;
        align-items: center;
    }

    .navbar__pic__container {
        width: 100%;
        height: 53px;
        display: flex;
        flex-direction: row;
    }

    .navbar__user-wrapper {
        width: 53px;
        height: 53px;
    }

    .navbar__logout {
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .navbar__pic {
        border-radius: 50px;
        height: 100%;
    }

    @media (max-width: 960px) {
        .navbar__container {
            height: 80px;
        }
    }

    @media (max-width: 600px) {
        .navbar__container {
            height: 65px;
        }

        .navbar__logo {
            width: 60px;
            height: 42px;
        }
    }


</style>