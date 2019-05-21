<template>
    <div class="main">
        <Header :image="header"></Header>

        <div class="uk-section section-1">
            <div class="uk-container uk-container-width">
                <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                    <div class="uk-width-expand">
                        <div class="uk-card uk-card-body section-1__col-1">
                            <h2 class="sub-title">Fight climate change</h2>
                            <h1 class="main-title">Greener and more customers and sustainable</h1>
                            <p class="main-text">
                                As awareness about the importance of preserving the environment continues to grow among
                                consumers, companies are increasingly looking for ways to “go green”. Of course, you
                                need to protect your bottom line as well. By enabling your customers to make their
                                purchase climate neutral with CO₂ok, you can do your bit to drive back climate change.
                                CO₂ok lets you increase the amount of customers with no upfront or recurring costs.
                            </p>

                            <br>
                            <div class="col-1--links">
                                <a href="https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe" class="button">Plug-in</a>

                                <div class="col-1--links-wrapper">
                                    <router-link class="link" to="/webshops/retailers">
                                        More about Retailers <span uk-icon="icon: arrow-right"></span>
                                    </router-link>

                                    <router-link class="link" to="/webshops/cause-marketing">
                                        More about Cause Marketing <span uk-icon="icon: arrow-right"></span>
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
                    <h1 class="main-title">Shops</h1>
                    <h2 class="sub-title">These shops are CO₂ok</h2>
                </div>

                <div class="section-2--col-2">
                    <div class="section-2--shop-btn section-2--shops">
                        <div class="shop-btn--inner">
                            <span class="shop-btn">View shop</span>
                        </div>
                    </div>

                    <div class="shop--image-wrapper section-2--shops" v-for="i in 29" :key="`4${i}`">
                        <div
                             class="section-2--shops shops--image"
                             :style="{'background-image': 'url(' + require(`@/assets/images/webshops/shops/webshop-${i}.png`) + ')'}">
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
        name: "Webshops",
        components: {'Header': Header},

        data() {
            return {
                header: 'webshops',
            }
        },
    }
</script>

<style scoped lang="scss">
    .main /deep/ {
        @import "../../../node_modules/uikit/dist/css/uikit.min.css";
    }


    @import '../../styles/main';
    @import '../../styles/webshops';

</style>