<template>
    <div uk-grid class="uk-child-width-expand@s uk-text-center header__container">
        <div class="header__image"
             :style="{'background-image': 'url(' + require(`../../assets/images/header/${currentRouteName}.jpg`) + ')'}">
            <div class="uk-card header__image-shade">
                <div class="header__inner">
                    <transition enter-active-class="animated fadeInUp" mode="out-in">
                        <h2 class="header__title" :key="title">{{title}}</h2>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            image: String,
        },

        data() {
            return {
                title: '',
            }
        },

        methods: {
            checkHeaderTitle() {
                switch (this.image) {
                    case 'steps':
                        this.title = 'CO₂-compensation'
                        break;
                    case 'about':
                        this.title = 'About us'
                        break;
                    case 'webshops':
                        this.title = 'Webshops'
                        break;
                    case 'retailers':
                        this.title = 'Retailers'
                        break;
                    case 'cause-marketing':
                        this.title = 'Cause Marketing'
                        break;
                    case 'faq':
                        this.title = 'Frequently asked questions'
                        break;
                    case 'privacy':
                        this.title = 'Privacy policy'
                        break;
                    default:
                        this.title = 'CO₂-compensation'
                        break;
                }
            }
        },

        mounted() {
            this.checkHeaderTitle()
        },

        computed: {
            currentRouteName() {
                return this.$route.name;
            }
        },

        watch: {
            currentRouteName: function () {
                this.checkHeader()
            }
        }
    }
</script>

<style scoped>
    .header__container {
        box-shadow: none;
    }

    .header__image {
        background: no-repeat fixed  bottom;
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
        max-width: 1090px;
        width: 100%;
        margin: 0 auto;
    }

    .header__title {
        color: white;
        text-align: left;
        font-weight: 400;
        font-size: 55px;
        margin-bottom: 50px;
    }

    @media (max-width: 1200px) {
        .header__inner {
            width: 90%;
        }
    }

    @media (max-width: 900px) {
        .header__image {
            background: no-repeat ;
            background-size: cover;
            height: 300px;
            width: 100%;
            display: flex;
        }

        .header__inner {
            width: 82%;
        }

        .header__title {
            font-size: 40px;
        }
    }

    @media (max-width: 400px) {
        .header__title {
            font-size: 28px;
        }

        .header__image {
            height: 200px;
        }
    }

</style>