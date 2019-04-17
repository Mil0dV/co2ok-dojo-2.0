<template>
    <v-toolbar class="navbar__container">
        <div class="navbar__wrapper">
            <v-toolbar-title class="white--text navbar__logo">
                <v-img
                        :src="require('@/assets/romy/logor.png')"
                        max-height="125"
                        contain
                ></v-img>
            </v-toolbar-title>

            <div class="navbar__account">
                <div class="navbar__pic__container">
                    <div :style="{backgroundImage : 'url(' + require('@/assets/romy/user.png') + ')'}"
                         class="navbar__pic">
                    </div>
                </div>

                <p class="navbar__username">Bodhi Zaan</p>

                <img :src="require('@/assets/romy/logout.png')"/>
            </div>
        </div>
    </v-toolbar>
</template>

<script>
    export default {
        name: "NavR",
    }
</script>

<style scoped>
    .navbar__container {
        height: 92px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        box-shadow: none;
        background: #FFFFFF;
    }

    .navbar__wrapper {
        margin: 0 auto;
        width: 53%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .navbar__logo {
        margin: 10px 0;
        width: 100%;
        height: 100%;
        max-width: 143px;
        max-height: 62px;
    }

    .navbar__account {
        width: 25%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .navbar__pic__container {
        overflow: hidden;
        width: 53px;
        height: 53px;
        border-radius: 50px;
    }

    .navbar__pic {
        width: 100%;
        height: 100%;
        background-size: cover;
        transform: scale(4);
        background-position: 80% bottom;
        overflow: hidden;
    }

    .navbar__username {
        font-size: 16px;
        color: #5A5A5A;
        margin: 0;
        padding: 0;
    }
</style>