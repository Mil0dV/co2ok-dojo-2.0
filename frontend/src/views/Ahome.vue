<template>
    <div class="home__container">
        <div class="uk-section home__section-1">
            <div class="section-1__filler">
                <img src="../assets/images/home2/logo-1.svg" alt="intro co2ok"
                     class="intro__logo">

                <div class="intro__text__wrapper">
                    <h1 class="desktop__intro">{{locale['intro_first_desktop']}}</h1>
                    <div class="mobile__intro mobile__intro-1">
                        <h1>{{locale['intro_first_mobile-1']}}</h1>
                        <h1>{{locale['intro_first_mobile-2']}}</h1>
                    </div>
                </div>
            </div>

            <div class="section-2__filler">
                <img src="../assets/images/home2/logo-2.svg" alt="intro co2ok"
                     class="intro__logo intro__logo-lower">

                <div class="intro__text__wrapper">
                    <h1 class="desktop__intro">{{locale['intro_second_desktop']}}</h1>
                    <div class="mobile__intro mobile__intro-2">
                        <h1>{{locale['intro_second_mobile-1']}}</h1>
                        <h1>{{locale['intro_second_mobile-2']}}</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-section home__section-2 prefix__section">
            <div class="section-2__content">
                <div class="section-2__row-1">
                    <h2 class="main-title">
                        {{locale['section_2_title']}}
                    </h2>
                    <p class="main-text">
                        {{locale['section_2_text']}}
                    </p>
                    <br>
                    <router-link to="/webshops/" class="button">{{locale['plugin']}}</router-link>

                </div>

                <div class="section-2__row-2">
                    <iframe title="co2ok intro" class="section-2__image" width="500" height="500"
                            src="https://www.youtube.com/embed/g6tr7eCndHw"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>

        <div class="uk-section home__section-3 prefix__section">
            <div class="section-3__content">
                <h3 class="sub-title">{{locale['section_3_sub']}}</h3>
                <h2 class="main-title">{{locale['section_3_title']}}</h2>
                <img alt="graph" class="section-3__image" src="../assets/images/home2/graph.jpg">
            </div>
        </div>


        <div class="uk-section home__section-4 prefix__section">
            <div class="section-4__content">
                <h3 class="sub-title">{{locale['section_4_sub']}}</h3>
                <h2 class="main-title">{{locale['section_4_title']}}</h2>

                <div class="section-4__projects">
                    <div class="project__images-container">
                        <img alt="project1" class="project__image project__sides"
                             src="../assets/images/home2/project-1.jpg">
                        <img alt="project1" class="project__image project__main"
                             src="../assets/images/home2/project-2.jpg">
                        <img alt="project1" class="project__image project__sides"
                             src="../assets/images/home2/project-3.jpg">
                    </div>

                    <div class="project__text">
                        <p class="main-text">
                            {{locale['section_4_text']}}
                        </p>
                    </div>
                    <br>

                    <router-link to="/projects/" class="button">{{locale['section_4_btn']}}</router-link>
                </div>
            </div>
        </div>

        <div class="uk-section home__section-5 prefix__section">
            <div class="section-5__content">
                <h3 class="sub-title">{{locale['section_5_sub']}}</h3>
                <h2 class="main-title">{{locale['section_5_title']}}</h2>

                <div class="section-5__images">
                    <img alt="logo1" class="section-5__image"
                         src="../assets/images/home2/logo1.jpg">
                    <img alt="logo1" class="section-5__image"
                         src="../assets/images/home2/logo2.jpg">
                    <img alt="logo1" class="section-5__image"
                         src="../assets/images/home2/logo3.jpg">
                    <img alt="logo1" class="section-5__image"
                         src="../assets/images/home2/logo4.jpg">
                </div>

                <router-link to="/webshops/" class="button__home">{{locale['section_5_btn']}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import homeLang from '../lang/lang_home2'

    export default {
        data() {
            return {
                locale: homeLang,
            }
        },

        mounted() {
            this.checkLanguage()
        },

        methods: {
            checkLanguage(lang) {
                if (lang === 'en') {
                    this.locale = homeLang.lang_en_home2
                } else {
                    if (this.currentLanguage === 'en') {
                        this.locale = homeLang.lang_en_home2
                    } else {
                        this.locale = homeLang.lang_nl_home2
                    }
                }
            }
        },

        computed: {
            currentRouteName() {
                return this.$route.name;
            },

            currentLanguage() {
                return this.$store.state.language
            }
        },

        watch: {
            currentLanguage(value) {
                this.checkLanguage(value)
            }
        }


    }
</script>

<style scoped lang="scss">
    @import '../styles/home.scss';
</style>
