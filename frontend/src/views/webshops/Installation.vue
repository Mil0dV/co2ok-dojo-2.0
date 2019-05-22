<template>
    <div class="main">
        <Header :image="header"></Header>

        <div class="uk-section">
            <div class="uk-container uk-container-width">
                <div class="install__container">
                    <div class="uk-width-1-2 install-col install-col-1">
                        <h3>Wordpress / Woocommerce</h3>

                        <ol>
                            <li>Login to the admin area of your webshop (WordPress admin)</li>

                            <li class="list__image">
                                Open the ‘Add new plugin’ screen:
                                <img alt="plugin-wordpress-1" src="../../assets/images/webshops/plugin/install-step-1.png">
                            </li>

                            <li>
                                Search for ‘co2ok’:
                                <img alt="plugin-wordpress-2" src="../../assets/images/webshops/plugin/install-step-2.png">
                            </li>

                            <li>
                                Click on ’Install Now’:
                                <img alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-3.png">
                            </li>

                            <li>
                                After a few moments the plugin will be installed, all there is left to do is activating it:
                                <img class="small-install" alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-4.png">
                            </li>
                        </ol>

                        <i>
                            That’s all! If you have any questions/run into an issue, we’d love to help out via the chat on this page/phone or mail. Thanks for helping us fight climate change!
                        </i>
                    </div>


                    <div class="uk-width-1-2 install-col install-col-2">
                        <h3>Magento</h3>

                        <ol>
                            <li>Login to the admin area of your webshop (Magento admin)</li>

                            <li class="list__image">
                                Open the ‘Add new plugin’ screen:
                                <img alt="plugin-wordpress-1" src="../../assets/images/webshops/plugin/install-step-1.png">
                            </li>

                            <li>
                                Search for ‘co2ok’:
                                <img alt="plugin-wordpress-2" src="../../assets/images/webshops/plugin/install-step-2.png">
                            </li>

                            <li>
                                Click on ’Install Now’:
                                <img alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-3.png">
                            </li>

                            <li>
                                After a few moments the plugin will be installed, all there is left to do is activating it:
                                <img class="small-install" alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-4.png">
                            </li>
                        </ol>

                        <i>
                            That’s all! If you have any questions/run into an issue, we’d love to help out via the chat on this page/phone or mail. Thanks for helping us fight climate change!
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <WebshopForm :content="formContent"/>
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
                formContent: {
                    title: 'Use a different CMS system?',
                    text: 'Do you use a different e-commerce system? Fill in the form and we will send you a message when we support it! (Just your email address will be enough!)'
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../../../node_modules/uikit/dist/css/uikit.min.css";
    @import '../../styles/main';
    @import '../../styles/webshops/webshop__form';
    @import '../../styles/webshops/installation';
</style>