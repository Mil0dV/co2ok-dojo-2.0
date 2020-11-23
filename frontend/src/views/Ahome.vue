<template>
    <div class="home__container">
        <div class="home__section-1">
            <div class="section-1__filler">
                <img src="../assets/images/home2/logo-1.svg" alt="intro co2ok"
                     class="intro__logo">

                <div class="intro__text__wrapper">
                    <h1 class="desktop__intro left-intro">{{ $t('home2.intro_first_desktop') }}</h1>
                    <h1 class="desktop__intro left-intro">{{ $t('home2.intro_second_desktop') }}</h1>
                    <h1 class="desktop__intro left-intro">{{ $t('home2.intro_third_desktop') }}</h1>
                    <div class="mobile__intro mobile__intro-1">
                        <h1 class="left-intro">{{ $t('home2.intro_first_mobile-1') }}</h1>
                        <h1 class="left-intro">{{ $t('home2.intro_first_mobile-2') }}</h1>
                        <h1 class="left-intro">{{ $t('home2.intro_first_mobile-3') }}</h1>
                    </div>

                </div>
            </div>

             <div class="section-2__filler">
                <img src="../assets/images/home2/logo-2.svg" alt="intro co2ok"
                     class="intro__logo intro__logo-lower">

                <div class="intro__text__wrapper">
                    <h1 class="desktop__intro right-intro">{{ $t('home2.intro_first_desktop_2') }}</h1>
                    <h1 class="desktop__intro right-intro">{{ $t('home2.intro_second_desktop_2') }}</h1>
                    <h1 class="desktop__intro right-intro">{{ $t('home2.intro_third_desktop_2') }}</h1>
                    <div class="mobile__intro mobile__intro-1">
                        <h1 class="right-intro" style="margin-top: -2px;">{{ $t('home2.intro_second_mobile-1') }}</h1>
                        <h1 class="right-intro">{{ $t('home2.intro_second_mobile-2') }}</h1>
                        <h1 class="right-intro">{{ $t('home2.intro_second_mobile-3') }}</h1>
                    </div>
                </div>
            </div>


            <!-- <div class="section-3__filler">
                <img src="../assets/images/home2/logo-2.svg" alt="intro co2ok"
                     class="intro__logo intro__logo-lower">

                <div class="intro__text__wrapper">
                    <h1 class="desktop__intro">{{ $t('home2.intro_third_desktop') }}</h1>
                    <div class="mobile__intro mobile__intro-2">
                        <h1>{{ $t('home2.intro_second_mobile-1') }}</h1>
                        <h1>{{ $t('home2.intro_second_mobile-2') }}</h1>
                    </div>
                </div>
            </div> -->
        </div>

        <div class="home__section-2 prefix__section">


            <div class="section-2__content">
                <div class="section-2__row-1">
                    <h2 class="main-title">
                        {{ $t('home2.section_2_title') }}
                    </h2>
                    <p class="main-text">
                        {{ $t('home2.section_2_text') }}
                    </p>
                    <br>
                    <!-- <a href="/#home_form"
                    class="button">{{ $t('home2.button_1') }}</a> -->
                    <!-- <router-link :to="{ path: '/', hash: '#home_form'}" class="button">{{ $t('home2.button_1') }} -->
                    <router-link to="/webshops/get-started" class="button">{{ $t('home2.button_1') }}
                                </router-link>
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

        <Retail />
        <MarketingCause/>
        <Testimonials
            :name="$t('testimonials.nameOne')"
            :company="$t('testimonials.companyOne')"
            :title="$t('home2.testimonial_head')"
            :mainText="$t('home2.testimonial_content')"
            :imageUrl="require('../assets/images/home2/profile-foto.jpg')"
        >
        </Testimonials>
        <BBApi />
        <Partners />

        <!-- <div class="prefix__section"> -->
           <!--  <div class="section-3__content">
                <h3 class="sub-title">{{ $t('home2.section_3_sub') }}</h3>
                <h2 class="main-title">{{ $t('home2.section_3_title') }}</h2>
                <img alt="graph" class="section-3__image" src="../assets/images/home2/shoppingcart-nl.png">
            </div>  -->
            <!-- <div class="uk-card shop__card uk-card-default uk-card-body" style="border-radius: 10px;">
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
        </div> -->


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


        <Webshops :content="webshopsContent"/>
        <WebshopForm :content="formContent"/>

    </div>
</template>

<script>
    // const Widget = () => import('@/components/layout/widget')
    const WebshopForm = () => import('@/components/layout/WebshopForm')
    const Webshops = () => import('@/components/webshops/WebshopLogos')
    const BBApi = () => import('@/views/landing/BBApi')
    const Retail = () => import('@/views/landing/Retail')
    const MarketingCause = () => import('@/views/landing/MarketingCause')
    const Partners = () => import('@/views/landing/Partners')
    const Testimonials = () => import('@/views/landing/Testimonials')




    // import Widget from '../co2okWidget'

    export default {
        name: "Ahome",
        data() {
            return {
                formContent: 2,
                webshopsContent: 2,
            }
        },

        mounted() {
            // this.checkLanguage()
            // Co2okWidget.merchantCompensations('widgetContainer', '0')
        },

        created() {
            this.$store.commit('installNinjaButton')
            // Widget.merchantCompasations('widgetContainer')
        },

        components: {
            // 'Widget': Widget
            'WebshopForm': WebshopForm,
            'Webshops': Webshops,
            'Retail': Retail,
            'BBApi': BBApi,
            'MarketingCause': MarketingCause,
            'Partners': Partners,
            'Testimonials': Testimonials
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
    @import '../styles/splash.scss';
    @import '../styles/webshops/cause.scss';
</style>
