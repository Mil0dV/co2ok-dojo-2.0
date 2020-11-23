<template>
    <div uk-grid class="uk-child-width-expand@s uk-text-center header__container">
        <div class="header__image"
             :style="{'background-image': 'url(' + require(`../../assets/images/header/${currentRouteName}.jpg`) + ')'}">
            <div class="uk-card header__image-shade">
                <div class="header__inner">
                    <transition enter-active-class="animated fadeInUp" mode="out-in">
                        <h1 class="header__title" :key="title">{{title}}</h1>
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
                    case 'clients':
                        this.title = this.$t('footer.link16')
                        break;
                    case 'compensation':
                        this.title = this.$t('howItWorks.steps_title')
                        break;
                    case 'about':
                        this.title = this.$t('footer.link2')
                        break;
                    case 'webshops':
                        this.title = this.$t('footer.link3')
                        break;
                    case 'retailers':
                        this.title = this.$t('footer.link5')
                        break;
                    case 'cause-marketing':
                        this.title = this.$t('footer.link6')
                        break;
                    case 'installation':
                        this.title = this.$t('nav.workshops_7')
                        break;
                    case 'faq':
                        this.title = this.$t('footer.link11')
                        break;
                    case 'privacy':
                        this.title = this.$t('footer.link12')
                        break;
                    case 'projects':
                        this.title = this.$t('footer.link7')
                        break;
                    case 'news':
                        this.title = this.$t('footer.link10')
                        break;
                    default:
                        this.title = this.$t('footer.link4')
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
        }

    }
</script>

<style scoped>
    .header__container {
        box-shadow: none;
    }

    .header__image {
        background: no-repeat center center;
        height: 354px;
        width: 100%;
        display: flex;
        background-size: cover; /* or contain depending on what you want */
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
        /* margin-bottom: 50px; */
    }

    @media (max-width: 1200px) {
        .header__inner {
            width: 90%;
        }
    }

    @media (max-width: 960px) {
        .header__image {
            background: no-repeat ;
            background-size: cover;
            height: 300px;
            width: 100%;
            display: flex;
        }

        .header__inner {
            width: 87%;
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