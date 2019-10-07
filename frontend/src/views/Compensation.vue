<template>
    <div>
        <Header :image="header"></Header>
        <div class="steps__container">
            <div uk-grid
                 class="uk-flex uk-flex-wrap steps__intro uk-box-shadow-medium uk-child-width-expand@s uk-text-center">
                <div class="step__text-wrapper intro--smaller step__img-left">
                    <div class="intro__text step__col uk-padding">
                        <p class="steps__green">{{ $t('compensation.s1_subtitle') }}</p>
                        <h2 class="main-title--large">{{ $t('compensation.s1_title') }}</h2>

                        <p class="main-text">
                            {{ $t('compensation.s1_text') }}
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
                            {{ $t('compensation.section_2_title') }}
                            Together, we can stop climate change
                        </h2>
                        <p class="main-text">
                            {{ $t('compensation.section_2_text') }}
                            en nog wat bla bla
                        </p>
                        <br>
                        <a :href="this.$store.state.ninjaExtensionLink"
                           :target="this.$store.state.extensionLinkTarget"
                           class="button">{{ $t('compensation.plugin') }}</a>

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
                                    {{ $t('compensation.s2_title') }}
                                </p>
                            </div>

                            <p class="main-text">
                                {{ $t('compensation.s2_text') }}
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
                                    {{ $t('compensation.s3_title') }}
                                </p>
                            </div>

                            <p class="main-text">
                                {{ $t('compensation.s3_text') }}
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
                                    {{ $t('compensation.s4_title') }}
                                </p>
                            </div>

                            <p class="main-text" v-html=" $t('compensation.s4_text') ">
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
                                    {{ $t('compensation.s5_title') }}
                                </p>
                            </div>

                            <p class="main-text">
                                {{ $t('compensation.s5_text') }}
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

            <div class="about__col-1-wrapper">
                <!--Eerste blok-->
                <div class="about__col-1">
                    <div class="col-1__content col-1__image">
                        <div class="login__info animated fadeInUp" style="animation-delay: 0.4s;">
                            <p class="login__info-text">
                                {{ $t('compensation.imgText') }}
                            </p>
                        </div>
                    </div>

                    <div class="col-1__content col-1__text-wrapper">
                        <div class="col-1__text">
                            <h2 class="main-title">{{ $t('compensation.calcTitle') }}</h2>
                            <!-- <p class="sub-title">{{ $t('compensation.calcSubTitle') }}</p> -->
                            <div>
                                <p>
                                    {{ $t('compensation.shortText') }}
                                </p>
                                <br>
                                <p>
                                    {{ $t('compensation.shortText2') }}
                                </p>


                                <!-- <div class="more">
                                    <transition enter-active-class="animated bounceIn"
                                                leave-active-class="animated bounceOut"
                                                mode="out-in">
                                    <span key="1" @click="moreText = true" v-if="!moreText"
                                          class="link">{{ $t('about.read') }}</span>

                                        <span key="2" @click="moreText = false" v-else
                                              class="link">{{ $t('about.less') }}</span>
                                    </transition>
                                </div>


                                <transition enter-active-class="animated fadeIn"
                                            leave-active-class="animated fadeOut"
                                            mode="out-in">
                                    <p v-if="moreText">
                                        {{ $t('compensation.longText') }}
                                    </p>
                                </transition> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const Header = () => import('@/components/layout/Header')
    export default {
        name: "Steps",
        components: {'Header': Header},

        data() {
            return {
                header: 'steps'
            }
        }

    }

</script>

<style lang="scss" scoped>
    @import '../styles/layout/main.scss';
    @import '../styles/about.scss';

.col-1__image {
  background-image: url('../assets/images/steps/calculating.jpg');
  margin: 0 25px;
  height: 585px;
}

.col-1__text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  text-align: left;
  overflow: hidden;
}


</style>