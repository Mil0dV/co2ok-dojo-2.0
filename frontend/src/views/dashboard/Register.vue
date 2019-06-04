<template>
    <v-container class="register__container ma-0 pa-0" fluid align-center grid-list-md text-xs-center>
        <v-layout class="register__layout  ma-0 pa-0" wrap row>
            <v-flex class="register__col-1" xs12 sm12 md6>
                <v-layout class="register__col-filler hidden-sm-and-down" wrap>

                </v-layout>

                <v-layout row wrap class="hidden-sm-and-down">
                    <v-flex xs12 sm7 lg6 offset-md2 offset-lg5>
                        <div class="login__info">
                            <p class="login__info-text ">
                                With an account you will get access to information how much you’ve contributed to
                                fighting climate
                                change
                            </p>
                        </div>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs12 sm12 md6 lg4>
                <v-layout justify-center align-center column wrap class="hidden-sm-and-down pa-5">
                </v-layout>

                <v-layout class="register__layout-form pa-5" justify-center align-center column wrap>
                    <v-flex class="register__form-mb" justify-center align-center column wrap xs12 lg4>
                        <form v-model="valid" class="login__form">
                            <div class="login__header-group">
                                <p class="login__form-header">Account</p>
                                <p class="login__form-title">Make an account to get access to more info!</p>
                            </div>

                            <transition enter-active-class="animated fadeIn"
                                        leave-active-class="animated fadeOut"
                                        mode="out-in">

                                <div v-if="!next" key="firstSlide" class="login__group"
                                     style="animation-delay: 0.3s;">

                                    <label class="login__group">
                                        <div>Company name<span class="asterik">*</span></div>
                                        <input class="login__group-input" v-model="company"
                                               type="email" placeholder="Fill in your company name...">
                                    </label>

                                    <label class="login__group">
                                        <div>E-mail<span class="asterik">*</span></div>
                                        <input class="login__group-input" v-model="email"
                                               type="email" placeholder="Fill in your email...">
                                    </label>

                                    <div class="login__group-password">
                                        <label class="login__group">
                                            <div>Password<span class="asterik">*</span></div>
                                            <input class="login__group-input" v-model="password"
                                                   type="password" placeholder="Fill in your password...">
                                        </label>
                                    </div>

                                    <div class="login__group-password">
                                        <label class="login__group">
                                            <div>Repeat password<span class="asterik">*</span></div>
                                            <input class="login__group-input" v-model="passwordRepeat"
                                                   type="password" placeholder="Fill in you password...">
                                        </label>
                                    </div>

                                </div>

                                <div v-else key="secondSlide" class="login__group">
                                    <label class="login__group">
                                        <div>Webshop link<span class="asterik">*</span></div>
                                        <input class="login__group-input" v-model="link"
                                               type="text" placeholder="Your company link">
                                    </label>


                                    <label class="login__group">
                                        <div>Country<span class="asterik">*</span></div>
                                        <input class="login__group-input" v-model="country"
                                               type="text" placeholder="Your country">
                                    </label>

                                    <div class="login__group-wrapper">
                                        <label class="login__group">
                                            <div>City<span class="asterik">*</span></div>
                                            <input class="login__group-input" v-model="city"
                                                   type="text" placeholder="City">
                                        </label>

                                        <label class="login__group">
                                            <div>Zip-code<span class="asterik">*</span></div>
                                            <input class="login__group-input" v-model="zipcode"
                                                   type="text" placeholder="Your ZIP-code">
                                        </label>
                                    </div>

                                    <div class="login__group-wrapper">
                                        <label class="login__group">
                                            <div>Street<span class="asterik">*</span></div>
                                            <input class="login__group-input" v-model="street"
                                                   type="text" placeholder="Your street">
                                        </label>

                                        <label class="login__group">
                                            <div>Number<span class="asterik">*</span></div>
                                            <input class="login__group-input" v-model="number"
                                                   type="text" placeholder="Housenumber">
                                        </label>
                                    </div>

                                    <div class="login__group login__accept">
                                        <v-checkbox v-model="consent"
                                                    value="true"
                                                    color="success"
                                                    class="accept-box"
                                        ></v-checkbox>
                                        <a target="_blank" href="https://www.co2ok.eco/privacy">I accept the terms and agreements</a>
                                    </div>
                                </div>
                            </transition>

                            <div class="register__button-group "
                                 style="animation-delay: 0.6s;">
                                <button v-if="next" @click="next = false" class="button button-empty">
                                    <span> Back</span>
                                </button>

                                <button v-if="!next" @click.prevent="next = true" class="button">
                                    <span>Next</span>
                                </button>

                                <button v-else type="submit" @keyup.enter="merchant_idChecker()"
                                        @click.prevent="merchant_idChecker()"
                                        class="button">
                                    <span v-if="send === false">Make an account</span>
                                    <v-progress-circular v-else indeterminate color="white">
                                    </v-progress-circular>
                                </button>
                            </div>

                        </form>
                    </v-flex>
                </v-layout>

                <v-layout justify-center align-center column wrap class="hidden-sm-and-down pa-5">
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
    import axios from 'axios'

    import Vue from 'vue'
    import Vuetify from 'vuetify'
    import 'vuetify/dist/vuetify.min.css'

    Vue.use(Vuetify);

    export default {
        name: 'Register',
        props: {
            msg: String
        },

        data() {
            return {
                company: '',
                password: '',
                passwordRepeat: '',
                name: '',
                email: '',

                link: '',
                country: '',
                city: '',
                zipcode: '',
                street: '',
                number: '',

                next: false,
                send: false,
                valid: false,
                consent: '',
            }
        },

        created() {

            this.getMerchantData()

        },

        mounted() {

            
        },

        methods: {
            errorMessage() {
                this.send = false
                let modal = {message: 'Something went wrong...', status: true}
                this.$store.commit('modalStatus', modal)
            },

            //check of de webshop eigenaar id in de url al gekoppeld is aan een account
            merchant_idChecker() {

                let mechantId = this.$route.params.merchantId
                this.$axios.post(`${this.$store.state.SITE_HOST}/merchantIdChecker/`, {
                    body: {
                        merchantId: mechantId
                    }
                }).then(response => {

                    if (response.data[0].accountIdCheck && response.data[1].dynamoIdCheck > 0) {

                        this.register()
                        
                    } else {
                        alert('deze id is al gekkopeld aan een account of is niet geldig')
                    }

                }).catch(error => {
                    console.log(error);
                    let message = {
                        title: 'Something went wrong...',
                        text: "Incorrect URL."
                    }
                    this.$store.commit('modalStatus', {message})
                })

            },

            // get merchant name and email from dynamodb
            getMerchantData() {

                let id = this.$route.params.merchantId
                let self = this
                this.$axios.post(`${this.$store.state.SITE_HOST}/merchant_data/`, {
                    body: {
                        merchantId: id
                    }
                }).then(response => {

                    let data = response.data
                    self.company = data.name
                    self.email = data.email
                    self.link = data.link

                }).catch(error => {
                    console.log(error);
                    //Als de id niet klopt, redirect dan naar de homepage
                })
            },

            register() {
                let self = this
                this.send = true
                if (this.consent !== '' && this.email !== '' && this.password !== '' &&
                    this.passwordRepeat !== '' && this.company !== '' &&
                    this.password === this.passwordRepeat && this.link !== ''
                    && this.country !== '' && this.city !== '' && this.zipcode !== ''
                    && this.street !== '' && this.number !== ''
                ) {
                    this.$axios
                        .post(`${this.$store.state.SITE_HOST}/signup/`, {
                            body: {
                                username: this.company,
                                email: this.email,
                                password: this.password,
                                link: this.link,
                                country: this.country,
                                city: this.city,
                                zipcode: this.zipcode,
                                street: this.street,
                                number: this.number,
                                sort: 'webshop',
                                name: this.name,
                                merchantId: this.$route.params.merchantId,

                            },

                        })
                        .then(response => {
                            if (response) {
                                this.send = false
                                if (response.data.authenticate) {
                                    this.$store.dispatch('commitSaveUser', response.data)
                                    this.$store.state.status = 'webshop'
                                    this.$store.state.Authenticated = true
                                    this.$store.commit('setLocalUserData', response.data)
                                    this.$store.commit('isLoggedIn', true) //set userStatus variable in the store to true
                                    self.$router.push('/webshops/dashboard')
                                } else {
                                    this.errorMessage()
                                }
                            }
                        })
                        .catch(error => {
                            this.errorMessage()
                        })
                } else {
                    let message = {
                        title: 'Something went wrong...',
                        text: 'You did not fill in your form correctly.'
                    }
                    this.$store.commit('modalStatus', {message})
                    // this.errorMessage()
                }
            }
        }
    }
