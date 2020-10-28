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
                                {{ $t('about.imgText') }}
                            </p>
                        </div>
                    </div>

                    <div class="col-1__content col-1__text-wrapper">
                        <div class="col-1__text">
                            <p class="sub-title">{{ $t('about.subTitle') }}</p>
                            <h2 class="main-title">{{ $t('about.title') }}</h2>
                            <div>
                                <p>
                                    {{ $t('about.shortText') }}
                                </p>


                                <div class="more">
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
                                        {{ $t('about.longText') }}
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
                        <p class="col-1--green">{{ $t('about.subTitle2') }}</p>
                        <h2 class="col-1--title">{{ $t('about.title2') }}</h2>
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
                                        :href="`${person.linkedin}`"
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
                        name: 'Milo de Vries', title: 'Founder',
                        quote: 'Making consumerism sustainable 💚🌍',
                        image: 'milo.jpg',
                        twitter: '', linkedin: 'https://www.linkedin.com/company/co%E2%82%82ok/'
                    },
                    {
                        name: 'Lodi de Brauw', title: 'Co-Founder',
                        quote: 'You must be the change you want to see in the world',
                        image: 'lodi.jpg',
                        twitter: '', linkedin: 'https://www.linkedin.com/company/co%E2%82%82ok/'
                    },
                    {
                        name: 'Maaike Braat', title: 'Scientist',
                        quote: 'It can always be quicker and better, but this is a step in the right direction',
                        image: 'maaike.jpeg',
                        twitter: '', linkedin: 'https://www.linkedin.com/company/co%E2%82%82ok/'
                    },
                    {
                        name: 'Jessica D. Smith', title: 'Software Engineer Trainee',
                        quote: 'Sustainability now for a better future',
                        image: 'jessica.jpg',
                        twitter: '', linkedin: 'https://www.linkedin.com/in/jessicadsmith022/'
                    },

                ]
            }
        },

    }
</script>

<style lang="scss" scoped>
    @import '../styles/about.scss';
</style>
