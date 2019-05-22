<template>
    <div>
        <Header :image="header"></Header>
        <div class="uk-section section-1">
            <div class="uk-container uk-container-width">
                <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                    <div class="uk-width-expand">
                        <div class="uk-card uk-card-body section-1__col-1">
                            <h1 class="main-title">Only benefits</h1>
                            <p class="main-text">
                                By associating your webshop with a good cause your customers are more inclined to choose
                                your webshop and return. This is also called ‘Cause Marketing’
                            </p>

                            <br>
                            <div class="col-1--links">
                                <button type="button" class="button">Fight Climate Change</button>
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
                        <img src="../../assets/images/webshops/cause-marketing/icon-1.png">
                    </div>

                    <div class="row__text">
                        <h1 class="main-title">More revenue</h1>
                        <p class="main-text">
                            Cause marketing generates 7x more revenue than price discounts for toy manufacturer.
                        </p>
                        <br>
                        <a class="link row-link" href="#">
                            Marketing Experiment 2016 <span uk-icon="icon: arrow-right"></span>
                        </a>
                    </div>
                </div>

                <div class="row__content">
                    <div class="row__icon">
                        <img src="../../assets/images/webshops/cause-marketing/icon-2.png">
                    </div>

                    <div class="row__text">
                        <h1 class="main-title">Climate Change is Hot</h1>
                        <p class="main-text">
                            Climate change is the most well-known CSR subject for consumers – 59% can even define it and
                            give an example.
                        </p>
                        <br>
                        <a class="link row-link" href="#">
                            Cone Communication Study 2015 <span uk-icon="icon: arrow-right"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="uk-container uk-container-width section-2-row second__column">
                <div class="row__content">
                    <div class="row__icon">
                        <img src="../../assets/images/webshops/cause-marketing/icon-3.png">
                    </div>

                    <div class="row__text">
                        <h1 class="main-title">Positive Public Relations</h1>
                        <p class="main-text">
                            The non-profits and companies use each other: the good cause is getting attention and money,
                            the company can contribute and improves its image.
                        </p>
                        <br>
                        <a class="link row-link" href="#">
                            Groene Amsterdammer (Dutch only) <span uk-icon="icon: arrow-right"></span>
                        </a>
                    </div>
                </div>

                <div class="row__content">
                    <div class="row__icon">
                        <img src="../../assets/images/webshops/cause-marketing/icon-4.png">
                    </div>

                    <div class="row__text">
                        <h1 class="main-title">More Marketing Opportunities</h1>
                        <p class="main-text">
                            Cause Marketing improves “Brand Story” and helps with customer loyalty.
                        </p>
                        <br>
                        <a class="link row-link" href="#">
                            Forbes 2017 <span uk-icon="icon: arrow-right"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-section section-4 section--dark">
            <div class="uk-container uk-container-width">
                <div class="section-2--col-1 section-4--header">
                    <h2 class="sub-title dark--color">The Numbers</h2>
                    <h1 class="main-title">Stand to Reason</h1>
                </div>

                <div class="graph__section">

                    <div v-for="data in chartData" :key="data.percentage" class="graph-wrapper">
                        <div class="flex-wrapper">
                            <div class="single-chart">
                                <svg viewBox="0 0 36 36" class="circular-chart green">
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
                                    <text x="18" y="20.35" class="percentage">{{data.percentage}}%</text>
                                </svg>
                            </div>
                        </div>

                        <div class="graph__text">
                            <h1 class="main-title">{{data.title}}</h1>
                            <p class="main-text">
                                {{data.text}}
                            </p>

                            <br>
                            <a class="link row-link" href="#">
                                {{data.link}} <span uk-icon="icon: arrow-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="uk-section ">
            <div class="uk-container uk-container-width final__section section-2-row">
                <h2 class="sub-title">CO₂ok’s</h2>
                <div class="final-col-wrapper">
                    <div class="final-col final-1">
                        <h1 class="main-title">Marketing Kit</h1>
                        <p class="main-text">
                            We’ve got a marketingkit for your Cause Marketing! Send an e-mail to jos@co2ok.eco to receive it.
                        </p>
                        <br>
                        <button type="button" class="button">Contact Jobs</button>
                    </div>

                    <div class="final-col final-2">
                        <h1 class="main-title">Want to know more?</h1>
                        <a class="link row-link" href="#">
                            Statistics about Cause
                            Marketing <span uk-icon="icon: arrow-right"></span>
                        </a>
                    </div>

                    <div class="final-col final-1">
                        <h1 class="main-title">Fight Climate Change</h1>
                        <p class="main-text">
                            More revenue and help fight climate change?
                        </p>
                        <br>
                        <router-link to="/webshops/plug-in-installation" class="button">Install Plug-in</router-link>
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
        }
    }
</script>

<style scoped lang="scss">
    .main /deep/ {
        @import "../../../node_modules/uikit/dist/css/uikit.min.css";
    }

    @import '../../styles/main';
    @import '../../styles/webshops/cause';

</style>