<template>
    <div class="main">
        <Header :image="header"></Header>
        <div style="margin-top: 80px;margin-bottom: -70px;"><WebshopForm :content="formContent"/></div>

        <!-- Wordpress/woocommerce guide -->
        <div class="uk-section" id="wc-guide">
            <div class="uk-container uk-container-width" style="">
                <div class="install__container">
                    <div class="uk-width-1-2 install-col install-col-1">
                        <h3>Wordpress / Woocommerce</h3>

                        <ol>
                            <li>{{ $t('plugin.WP_step0') }}</li>

                            <li class="list__image">
                                {{ $t('plugin.WP_step1') }}
                                <img alt="plugin-wordpress-1" src="../../assets/images/webshops/plugin/install-step-1.png">
                            </li>

                            <li>
                                {{ $t('plugin.WP_step2') }}
                                <img alt="plugin-wordpress-2" src="../../assets/images/webshops/plugin/install-step-2.png">
                            </li>

                            <li>
                                {{ $t('plugin.WP_step3') }}
                                <img alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-3.png">
                            </li>

                            <li>
                                {{ $t('plugin.WP_step4') }}
                                <img class="small-install" alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-4.png">
                            </li>
                        </ol>

                        <i>
                            {{ $t('plugin.WP_step5') }}
                        </i>
                    </div>
                </div>
            </div>
        </div>

        <!-- Form and anchor -->
        <h1><a class="install_anchors" name="lightspeed_anchor"></a></h1>
        <div><WebshopForm c_platform="lightspeed" :content="formContent" /></div>

        <!-- Magento -->
        <div class="uk-section" id="magento-guide">
            <div class="uk-container uk-container-width" style="">
                <div class="install__container">
                    <!-- <div class="uk-width-1-2 install-col install-col-2"> -->
                    <div class="uk-width-1-2 install-col install-col-2">
                    <!-- <div class="uk-width-1-2 install-col install-col-1"> -->
                        <h3>Magento</h3>

                        <ol>
                            <li> {{ $t('plugin.Magento_step0') }}</li>

                            <li class="list__image">
                                {{ $t('plugin.Magento_step1') }}
                                <img alt="plugin-wordpress-1" src="../../assets/images/webshops/plugin/magento-install1.png">
                            </li>

                            <li>
                                {{ $t('plugin.Magento_step2') }}
                                <img alt="plugin-wordpress-2" src="../../assets/images/webshops/plugin/magento-install3.png">
                            </li>

                            <li>
                                {{ $t('plugin.Magento_step3') }}
                            </li>

                            <li>
                                {{ $t('plugin.Magento_step4') }}
                                <img alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/magento-install2.png">
                            </li>
                            <li>
                                {{ $t('plugin.Magento_step5') }}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <!-- Form and anchor -->
        <h1><a class="install_anchors" name="shopworks_anchor"></a></h1>
        <div><WebshopForm :content="formContent" c_platform="shopworks" /></div>

        <!-- Shopify -->
        <div class="uk-section" id="shopify-guide">
            <div class="uk-container uk-container-width" style="">
                <div class="install__container">
                    <div class="uk-width-1-2 install-col install-col-2">
                        <h3>shopify</h3>

                        <ol>
                            <li v-html=" $t('plugin.Shopify_step0')"></li>

                            <li class="list__image">
                                {{ $t('plugin.Shopify_step1') }}
                            </li>

                            <li>
                                {{ $t('plugin.Shopify_step2') }}
                                <img alt="plugin-wordpress-2" src="../../assets/images/webshops/plugin/shopi-install-step-3.png">
                            </li>

                            <!-- <li>
                                {{ $t('plugin.Shopify_step3') }}
                                <img alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-3.png">
                            </li>

                            <li>
                                {{ $t('plugin.Shopify_step4') }}
                                <img class="small-install" alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-4.png">
                            </li> -->
                        </ol>

                        <i>
                            {{ $t('plugin.Shopify_step5') }}
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

    const Header = () => import('@/components/layout/Header')
    const WebshopForm = () => import('@/components/layout/WebshopForm')

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