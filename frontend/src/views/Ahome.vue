<template>
    <div class="home__container">
        <div class="uk-section home__section-1">
            <div class="section-1__filler">
                <img src="../assets/images/home2/logo-1.svg" alt="intro co2ok"
                     class="intro__logo">

                <div class="intro__text__wrapper">
                    <h1 class="desktop__intro">{{ $t('home2.intro_first_desktop') }}</h1>
                    <div class="mobile__intro mobile__intro-1">
                        <h1>{{ $t('home2.intro_first_mobile-1') }}</h1>
                        <h1>{{ $t('home2.intro_first_mobile-2') }}</h1>
                    </div>
                </div>
            </div>

            <div class="section-2__filler">
                <img src="../assets/images/home2/logo-2.svg" alt="intro co2ok"
                     class="intro__logo intro__logo-lower">

                <div class="intro__text__wrapper">
                    <h1 class="desktop__intro">{{ $t('home2.intro_second_desktop') }}</h1>
                    <div class="mobile__intro mobile__intro-2">
                        <h1>{{ $t('home2.intro_second_mobile-1') }}</h1>
                        <h1>{{ $t('home2.intro_second_mobile-2') }}</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-section home__section-2 prefix__section">
            <div class="section-2__content">
                    <div class="section-2__row-1">
                        <h2 class="main-title">
                            {{ $t('home2.section_2_title') }}
                        </h2>
                        <p class="main-text">
                            {{ $t('home2.section_2_text') }}
                        </p>
                        <br>
                        <a href="/webshops/retailers"
                           class="button">{{ $t('home2.button_1') }}</a>
                        <!-- <a href="/ninja"
                           class="button">{{ $t('home2.button_2') }}</a> -->

                    </div>
                    <!-- voor webshops: hAsY9pNJ3fE -->
                    <div class="section-2__row-2">
                    <iframe title="co2ok intro" class="section-2__image" width="532" height="299"
                            src="https://www.youtube.com/embed/hAsY9pNJ3fE"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                        </iframe>
                    </div>

            </div>
        </div>

        <div class="steps__container">
            <h2 class="main-title">
                {{ $t('home2.steps_title') }}
            </h2>

            <!--Stap 1-->
            <div uk-grid class="steps__intro steps__intro-reverse uk-child-width-expand@s uk-text-center">
                <div class="step__text-wrapper  step__img-left step__img-wrapper">
                    <div class="uk-light">
                        <img class="step__img uk-box-shadow-large" alt="2 factory"
                             src="../assets/images/home2/shoppingcart-snippet-nl.png">
                    </div>
                </div>

                <div class="step__text-wrapper">
                    <div class="intro__text step__col steps__content steps__content-right uk-padding">
                        <div class="steps__wrapper">
                            <div class="steps__title-container">
                                <i class="fas fa-smog step__icon"></i>
                                <p class="steps__title">
                                    {{ $t('home2.s2_title') }}
                                </p>
                            </div>

                            <p class="main-text">
                                {{ $t('home2.s2_text') }}
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
                                    {{ $t('home2.s3a_title') }}
                                </p>
                            </div>

                            <p class="main-text">
                                {{ $t('home2.s3_text') }}
                            </p>
                        </div> -->
                    </div>
                </div>

                <div class="step__text-wrapper step__img-wrapper">
                    <div class="uk-light step__img-right">
                        <img class="step__img uk-box-shadow-large" alt="payment"
                             src="../assets/images/steps/step-3.jpg">
                    </div>
                </div>
            </div>


            <!--Stap 3-->
            <div uk-grid class="steps__intro steps__intro-reverse uk-child-width-expand@s uk-text-center">
                <div class="step__text-wrapper step__img-left step__img-wrapper">
                    <div class="uk-light step__img-left">
                        <img class="step__img  uk-box-shadow-large" alt="solar-panels"
                             src="../assets/images/steps/step-2.jpg">
                    </div>
                </div>

                <div class="step__text-wrapper">
                    <div class="intro__text step__col steps__content steps__content-right uk-padding">
                        <div class="steps__wrapper">
                            <div class="steps__title-container">
                                <i class="fas fa-solar-panel step__icon"></i>
                                <p class="steps__title">
                                    {{ $t('home2.s4_title') }}
                                </p>
                            </div>

                            <p class="main-text">
                                {{ $t('home2.s4_text') }}
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
                                    {{ $t('home2.s5_title') }}
                                </p>
                            </div>

                            <p class="main-text">
                                {{ $t('home2.s5_text') }}
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


        <div class="uk-section section-4 section--dark">
            <div class="uk-container uk-container-width">
                <div class="section-2--col-1 section-4--header">
                    <h2 class="sub-title dark--color">{{ $t('home2.s3_subTitle') }}</h2>
                    <h2 class="main-title">{{ $t('home2.s3_title') }}</h2>
                </div>
                <br><br>

                <div class="graph__section">

                    <div class="graph-wrapper">
                        <div class="flex-wrapper">
                            <div class="single-chart">
                                <svg viewBox="0 0 36 36" class="circular-chart green-to-stroke">
                                    <path class="circle-bg"
                                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                          stroke-dasharray="90, 100"
                                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" class="percentage">90%</text>
                                </svg>
                            </div>
                        </div>

                        <div class="graph__text">
                            <h2 class="main-title">{{ $t('home2.s3_consumers') }}</h2>
                            <p class="main-text">
                                {{ $t('home2.s3_row1_text') }}
                            </p>

                            <br>
                            <a class="link row-link" href="http://www.conecomm.com/research-blog/2015-cone-communications-ebiquity-global-csr-study">
                                {{ $t('home2.s3_row1_link') }} <span uk-icon="icon: arrow-right"></span>
                            </a>
                        </div>
                    </div>

                    <div class="graph-wrapper">
                        <div class="flex-wrapper">
                            <div class="single-chart">
                                <svg viewBox="0 0 36 36" class="circular-chart green-to-stroke">
                                    <path class="circle-bg"
                                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                          stroke-dasharray="90, 100"
                                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" class="percentage">75%</text>
                                </svg>
                            </div>
                        </div>

                        <div class="graph__text">
                            <h2 class="main-title">{{ $t('home2.s3_respondents') }}</h2>
                            <p class="main-text">
                                {{ $t('home2.s3_row2_text') }}
                            </p>

                            <br>
                            <a class="link row-link" href="https://www.edelman.com/news/2017-edelman-trust-barometer-reveals-global-implosion">
                                {{ $t('home2.s3_row2_link') }} <span uk-icon="icon: arrow-right"></span>
                            </a>
                        </div>
                    </div>

                    <div class="graph-wrapper">
                        <div class="flex-wrapper">
                            <div class="single-chart">
                                <svg viewBox="0 0 36 36" class="circular-chart green-to-stroke">
                                    <path class="circle-bg"
                                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                          stroke-dasharray="90, 100"
                                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" class="percentage">92%</text>
                                </svg>
                            </div>
                        </div>

                        <div class="graph__text">
                            <h2 class="main-title">{{ $t('home2.s3_consumers') }}</h2>
                            <p class="main-text">
                                {{ $t('home2.s3_row3_text') }}
                            </p>

                            <br>
                            <a class="link row-link" href="http://www.conecomm.com/news-blog/2017/5/15/americans-willing-to-buy-or-boycott-companies-based-on-corporate-values-according-to-new-research-by-cone-communications">
                                {{ $t('home2.s3_row3_link') }} <span uk-icon="icon: arrow-right"></span>
                            </a>
                        </div>
                    </div>

                    <div class="graph-wrapper">
                        <div class="flex-wrapper">
                            <div class="single-chart">
                                <svg viewBox="0 0 36 36" class="circular-chart green-to-stroke">
                                    <path class="circle-bg"
                                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                          stroke-dasharray="90, 100"
                                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" class="percentage">66%</text>
                                </svg>
                            </div>
                        </div>

                        <div class="graph__text">
                            <h2 class="main-title">{{ $t('home2.s3_consumers') }}</h2>
                            <p class="main-text">
                                {{ $t('home2.s3_row4_text') }}
                            </p>

                            <br>
                            <a class="link row-link" href="https://sproutsocial.com/insights/data/championing-change-in-the-age-of-social-media">
                                {{ $t('home2.s3_row4_link') }} <span uk-icon="icon: arrow-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="uk-section home__section-3 prefix__section">
           <!--  <div class="section-3__content">
                <h3 class="sub-title">{{ $t('home2.section_3_sub') }}</h3>
                <h2 class="main-title">{{ $t('home2.section_3_title') }}</h2>
                <img alt="graph" class="section-3__image" src="../assets/images/home2/shoppingcart-nl.png">
            </div>  -->
            <div class="uk-card shop__card uk-card-default uk-card-body" style="top: 70px; margin-bottom: 40px; border-radius: 10px;">
                <div class=" uk-container-width testimonial-container" style="padding: 10px !important;">
                    <div class="img-text">
                        <img alt="retailer icon 3" src="../assets/images/home2/profile-foto.jpg">
                        <p><strong>Cor Sandburg</strong><br>Happy Towels</p>
                    </div>
                    <div class="testimonial-wrapper">
                        <p class="main-title" style="font-weight: bold;font-size: 20px;margin: 0px;">{{ $t('home2.testimonial_head') }}</p>

                        <p class="content-text">
                            {{ $t('home2.testimonial_content') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <!-- <Widget/> -->

        <!-- <div class="widget-container">
            <div class="widget-core">
                <div class="widget-txt">
                    <h3>Free for Webshops</h3>
                    <p>
                        The first time we got called about the CO₂ok-plugin, we didn’t like the idea at all. (The second, third and fourth times neither, by the way). I knew about the concept of CO₂ compensation already and like the idea. But hey, extra text and images costs visitors – they say. And also: ‘Keep your customer journey short.’ But this plug-in contributes to the sustainable story of my online shop. It enhances our credibility and thus contributes to our revenue. And more customers than expected compensate CO₂. That’s why I’m happy with the CO₂ok-plugin
                    </p>
                </div>
                <div id="widgetContainer" style="width:180px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;"></div>
            </div>
        </div> -->

        <!-- Projects -->
        <!-- <div class="uk-section home__section-4 prefix__section" style="padding: 20px 0 !important;">
            <div class="section-4__content">
                <h3 class="sub-title">{{ $t('home2.section_4_sub') }}</h3>
                <h2 class="main-title">{{ $t('home2.section_4_title') }}</h2>

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
                            {{ $t('home2.section_4_text') }}
                        </p>
                    </div>
                    <br>

                    <router-link to="/projects/" class="button">{{ $t('home2.section_4_btn') }}</router-link>
                </div>
            </div>
        </div> -->


        <!-- Partners -->
        <div class="uk-section home__section-5 prefix__section">
            <div class="section-5__content">
                <h3 class="sub-title">{{ $t('home2.section_5_sub') }}</h3>
                <h2 class="main-title">{{ $t('home2.section_5_title') }}</h2>

                <div class="section-5__images">
                    <!-- <a href="https://www.atmosfair.de/en"> -->
                    <img alt="logo1" class="section-5__image"
                         src="../assets/images/home2/logo1.jpg">
                         <!-- </a> -->
                    <img alt="logo1" class="section-5__image"
                         src="../assets/images/home2/logo2.jpg">
                    <img alt="logo1" class="section-5__image"
                         src="../assets/images/home2/logo3.jpg">
                    <img alt="logo1" class="section-5__image"
                         src="../assets/images/home2/logo4.jpg">
                </div>

                <router-link to="/webshops/retailers" class="button__home">{{ $t('home2.section_5_btn') }}</router-link>
            </div>
        </div>


        <Webshops :content="webshopsContent"/>

        <WebshopForm :content="formContent"/>

    </div>
</template>

<script>
    // const Widget = () => import('@/components/layout/widget')
    const WebshopForm = () => import('@/components/layout/WebshopForm')
    const Webshops = () => import('@/components/layout/Webshops')
    // import Widget from '../co2okWidget'

    export default {
        data() {
            return {
                formContent: 2,
                webshopsContent: 2,
            }
        },

        mounted() {
            // this.checkLanguage()
            Co2okWidget.merchantCompensations('widgetContainer', 'TWVyY2hhbnQ6MzExNGMyMjYtMzk0Ni00N2QzLTgxNGMtODE5YTI0ZjgyMjU5', 'XL', 'gray') 
            // Co2okWidget.merchantCompensations('widgetContainer', '0') 
        },

        created() {
            this.$store.commit('installNinjaButton')
            // Widget.merchantCompasations('widgetContainer')
        },

        components: {
            // 'Widget': Widget
            'WebshopForm': WebshopForm,
            'Webshops': Webshops 
        },

        computed: {
            currentRouteName() {
                return this.$route.name;
            },
        }

    }
</script>

<style scoped lang="scss">
    @import '../styles/home.scss';
    @import '../styles/webshops/cause';

//      .section-2-content {
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: flex-start;

//   img {
//     padding: 0;
//     margin: 0 30px 0 0;
//     max-width: 100px;
//     min-width: 100px;
//     max-height: 100px;
//     width: 100%;
//     height: 100%;
//   }
// }

// .widget-container{
//     width: 100%;
//     height: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 50px 0px 50px 0px;
// }

// .widget-core{
//     width: 80%;
//     height: auto;
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     align-items: center;
// }

// .widget-txt{
//     width: 45%;
//     height: auto;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
// }

// .widget-tx h3{
//     text-align: left;
// }

// .widget-txt p{
//     text-align: left;
//     font-size: 16px;
//     margin-top: 10px;
// }

//  .widgets{
//     width: 47%;
//     height: auto;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     border: 1px solid red;
// }

// .co2-widget, .wood-widget{
//     width: 100%;
//     height: auto;
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: flex-start;
// }

// .wood-widget h1, .co2-widget h1{
//     text-align: right;
//     font-size: 50px;
//     color: green;
// }

// .wood-widget p, .co2-widget p{
//     text-align: left;
//     /* font-size: 16px; */
// }

// .compensate-icon{
//     width: 20px;
//     height: 20px;
//     border: 1px solid red;
// }
</style>
