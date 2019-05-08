<template>
    <v-container class="register__container ma-0 pa-0" fluid align-center grid-list-md text-xs-center>
        <v-layout class="register__layout  ma-0 pa-0" wrap row>
            <v-flex class="register__col-1" xs12 sm12 md6>
                <v-layout class="register__col-filler" wrap>

                </v-layout>

                <v-layout row wrap class="hidden-sm-and-down">
                    <v-flex xs12 sm7 lg6 offset-md2 offset-lg5>
                        <div class="login__info animated fadeInUp">
                            <p class="login__info-text">
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
                    <v-flex class="register__form-mb" justify-center align-center column wrap xs6 lg4>
                        <form v-model="valid" class="login__form">
                            <div class="login__header-group animated fadeInUp">
                                <p class="login__form-header">Account</p>
                                <p class="login__form-title">Login to access to more information</p>
                            </div>


                            <div class="login__group animated fadeInUp">
                                <label class="login__group">
                                    E-mail
                                    <input class="login__group-input" v-model="email"
                                           type="email" placeholder="Fill in you email...">
                                </label>

                                <div class="login__group-password">
                                    <label class="login__group">
                                        Password
                                        <input class="login__group-input" v-model="password"
                                               type="password" placeholder="Fill in you password...">
                                    </label>
                                    <p @click="passReset = true"
                                       class="login__form-header forgot__password">
                                        I forgot my password
                                    </p>
                                </div>
                            </div>

                            <div style="width: 100%; text-align: left;" class="animated fadeInUp ">
                                <br>
                                <button type="submit" @keyup.enter="login()"
                                        @click.prevent="login()"
                                        class="login__submit">
                                    <span v-if="send === false">Login</span>
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
        <PasswordForgotModal/>
    </v-container>
</template>


<script>
    const PasswordForgotModal = () => import('@/components/modals/PasswordForgotModal')
    import axios from 'axios'

    export default {
        name: 'Login',
        components: {
            PasswordForgotModal
        },

        data() {
            return {
                password: '',
                send: false,
                valid: false,
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passReset: false,
            }
        },
        created() {

            console.log(this.$route)
        },

        methods: {
            errorMessage(message) {
                this.send = false
                this.$store.commit('modalStatus', {message})
            },

            closeEdit(message) {
                this.passReset = false

                if (message) {
                    this.$store.commit('modalStatus', {message})
                }
            },

            login() {
                this.send = true
                let message = {title: 'Oops... Something went wrong!', text: 'Try again later.'}
                if (this.email !== '' && this.password !== '') {
                    axios
                        .post('http://127.0.0.1:8000/login/', {
                            body: {
                                email: this.email,
                                password: this.password,
                                sort: 'webshop',
                            },
                            header: {"X-CSRFToken": 'gZvnzSFeGp7h68WjCzmFky6wMkiJZXDU',}

                        })
                        .then(response => {
                            if (response) {
                                if (response.data.authenticate) {
                                    this.$store.dispatch('commitSaveUser', response.data)
                                    this.$store.commit('setLocalUserData', response.data)
                                    console.log('userlocal', response.data.token);

                                    // this.$store.state.userStatus = true;
                                    // console.log(this.$store.state.userAuthLocalData);
                                    this.$store.commit('isLoggedIn', response.data.authenticate)
                                    this.$store.dispatch('commitGetUserData');
                                    //userSession return a boolean of de authenticate status of the user
                                    if(this.$store.state.Authenticated)
                                    {
                                        this.$router.push('dashboard')
                                    }else{
                                        this.$router.push('login')
                                        // alert('not authenticated')
                                        // window.location.href = '/login'
                                    }
                                } else {
                                    let errormessage = {
                                        title: 'Oops... Something went wrong!',
                                        text: rsponse.data.error
                                    }
                                    this.errorMessage(errormessage)
                                }
                            }
                        })
                        .catch(error => {
                            this.errorMessage(message)
                        })
                    this.send = false
                }

                // this.errorMessage(message)
            }
        }
    }
</script>

<style scoped>
    .register__container {
        height: 100%;
        background: white;
    }

    .register__layout {
        height: 100%;
    }

    .register__col-1 {
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background: url('../assets/images/login/loginscreen.png') no-repeat center center;
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
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
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
        max-width: 300px;
    }

    .login__group-wrapper > *:nth-child(2) {
        max-width: 140px;
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
            max-width: 800px !important;
            width: 100% !important;
        }

        .register__layout-form {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .register__form-mb {
            margin: 0;
        }

        .login__form-title {
            font-size: 17px;
            line-height: 25px;
        }

        .login__back {
            padding:5px 15px;
        }

        .login__group {
            font-size: 12px;
        }

        .pa-5 {
            padding: 20px !important;
        }
    }

    @media (max-width:600px) {
        .login__form {
            padding: 40px 40px;
            width: 100%;
        }

        .login__submit, .login__back {
            padding: 5px 10px;
            font-size: 15px;
        }
    }

</style>
