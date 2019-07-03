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
                if(lang === 'en'){
                    this.locale = language.lang_en_compensation
                } else {
                    if (this.currentLanguage === 'en') {
                        this.locale = language.lang_en_compensation
                    } else {
                        this.locale = language.lang_nl_compensation
                    }
                }
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

    .steps__container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 50px;
        overflow: hidden;
        margin: 0 auto 100px;
        width: 90%;
    }

    .steps__intro {
        max-width: 1090px;
        width: 100%;
        margin-top: 100px;
        border-radius: 7px;
    }

    .step__text-wrapper {
        display: flex;
        justify-content: space-between;
    }


    .intro__text {
        width: 100%;
        text-align: left;
    }

    .step__img-left {
        text-align: left;
        padding: 0;
        width: 100%;
    }

    .steps__green {
        color: #08BA4D;
        padding: 0;
        margin: 0;
    }

    .steps__intro-title {
        padding: 0;
        margin: 0;
        font-weight: 600;
    }

    .intro__img {
        max-height: 300px;
        width: 100%;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }

    .steps__content {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: left;
    }

    .steps__content-right {
        padding-right: 0px;
        justify-content: flex-end;
    }

    .steps__content-left {
        padding-left: 0px;
        justify-content: flex-start;
    }

    .steps__wrapper {
        width: 80%;
    }

    .step__img {
        height: 100%;
        width: 100%;
        max-height: 400px;
        border-radius: 3px;
    }

    .steps__title-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }

    .step__icon {
        color: #08BA4D;
        margin-right: 10px;
    }

    .steps__title {
        color: black;
        font-size: 18px;
        font-weight: 600;
    }

    .steps__text {
        padding: 0;
        margin: 0;
    }

    @media (max-width: 1200px) {
        .main-title--large {
            font-size: 30px;
        }

        .step__img-4 {
            max-height: 300px;
        }
    }

    @media (max-width: 1050px) {
        .steps__intro-title {
            font-size: 28px;
        }

        .steps__green {
            font-size: 16px;
            font-weight: 400;
        }

        .steps__intro-text, .steps__text {
            font-size: 16px;
        }

        .steps__wrapper {
            width: 90%;
        }

        .steps__title {
            font-size: 16px;
        }

        .step__img {
            max-height: 250px;
            width: 90%;
        }

        .smaller-step {
            width: 80%;
        }


        .intro__img {
            margin-left: 45px;
            padding: 0 !important;
            max-height: unset;
            width: 90%;
        }

        .steps__intro {
            box-shadow: none;
        }

        .steps__content-left, .steps__content-right {
            padding: 0;
        }

        .step__img-right {
            text-align: right;
        }

        .step__img-left {
            text-align: left;
        }
    }

    @media (max-width: 900px) {
        .intro__img {
            margin-left: unset;
            width: 100%;
        }
        .smaller-step, .step__img-left {
            padding: 0;
            width: 100%;
        }

        .steps__intro {
            margin: 0 auto;
        }

        .step__text-wrapper {
            min-width: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .steps__wrapper {
            width: 100%;
        }

        .intro__text {
            width: 95%;
        }

        .steps__intro {
            display: flex;
            flex-wrap: wrap;
            margin-top: 50px;
        }

        .steps__intro-reverse {
            flex-wrap: wrap-reverse;
        }

        .step__img-right, .step__img-left {
            text-align: center;
        }

        .intro__img, .step__img {
            max-height: 350px;
            width: 95%;
        }

        .step__img-wrapper {
            margin-top: 50px;
        }
    }

    @media (max-width: 600px) {
        .step__text-wrapper {
            min-width: unset;
        }

        .intro__text {
            width: 90%;
        }

        .step__img-wrapper {
            margin-top: 20px;
        }

        .intro__img, .step__img {
            width: 90%;
            max-height: 400px;
        }
    }

</style>