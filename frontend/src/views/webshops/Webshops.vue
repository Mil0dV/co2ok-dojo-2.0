<template>
    <div class="main">
        <Header :image="header"></Header>
        <div class="uk-section section-1">
            <div class="uk-container uk-container-width">
                <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                    <div class="uk-width-expand">
                        <div class="uk-card uk-card-body section-1__col-1">
                            <h3 class="sub-title">{{ $t('webshops.subTitle') }}</h3>
                            <h2 class="main-title">{{ $t('webshops.title') }}</h2>
                            <p class="main-text">
                                {{ $t('webshops.mainText') }}
                            </p>
                            <br>
                            <div class="col-1--links">
                                <router-link to="/webshops/retailers" class="button">Retailer</router-link>

                                <div class="col-1--links-wrapper">
                                    <router-link class="link" to="/webshops/cause-marketing">
                                        {{ $t('webshops.link2') }} <span uk-icon="icon: arrow-right"></span>
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
        <WebshopLogos />
    </div>
</template>

<script>
    const Header = () => import('@/components/layout/Header')
    const WebshopLogos = () => import('@/components/webshops/WebshopLogos')

    export default {
        name: "Webshops",
        components: {
            'Header': Header,
            'WebshopLogos' : WebshopLogos,
        }
    }
</script>

<style scoped lang="scss">
    @import '../../styles/layout/main.scss';
    @import '../../styles/webshops/webshops';
</style>