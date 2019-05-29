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
                                We help an environmentally-minded consumers
                                and retailers to compensate for products
                                which burden the climate.
                            </p>
                        </div>
                    </div>

                    <div class="col-1__content col-1__text-wrapper">
                        <div class="col-1__text">
                            <p class="sub-title">Our mission</p>
                            <h2 class="main-title">Why we do it</h2>
                            <div>
                                <p>
                                    Impact of climate change on health is ‘the major threat of 21st century’. The
                                    health of
                                    millions of people across the world is already being significantly harmed by
                                    climate change.

                                    Climate change poses a fundamental threat to the places, species and people’s
                                    livelihoods
                                    WWF works to protect. To adequately address this crisis we must urgently reduce
                                    carbon
                                    pollution and prepare for the consequences of global warming, which we are
                                    already
                                    experiencing. WWF works to:
                                    <br>
                                    <transition enter-active-class="animated bounceIn"
                                                leave-active-class="animated bounceOut"
                                                mode="out-in">
                                        <span key="1" @click="moreText = true" v-if="!moreText"
                                              class="link">Read more</span>
                                        <span key="2" @click="moreText = false" v-else class="link">Less</span>
                                    </transition>
                                </p>

                                <br>
                                <transition enter-active-class="animated fadeIn"
                                            leave-active-class="animated fadeOut"
                                            mode="out-in">
                                    <p v-if="moreText">
                                        We are climate fighters, fighting against climate change caused by humans.

                                        Climate change is a serious problem. Trump won’t do anything, the government
                                        isn’t the quickest either. Even though the consumer is willing to compensate for
                                        the impact on the environment, there are limited opportunities which are offered
                                        to the consumer.

                                        When the consumer is able to buy their product in a climate neutral way, CO₂
                                        emission can be reduced. This way the consumer has the means to contribute to a
                                        healthy and pleasant environment for now and future generations. Entrepreneurs
                                        are an important influence through the means of offering such tools. However
                                        there is no easy way for entrepreneurs to offer their products climate neutral
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
                        <p class="col-1--green">Our team</p>
                        <h2 class="col-1--title">Meet the people who make this all happen</h2>
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

    export default {
        name: "About",
        components: {'Header': Header},

        data() {
            return {
                moreText: false,
                header: 'about',
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
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/layout/main.scss';
    @import '../styles/about.scss';
</style>