</script>

<style scoped>
    .register__container {
        height: 100%;
        background: white;
    }

    .button-empty {
        background: white;
        color: #2F2F2F;
        border: 1px solid #848484;
    }

    .register__layout {
        height: 100%;
        min-height: 97vh;
    }

    .register__col-1 {
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background: url('../../assets/images/register/registerscreen.png') no-repeat center center;
        background-size: cover;
        min-height: 300px;
    }

    .register__col-filler {
        flex: 2;
    }

    .register__layout-form {
        overflow: hidden;
    }

    .login__info {
        border-radius: 0px 5px 5px 0px;
        background: white;
        border-left: 10px solid #10D884;
        width: 100%;
        box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.30);
    }

    .login__info-text {
        margin: 0;
        padding: 20px 40px;
        text-align: left;
    }

    .login__form {
        margin-left: 10px;
    }

    .login__header-group {
        text-align: left;
    }

    .login__form-header {
        color: #10D884;
        margin: 0;
        padding: 0;
        font-size: 15px;
    }

    .login__form-title {
        text-align: left;
        line-height: 50px;
        font-size: 42px;
        font-weight: 600;
        color: #606468;
        margin: 0;
        padding: 0;
    }

    .login__group {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        margin: 10px 0;
        width: 100%;
    }

    .login__accept {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .login__accept a {
        margin-bottom: 5px;
        flex: 30;
        color: black;
        text-decoration: none;
    }

    .login__accept a:visited {
        color: black;
    }

    .login__group-input {
        border-radius: 3px;
        border: 1px solid #BCBCBC;
        height: 40px;
        padding: 10px;
        width: 100%;
    }

    .login__group-password {
        width: 100%;
        text-align: left;
    }


    .register__button-group {
        margin-top: 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .login__submit {
        font-family: 'Poppins', sans-serif;
        color: white;
        background-image: linear-gradient(to right, #10DC87, #08BA4D);
        background-size: 100% auto;
        padding: 10px 30px;
        border-radius: 3px;
        top: 0px;
        position: relative;
        transition: 0.2s ease-in-out;
        font-size: 17px;
    }

    .login__back {
        padding: 10px 30px;
        border-radius: 3px;
        top: 0px;
        position: relative;
        transition: 0.2s ease-in-out;
        font-size: 17px;
        border: 2px solid #9F9F9F;
        background: transparent;
        color: #9F9F9F;
    }

    .login__submit:hover, .login__back:hover {
        top: -5px;
        background-size: 200% auto;
        background-position: right center;
        transition: 0.2s ease-in-out;
    }

    .login__group-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .login__group-wrapper > *:first-child {
        max-width: 70%;
    }

    .login__group-wrapper > *:nth-child(2) {
        max-width: 25%;
    }

    .asterik {
        color: red;
    }

    @media (max-width: 960px) {
        .register__container {
            height: 100%;
            background: #F4F4F4;
        }

        .register__layout-form {
            overflow: visible;
        }

        .login__form {
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.30);
            padding: 40px 40px;
            background: white;
            margin-top: -225px;
            margin-left: 0;
            font-size: 15px;
            overflow: hidden;
            max-width: 600px;
            width: 100%;
        }

        .register__layout-form {
            margin-bottom: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .register__form-mb {
            margin: 0 0 100px;
            max-width: 800px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .login__form-title {
            font-size: 20px;
            line-height: 25px;
        }

        .login__back {
            padding: 5px 15px;
        }

        .login__group {
            font-size: 12px;
        }

        .pa-5 {
            padding: 20px !important;
        }
    }

    @media (max-width: 600px) {
        .login__form {
            padding: 40px 40px;
            width: 100%;
            max-width: 500px;
        }

        .login__submit, .login__back {
            padding: 5px 20px;
            font-size: 15px;
        }
    }

</style>