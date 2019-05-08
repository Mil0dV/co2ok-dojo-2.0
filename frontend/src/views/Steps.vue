<template>
    <div class="steps__container">
        <!--Intro-->
        <vk-grid gutter="collapse" class="animated fadeInUp steps__intro uk-box-shadow-medium uk-child-width-expand@s uk-text-center">
            <div>
                <div class="intro__text uk-padding">
                    <p class="steps__green">How it works</p>
                    <h1 class="steps__title">CO₂ Compensation</h1>

                    <p class="steps__text">
                        The transport and production of any purchased item
                        causes the emission of greenhouse gases. Manufacturers
                        try to reduce this emission, but most fail to show actual
                        progress. A purchase of *that* item you want can
                        become climate neutral through CO₂-compensation.
                    </p>
                </div>
            </div>
            <div>
                <div class="uk-light uk-box-shadow-large">
                    <img class="intro__img" alt="factory"
                         src="../assets/images/steps/steps-intro.jpg">
                </div>
            </div>
        </vk-grid>

        <!--Stap 1-->
        <vk-grid data-aos="fade-right" gutter="collapse" class="steps__intro uk-child-width-expand@s uk-text-center">
            <div>
                <div class="uk-light uk-box-shadow-large">
                    <img class="step__img" alt="factory"
                         src="../assets/images/steps/step-1.jpg">
                </div>
            </div>

            <div>
                <div class="intro__text uk-padding">
                    <p class="steps__green">How it works</p>
                    <h1 class="steps__title">CO₂ Compensation</h1>

                    <p class="steps__text">
                        The transport and production of any purchased item
                        causes the emission of greenhouse gases. Manufacturers
                        try to reduce this emission, but most fail to show actual
                        progress. A purchase of *that* item you want can
                        become climate neutral through CO₂-compensation.
                    </p>
                </div>
            </div>
        </vk-grid>

        <!--Stap 2-->
        <vk-grid data-aos="fade-left" gutter="collapse" class="steps__intro  uk-child-width-expand@s uk-text-center">
            <div>
                <div class="intro__text uk-padding">
                    <p class="steps__green">How it works</p>
                    <h1 class="steps__title">CO₂ Compensation</h1>

                    <p class="steps__text">
                        The transport and production of any purchased item
                        causes the emission of greenhouse gases. Manufacturers
                        try to reduce this emission, but most fail to show actual
                        progress. A purchase of *that* item you want can
                        become climate neutral through CO₂-compensation.
                    </p>
                </div>
            </div>

            <div>
                <div class="uk-light uk-box-shadow-large">
                    <img class="step__img" alt="factory"
                         src="../assets/images/steps/step-2.jpg">
                </div>
            </div>
        </vk-grid>


        <!--Stap 3-->
        <vk-grid data-aos="fade-right" gutter="collapse"  class="steps__intro uk-child-width-expand@s uk-text-center">
            <div>
                <div class="uk-light uk-box-shadow-large">
                    <img class="step__img" alt="factory"
                         src="../assets/images/steps/step-3.jpg">
                </div>
            </div>

            <div>
                <div class="intro__text uk-padding">
                    <p class="steps__green">How it wordks</p>
                    <h1 class="steps__title">CO₂ Compensation</h1>

                    <p class="steps__text">
                        The transport and production of any purchased item
                        causes the emission of greenhouse gases. Manufacturers
                        try to reduce this emission, but most fail to show actual
                        progress. A purchase of *that* item you want can
                        become climate neutral through CO₂-compensation.
                    </p>
                </div>
            </div>
        </vk-grid>


        <!--Stap 4-->
        <vk-grid gutter="collapse" data-aos="fade-left" class="steps__intro  uk-child-width-expand@s uk-text-center">
            <div>
                <div class="intro__text uk-padding">
                    <p class="steps__green">How it works</p>
                    <h1 class="steps__title">CO₂ Compensation</h1>

                    <p class="steps__text">
                        The transport and production of any purchased item
                        causes the emission of greenhouse gases. Manufacturers
                        try to reduce this emission, but most fail to show actual
                        progress. A purchase of *that* item you want can
                        become climate neutral through CO₂-compensation.
                    </p>
                </div>
            </div>

            <div>
                <div class="uk-light uk-box-shadow-large">
                    <img class="step__img" alt="factory"
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
        overflow: auto;
    }

    .steps__green {
        color: #08BA4D;
        padding: 0;
        margin: 0;
    }

    .steps__title {
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

    .step__img {
        height: 100%;
        width: 100%;
        max-height: 400px;
        border-radius: 3px;
    }

</style>