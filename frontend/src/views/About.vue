<template>
    <div>
        <Header :image="header"></Header>

        <div class="about__container">
            <!--About content-->
            <div class="about__col-1-wrapper">
                <!--Eerste blok-->
                <div class="about__col-1">
                    <div class="col-1__content col-1__image">
                        <div class="login__info animated fadeInUp" style="animation-delay: 0.4s;">
                            <p class="login__info-text">
                                {{locale.imgText}}
                            </p>
                        </div>
                    </div>

                    <div class="col-1__content col-1__text-wrapper">
                        <div class="col-1__text">
                            <p class="sub-title">{{locale.subTitle}}</p>
                            <h2 class="main-title">{{locale.title}}</h2>
                            <div>
                                <p>
                                    {{locale.shortText}}
                                    <br>
                                    <transition enter-active-class="animated bounceIn"
                                                leave-active-class="animated bounceOut"
                                                mode="out-in">
                                        <span key="1" @click="moreText = true" v-if="!moreText"
                                              class="link">{{locale.read}}</span>
                                        <span key="2" @click="moreText = false" v-else class="link">{{locale.less}}</span>
                                    </transition>
                                </p>

                                <br>
                                <transition enter-active-class="animated fadeIn"
                                            leave-active-class="animated fadeOut"
                                            mode="out-in">
                                    <p v-if="moreText">
                                        {{locale.longText}}
                                    </p>
                                </transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="about__col-2-wrapper">
                <div class="about__col-2">
                    <div class="col-2__header">
                        <p class="col-1--green">{{locale.subTitle2}}</p>
                        <h2 class="col-1--title">{{locale.title2}}</h2>
                    </div>


                    <div class="about__crew-wrapper">
                        <div v-for="(person, index) in crew" :key="index" class="uk-card uk-card-default crew__card">
                            <div class="uk-card-header crew__header">
                                <div class="uk-width-auto crew__image-wrapper">
                                    <img class="uk-border-circle crew__image"
                                         :src="require(`@/assets/images/crew/${person.image}`)" :alt="person.image">
                                </div>
                                <div class="uk-width-expand">
                                    <h3 class="uk-margin-remove-bottom crew__title">{{person.name}}</h3>
                                    <p class="uk-margin-remove-top crew__function">{{person.title}}</p>
                                </div>
                            </div>
                            <div class="crew__quote">
                                <p>"{{person.quote}}"</p>
                            </div>
                            <div class="uk-card-footer crew__footer">
                                <div class="social--wrapper">
                                    <a target="_blank"
                                       href="https://twitter.com/CO2ok_eco"
                                       class=" uk-text-capitalize social__text twitter--hover">
                                    <span class="icon__wrapper">
                                        <span uk-icon="twitter"
                                              class="crew__icon">
                                        </span>
                                    </span>
                                        Twitter
                                    </a>

                                    <a target="_blank"
                                       href="https://www.linkedin.com/company/11418867"
                                       class=" uk-text-capitalize social__text linkedin--hover">
                                        <span class="icon__wrapper">
                                            <span uk-icon="linkedin"
                                                  class="crew__icon">

                                            </span>
                                        </span>
                                        LinkedIn
                                    </a>
                                </div>
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
    import aboutLang from '../lang/lang_about'

    export default {
        name: "About",
        components: {'Header': Header},

        data() {
            return {
                moreText: false,
                header: 'about',
                locale: aboutLang,

                crew: [
                    {
                        name: 'Milo de Vries', title: 'Founder and factotum',
                        quote: 'Saving the climate, one gram at a time',
                        image: 'milo.jpg',
                        twitter: '', facebook: ''
                    },
                    {
                        name: 'Jos van Nieuwburg', title: 'Co-Founder',
                        quote: 'The climate is important and us companies can de a lot with that',
                        image: 'jos.jpg',
                        twitter: '', facebook: ''
                    },
                    {
                        name: 'Maaike Braat', title: 'Scientist',
                        quote: 'It always can be quicker and better and this is a step in the right direction',
                        image: 'maaike.jpg',
                        twitter: '', facebook: ''
                    },
                    {
                        name: 'Michiel van Tienhoven', title: 'Programmer and Graphic Designer',
                        quote: 'More green is always better, after all we only have one planet earth',
                        image: 'michiel-1.jpg',
                        twitter: '', facebook: ''
                    },
                    {
                        name: 'Alham Saber', title: 'Partner manager',
                        quote: 'Silence is evil itself. Not to speak to speak. Not to act is to act',
                        image: 'ahlam.jpg',
                        twitter: '', facebook: ''
                    },
                    {
                        name: 'Sanne Tielemans', title: 'Executive Secretary',
                        quote: 'The greener, the better',
                        image: 'sanne.jpg',
                        twitter: '', facebook: ''
                    },

                ]
            }
        },

        mounted() {
            this.checkLanguage()
        },

        methods: {
            checkLanguage(lang) {
                if(lang === 'en'){
                    this.locale = aboutLang.lang_en_about
                } else {
                    if (this.currentLanguage === 'en') {
                        this.locale = aboutLang.lang_en_about
                    } else {
                        this.locale = aboutLang.lang_nl_about
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
    @import '../styles/about.scss';
</style>
