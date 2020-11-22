<template>
    <div class="main">
        <Header :image="header"></Header>

        <div class="uk-section section-1">
            <div class="uk-container uk-container-width">
                <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                    <div class="uk-width-expand">
                        <div class="uk-card uk-card-body section-1__col-1">
                            <h3 class="sub-title">{{ $t('retailers.subTitle') }}</h3>
                            <h2 class="main-title">{{ $t('retailers.title') }}</h2>
                            <p class="main-text">
                                {{ $t('retailers.mainText') }}
                            </p>

                            <br>
                            <div class="col-1--links">
                                <router-link to="/webshops/get-started" class="button">{{ $t('retailers.row_button') }}</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="uk-width-auto">
                        <div class="uk-card col-1-card uk-card-default uk-card-body" style="border-radius: 10px; max-width: 452px;">
                            <ul class="col-1-list">
                                <li><span class="col-1-icon uk-icon-medium" uk-icon="icon: heart; ratio: 1.5"></span>
                                    {{ $t('retailers.icon1') }}
                                </li>
                                <li><span class="col-1-icon uk-icon-medium" uk-icon="icon: heart; ratio: 1.5"></span>
                                    {{ $t('retailers.icon2') }}
                                </li>
                                <li><span class="col-1-icon uk-icon-medium" uk-icon="icon: heart; ratio: 1.5"></span>
                                    {{ $t('retailers.icon3') }}
                                </li>
                                <li><span class="col-1-icon uk-icon-medium" uk-icon="icon: heart; ratio: 1.5"></span>
                                    {{ $t('retailers.icon4') }}
                                </li>
                                <li><span class="col-1-icon uk-icon-medium" uk-icon="icon: heart; ratio: 1.5"></span>                                    
                                    {{ $t('retailers.icon5') }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                                <!-- <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid> -->
                <div class="uk-card shop__card uk-card-default uk-card-body" style="top: 70px; margin-bottom: 40px; border-radius: 10px;">
                    <div class=" uk-container-width testimonial-container" style="padding: 10px !important;">
                        <div class="img-text">
                            <img alt="retailer icon 3" src="../../assets/images/home2/profile-foto.jpg">
                            <p><strong>Cor Sandburg</strong><br>Happy Towels</p>
                        </div>
                        <div class="testimonial-wrapper">
                            <p class="main-title" style="font-weight: bold;font-size: 20px;margin: 0px;">{{ $t('retailers.testimonial_head') }}</p>

                            <p class="content-text">
                                {{ $t('retailers.testimonial_content') }}
                            </p>
                        </div>
                    </div>
                </div>
                <!-- </div> -->
            </div>
        </div>


        <div class="uk-section section-2 section--content">
            <div class=" uk-container-width section-2-content">
                <img alt="retailer icon 1" src="../../assets/images/webshops/retailers/retailer-icon-1.png">

                <div class="content--wrapper">
                    <h2 class="main-title">{{ $t('retailers.row1') }} </h2>

                    <p class="content-text" v-html=" $t('retailers.row_text1') ">
                    <h2 class="sub-title">{{ $t('retailers.row1_extra') }} </h2>
                    <p class="content-text" v-html=" $t('retailers.row_text1_extra') ">
                        <!-- {{ $t('retailers.row_text1') }} -->
                    </p>
                </div>
            </div>
        </div>


        <div class="uk-section section-2 section--dark section--content">
            <div class=" uk-container-width section-2-content">
                <img alt="retailer icon 2" src="../../assets/images/webshops/retailers/retailer-icon-2.png">

                <div class="content--wrapper">
                    <h2 class="main-title">{{ $t('retailers.row2') }}</h2>

                    <p class="content-text" v-html=" $t('retailers.row_text2') ">
                    </p>
                           <router-link to="/webshops/cause-marketing"> Cause Marketing </router-link>

                    <!-- <p class="content-text">
                        {{ $t('retailers.row_text2_extra') }}
                    </p> -->
                </div>
            </div>
        </div>

        <div class="uk-section section-2 section--content">
            <div class=" uk-container-width section-2-content">
                <img alt="retailer icon 3" src="../../assets/images/webshops/retailers/retailer-icon-3.png">

                <div class="content--wrapper">
                    <h2 class="main-title">{{ $t('retailers.row3') }}</h2>

                    <p class="content-text">
                        {{ $t('retailers.row_text3') }}
                    </p>
                </div>
            </div>
        </div>

        <div class="uk-section section-2 section--dark section--content" style="margin-bottom: 0px;">
            <div class=" uk-container-width section-2-content">
                <img alt="retailer icon 4" src="../../assets/images/webshops/retailers/retailer-icon-4.png">

                <div class="content--wrapper">
                    <h2 class="main-title">{{ $t('retailers.row4') }}</h2>

                    <p class="content-text">
                        {{ $t('retailers.row_text4') }}
                    </p>

                    <!-- <br> -->
                    <!-- <div class="col-1--links">
                        <router-link to="/webshops/plug-in-installation" class="button">{{ $t('retailers.row_button') }}</router-link>
                    </div> -->
                </div>
            </div>
        </div>

        <WebshopForm :content="formContent"/>

        <Webshops :content="webshopsContent"/>

        <div class="uk-section section-3">
            <div class="uk-container uk-container-width" style="padding: 0px 0 !important;">
                <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                    <div class="uk-width-expand">
                        <div class="uk-card uk-card-body section-1__col-1">
                            <h3 class="sub-title">{{ $t('retailers.subTitle2') }}</h3>
                            <h2 class="main-title">{{ $t('retailers.title2') }}</h2>
                            <p class="main-text" v-html="$t('retailers.mainText2')">
                            </p>

                            <br>
                            <div class="col-1--links">
                                <router-link to="/webshops/plug-in-installation" class="button">{{ $t('retailers.row_button') }}
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div class="uk-width-auto">
                        <div class="uk-card uk-card-body ">
                            <img class="col-2--image" src="../../assets/images/webshops/retailers/retailer-1.png"
                                 alt="Protest climate" uk-img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-section section-4" id="pricing">
            <div class="uk-container uk-container-width">
                <div class="section-2--col-1 section-4--header">
                    <h2 class="main-title">{{ $t('retailers.subtitle3') }}</h2>
                    <h2 class="sub-title">{{ $t('retailers.title3') }}</h2>
                </div>
                <div class="section-2--col-1 section-4--header">
                    <router-link to="/webshops/get-started" class="button">Sign up before Christmas, get 2021 for free!</router-link>
                </div>
            <!-- <a href="/#home_form" class="button__banner">{{ $t('home2.section_5_btn') }}</a> -->

                <div class="uk-child-width-1-4@m uk-grid-small uk-grid-match" uk-grid>
                    <div>
                        <div class="uk-card shop__card uk-card-default uk-card-body">
                            <!-- <img alt="retailer shop 1" class="shop__image"
                                 src="../../assets/images/webshops/retailers/shop-1.png"> -->
                            <hr style="border-bottom: 2px solid #152439; opacity: 0.5;">
                            <p class="shop--text" v-html=" $t('retailers.quote1') ">
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card shop__card uk-card-default uk-card-body">
                            <!-- <img alt="retailer shop 2" class="shop__image"
                                 src="../../assets/images/webshops/retailers/shop-2.png"> -->
                            <hr style="border-bottom: 2px solid #152439; opacity: 0.5;">
                            <p class="shop--text" v-html=" $t('retailers.quote2') ">
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card shop__card uk-card-default uk-card-body">
                            <!-- <img alt="retailer shop 3" class="shop__image"
                                 src="../../assets/images/webshops/retailers/shop-3.png"> -->
                            <hr style="border-bottom: 2px solid #152439; opacity: 0.5;">
                            <p class="shop--text" v-html=" $t('retailers.quote3') ">
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card shop__card uk-card-default uk-card-body">
                            <!-- <img alt="retailer shop 3" class="shop__image"
                                 src="../../assets/images/webshops/retailers/shop-3.png"> -->
                            <hr style="border-bottom: 2px solid #152439; opacity: 0.5;">
                            <div class="col-1--links">
                                <router-link to="/webshops/get-started" class="button">{{ $t('retailers.row_button3') }}</router-link>
                            </div>
                            <p class="shop--text" v-html=" $t('retailers.quote4') ">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const Header = () => import('@/components/layout/Header')
    const WebshopForm = () => import('@/components/layout/WebshopForm')
    const Webshops = () => import('@/components/webshops/WebshopLogos')

    export default {
        name: "Retailers",
        components: {
            'Header': Header,
            'WebshopForm': WebshopForm,
            'Webshops': Webshops
        },

        data() {
            return {
                header: 'retailers',
                formContent: 2,
                webshopsContent: 2
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../styles/layout/main.scss';
    @import '../../styles/webshops/retailers';


</style>