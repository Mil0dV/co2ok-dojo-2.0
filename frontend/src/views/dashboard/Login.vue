<template>
    <div class="login-c__container">
        <div class="login-c__background login-c__row">
            <div class="bkgr__filler hide--tablet"></div>
            <div class="bkgr__filler bkgr__text hide--tablet">
                <div class="green-border__login">
                    <p class="green-border__text main-text">
                        {{locale['login_text']}}
                    </p>
                </div>
            </div>
        </div>

        <div class="login-c__section login-d__section login-c__row">
            <div class="login__width">
                <div class="login-c__wrapper">
                    <form v-model="valid" class="login-c__form">
                        <h3 class="sub-title--small">{{locale['login_sort2']}}</h3>
                        <h2 class="main-title">{{locale['title']}}</h2>

                        <div class="c-input__wrapper">
                            <label class="login-c__label">{{locale['input1']}}</label>
                            <input type="email" v-model="email" class="login-c__input"
                                   :placeholder="locale['input_email']">
                        </div>

                        <div class="c-input__wrapper">
                            <label class="login-c__label">{{locale['input2']}}</label>
                            <input type="password" v-model="password" class="login-c__input"
                                   :placeholder="locale['input_password']">
                        </div>

                        <p @click="passReset = true" class="subheading sub__password">{{locale['forgot']}}</p>

                        <p @keyup.enter="login()"
                           @click.prevent="login()"
                           class="button login-c__button">{{locale['login']}}</p>
                    </form>
                </div>
            </div>
        </div>
        <PasswordForgotModal/>
    </div>
</template>


