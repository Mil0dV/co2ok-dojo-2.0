<template>
    <div class="main">
        <Header :image="header"></Header>

        <div class="uk-section section-1">
            <div class="uk-container uk-container-width">
                <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                    <div class="uk-width-expand">
                        <div class="uk-card uk-card-body section-1__col-1">
                            <h3 class="sub-title">{{locale.subTitle}}</h3>
                            <h2 class="main-title">{{locale.title}}</h2>
                            <p class="main-text">
                                {{locale.mainText}}
                            </p>

                            <br>
                            <div class="col-1--links">
                                <router-link to="/webshops/plug-in-installation" class="button">Plug-in</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="uk-width-auto">
                        <div class="uk-card col-1-card uk-card-default uk-card-body">
                            <ul class="col-1-list">
                                <li><span class="col-1-icon uk-icon-medium" uk-icon="icon: heart; ratio: 1.5"></span>
                                    {{locale.icon1}}
                                </li>
                                <li><span class="col-1-icon uk-icon-medium" uk-icon="icon: heart; ratio: 1.5"></span>
                                    {{locale.icon2}}
                                </li>
                                <li><span class="col-1-icon uk-icon-medium" uk-icon="icon: heart; ratio: 1.5"></span>
                                    {{locale.icon3}}
                                </li>
                                <li><span class="col-1-icon uk-icon-medium" uk-icon="icon: heart; ratio: 1.5"></span>
                                    {{locale.icon4}}
                                </li>
                                <li><span class="col-1-icon uk-icon-medium" uk-icon="icon: heart; ratio: 1.5"></span>                                    {{locale.icon3}}
                                    {{locale.icon5}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-section section-2 section--content">
            <div class=" uk-container-width section-2-content">
                <img alt="retailer icon 1" src="../../assets/images/webshops/retailers/retailer-icon-1.png">

                <div class="content--wrapper">
                    <h2 class="main-title">{{locale.row1}} </h2>

                    <p class="content-text" v-html="locale.row_text1">
                        <!-- {{locale.row_text1}} -->
                    </p>
                </div>
            </div>
        </div>


        <div class="uk-section section-2 section--dark section--content">
            <div class=" uk-container-width section-2-content">
                <img alt="retailer icon 2" src="../../assets/images/webshops/retailers/retailer-icon-2.png">

                <div class="content--wrapper">
                    <h2 class="main-title">{{locale.row2}}</h2>

                    <p class="content-text">
                        {{locale.row_text2}}
                    </p>

                    <p class="content-text">
                        {{locale.row_text2_extra}}
                    </p>
                </div>
            </div>
        </div>

        <div class="uk-section section-2 section--content">
            <div class=" uk-container-width section-2-content">
                <img alt="retailer icon 3" src="../../assets/images/webshops/retailers/retailer-icon-3.png">

                <div class="content--wrapper">
                    <h2 class="main-title">{{locale.row3}}</h2>

                    <p class="content-text">
                        {{locale.row_text3}}
                    </p>
                </div>
            </div>
        </div>

        <div class="uk-section section-2 section--dark section--content">
            <div class=" uk-container-width section-2-content">
                <img alt="retailer icon 4" src="../../assets/images/webshops/retailers/retailer-icon-4.png">

                <div class="content--wrapper">
                    <h2 class="main-title">{{locale.row4}}</h2>

                    <p class="content-text">
                        {{locale.row_text4}}
                    </p>

                    <br>
                    <div class="col-1--links">
                        <router-link to="/webshops/plug-in-installation" class="button">{{locale.row_button}}</router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-section section-3">
            <div class="uk-container uk-container-width">
                <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                    <div class="uk-width-expand">
                        <div class="uk-card uk-card-body section-1__col-1">
                            <h3 class="sub-title">{{locale.subTitle2}}</h3>
                            <h2 class="main-title">{{locale.title2}}</h2>
                            <p class="main-text">
                                {{locale.mainText2}}
                            </p>

                            <br>
                            <div class="col-1--links">
                                <router-link to="/webshops/plug-in-installation" class="button">{{locale.row_button2}}
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

        <div class="uk-section section-4">
            <div class="uk-container uk-container-width">
                <div class="section-2--col-1 section-4--header">
                    <h2 class="main-title">{{locale.subtitle3}}</h2>
                    <h3 class="sub-title dark--color">{{locale.title3}}</h3>
                </div>

                <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
                    <div>
                        <div class="uk-card shop__card uk-card-default uk-card-body">
                            <img alt="retailer shop 1" class="shop__image"
                                 src="../../assets/images/webshops/retailers/shop-1.png">
                            <hr style="border-bottom: 2px solid #152439; opacity: 0.5;">
                            <p class="shop--text">
                                {{locale.quote1}}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card shop__card uk-card-default uk-card-body">
                            <img alt="retailer shop 2" class="shop__image"
                                 src="../../assets/images/webshops/retailers/shop-2.png">
                            <hr style="border-bottom: 2px solid #152439; opacity: 0.5;">
                            <p class="shop--text">
                                {{locale.quote2}}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card shop__card uk-card-default uk-card-body">
                            <img alt="retailer shop 3" class="shop__image"
                                 src="../../assets/images/webshops/retailers/shop-3.png">
                            <hr style="border-bottom: 2px solid #152439; opacity: 0.5;">
                            <p class="shop--text">
                                {{locale.quote3}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WebshopForm :content="formContent"/>
    </div>
</template>

<script>
    const Header = () => import('@/components/layout/Header')
    const WebshopForm = () => import('@/components/layout/WebshopForm')
    import retailersLang from '../../lang/lang_retailers'

    export default {
        name: "Retailers",
        components: {
            'Header': Header,
            'WebshopForm': WebshopForm
        },

        data() {
            return {
                header: 'retailers',
                formContent: 2,
                locale: retailersLang,
            }
        },

        mounted() {
            this.checkLanguage()
        },

        methods: {
            checkLanguage(lang) {
                if(lang === 'en'){
                    this.locale = retailersLang.lang_en_retailers
                } else {
                    if (this.currentLanguage === 'en') {
                        this.locale = retailersLang.lang_en_retailers
                    } else {
                        this.locale = retailersLang.lang_nl_retailers
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

<style scoped lang="scss">
    @import '../../styles/layout/main.scss';
    @import '../../styles/webshops/retailers';
</style>