<template>
    <v-toolbar class="navbar__container">
        <div class="navbar__wrapper">
            <div class="navbar__logo">
                <v-img
                        :src="require('@/assets/damian/logo2.png')"
                        max-height="125"
                        contain
                ></v-img>
            </div>

            <div class="navbar__items">
                <p>About</p>
                <p>Webshops</p>
                <p>Consumers</p>
                <p>News</p>
                <p>FAQ</p>

                <button class="navbar__button">The extension</button>

                <span class="navbar__divider"></span>


                <v-menu open-on-hover transition="slide-x-transition"
                        bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn class="navbar__user-icon-wrapper" v-on="on">
                            <v-img :src="require('@/assets/damian/user-solid.svg')" contain
                                   class="navbar__user-icon"></v-img>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-tile key="Dashboard">
                            <v-list-tile-title style="border-bottom: 1px solid black;">Dashboard</v-list-tile-title>
                        </v-list-tile>

                        <v-list-tile key="Settings">
                            <v-list-tile-title>Settings</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>

                <div class="navbar__flag-wrapper">
                    <v-img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.png"
                           contain
                           class="navbar__flag-icon"></v-img>
                </div>
            </div>
        </div>
    </v-toolbar>
</template>

<script>
    export default {
        name: "NavD"
    }
</script>

<style scoped>
    .navbar__container {
        height: 106px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        box-shadow: none;
        background: #FFFFFF;
    }

    .navbar__wrapper {
        margin: 0 auto;
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .navbar__logo {
        margin: 10px 0;
        width: 100%;
        height: 100%;
        max-width: 84px;
        max-height: 36px;
    }

    .navbar__items {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 810px;
        width: 100%;
        color: #2F2F2F;
        font-size: 17px;
    }

    .navbar__items > * {
        padding: 0;
        margin: 0;
    }

    .navbar__button {
        color: white;
        border-radius: 3px;
        padding: 10px 30px;
        background: linear-gradient(to right, #AED629, #55B500);
        -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
    }

    .navbar__divider {
        border-left: 1px solid lightgray;
        width: 1px;
        height: 70%;
    }

    .navbar__user-icon-wrapper {
        border: 1px solid black;
        border-radius: 3px;
        padding: 10px;
    }

    .navbar__user-icon {
        width:10px;
        height: 10px;
    }

    .navbar__flag-wrapper {
        border-radius: 100px;
        overflow: hidden;
        width: 30px;
        height: 30px;

    }

    .navbar__flag-icon {
        width: 24px;
        height: 25px;
        transform: scale(2.5);
    }

</style>