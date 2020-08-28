<template>
    <div class="main">
        <img class="Header_logo" src="../../assets/images/webshops/webwinkelkeur/webwinkelkeurLogo.png">
        <Header :image="header"></Header>
        <div class="uk-section section-1">
            
            <!-- <h1 class="main-title">Get started</h1> -->
            <div class="uk-container form__section uk-container-width" style="margin-top: -80px;">
                <h1 v-if="!c_platform" style="margin-bottom: 50px" class="main-title">WebwinkelKeur ledenaanbieding</h1>
                <h1 v-if="c_platform" style="margin-bottom: 50px;" class="main-title">{{ $t(c_platform) }}</h1>
                <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                    <div class="uk-width-1-2 to-left">

                        <div class="uk-card login__form-container col-2-card uk-card-default uk-card-body" style=" height: 100%; box-shadow: -5px 3px 40px 2px hsla(300,3%,55%,.74);">
                            <form class="login__form">
                                <!-- <p v-if="!c_platform" style="text-align: left;">{{ $t('webshopform.subtitle2') }}</p>
                                <p v-if="c_platform" style="text-align: left;">{{ $t('webshopform.subtitles_LS_SW') }}</p> -->
                                <p style="text-align: left; margin-bottom: 20px;">
                                    Maak duurzaamheid zichtbaar binnen je webwinkel. Met de speciale actie die CO<sub>2</sub>ok heeft ontwikkeld voor WebwinkelKeur leden is het nu makkelijker dan ooit.
                                    <br><br>Pakket 1: Tot 500 verzonden of geretourneerde pakketten compenseren: € 2,50 p/m.
                                    <br><br>Pakket 2: Tot 1000 verzonden of geretourneerde pakketten compenseren: € 5,00 p/m.
                                    <br><br>Voor beide pakketten geldt dat je er de impact calculator bij krijgt.
                                </p>
                                <div class="login__group">
                                    <label class="login__group">
                                        Naam
                                        <input v-model="name"
                                            class="login__group-input" type="email"
                                            :placeholder=" 'Vul je naam in' ">
                                    </label>

                                    <label class="login__group">
                                        <span>{{ $t('webshopform.input2_label') }}<span class="asterik">*</span></span>
                                        <input v-model="email"
                                            class="login__group-input" type="email"
                                            :placeholder=" 'Vul je e-mail in' ">
                                    </label>

                                    <label class="login__group">
                                        Telefoonnummer
                                        <input v-model="phone"
                                            class="login__group-input" type="email"
                                            :placeholder=" 'Vul je telefoonnummer in' ">
                                    </label>

                                    <label v-if="!c_platform" class="login__group">
                                        Gemiddeld aantal orders/maand
                                        <input v-model="platform"
                                            class="login__group-input" type="email"
                                            :placeholder=" 'Schatting gemiddeld aantal orders' ">
                                    </label>
                                </div>

                                <div class="radioButtonsWWK">
                                    <input type="radio" name="picked" @click="assignPackage('pakket 1')" value="one">
                                    <label for="1 pakket">Pakket 1</label>
                                    <input type="radio" name="picked" @click="assignPackage('pakket 2')" value="two">
                                    <label for="1 paketten">Pakket 2</label>
                                </div>
                                <div style="width: 100%; text-align: left;" class="login__buttons">
                                    <!-- <a class="button button-empty btn-large" @click="emptyForm()"> {{ $t('webshopform.empty') }}</a> -->
                                    <a class="button btn-large" @click="sendForm()"> Meld je aan</a>
                                </div>
                            </form>
                        </div>
                    </div>
<!-- 
                    <div class="uk-width-1-2 to-right">
                    <div class="uk-card uk-card-body section-1__col-1 final__section" style="background-color: rgb(255, 255, 255); border-radius: 5px;height: 100%;width: 100%;box-shadow: -5px 3px 40px 2px hsla(300,3%,55%,.74);">
                        <img src="../../assets/images/webshops/webwinkelkeur/webwinkelkeurLogo.png" style="margin-bottom: 100px;">
                        <img src="../../assets/images/webshops/webwinkelkeur/widgetOnly.png">

                    </div>
                    </div> -->

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
                platform: '',
                package: ''
            }
        },

        methods: {

            emptyForm() {
                this.name = ''
                this.email = ''
                this.phone = ''
                this.platform = ''
                this.package = ''
            },

            assignPackage(pakket) {
                this.package = pakket;
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
                                platform: this.platform,
                                package: this.package
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
    .to-left {
        width: 100%;
    }
</style>