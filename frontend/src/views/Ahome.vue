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
                <div class="iframe-container">
                    <div class="section-2__row-1">
                        <h2 class="main-title">
                            {{locale['section_2_title']}}
                        </h2>
                        <p class="main-text">
                            {{locale['section_2_text']}}
                        </p>
                        <br>
                        <a :href="this.$store.state.ninjaExtensionLink"
                           :target="this.$store.state.extensionLinkTarget"
                           class="button">{{locale['plugin']}}</a>

                    </div>

                    <div class="section-2__row-2">
                    <iframe title="co2ok intro" class="section-2__image" width="420" height="300"
                            src="https://www.youtube.com/embed/hAsY9pNJ3fE"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                        </iframe>
                    </div>
                </div>

            </div>
            
        </div>

        <!-- <div class="uk-section home__section-3 prefix__section">
            <div class="section-3__content">
                <h3 class="sub-title">{{locale['section_3_sub']}}</h3>
                <h2 class="main-title">{{locale['section_3_title']}}</h2>
                <img alt="graph" class="section-3__image" src="../assets/images/home2/graph.jpg">
            </div>  -->
        <!-- </div> -->
        <!-- <Widget/> -->

        <div class="widget-container">
        <div class="widget-core">
            <div class="widget-txt">
                <h3>Free for Webshops</h3>
                <p>
                    The first time we got called about the CO₂ok-plugin, we didn’t like the idea at all. (The second, third and fourth times neither, by the way). I knew about the concept of CO₂ compensation already and like the idea. But hey, extra text and images costs visitors – they say. And also: ‘Keep your customer journey short.’ But this plug-in contributes to the sustainable story of my online shop. It enhances our credibility and thus contributes to our revenue. And more customers than expected compensate CO₂. That’s why I’m happy with the CO₂ok-plugin
                </p>
            </div>
            <div id="widgetContainer" style="width:47%;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;"></div>
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

        <div class="uk-section home__section-4 prefix__section" style="padding: 20px 0 !important;">
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

        <Webshops :content="webshopsContent"/>

    </div>
</template>

<script>
    import homeLang from '../lang/lang_home2'
    // const Widget = () => import('@/components/layout/widget')
    const Webshops = () => import('@/components/layout/Webshops')
    // import Widget from '../co2okWidget'

    export default {
        data() {
            return {
                locale: homeLang,
                webshopsContent: 2,
            }
        },

        mounted() {
            this.checkLanguage()
            Co2okWidget.merchantCompensations('widgetContainer')
        },

        created() {
            this.$store.commit('installNinjaButton')
            // Widget.merchantCompasations('widgetContainer')
        },

        components: {
            // 'Widget': Widget
            'Webshops': Webshops 
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

     .section-2-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  img {
    padding: 0;
    margin: 0 30px 0 0;
    max-width: 100px;
    min-width: 100px;
    max-height: 100px;
    width: 100%;
    height: 100%;
  }
}

.widget-container{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px 50px 0px;
}

.widget-core{
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.widget-txt{
    width: 45%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.widget-tx h3{
    text-align: left;
}

.widget-txt p{
    text-align: left;
    font-size: 16px;
    margin-top: 10px;
}

 .widgets{
    width: 47%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
}

.co2-widget, .wood-widget{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}

.wood-widget h1, .co2-widget h1{
    text-align: right;
    font-size: 50px;
    color: green;
}

.wood-widget p, .co2-widget p{
    text-align: left;
    /* font-size: 16px; */
}

.compensate-icon{
    width: 20px;
    height: 20px;
    border: 1px solid red;
}
</style>
