<template>
    <div class="main">
        <Header :image="header"></Header>
        <div style="margin-top: 120px;margin-bottom: -70px;"><WebshopForm :content="formContent"/></div>
        <div class="uk-section">
            <div class="uk-container uk-container-width" style="">
                <div class="install__container">
                    <div class="uk-width-1-2 install-col install-col-1" id="wc-guide">
                        <h3>Wordpress / Woocommerce</h3>

                        <ol>
                            <li>{{locale['first_step1']}}</li>

                            <li class="list__image">
                                {{locale['first_step2']}}
                                <img alt="plugin-wordpress-1" src="../../assets/images/webshops/plugin/install-step-1.png">
                            </li>

                            <li>
                                {{locale['first_step3']}}
                                <img alt="plugin-wordpress-2" src="../../assets/images/webshops/plugin/install-step-2.png">
                            </li>

                            <li>
                                {{locale['first_step4']}}
                                <img alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-3.png">
                            </li>

                            <li>
                                {{locale['first_step5']}}
                                <img class="small-install" alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-4.png">
                            </li>
                        </ol>

                        <i>
                            {{locale['first_step6']}}
                        </i>
                    </div>


                    <div class="uk-width-1-2 install-col install-col-2" id="magento-guide">
                        <h3>Magento</h3>

                        <ol>
                            <li> {{locale['second_step1']}}</li>

                            <li class="list__image">
                                {{locale['second_step2']}}
                                <img alt="plugin-wordpress-1" src="../../assets/images/webshops/plugin/install-step-1.png">
                            </li>

                            <li>
                                {{locale['second_step3']}}
                                <img alt="plugin-wordpress-2" src="../../assets/images/webshops/plugin/install-step-2.png">
                            </li>

                            <li>
                                {{locale['second_step4']}}
                                <img alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-3.png">
                            </li>

                            <li>
                                {{locale['second_step5']}}
                                <img class="small-install" alt="plugin-wordpress-3" src="../../assets/images/webshops/plugin/install-step-4.png">
                            </li>
                        </ol>

                        <i>
                            {{locale['second_step6']}}
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <!-- <WebshopForm :content="formContent"/> -->
    </div>
</template>

<script>
    import language from '../../lang/lang_plugin'

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
                locale: language,
                header: 'installation',
                formContent: 1,
            }
        },

        mounted() {
            this.checkLanguage()
        },

        methods: {
            checkLanguage(lang) {
                if(lang === 'en'){
                    this.locale = language.lang_en_plugin
                } else {
                    if (this.currentLanguage === 'en') {
                        this.locale = language.lang_en_plugin
                    } else {
                        this.locale = language.lang_nl_plugin
                    }
                }
            }
        },

        computed: {
            currentLanguage() {
                return this.$store.state.language
            }
        },

        watch: {
            currentLanguage(value) {
                this.checkLanguage(value)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../styles/webshops/webshop__form';
    @import '../../styles/webshops/installation';
</style>