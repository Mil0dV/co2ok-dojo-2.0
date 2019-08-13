<template>
    <div>
        <Header :image="header"></Header>
        <div class="uk-section section-1">
            <div class="uk-container uk-container-width">
                <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                    <div class="uk-width-expand">
                        <div class="uk-card uk-card-body section-1__col-1">
                            <h2 class="main-title">{{ $t('cause.s1_title') }}</h2>
                            <p class="main-text">
                                {{ $t('cause.s1_text') }}
                            </p>

                            <br>
                            <div class="col-1--links">
                                <router-link to="/webshops/plug-in-installation" class="button">{{ $t('cause.s1_btn') }}
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div class="uk-width-auto">
                        <div class="uk-card uk-card-body ">
                            <img class="col-2--image" src="../../assets/images/webshops/cause-marketing/cause-1.png"
                                 alt="Protest climate" uk-img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-section">
            <div class="uk-container uk-container-width section-2-row">
                <div class="row__content">
                    <div class="row__icon">
                        <img alt="cause marketing icon 1" src="../../assets/images/webshops/cause-marketing/icon-1.png">
                    </div>

                    <div class="row__text">
                        <h2 class="main-title">{{ $t('cause.s2_title1') }}</h2>
                        <p class="main-text">
                            {{ $t('cause.s2_text-1') }}
                        </p>
                        <br>
                        <a class="link row-link" href="#">
                            {{ $t('cause.s2_link-1') }} <span uk-icon="icon: arrow-right"></span>
                        </a>
                    </div>
                </div>

                <div class="row__content">
                    <div class="row__icon">
                        <img alt="cause marketing icon 2" src="../../assets/images/webshops/cause-marketing/icon-2.png">
                    </div>

                    <div class="row__text">
                        <h2 class="main-title">{{ $t('cause.s2_title2') }}</h2>
                        <p class="main-text">
                            {{ $t('cause.s2_text-2') }}
                        </p>
                        <br>
                        <a class="link row-link" href="#">
                            {{ $t('cause.s2_link-2') }} <span uk-icon="icon: arrow-right"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="uk-container uk-container-width section-2-row second__column">
                <div class="row__content">
                    <div class="row__icon">
                        <img alt="cause marketing icon 3" src="../../assets/images/webshops/cause-marketing/icon-3.png">
                    </div>

                    <div class="row__text">
                        <h2 class="main-title">{{ $t('cause.s2_title3') }}</h2>
                        <p class="main-text">
                            {{ $t('cause.s2_text-3') }}
                        </p>
                        <br>
                        <a class="link row-link" href="#">
                            {{ $t('cause.s2_link-3') }} <span uk-icon="icon: arrow-right"></span>
                        </a>
                    </div>
                </div>

                <div class="row__content">
                    <div class="row__icon">
                        <img alt="cause marketing icon 4" src="../../assets/images/webshops/cause-marketing/icon-4.png">
                    </div>

                    <div class="row__text">
                        <h2 class="main-title">{{ $t('cause.s2_title4') }}</h2>
                        <p class="main-text">
                            {{ $t('cause.s2_text-4') }}
                        </p>
                        <br>
                        <a class="link row-link" href="#">
                            {{ $t('cause.s2_link-4') }} <span uk-icon="icon: arrow-right"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-section section-4 section--dark">
            <div class="uk-container uk-container-width">
                <div class="section-2--col-1 section-4--header">
                    <h2 class="sub-title dark--color">{{ $t('cause.s3_subTitle') }}</h2>
                    <h2 class="main-title">{{ $t('cause.s3_title') }}</h2>
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
                                    <text x="18" y="20.35" class="percentage">{{ $t('cause.s3_row1_percentage1') }}%</text>
                                </svg>
                            </div>
                        </div>

                        <div class="graph__text">
                            <h2 class="main-title">{{ $t('cause.s3_consumers') }}</h2>
                            <p class="main-text">
                                {{ $t('cause.s3_row1_text') }}
                            </p>

                            <br>
                            <a class="link row-link" href="#">
                                {{ $t('cause.s3_row1_link') }} <span uk-icon="icon: arrow-right"></span>
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
                                    <text x="18" y="20.35" class="percentage">{{ $t('cause.s3_row1_percentage2') }}%</text>
                                </svg>
                            </div>
                        </div>

                        <div class="graph__text">
                            <h2 class="main-title">{{ $t('cause.s3_respondents') }}</h2>
                            <p class="main-text">
                                {{ $t('cause.s3_row2_text') }}
                            </p>

                            <br>
                            <a class="link row-link" href="#">
                                {{ $t('cause.s3_row2_link') }} <span uk-icon="icon: arrow-right"></span>
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
                                    <text x="18" y="20.35" class="percentage">{{ $t('cause.s3_row1_percentage3') }}%</text>
                                </svg>
                            </div>
                        </div>

                        <div class="graph__text">
                            <h2 class="main-title">{{ $t('cause.s3_consumers') }}</h2>
                            <p class="main-text">
                                {{ $t('cause.s3_row3_text') }}
                            </p>

                            <br>
                            <a class="link row-link" href="#">
                                {{ $t('cause.s3_row3_link') }} <span uk-icon="icon: arrow-right"></span>
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
                                    <text x="18" y="20.35" class="percentage">{{ $t('cause.s3_row1_percentage4') }}%</text>
                                </svg>
                            </div>
                        </div>

                        <div class="graph__text">
                            <h2 class="main-title">{{ $t('cause.s3_consumers') }}</h2>
                            <p class="main-text">
                                {{ $t('cause.s3_row4_text') }}
                            </p>

                            <br>
                            <a class="link row-link" href="#">
                                {{ $t('cause.s3_row4_link') }} <span uk-icon="icon: arrow-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="uk-section ">
            <div class="uk-container uk-container-width final__section section-2-row">
                <div class="final-col-wrapper">
                    <div class="final-col final-1">
                        <h2 class="sub-title">CO₂ok’s</h2>
                    </div>
                </div>
                <div class="final-col-wrapper">
                    <div class="final-col final-1">
                        <h2 class="main-title">{{ $t('cause.s4_row1_title') }}</h2>
                        <p class="main-text">
                            {{ $t('cause.s4_row1_text') }}
                        </p>
                        <br>
                        <p class="button" @click="contactForm()">{{ $t('cause.s4_row1_link') }}</p>
                    </div>

                    <div class="final-col final-2">
                        <h2 class="main-title">{{ $t('cause.s4_row2_title') }}</h2>
                        <a class="link row-link" href="#">
                            {{ $t('cause.s4_row2_link') }} <span uk-icon="icon: arrow-right"></span>
                        </a>
                    </div>

                    <div class="final-col final-1">
                        <h2 class="main-title">{{ $t('cause.s4_row3_title') }}</h2>
                        <p class="main-text">
                            {{ $t('cause.s4_row3_text') }}
                        </p>
                        <br>
                        <router-link to="/webshops/plug-in-installation" class="button">{{ $t('cause.s4_row3_link') }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <ModalContact v-if="$store.state.modalStatus"/>
    </div>
</template>

<script>
    const Header = () => import('@/components/layout/Header')
    const ModalContact = () => import('@/components/modals/ModalContact')

    export default {
        name: "About",
        components: {'Header': Header, 'ModalContact': ModalContact},

        data() {
            return {
                header: 'cause-marketing',
                chartData: [
                    {
                        percentage: 90,
                        title: 'Consumers',
                        text: 'When choosing between two \n' +
                            'brands of equal quality and \n' +
                            'price, 90% of customers pick \n' +
                            'are likely to pick a “cause \n' +
                            'branded” product',
                        link: '2015 Ebiquity Global Study'
                    },
                    {
                        percentage: 75,
                        title: 'Respondents',
                        text: '3 out of 4 respondents agree \n' +
                            'that companies can take \n' +
                            'actions to both increase profits \n' +
                            'and help improve economic/\n' +
                            'social conditions for society',
                        link: '2017 Edelman Trust Barometer'
                    },
                    {
                        percentage: 92,
                        title: 'Consumers',
                        text: '92% of consumers declared \n' +
                            'having a positive image of a \n' +
                            'company when a company \n' +
                            'tackles a social or \n' +
                            'environmental problem',
                        link: '2017 Cone Communications Study'
                    },
                    {
                        percentage: 66,
                        title: 'Consumers',
                        text: '66% of consumers want \n' +
                            'brands to take a socio-political \n' +
                            'stance',
                        link: 'Spout Social’s ‘Championing Change in the Age of Social Media’ 2018'
                    }
                ]
            }
        },

        methods: {
            contactForm() {
                let message = {
                    title: 'Contact e-mail',
                    text: 'Please fill in your e-mail'
                }
                this.$store.commit('modalStatus', {message})
            }

        }
        
    }
</script>

<style scoped lang="scss">
    @import '../../styles/webshops/cause';
</style>