<template>
    <div class="login-c__container">
        <div class="login-c__background login-c__row">
            <div class="bkgr__filler hide--tablet"></div>
            <div class="bkgr__filler bkgr__text hide--tablet">
                <div class="green-border__login">
                    <p class="green-border__text main-text">
                        {{locale['login_text2']}}
                    </p>
                </div>
            </div>
        </div>

        <div class="login-c__section login-c__row">
            <div class="login__width">
                <div class="login-c__wrapper">
                    <div class="login-c__form">
                        <h3 class="sub-title--small">{{locale['login_sort1']}}</h3>
                        <h2 class="main-title">{{locale['title']}}</h2>

                        <br>
                        <div class="c-input__wrapper">
                            <label class="login-c__label">{{locale['input1']}}</label>
                            <input type="email" class="login-c__input" :placeholder="locale['input_email']"
                                   v-model="email">
                        </div>

                        <div class="c-input__wrapper">
                            <label class="login-c__label">{{locale['input2']}}</label>
                            <input type="password" class="login-c__input" :placeholder="locale['input_password']"
                                   v-model="password">
                        </div>


                        <p @click="passReset = true"class="subheading sub__password">{{locale['forgot']}}</p>

                        <p class="button login-c__button" @click="login()">{{locale['login']}}</p>
                    </div>
                </div>

                <hr class="divider__login">

                <!--Register-->
                <div class="login-c__wrapper">
                    <div class="login-c__form register-c__form">
                        <h3 class="sub-title-c">{{locale['register']}}</h3>

                        <br>
                        <div class="c-input__wrapper">
                            <label class="login-c__label">{{locale['input1']}}</label>
                            <input type="email" class="login-c__input" :placeholder="locale['input_email']"
                                   v-model="registerMail">
                        </div>

                        <div class="c-input__wrapper">
                            <label class="login-c__label">{{locale['input2']}}</label>
                            <input type="password" class="login-c__input" :placeholder="locale['input_password']"
                                   v-model="registerPass">
                        </div>

                        <p class="button login-c__button login-c__larger" @click="register()">{{locale['account']}}</p>
                    </div>
                </div>
            </div>
        </div>
        <PasswordForgotModal/>
    </div>
</template>

<script>
    const PasswordForgotModal = () => import('@/components/modals/PasswordForgotModal')
    import language from '../../lang/lang_login'


    export default {
        name: "LoginConsumer",
        components: {
            PasswordForgotModal
        },

        data() {
            return {
                locale: language,
                email: '',
                password: '',
                registerMail: '',
                registerPass: '',
                passReset: false,
            }
        },

        mounted() {
            this.checkLanguage()
        },

        created() {

            this.$store.commit('generateUserName')
            this.keyupEnter()
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

            register() {
                if (this.registerMail !== '' && this.registerPass !== '') {

                    // let gernarateUsername = this.generateUserName()
                    let self = this
                    this.$axios
                        .post(`${this.$store.state.SITE_HOST}/signup/`, {
                            body: {
                                username: self.$store.state.generatedNinjaName,
                                email: this.registerMail,
                                password: this.registerPass,
                                sort: 'ninja'
                            },
                        })
                        .then(response => {

                            if (response.data.authenticate) {
                                self.$store.dispatch('commitSaveUser', response.data)
                                this.$store.state.status = 'ninja'
                                this.$store.state.Authenticated = true
                                self.$store.commit('setLocalUserData', response.data)
                                this.$store.dispatch('ninjaUserData');
                                this.$store.commit('isLoggedIn', true) //set userStatus variable in the store to true
                                self.$router.push('/consumers/profile')
                            } else {

                                console.log(response.data.error + 'erererererer');

                            }
                            console.log(response.data  + 'erererererer12423423424');

                        })
                        .catch(error => {
                            let message = {
                                title: 'Something went wrong...',
                                text: 'Make sure that you correctly filled in all fields'
                            }
                            this.$store.commit('modalStatus', {message})
                            console.log(error);
                        })

                } else {
                    let message = {
                        title: 'Empty form',
                        text: 'Fill in your e-mail & password'
                    }
                    this.$store.commit('modalStatus', {message})
                }

            },

            login() {
                if (this.email !== '' && this.password !== '') {
                    this.$axios
                        .post(`${this.$store.state.SITE_HOST}/login/`, {
                            body: {
                                email: this.email,
                                password: this.password,
                                sort: 'ninja'
                            },
                        })
                        .then(response => {
                            if (response.data.authenticate) {

                                // this.$store.commit('removeLocalUserData')
                                this.$store.dispatch('commitSaveUser', response.data)
                                this.$store.state.status = 'ninja'
                                this.$store.state.Authenticated = true
                                this.$store.commit('setLocalUserData', response.data)
                                this.$store.commit('isLoggedIn', true) //set userStatus variable in the store to true
                                this.$store.dispatch('commitNinjaUserData');
                        
                                if (window.localStorage.getItem('Authenticated')) {
                                    this.$router.push('/consumers/profile')
                                } else {
                                    this.$router.push('/consumers/login')
                                }

                            } else {
                                let message = {
                                    title: 'Incorrect credentials',
                                    text: 'Please check if you correctly filled in you user credentials.'
                                }
                                this.$store.commit('modalStatus', {message})
                                // console.log(response.data.error);
                            }
                            // console.log(response.data);
                        })
                        .catch(error => {
                            let message = {
                                title: 'Something went wrong....',
                                text: "We're sorry. That doesn't look right. Try again later."
                            }
                            this.$store.commit('modalStatus', {message})
                            console.log(error);
                        })
                } else {
                    let message = {
                        title: 'Empty form',
                        text: 'Fill in your e-mail & password'
                    }
                    this.$store.commit('modalStatus', {message})
                }
            },

            keyupEnter(){

                let self = this
                window.addEventListener('keyup', function(e){
                    if(e.keyCode == 13){

                        if (self.email !== '' && self.password !== ''){
                            self.login()
                            self.email = ''
                            self.password = ''
                        }else if(self.registerMail !== '' && self.registerPass !== ''){
                            self.register()
                            self.registerMail = ''
                            self.registerPass = ''
                        }

                    }
                })

            },

            closeEdit(message) {
                this.passReset = false
                this.$store.commit('modalStatus', {message})
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

<style lang="scss" scoped>
    @import '../../styles/layout/main.scss';
    @import '../../styles/consumer/login__consumer.scss';
</style>