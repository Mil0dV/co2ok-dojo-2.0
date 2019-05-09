<template>
    <div class="steps__container">
        <!--Intro-->
        <vk-grid gutter="collapse" class="animated fadeInUp uk-flex uk-flex-wrap steps__intro uk-box-shadow-medium uk-child-width-expand@s uk-text-center">
            <div class="step__text-wrapper">
                <div class="intro__text step__col uk-padding">
                    <p class="steps__green">How it works</p>
                    <h1 class="steps__intro-title">CO₂ Compensation</h1>

                    <p class="steps__intro-text">
                        The transport and production of any purchased item
                        causes the emission of greenhouse gases. Manufacturers
                        try to reduce this emission, but most fail to show actual
                        progress. A purchase of *that* item you want can
                        become climate neutral through CO₂-compensation.
                    </p>
                </div>
            </div>
            <div class="step__text-wrapper step__img-wrapper">
                <div class="uk-light step__img-right">
                    <img class="intro__img uk-box-shadow-large" alt="factory"
                         src="../assets/images/steps/steps-intro.jpg">
                </div>
            </div>
        </vk-grid>

        <!--Stap 1-->
        <vk-grid gutter="collapse" class="steps__intro steps__intro-reverse uk-child-width-expand@s uk-text-center">
            <div data-aos="fade-right" data-aos-duration="1000" class="step__text-wrapper step__img-wrapper">
                <div class="uk-light step__img-left">
                    <img class="step__img uk-box-shadow-large" alt="factory"
                         src="../assets/images/steps/step-1.jpg">
                </div>
            </div>

            <div data-aos-duration="2000" data-aos="fade" class="step__text-wrapper">
                <div class="intro__text step__col steps__content steps__content-right uk-padding">
                    <div class="steps__wrapper">
                        <div class="steps__title-container">
                            <v-icon class="step__icon">cloud</v-icon>
                            <p class="steps__title">
                                1. Computing the greenhouse gases
                            </p>
                        </div>

                        <p class="steps__text">
                            We compute the greenhouse gases that are emitted
                            during production and transport. We convert these to
                            equal amounts of CO₂, for example, 1 gram of methane
                            equals 100 grams of CO₂.
                        </p>
                    </div>
                </div>
            </div>
        </vk-grid>

        <!--Stap 2-->
        <vk-grid gutter="collapse" class="steps__intro uk-child-width-expand@s uk-text-center">
            <div data-aos-duration="2000" data-aos="fade" class="step__text-wrapper">
                <div class="intro__text step__col steps__content steps__content-left uk-padding">
                    <div class="steps__wrapper">
                        <div class="steps__title-container">
                            <v-icon class="step__icon">shopping_cart</v-icon>
                            <p class="steps__title">
                                2. Purchase with Co2ok
                            </p>
                        </div>

                        <p class="steps__text">
                            If you choose to make your purchase CO₂ok, you will pay
                            a tiny extra amount upon purchase.
                        </p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" class="step__text-wrapper step__img-wrapper">
                <div class="uk-light step__img-right">
                    <img class="step__img uk-box-shadow-large" alt="payment"
                         src="../assets/images/steps/step-2.jpg">
                </div>
            </div>
        </vk-grid>


        <!--Stap 3-->
        <vk-grid gutter="collapse" class="steps__intro steps__intro-reverse uk-child-width-expand@s uk-text-center">
            <div data-aos="fade-right"  data-aos-offset="200" data-aos-duration="1000" class="step__text-wrapper step__img-wrapper">
                <div class="uk-light step__img-left">
                    <img class="step__img  uk-box-shadow-large" alt="solar-panels"
                         src="../assets/images/steps/step-3.jpg">
                </div>
            </div>

            <div data-aos-duration="2000" data-aos="fade" class="step__text-wrapper">
                <div class="intro__text step__col steps__content steps__content-right uk-padding">
                    <div class="steps__wrapper">
                        <div class="steps__title-container">
                            <v-icon class="step__icon">brightness_5</v-icon>
                            <p class="steps__title">
                                3. Financing projects
                            </p>
                        </div>

                        <p class="steps__text">
                            This amount is used to finance projects of durable energy
                            and CO₂-emission reduction (via our certified partner,
                            Atmosfair)
                        </p>
                    </div>
                </div>
            </div>
        </vk-grid>


        <!--Stap 4-->
        <vk-grid gutter="collapse" class="steps__intro uk-child-width-expand@s uk-text-center">
            <div data-aos-duration="2000" data-aos="fade" class="step__text-wrapper">
                <div class="intro__text step__col steps__content steps__content-left uk-padding">
                    <div class="steps__wrapper">
                        <div class="steps__title-container">
                            <v-icon class="step__icon">check</v-icon>
                            <p class="steps__title">
                                4. Making your purchase climate neutral
                            </p>
                        </div>

                        <p class="steps__text">
                            These projects actively reduce the amount of emitted
                            CO₂. This CO₂ reduction matches the emission of your
                            purchase – your purchase is climate neutral!
                        </p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" class="step__text-wrapper step__img-wrapper">
                <div class="uk-light step__img-right">
                    <img class="step__img step__img-4 uk-box-shadow-large" alt="payment"
                         src="../assets/images/steps/step-4.jpg">
                </div>
            </div>

        </vk-grid>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Vuikit from 'vuikit'
    import VuikitIcons from '@vuikit/icons'
    import '@vuikit/theme'

    Vue.use(VuikitIcons)
    Vue.use(Vuikit)
    export default {
        name: "Steps",
    }

</script>

<style scoped>
    .steps__container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 50px;
        overflow: hidden;
        margin: 0 auto;
        width: 100%;
    }

    .steps__intro {
        max-width: 1090px;
        width: 100%;
        margin-top: 100px;
        border-radius: 7px;
    }

    .intro__text {
        width: 100%;
        height: 100%;
        text-align: left;
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
        color:#08BA4D;
        margin-right: 10px;
    }

    .steps__title {
        color:black;
        font-size: 18px;
        font-weight: 600;
    }

    .steps__text {
        padding: 0;
        margin: 0;
    }

    @media (max-width: 1200px) {
        .steps__container {
            width: 90%;
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
            font-size: 14px;
            font-weight: 400;
        }

        .steps__intro-text, .steps__text {
            font-size: 14px;
        }

        .steps__wrapper {
            width: 90%;
        }

        .steps__title {
            font-size: 16px;
        }

        .step__img {
            max-height:250px;
            width: 90%;
        }

        .intro__img {
            max-height:250px;
            width: 90%;
        }

        .steps__intro {
            box-shadow: none;
        }

        .intro__text {
            padding: 0;
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
            max-height:350px;
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