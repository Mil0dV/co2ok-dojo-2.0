<template>
    <v-toolbar class="navbar__container">
        <div class="navbar__wrapper">
            <div class="navbar__row navbar__row-1">
                <v-img
                        :src="require('@/assets/damian/logo2.png')"
                        max-height="125"
                        contain
                        class="navbar__logo"
                ></v-img>
            </div>

            <div class="navbar__row navbar__row-2">
                <p>Home</p>
                <p>Work</p>
                <p>Projects</p>
                <p>About Us</p>
                <p>Contact</p>
            </div>

            <div class="navbar__row navbar__row-3">
                <p class="navbar__extension">Extension</p>
                <p>land</p>
            </div>
        </div>
    </v-toolbar>
</template>

<script>
    export default {
        name: "NavL"
    }
</script>

<style scoped>
    .navbar__container {
        height: 64px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        box-shadow: none;
        background: #FFFFFF;
        overflow: hidden;
    }

    .navbar__wrapper {
        margin: 0 auto;
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .navbar__row {
        margin: 0 20px;
    }

    .navbar__logo {
        margin: 10px 0;
        width: 100%;
        height: 100%;
        max-width: 75px;
        max-height: 32px;
    }

    .navbar__row-1 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    .navbar__row-2 {
        flex: 3;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .navbar__wrapper p {
        padding: 0;
        margin: 0;
        font-size: 15px;
        width: 100%;
        text-align: right;
    }

    .navbar__row-3 {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        align-items: center;
    }

    .navbar__extension {
        color: white;
        border-radius: 24px;
        background: #2BC65C;
    }
</style>