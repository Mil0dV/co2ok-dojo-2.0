<template>
    <vk-grid gutter="small" class="uk-child-width-expand@s uk-text-center header__container">
        <div class="header__image"
             :style="{'background-image': 'url(' + require(`../../assets/images/header/${routeName}.jpg`) + ')'}">
            <vk-card class="header__image-shade">
                <div class="header__inner">
                    <transition enter-active-class="animated fadeInUp"  mode="out-in">
                        <h2 class="header__title" :key="title">{{title}}</h2>
                    </transition>
                </div>
            </vk-card>
        </div>
    </vk-grid>
</template>

<script>
    import Vue from 'vue'
    import Vuikit from 'vuikit'
    import VuikitIcons from '@vuikit/icons'
    import '@vuikit/theme'

    Vue.use(VuikitIcons)
    Vue.use(Vuikit)
    export default {
        name: "Header",
        props: {
            routeName: String,
        },

        data() {
            return {
                title: '',
            }
        },

        methods: {
            checkHeaderTitle() {
                console.log(this.routeName)
                switch (this.routeName) {
                    case 'steps':
                        this.title = 'CO₂-compensation'
                        break;
                    case 'about':
                        this.title = 'About us'
                        break;
                    case 'webshops':
                        this.title = 'Webshops'
                        break;
                }
            }
        },

        mounted() {
            this.checkHeaderTitle()
        },

        watch: {
            '$route'(to, from) {
                switch (this.routeName) {
                    case 'steps':
                        this.title = 'CO₂-compensation'
                        break;
                    case 'about':
                        this.title = 'About us'
                        break;
                    case 'webshops':
                        this.title = 'Webshops'
                        break;
                    default:
                        this.checkHeaderTitle()
                        break;
                }
            },
        }
    }
</script>

<style scoped>
    .header__container {
        box-shadow: none;
    }

    .header__image {
        background: no-repeat fixed 0 -350px;
        background-size: cover;
        height: 354px;
        width: 100%;
        display: flex;
    }

    .header__image-shade {
        background: rgba(0, 0, 0, 0.5);
        box-shadow: none;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .header__inner {
        max-width: 1146px;
        width: 100%;
        margin: 0 auto;
    }

    .header__title {
        color: white;
        text-align: left;
        font-weight: 400;
        font-size: 55px;
        margin-bottom: 55px;
    }

</style>