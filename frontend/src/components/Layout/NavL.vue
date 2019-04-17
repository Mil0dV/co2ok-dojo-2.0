<template>
    <v-toolbar class="navbar__container">
        <div class="navbar__wrapper">
            <div class="navbar__row navbar__row-1">
                <div class="navbar__row-1-wrapper">
                    <v-img
                            :src="require('@/assets/damian/logo2.png')"
                            max-height="125"
                            contain
                            class="navbar__logo"
                    ></v-img>

                    <p>Home</p>
                    <p>Work</p>
                    <p>Projects</p>
                    <p>About Us</p>
                    <p>Contact</p>
                </div>
            </div>

            <div class="navbar__row navbar__row-2">
                <button class="navbar__extension">Extension</button>
                <v-img
                        :src="require('@/assets/images/login/NLVlag.png')"
                        max-height="125"
                        contain
                        class="navbar__lang"
                ></v-img>
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
        flex: 0 1 auto;
        height: 64px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        box-shadow: none;
        background: transparent;
        overflow: hidden;
        /*box-shadow: 0px 1px 6px 0px rgba(0,0,0,0.25);*/

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

    .navbar__logo {
        margin: 10px 0;
        width: 75px;
        height: 32px;
    }

    .navbar__row-1 {
        display: flex;
        flex: 5;

    }

    .navbar__row-1-wrapper {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .navbar__row-1 p {
        font-weight: 600;
        padding: 0;
        margin: 0;
        font-size: 15px;
        width: 100%;
        text-align: right;
    }

    .navbar__row-2 {
        flex: 1.1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .navbar__extension {
        padding: 10px 20px;
        color: white;
        border-radius: 24px;
        background: linear-gradient(to right, #10DC87, #08BA4D);
        box-shadow: 0px 1px 6px 0px rgba(0,0,0,0.25);
        position: relative;
        top: 0px;
        transition: 0.2s ease-in-out;
    }

    .navbar__extension:hover {
        top: -4px;
        transition: 0.2s ease-in-out;
    }

    .navbar__lang {
        width: 30px;
        height: 30px;
    }
</style>