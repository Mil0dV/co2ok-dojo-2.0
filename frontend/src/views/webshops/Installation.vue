<template>
    <div class="main">
        <Header :image="header"></Header>
        <div style="margin-top: 80px;margin-bottom: -70px;"><WebshopForm :content="formContent"/></div>
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
        <!-- <WebshopForm :content="formContent"/> -->


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

        <h1><a class="lightspeed_anchor" name="lightspeed_anchor"></a></h1>

        <div class="uk-container form__section uk-container-width" id="Ls_form" style="margin-top: 200px;">
            <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                <div class="uk-width-1-2 to-left">

                    <div class="uk-card login__form-container col-2-card uk-card-default uk-card-body" style="height: 100%; box-shadow: -5px 3px 40px 2px hsla(300,3%,55%,.74);">
                        <form class="login__form">
                            <p style="text-align: left;">{{ $t('webshopform.subtitle2') }}</p>
                            <div class="login__group">
                                <label class="login__group">
                                    {{ $t('webshopform.input1_label') }}
                                    <input v-model="name"
                                           class="login__group-input" type="email"
                                           :placeholder=" $t('webshopform.input1_field') ">
                                </label>

                                <label class="login__group">
                                    <span>{{ $t('webshopform.input2_label') }}<span class="asterik">*</span></span>
                                    <input v-model="email"
                                           class="login__group-input" type="email"
                                           :placeholder=" $t('webshopform.input2_field') ">
                                </label>

                                <label class="login__group">
                                    {{ $t('webshopform.input3_label') }}
                                    <input v-model="phone"
                                           class="login__group-input" type="email"
                                           :placeholder=" $t('webshopform.input3_field') ">
                                </label>

                                <label class="login__group">
                                    {{ $t('webshopform.input4_label') }}
                                    <input v-model="platform"
                                           class="login__group-input" type="email"
                                           :placeholder=" $t('webshopform.input4_field') ">
                                </label>
                            </div>

                            <div style="width: 100%; text-align: left;" class="login__buttons">
                                <a class="button btn-large" @click="sendForm()"> {{ $t('webshopform.send') }}</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <h1><a class="shopworks_anchor" name="shopworks_anchor"></a></h1>

        <div class="uk-container form__section uk-container-width" style="margin-top: 200px">
            <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                <div class="uk-width-1-2 to-left">

                    <div class="uk-card login__form-container col-2-card uk-card-default uk-card-body" id="shopworks_form" style="height: 100%; box-shadow: -5px 3px 40px 2px hsla(300,3%,55%,.74);">
                        <form class="login__form">
                            <p style="text-align: left;">{{ $t('webshopform.subtitle2') }}</p>
                            <div class="login__group">
                                <label class="login__group">
                                    {{ $t('webshopform.input1_label') }}
                                    <input v-model="name"
                                           class="login__group-input" type="email"
                                           :placeholder=" $t('webshopform.input1_field') ">
                                </label>

                                <label class="login__group">
                                    <span>{{ $t('webshopform.input2_label') }}<span class="asterik">*</span></span>
                                    <input v-model="email"
                                           class="login__group-input" type="email"
                                           :placeholder=" $t('webshopform.input2_field') ">
                                </label>

                                <label class="login__group">
                                    {{ $t('webshopform.input3_label') }}
                                    <input v-model="phone"
                                           class="login__group-input" type="email"
                                           :placeholder=" $t('webshopform.input3_field') ">
                                </label>

                                <label class="login__group">
                                    {{ $t('webshopform.input4_label') }}
                                    <input v-model="platform"
                                           class="login__group-input" type="email"
                                           :placeholder=" $t('webshopform.input4_field') ">
                                </label>
                            </div>

                            <div style="text-align: left;" class="login__buttons">
                                <a class="button btn-large" @click="sendForm()"> {{ $t('webshopform.send') }}</a>
                            </div>
                        </form>
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