<template>
    <div class="home__container">
        <div class="uk-section home__section-1">
            <div class="section-1__filler">
                <img src="../assets/images/home/logo.svg" alt="intro co2ok"
                     class="intro__img animated fadeIn">
                <transition >
                         <span class="img-lang" v-if="currentLanguage === 'en'" key="en">
                              <img
                                      src="../assets/images/home/intro_text-en.svg"
                                      alt="intro co2ok text"
                                      class="intro__img-text desktop__intro img-text-margin-en delay__animation animated flipInX">
                             <img
                                     src="../assets/images/home/intro_text-en-mobile.svg"
                                     alt="intro co2ok text"
                                     class="intro__img-text mobile__intro img-text-margin-en delay__animation animated flipInX">
                         </span>


                    <span v-else key="nl">
                             <img
                                     src="../assets/images/home/intro_text-nl.svg"
                                     alt="intro co2ok text"
                                     class="intro__img-text desktop__intro img-text-margin-nl delay__animation animated flipInX">

                             <img
                                     src="../assets/images/home/intro_text-nl-mobile.svg"
                                     alt="intro co2ok text"
                                     class="intro__img-text mobile__intro img-text-margin-nl delay__animation animated flipInX">
                         </span>

                </transition>
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
                    <img class="section-2__image" src="../assets/images/home/video.png">
                </div>
            </div>
        </div>

        <div class="uk-section home__section-3 prefix__section">
            <div class="section-3__content">
                <h3 class="sub-title">{{locale['section_3_sub']}}</h3>
                <h2 class="main-title">{{locale['section_3_title']}}</h2>
                <img alt="graph" class="section-3__image" src="../assets/images/home/graph.png">
            </div>
        </div>


        <div class="uk-section home__section-4 prefix__section">
            <div class="section-4__content">
                <h3 class="sub-title">{{locale['section_4_sub']}}</h3>
                <h2 class="main-title">{{locale['section_4_title']}}</h2>

                <div class="section-4__projects">
                    <div class="project__images-container">
                        <img alt="project1" class="project__image project__sides"
                             src="../assets/images/home/project-1.png">
                        <img alt="project1" class="project__image project__main"
                             src="../assets/images/home/project-2.png">
                        <img alt="project1" class="project__image project__sides"
                             src="../assets/images/home/project-3.png">
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
                         src="../assets/images/home/logo1.png">
                    <img alt="logo1" class="section-5__image"
                         src="../assets/images/home/logo2.png">
                    <img alt="logo1" class="section-5__image"
                         src="../assets/images/home/logo3.png">
                    <img alt="logo1" class="section-5__image"
                         src="../assets/images/home/logo4.png">
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
    @import '../styles/layout/main.scss';
</style>
