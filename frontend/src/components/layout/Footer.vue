<template>
    <v-footer height="auto" class="footer__container">
        <div class="footer__content-wrapper">
            <div class="footer__content">
                <h2 class="footer__title">Contact Us</h2>

                <div class="footer__text-group">
                    <p>Lange Viestraat 2</p>
                    <p>3511 BK, Utrecht (De Planeet)</p>
                </div>

                <div class="footer__text-group">
                    <p>+31639766259</p>
                    <a href="mailto:info@co2ok.eco">info@co2ok.eco</a>
                </div>

                <div class="footer__text-group">
                    <p>2019 CO2ok.</p>
                    <p>KvK nummer: 69752753</p>
                </div>
            </div>


            <div class="footer__content">
                <h2 class="footer__title">Sitemap</h2>
                <div class="footer__text-group">
                    <router-link to="'/">Home</router-link>
                    <router-link to="'/about">Over Ons</router-link>
                    <router-link to="'/webshops">Webshops</router-link>
                    <router-link to="'/webshops">Retailer-info</router-link>
                    <router-link to="'/webshops">Cause Marketing</router-link>
                    <router-link to="'/webshops">Plugin installeren</router-link>
                    <router-link to="'/Consumers">Consumers</router-link>
                    <router-link to="'/Consumers">Sign In</router-link>
                    <router-link to="'/Consumers">Sign Up</router-link>
                    <router-link to="'/Consumers">News</router-link>
                    <router-link to="'/Consumers">FAQ</router-link>
                    <router-link to="'/Consumers">Privacy Policy</router-link>
                </div>
            </div>


            <div class="footer__content"></div>
        </div>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer__container {
        background: #152439;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer__content-wrapper {
        width: 1100px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        color:white;
    }

    .footer__title {
        font-weight: 600;
        font-size: 26px;
        text-align: left;
    }

    .footer__content {
        display: flex;
        flex-direction: column;
    }

    .footer__text-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
        padding: 10px 0;
    }

    .footer__text-group a, .footer__text-group:visited {
        color:white;
    }

    .footer__text-group p {
        padding: 0;
        margin: 0;
        font-weight: 400;
    }

    .footer__text-group > * {
        text-decoration: none;
    }

</style>