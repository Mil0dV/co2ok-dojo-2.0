<template>
    <div class="uk-section section-1">
        <div class="uk-container form__section uk-container-width">
            <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                <div class="uk-width-1-2 to-left">
                    <div class="uk-card uk-card-body section-1__col-1 final__section">
                        <h2 class="main-title--large">{{content.title}}</h2>
                        <p class="main-text--large">
                            {{content.text}}
                        </p>
                    </div>
                </div>

                <div class="uk-width-1-2 to-right">
                    <div class="uk-card col-2-card uk-card-default uk-card-body">
                        <form class="login__form">
                            <div class="login__group">
                                <label class="login__group">
                                    Name
                                    <input v-model="name"
                                           class="login__group-input" type="email"
                                           placeholder="Fill in your name...">
                                </label>

                                <label class="login__group">
                                    <span>E-mail<span class="asterik">*</span></span>
                                    <input v-model="email"
                                           class="login__group-input" type="email"
                                           placeholder="Fill in your e-mail..">
                                </label>

                                <label class="login__group">
                                    Phone number
                                    <input v-model="phone"
                                           class="login__group-input" type="email"
                                           placeholder="Fill in your phone number..">
                                </label>

                                <label class="login__group">
                                    E-commerce platform
                                    <input v-model="platform"
                                           class="login__group-input" type="email"
                                           placeholder="Fill in the name of the platform..">
                                </label>
                            </div>

                            <div style="width: 100%; text-align: left;" class="login__buttons">
                                <a class="button button-empty btn-large" @click="emptyForm()">Empty form</a>
                                <a class="button btn-large" @click="sendForm()">Submit</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const Modal = () => import('@/components/modals/Modal')


    export default {
        name: "WebshopForm",
        props: {
            content: Object
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
                if(this.email !== ''){
                    let message = {
                        title: 'Success!',
                        text: 'You are successfully registered to our e-mail subscription service'
                    }
                    this.$store.commit('modalStatus', {message})
                }
                else {
                    let message = {
                        title: 'Something went wrong....',
                        text: 'Please fill in your e-mail'
                    }
                    this.$store.commit('modalStatus', {message})
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .main /deep/ {
        @import "../../../node_modules/uikit/dist/css/uikit.min.css";
    }

    @import '../../styles/layout/main';
    @import '../../styles/webshops/webshop__form';
</style>