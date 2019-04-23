<template>
    <div class="login__container">
        <div class="login__col-1">
            <div class="login__info" style="animation-delay: 1s;">
                <p class="login__info-text">
                    With an account you will get access to information how much you’ve contributed to fighting climate
                    change
                </p>
            </div>
        </div>

        <!--<transition enter-active-class="animated slideInUp">-->
            <!--<p v-if="next">sdsdsd</p>-->
            <!--<p v-else>ssddsdsd</p>-->
        <!--</transition>-->


        <div class="login__col-2">
            <form v-model="valid" class="login__form">
                <div class="login__header-group">
                    <p class="login__form-header">Account</p>
                    <p class="login__form-title">Make an account to get access to more info!</p>
                </div>

                <transition enter-active-class="animated fadeIn"
                            leave-active-class="animated fadeOut"
                            :duration="{ enter: 500, leave: 200 }"
                            mode="out-in">

                    <div v-if="!next" key="firstSlide" class="login__group">

                        <label class="login__group">
                            <div>Company name<span class="asterik">*</span></div>
                            <input class="login__group-input" v-model="company"
                                   type="email" placeholder="Fill in you email...">
                        </label>

                        <label class="login__group">
                            <div>E-mail<span class="asterik">*</span></div>
                            <input class="login__group-input" v-model="email"
                                   type="email" placeholder="Fill in you email...">
                        </label>

                    </div>

                <div v-else class="login__group">
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
                </div>

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
                                <div>Housenumber<span class="asterik">*</span></div>
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
                            <a href="https://www.co2ok.eco/privacy">I accept the terms and agreements</a>
                        </div>
                    </div>
                </transition>

                <div class="register__button-group">
                    <button v-if="next" @click="next = false" tag="button" to="/" class="login__back">
                        <span>< Back</span>
                    </button>

                    <button v-if="!next" @click.prevent="next = true" class="login__submit">
                        <span>Next</span>
                    </button>

                    <button v-else type="submit" @click.prevent="sendForm()"
                            class="login__submit">
                        <span v-if="send === false">Make an account</span>
                        <v-progress-circular v-else indeterminate color="white">
                        </v-progress-circular>
                    </button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'RegisterForm',
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


        methods: {
            errorMessage() {
                this.send = false
                let modal = {message: 'Something went wrong...', status: true}
                this.$store.commit('modalStatus', modal)
            },

            sendForm() {
                this.send = true
                if (this.consent !== '' && this.email !== '' && this.password !== '' &&
                    this.passwordRepeat !== '' && this.company !== '' &&
                    this.password === this.passwordRepeat && this.link !== ''
                    && this.country !== '' && this.city !== '' && this.zipcode !== ''
                    && this.street !== '' && this.number !== ''
                ) {
                    axios
                        .post('http://127.0.0.1:8000/signup/', {
                            body: {
                                company: this.company,
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
                                link: this.link,
                                country: 'this.country',
                                city: this.city,
                                zipcode: this.zipcode,
                                street: this.street
                            },
                            header: {"X-CSRFToken": 'gZvnzSFeGp7h68WjCzmFky6wMkiJZXDU',}

                        })
                        .then(response => {
                            if (response) {
                                this.send = false
                                if (response.data.authenticate) {
                                    this.$store.dispatch('commitSaveUser', response.data)
                                    this.$store.commit('setLocalUserData', response.data)
                                    this.$router.push('dashboard')
                                } else {
                                    this.errorMessage()
                                }
                            }
                        })
                        .catch(error => {
                            this.errorMessage()
                        })
                } else {
                    this.errorMessage()
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login__container {
        flex: 1 1 auto;
        display: flex;
        height: 100%;
        overflow: hidden;
    }

    .login__col-1 {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('../../assets/images/register/registerscreen.png') no-repeat center center;
        background-size: cover;
    }

    .login__col-2 {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;

    }

    .login__info {
        margin-bottom: -40%;
        margin-right: -30%;
        background: white;
        border-left: 10px solid #10D884;
        max-width: 422px;
        box-shadow: 0 0px 30px 0 rgba(0, 0, 0, 0.10);

    }

    .login__info-text {
        max-width: 361px;
        margin: 0;
        padding: 20px 40px;
        text-align: left;
    }

    .login__form {
        overflow: hidden;
        padding: 0 0 0 80px;
        max-width: 555px;
        max-height: 739px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
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
        max-width: 300px;
    }

    .login__group-wrapper > *:nth-child(2) {
        max-width: 140px;
    }

    .asterik {
        color: red;
    }
</style>
