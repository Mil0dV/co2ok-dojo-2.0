<template>
    <v-toolbar class="navbar__container">
        <div class="navbar__wrapper">
            <div class="navbar__row navbar__row-1">
                <div class="navbar__row-1-wrapper">
                    <v-img
                            :src="require('@/assets/images/nav/logo.png')"
                            max-height="125"
                            contain
                            class="navbar__logo"
                    ></v-img>

                    
                    <p>About</p>
                    <p>Webshops</p>
                    <p>Consumers</p>
                    <p>News</p>
                    <p>FAQ</p>
                </div>
            </div>

            <div class="navbar__row navbar__row-2">
                <button class="navbar__extension">Extension</button>
                <span class="navbar__divider"></span>
                <v-img
                        :src="require('@/assets/images/nav/NLVlag.png')"
                        contain
                        class="navbar__lang"
                ></v-img>
            </div>
        </div>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Nav"
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
        background: white;
        overflow: hidden;
        box-shadow: 0px 1px 6px 0px rgba(0,0,0,0.25);

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
        border: 2px solid green;
    }

    .navbar__row-1-wrapper {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .navbar__row-1 p {
        border: 1px solid red;
        font-weight: 600;
        padding: 0;
        margin: 0;
        font-size: 15px;
        width: 100%;
        text-align: right;
    }

    .navbar__row-2 {
        flex: 1.5;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 1px solid red;
    }

    .navbar__extension {
        min-width: 150px;
        padding: 10px 40px;
        color: white;
        border-radius: 5px;
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
        width: 10px;
        height: 30px;
        border: 2px solid blue;
    }

    .navbar__divider {
        border-left: 1px solid red;
        width: 1px;
        height: 30px;
    }
</style>