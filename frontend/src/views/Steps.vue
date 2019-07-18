<template>
    <div>
        <Header :image="header"></Header>
        <div class="steps__container">
            <div uk-grid
                 class="uk-flex uk-flex-wrap steps__intro uk-box-shadow-medium uk-child-width-expand@s uk-text-center">
                <div class="step__text-wrapper intro--smaller step__img-left">
                    <div class="intro__text step__col uk-padding">
                        <p class="steps__green">{{locale['s1_subtitle']}}</p>
                        <h2 class="main-title--large">{{locale['s1_title']}}</h2>

                        <p class="main-text">
                            {{locale['s1_text']}}
                        </p>
                    </div>
                </div>
                <div class="step__text-wrapper smaller-step step__img-wrapper">
                    <div class="uk-light step__img-left ">
                    <iframe title="co2ok intro" class="section-2__image" width="550" height="306"
                                src="https://www.youtube.com/embed/P5MLapEpR_0"
                                 frameborder="0"
                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                 allowfullscreen>
                         </iframe>
                        <!-- <img class="intro__img uk-box-shadow-large" alt="factory"
                             src="../assets/images/steps/steps-intro.jpg"> -->
                    </div>
                </div>

            </div>

        <!-- <div class="uk-section home__section-2 prefix__section">
            <div class="section-2__content">
                <div class="iframe-container">
                    <div class="section-2__row-1">
                        <h2 class="main-title">
                            {{locale['section_2_title']}}
                            Together, we can stop climate change
                        </h2>
                        <p class="main-text">
                            {{locale['section_2_text']}}
                            en nog wat bla bla
                        </p>
                        <br>
                        <a :href="this.$store.state.ninjaExtensionLink"
                           :target="this.$store.state.extensionLinkTarget"
                           class="button">{{locale['plugin']}}</a>

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
            </div> -->

            <!--Stap 1-->
            <div uk-grid class="steps__intro steps__intro-reverse uk-child-width-expand@s uk-text-center">
                <div class="step__text-wrapper  step__img-left step__img-wrapper">
                    <div class="uk-light">
                        <img class="step__img uk-box-shadow-large" alt="2 factory"
                             src="../assets/images/steps/step-1.jpg">
                    </div>
                </div>

                <div class="step__text-wrapper">
                    <div class="intro__text step__col steps__content steps__content-right uk-padding">
                        <div class="steps__wrapper">
                            <div class="steps__title-container">
                                <i class="fas fa-smog step__icon"></i>
                                <p class="steps__title">
                                    {{locale['s2_title']}}
                                </p>
                            </div>

                            <p class="main-text">
                                {{locale['s2_text']}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!--Stap 2-->
            <div uk-grid class="steps__intro uk-child-width-expand@s uk-text-center">
                <div class="step__text-wrapper step__img-left">
                    <div class="intro__text step__col steps__content steps__content-left uk-padding">
                        <div class="steps__wrapper">
                            <div class="steps__title-container">
                                <i class="fas fa-shopping-cart step__icon"></i>
                                <p class="steps__title">
                                    {{locale['s3_title']}}
                                </p>
                            </div>

                            <p class="main-text">
                                {{locale['s3_text']}}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="step__text-wrapper step__img-wrapper">
                    <div class="uk-light step__img-right">
                        <img class="step__img uk-box-shadow-large" alt="payment"
                             src="../assets/images/steps/step-2.jpg">
                    </div>
                </div>
            </div>


            <!--Stap 3-->
            <div uk-grid class="steps__intro steps__intro-reverse uk-child-width-expand@s uk-text-center">
                <div class="step__text-wrapper step__img-left step__img-wrapper">
                    <div class="uk-light step__img-left">
                        <img class="step__img  uk-box-shadow-large" alt="solar-panels"
                             src="../assets/images/steps/step-3.jpg">
                    </div>
                </div>

                <div class="step__text-wrapper">
                    <div class="intro__text step__col steps__content steps__content-right uk-padding">
                        <div class="steps__wrapper">
                            <div class="steps__title-container">
                                <i class="fas fa-solar-panel step__icon"></i>
                                <p class="steps__title">
                                    {{locale['s4_title']}}
                                </p>
                            </div>

                            <p class="main-text">
                                {{locale['s4_text']}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <!--Stap 4-->
            <div uk-grid class="steps__intro uk-child-width-expand@s uk-text-center">
                <div class="step__text-wrapper step__img-left">
                    <div class="intro__text step__col steps__content steps__content-left uk-padding">
                        <div class="steps__wrapper">
                            <div class="steps__title-container">
                                <i class="fas fa-check step__icon"></i>
                                <p class="steps__title">
                                    {{locale['s5_title']}}
                                </p>
                            </div>

                            <p class="main-text">
                                {{locale['s5_text']}}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="step__text-wrapper step__img-wrapper">
                    <div class="uk-light step__img-right">
                        <img class="step__img step__img-4 uk-box-shadow-large" alt="payment"
                             src="../assets/images/steps/step-4.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const Header = () => import('@/components/layout/Header')
    import language from '../lang/lang_compensation'
    export default {
        name: "Steps",
        components: {'Header': Header},

        data() {
            return {
                header: 'steps',
                locale: language
            }
        },

        mounted() {
            this.checkLanguage()
        },

        methods: {
            checkLanguage(lang) {
                // if(lang === 'en'){
                //     this.locale = language.lang_en_compensation
                // } else {
                //     if (this.currentLanguage === 'en') {
                //         this.locale = language.lang_en_compensation
                //     } else {
                        this.locale = language.lang_nl_compensation
                //     }
                // }
            }
        },

        computed: {
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

<style lang="scss" scoped>
    @import '../styles/layout/main.scss';


</style>