<script>
    import language from '../../lang/lang_login'
    import axios from 'axios'
    // import mailer from '../../nodemailer'

    const PasswordForgotModal = () => import('@/components/modals/PasswordForgotModal')
    const sgMail = require('@sendgrid/mail')

    export default {
        name: 'Login',
        components: {
            PasswordForgotModal
        },

        data() {
            return {
                locale: language,
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
            this.keyupEnter()
        },

        mounted() {
            this.checkLanguage()
            // mailer.sendmail('kevineasky@gmail.com')
            // this.passwordRecoveryEmail()

        },

        methods: {
            checkLanguage(lang) {
                if (lang === 'en') {
                    this.locale = language.lang_en_login
                } else {
                    if (this.currentLanguage === 'en') {
                        this.locale = language.lang_en_login
                    } else {
                        this.locale = language.lang_nl_login
                    }
                }
            },

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

            storeTransactionsData() {

                let merchantId
                let self = this
                if (this.$store.state.userData.userdata.is_superuser) {
                    merchantId = ''
                } else {
                    merchantId = this.$store.state.userData.profileData.merchantId
                }

                this.$axios.get(`${this.$store.state.SITE_HOST}/user/store_transactions_data/`, {
                    params: {
                        merchantId: merchantId,
                        userStatus: self.$store.state.userData.userdata.is_superuser
                    },
                    headers: {
                        "X-CSRFToken": `${self.$store.state.userToken}`,
                        Authorization: `token ${window.localStorage.getItem('userToken')}`
                    }
                }).then(response => {

                    console.log(response.data)

                }).catch(error => {
                    console.log(error)
                })

            },

            getUserData() {

                let self = this
                if (window.localStorage.getItem('Authenticated')) {

                    this.$axios.get(`${this.$store.state.SITE_HOST}/user/userData/`, {
                        params: {
                            id: window.localStorage.getItem('userId')
                        },
                        headers: {
                            "X-CSRFToken": `${self.$store.state.userToken}`,
                            Authorization: `token ${window.localStorage.getItem('userToken')}`
                        }
                    }).then(response => {

                        if (response.data.authData) {

                            // self.$store.commit('getUserData', response.data);
                            self.$store.state.userData = response.data
                            self.storeTransactionsData()

                        } else {

                            let message = {
                                title: 'Something went wrong....',
                                text: 'Incorrect user credentials'
                            }
                            self.$store.commit('modalStatus', {message})
                            console.log('user should be redirect to the login page');
                        }

                    }).catch(error => {
                        console.log(error);
                        //  this.errorMessage()
                    })
                } else {
                    console.log('not authenticated');
                }

            },

            login() {
                this.send = true
                let message = {title: 'Oops... Something went wrong!', text: 'Try again later.'}
                let self = this
                if (this.email !== '' && this.password !== '') {
                    axios
                        .post(`${this.$store.state.SITE_HOST}/login/`, {
                            body: {
                                email: this.email,
                                password: this.password,
                                sort: 'webshop',
                            },

                        })
                        .then(response => {
                            if (response) {
                                if (response.data.authenticate) {
                                    console.log(response.data);

                                    this.$store.dispatch('commitSaveUser', response.data)
                                    this.$store.state.status = 'webshop'
                                    this.$store.state.Authenticated = true
                                    this.$store.commit('setLocalUserData', response.data)

                                    this.$store.commit('isLoggedIn', true) //set userStatus variable in the store to true
                                    this.getUserData()

                                    // this.$store.dispatch('commitGetUserData');
                                    //userSession return a boolean of de authenticate status of the user
                                    if (window.localStorage.getItem('Authenticated')) {
                                        this.$router.push('/webshops/dashboard')
                                    } else {
                                        this.$router.push('/webshops/login')
                                    }

                                } else {
                                    let message = {
                                        title: 'Something went wrong....',
                                        text: 'Incorrect user credentials'
                                    }
                                    this.$store.commit('modalStatus', {message})
                                }
                            }
                        })
                        .catch(error => {
                            // this.errorMessage(message)
                            console.log(error);
                        })
                    this.send = false
                } else {
                    let message = {
                        title: 'Something went wrong....',
                        text: 'Please fill in your e-mail & password'
                    }
                    this.$store.commit('modalStatus', {message})
                }
            },

            passwordRecoveryEmail() {

                let self = this
                let result = 'ninja@pass.'
                let generatedPass = result += Math.random().toString(36).substring(2, 7)

                axios.post(`${this.$store.state.SITE_HOST}/password_recover_mail/`, {
                    body: {
                        temporaryPassword: generatedPass,
                        email: self.$store.state.passwordRecoveryEmail
                    }
                }).then(response => {
                    console.log(response.data);
                    if (response.data.send) {

                    }
                }).catch(error => {
                    console.log(error);
                })

                // sgMail.setApiKey(process.env.SEND_GRID_USER_NAME, process.env.SEND_GRID_PASSWORD);
                // const mailOptions = {
                //   to: 'kevineasky@gmail.com',
                //   from: process.env.EMAIL,
                //   subject: 'Password recovery',
                //   html: `<div style = "width: 700px; height: auto; display: flex;flex-direction:column; justify-content:center;align-items:center;">Password recovery<h3 style="text-align-left;"> </h3><p style="margi-bottom: 5px;text-align-left;">Hallo,<br>hallo,<br><br>You recently requested a password reset. You will find below your temporary password. Do not forget to change it once login.<br>Temporary password: ${generatedPass}<br><br>Tank you for helping us fight climate change<br><br>Milo de Vries, Co2ok</p> </div>`
                // }
                // sgMail.send(mailOptions, (err, json) => {
                //     if(err){
                //         console.log(err);
                //     }else{
                //         console.log(json);
                //     }
                // })

            },

            keyupEnter() {

                let self = this
                window.addEventListener('keyup', function (e) {
                    if (e.keyCode == 13) {

                        if (self.email !== '' && self.password !== '') {
                            self.login()
                            self.email = ''
                            self.password = ''
                        }

                    }
                })

            },
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

<style lang="scss" scoped>
    @import '../../styles/layout/main.scss';
    @import '../../styles/consumer/login__consumer.scss';

    .login-c__background {
        background: url('../../assets/images/login/loginscreen.png') no-repeat center center;
        /*background: url('../../assets/images/register/registerscreen.png') no-repeat center center;*/
        background-size: cover;
    }


    @media screen and (max-width: 1150px) {
        .login-c__section {
            width: 90%;
            max-height: 600px;
        }

        .login-c__background {
            flex: 8;
        }
    }


</style>
