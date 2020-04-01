<template>
    <div class="main">
        <Header :image="header"></Header>
        <div style="margin-top: 120px;margin-bottom: -70px;"><WebshopForm :content="formContent"/></div>
        <div class="uk-section" id="wc-guide">
            <div class="uk-container uk-container-width" style="">
                <div class="install__container">
                    <div class="uk-width-1-2 install-col install-col-1">
                        <h3>Wordpress / Woocommerce</h3>

                        <ol>
                            <li v-html="$t('plugin.first_step1C')"></li>

                            <li class="list__image">
                                {{ $t('plugin.first_step2') }}
                                <img alt="plugin-wordpress-1" src="../../assets/images/webshops/plugin/install-step-1.png">
                            </li>

                            <li>
                                {{ $t('plugin.first_step3C') }}
                                <img alt="plugin-wordpress-2" src="../../assets/images/webshops/plugin/install-step-2.png">
                            </li>

                            <li>
                                {{ $t('plugin.first_step4') }}
                                <!-- <img alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-3.png"> -->
                            </li>

                            <li>
                                {{ $t('plugin.first_step5') }}
                                <img class="small-install" alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-4.png">
                            </li>
                        </ol>

                        <i>
                            {{ $t('plugin.first_step6C') }}
                        </i>
                    </div>
                </div>
            </div>
        </div>


        <div class="uk-section" id="magento-guide">
            <div class="uk-container uk-container-width" style="">
                <div class="install__container">
                    <!-- <div class="uk-width-1-2 install-col install-col-2"> -->
                    <div class="uk-width-1-2 install-col install-col-2">
                    <!-- <div class="uk-width-1-2 install-col install-col-1"> -->
                        <h3>Magento</h3>

                        <ol>
                            <li> {{ $t('plugin.second_step1') }}</li>

                            <li class="list__image">
                                {{ $t('plugin.second_step2') }}
                                <img alt="plugin-wordpress-1" src="../../assets/images/webshops/plugin/install-step-1.png">
                            </li>

                            <li>
                                {{ $t('plugin.second_step3') }}
                                <img alt="plugin-wordpress-2" src="../../assets/images/webshops/plugin/install-step-2.png">
                            </li>

                            <li>
                                {{ $t('plugin.second_step4') }}
                                <img alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-3.png">
                            </li>

                            <li>
                                {{ $t('plugin.second_step5') }}
                                <img class="small-install" alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-4.png">
                            </li>
                        </ol>

                        <i>
                            {{ $t('plugin.second_step6') }}
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <div class="uk-section" id="shopify-guide">
            <div class="uk-container uk-container-width" style="">
                <div class="install__container">
                    <!-- <div class="uk-width-1-2 install-col install-col-2"> -->
                    <div class="uk-width-1-2 install-col install-col-2">
                    <!-- <div class="uk-width-1-2 install-col install-col-1"> -->
                        <h3>Shopify</h3>

                        <ol>
                            <li v-html=" $t('plugin.third_step1')"></li>

                            <li class="list__image">
                                {{ $t('plugin.third_step2') }}
                                <!-- <img alt="plugin-wordpress-1" src="../../assets/images/webshops/plugin/install-step-1.png"> -->
                            </li>

                            <li>
                                {{ $t('plugin.third_step3') }}
                                <img alt="plugin-wordpress-2" src="../../assets/images/webshops/plugin/shopi-install-step-3.png">
                            </li>

                            <!-- <li>
                                {{ $t('plugin.third_step4') }}
                                <img alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-3.png">
                            </li>

                            <li>
                                {{ $t('plugin.third_step5') }}
                                <img class="small-install" alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-4.png">
                            </li> -->
                        </ol>

                        <i>
                            {{ $t('plugin.third_step6C') }}
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin-top: 120px;margin-bottom: -70px;"><WebshopForm :content="formContent"/></div>
    </div>
</template>

<script>

    const Header = () => import('@/components/layout/Header')
    const WebshopForm = () => import('@/components/layout/WebshopFormCorona')

    export default {
        name: "Installation",
        components: {
            'Header': Header,
            'WebshopForm': WebshopForm
        },

        data() {
            return {
                header: 'installation',
                formContent: 1,
            }
        }

    }
</script>

<style scoped lang="scss">
    @import '../../styles/webshops/webshop__form';
    @import '../../styles/webshops/installation';
</style>