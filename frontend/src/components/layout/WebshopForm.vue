<template>
    <div class="uk-section section-1">
        
        <!-- <h1 class="main-title">Get started</h1>
        <p>Hier zou ook nog wat meer uitleg kunnen, prima hoor </p> -->
        <div class="uk-container form__section uk-container-width" style="margin-top: 0px;">
            <h1 v-if="!c_platform" style="margin-bottom: 50px" class="main-title">{{ $t('webshopform.title2') }}</h1>
            <h1 v-if="c_platform" style="margin-bottom: 50px;" class="main-title">{{ $t(c_platform) }}</h1>
            <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                <div class="uk-width-1-2 to-left">

                    <div class="uk-card login__form-container col-2-card uk-card-default uk-card-body" style=" height: 100%; box-shadow: -5px 3px 40px 2px hsla(300,3%,55%,.74);">
                        <form class="login__form">
                            <p v-if="!c_platform" style="text-align: left;">{{ $t('webshopform.subtitle2') }}</p>
                            <p v-if="c_platform" style="text-align: left;">{{ $t('webshopform.subtitles_LS_SW') }}</p>
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

                                <label v-if="!c_platform" class="login__group">
                                    {{ $t('webshopform.input4_label') }}
                                    <input v-model="platform"
                                           class="login__group-input" type="email"
                                           :placeholder=" $t('webshopform.input4_field') ">
                                </label>
                            </div>

                            <div style="width: 100%; text-align: left;" class="login__buttons">
                                <!-- <a class="button button-empty btn-large" @click="emptyForm()"> {{ $t('webshopform.empty') }}</a> -->
                                <a class="button btn-large" @click="sendForm()"> {{ $t('webshopform.send') }}</a>
                            </div>
                        </form>
                    </div>
                </div>


                <div v-if="c_platform == null" class="uk-width-1-2 to-right">
                    <div class="uk-card uk-card-body section-1__col-1 final__section" style="background-color: rgb(255, 255, 255); border-radius: 5px; height: 100%;width: 100%;box-shadow: -5px 3px 40px 2px hsla(300,3%,55%,.74);">
                        <h3 style="margin-top: 0px; margin-bottom: 20px;">{{ $t('webshopform.title1') }}</h3>
                        <p> {{ $t('webshopform.subtitle1') }}</p>
                        <p> <br> </p>
                        <a href="/webshops/get-started/#wc-guide" style="cursor: pointer;width: 90%;"><button style="cursor: pointer;border: 0px;background: linear-gradient(to bottom, #10dc87 0%, #08ba4d 100%);border-radius: 5px;color: white;width: 100%; height: auto;padding: 15px 0px 15px 0px; border-radius: 5px;font-size:16px;text-align:center">Wordpress / Woocommerce</button></a>
                        <a href="/webshops/get-started/#magento-guide" style="cursor: pointer;width: 90%;"><button style="margin-top: 15px;cursor: pointer;border: 0px;border-radius: 5px;color: white;background: linear-gradient(to bottom, #10dc87 0%, #08ba4d 100%);width: 100%; height: auto;padding: 15px 0px 15px 0px; border-radius: 5px;font-size:16px;text-align:center">Magento</button></a>
                        <a href="/webshops/get-started/#shopify-guide" style="cursor: pointer;width: 90%;"><button style="margin-top: 15px;cursor: pointer;border: 0px;background: linear-gradient(to bottom, #10dc87 0%, #08ba4d 100%);border-radius: 5px;color: white;width: 100%; height: auto;padding: 15px 0px 15px 0px; border-radius: 5px;font-size:16px;text-align:center">Shopify</button></a>
                        <a href="/webshops/get-started/#lightspeed_anchor" style="cursor: pointer;width: 90%;"><button style="margin-top: 15px;cursor: pointer;border: 0px;background: linear-gradient(to bottom, #10dc87 0%, #08ba4d 100%);border-radius: 5px;color: white;width: 100%; height: auto;padding: 15px 0px 15px 0px; border-radius: 5px;font-size:16px;text-align:center">Lightspeed</button></a>
                        <a href="/webshops/get-started/#shopware_anchor" style="cursor: pointer;width: 90%;"><button style="margin-top: 15px;cursor: pointer;border: 0px;background: linear-gradient(to bottom, #10dc87 0%, #08ba4d 100%);border-radius: 5px;color: white;width: 100%; height: auto;padding: 15px 0px 15px 0px; border-radius: 5px;font-size:16px;text-align:center">Shopware</button></a>                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    const Modal = () => import('@/components/modals/Modal')

    export default {
        name: "WebshopForm",
        props: {
            content: Number,
            c_platform: {
                type: String,
                default: null
            }
        },
        components: {
            Modal
        },


        data() {
            return {
                name: '',
                email: '',
                phone: '',
                platform: ''
            }
        },

        methods: {

            emptyForm() {
                this.name = ''
                this.email = ''
                this.phone = ''
                this.platform = ''
            },

            //Deze functie kan je gebruiken wanneer de data daadwerkelijk verstuurd zijn
            //Voor de vormgeving heb ik de modal al aangemaakt
            //Voor de form is alleen de email verplicht
            //De else statemant is bedoeld als de email form leeg is
            sendForm() {
                if (this.c_platform)
                    this.platform = this.c_platform;
                if (this.email !== ''){
                    let message = {
                        title: this. $t('webshopform.success') ,
                        text: this. $t('webshopform.success_message') 
                    }
                    axios
                        .post(`${this.$store.state.SITE_HOST}/accounts/sendMail/`, {
                            body: {
                                email: this.email,
                                phone: this.phone,
                                name: this.name,
                                platform: this.platform
                            }
                        })
                        // .then(response => {
                        //     if (response) {
                        .catch(error => {
                            // this.errorMessage(message)
                            console.log(error);
                        })
                    this.$store.commit('modalStatus', {message})
                }
                else {
                    let message = {
                        title: this. $t('webshopform.error') ,
                        text: this. $t('webshopform.error_message') 
                    }
                    this.$store.commit('modalStatus', {message})
                }
            }
        }
        
    }
</script>

<style scoped lang="scss">
    @import '../../styles/layout/main';
    @import '../../styles/webshops/webshop__form';
</style>