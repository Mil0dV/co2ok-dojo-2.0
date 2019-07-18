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
                                <router-link to="/webshops/retailers" class="button">Retailer</router-link>

                                <div class="col-1--links-wrapper">
                                    <router-link class="link" to="/webshops/cause-marketing">
                                        {{locale.link2}} <span uk-icon="icon: arrow-right"></span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="uk-width-auto">
                        <div class="uk-card uk-card-body ">
                            <img class="col-2--image" src="../../assets/images/webshops/shops/webshops-protest.png"
                                 alt="Protest climate" uk-img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-section section-2">
            <div class="uk-container uk-container-width">
                <div class="section-2--col-1">
                    <h1 class="main-title">{{locale.title2}}</h1>
                    <h2 class="sub-title sub-title--s2">{{locale.subTitle2}}</h2>
                </div>
                <br>

                <div class="section-2--col-2">
                    <a target="_blank" :href="i.link" :style="{'background-image': 'url(' + require(`@/assets/images/webshops/shops/${i.image}.png`) + ')'}"
                         class=" shops--image section-2--shops" v-for="i in webshop" :key="i.link">
                        <div class="section-2--shops shop--image-wrapper ">
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const Header = () => import('@/components/layout/Header')
    import webshopsLang from '../../lang/lang_webshops'

    export default {
        name: "Webshops",
        components: {'Header': Header},

        data() {
            return {
                header: 'webshops',
                locale: webshopsLang,
                webshop: [
                    {
                        image: 'shop-1',
                        link: 'https://www.natuurlijk-kleurrijk.nl/'
                    },
                    {
                        image: 'shop-2',
                        link: 'https://michielvandijk.nl/'
                    },
                    {
                        image: 'shop-3',
                        link: 'http://www.natuurvol.nl/wonen'
                    },
                    {
                        image: 'shop-4',
                        link: 'https://www.soap7.com/'
                    },
                    {
                        image: 'shop-5',
                        link: 'https://landsbyfadder.org/'
                    },
                    {
                        image: 'shop-6',
                        link: 'https://www.zaailingen.com/'
                    },
                    {
                        image: 'shop-7',
                        link: 'https://happytowels.nl/'
                    },
                    {
                        image: 'shop-8',
                        link: 'https://www.fairtradeupgrade.shop/'
                    },
                    {
                        image: 'shop-9',
                        link: 'http://www.dimlight.nl/'
                    },
                    {
                        image: 'shop-10',
                        link: 'http://www.metpapier.nl/'
                    },
                    {
                        image: 'shop-11',
                        link: 'https://bamboedesign.nl/'
                    },
                    {
                        image: 'shop-12',
                        link: 'http://www.aquaponicsshop.eu/'
                    },
                    {
                        image: 'shop-13',
                        link: 'http://helpenderobot.nl/'
                    },
                    {
                        image: 'shop-14',
                        link: 'https://millersoils.nl/'
                    },
                    {
                        image: 'shop-15',
                        link: 'https://www.billenboetiek.nl/'
                    },
                    {
                        image: 'shop-16',
                        link: 'https://www.bruidenbeautyshop.nl/?v=796834e7a283'
                    },
                    {
                        image: 'shop-17',
                        link: 'https://verloskundeshop.nl/'
                    },
                    {
                        image: 'shop-18',
                        link: 'http://www.studiospatz.nl/'
                    },
                    {
                        image: 'shop-19',
                        link: 'https://www.krnwtr.nl/'
                    },
                    {
                        image: 'shop-20',
                        link: 'https://www.myflame.nl/'
                    },
                    {
                        image: 'shop-21',
                        link: 'https://douchezaak.nl/'
                    },
                    {
                        image: 'shop-22',
                        link: 'https://thuisrecycling.nl/'
                    },
                    {
                        image: 'shop-23',
                        link: 'https://www.nomadcruise.com/'
                    },
                    {
                        image: 'shop-24',
                        link: 'https://www.soozen-shop.com/'
                    },
                    {
                        image: 'shop-25',
                        link: 'https://hipandhappy.ch/'
                    },
                    {
                        image: 'shop-26',
                        link: 'https://breakthroughbiolabs.com/'
                    },
                    {
                        image: 'shop-27',
                        link: 'https://bouwbesluitshop.nl/'
                    },
                    {
                        image: 'shop-28',
                        link: 'https://littlebabysam.nl/'
                    },
                    {
                        image: 'shop-29',
                        link: 'https://www.lijfgoed.nl/'
                    },
                ]
            }
        },

        mounted() {
            this.checkLanguage()
        },

        methods: {
            checkLanguage(lang) {
                // if(lang === 'en'){
                //     this.locale = webshopsLang.lang_en_webshops
                // } else {
                //     if (this.currentLanguage === 'en') {
                //         this.locale = webshopsLang.lang_en_webshops
                //     } else {
                        this.locale = webshopsLang.lang_nl_webshops
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

<style scoped lang="scss">
    @import '../../styles/layout/main.scss';
    @import '../../styles/webshops/webshops';
</style>