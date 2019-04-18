<template>
    <div class="login__container">
        <div class="login__col-1">

        </div>

        <div class="login__col-2">
            <v-form v-model="valid" class="login__form">
                <div class="login__header-group">
                    <p class="login__form-header">Account</p>
                    <p class="login__form-title">Make an account to get access to more info!</p>
                </div>

                <div class="login__group">

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

                    <div class="login__group-password">
                        <label class="login__group">
                            <div>Password<span class="asterik">*</span></div>
                            <input class="login__group-input" v-model="password"
                                   type="password" placeholder="Fill in you password...">
                        </label>
                    </div>

                    <div class="login__group-password">
                        <label class="login__group">
                            <div>Repeat password<span class="asterik">*</span></div>
                            <input class="login__group-input" v-model="passwordRepeat"
                                   type="password" placeholder="Fill in you password...">
                        </label>
                    </div>

                    <div class="login__group">
                        <v-radio-group v-model="consent" column>
                            <v-radio
                                    label="I accept the terms and agreements"
                                    color="success"
                                    value="true"
                            ></v-radio>
                        </v-radio-group>
                    </div>
                </div>

                <div class="register__button-group">
                    <router-link tag="button" to="/" class="login__back">
                        <span>< Back</span>
                    </router-link>

                    <button type="submit" @click.prevent="sendForm()"
                            class="login__submit">
                        <span v-if="send === false">Make an account</span>
                        <v-progress-circular v-else indeterminate color="white">
                        </v-progress-circular>
                    </button>
                </div>

            </v-form>
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
                send: false,
                valid: false,
                email: '',
                consent: '',
            }
        },
        created() {
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
                    this.password === this.passwordRepeat) {
                    axios
                        .post('http://127.0.0.1:8000/login/', {
                            body: {
                                company: this.company,
                                email: this.email,
                                password: this.password,
                                sort: 'webshop',
                            },
                            header: {"X-CSRFToken": 'gZvnzSFeGp7h68WjCzmFky6wMkiJZXDU',}

                        })
                        .then(response => {
                            if (response) {
                                this.send = false
                                if (response.data.authenticate) {
                                    this.$store.commit('saveUser', response.data)
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
        background: url('../../assets/images/register/registerscreen.png') no-repeat;
    }

    .login__col-2 {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;

    }

    .login__form {
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
        color: white;
        background: linear-gradient(to right, #10DC87, #08BA4D);
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
        transition: 0.2s ease-in-out;
    }


    .asterik {
        color: red;
    }
</style>
