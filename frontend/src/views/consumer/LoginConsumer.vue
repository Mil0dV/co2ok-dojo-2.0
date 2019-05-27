<template>
    <div class="login-c__container">
        <div class="login-c__background login-c__row">
            <div class="bkgr__filler hide--tablet"></div>
            <div class="bkgr__filler bkgr__text hide--tablet">
                <div class="green-border__login">
                    <p class="green-border__text">
                        With your account you will get acces to information how much you’ve contributed to fighting
                        climate change.
                    </p>
                </div>
            </div>
        </div>

        <div class="login-c__section login-c__row">
            <div class="login__width">
                <div class="login-c__wrapper">
                    <div class="login-c__form">
                        <p class="subheading">Login consumers</p>
                        <h1 class="main-title consumer-title">Login to get acces to more information!</h1>

                        <div class="c-input__wrapper">
                            <label class="login-c__label">E-mail</label>
                            <input type="email" class="login-c__input" placeholder="Fill in your e-mail"
                                   v-model="email">
                        </div>

                        <div class="c-input__wrapper">
                            <label class="login-c__label">Password</label>
                            <input type="password" class="login-c__input" placeholder="Fill in your e-mail"
                                   v-model="password">
                        </div>

                        <p class="subheading sub__password">I forgot my password</p>

                        <p class="button login-c__button" @click="login()">Login</p>
                    </div>
                </div>

                <!--Register-->
                <div class="login-c__wrapper ">
                    <div class="login-c__form register-c__form">
                        <h3 class="sub-title-c">Don’t have an account yet?</h3>

                        <div class="c-input__wrapper">
                            <label class="login-c__label">E-mail</label>
                            <input type="email" class="login-c__input" placeholder="Fill in your e-mail"
                                   v-model="email">
                        </div>

                        <div class="c-input__wrapper">
                            <label class="login-c__label">Password</label>
                            <input type="password" class="login-c__input" placeholder="Fill in your e-mail"
                                   v-model="password">
                        </div>

                        <p class="button login-c__button" @click="register()">Make an account</p>
                    </div>
                </div>
            </div>
        </div>
        <PasswordForgotModal/>
    </div>
</template>

<script>
    const PasswordForgotModal = () => import('@/components/modals/PasswordForgotModal')

    export default {
        name: "LoginConsumer",
        components: {
            PasswordForgotModal
        },

        data() {
            return {
                email: '',
                password: ''
            }
        },

        created() {

            this.$store.commit('generateUserName')

        },

        methods: {

            register() {
                if (this.email !== '' && this.password !== '') {

                    // let gernarateUsername = this.generateUserName()
                    let self = this
                    this.$axios
                        .post(`${this.$store.state.SITE_HOST}/signup/`, {
                            body: {
                                username: self.$store.state.generatedNinjaName,
                                email: this.email,
                                password: this.password,
                                sort: 'ninja'
                            },
                        })
                        .then(response => {

                            if (response.data.authenticate) {
                                self.$store.dispatch('commitSaveUser', response.data)
                                self.$store.commit('setLocalUserData', response.data)
                                this.$store.dispatch('ninjaUserData');
                                self.$router.push('/consumers/profile')
                            } else {

                                console.log(response.data.error);

                            }
                            console.log(response.data);

                        })
                        .catch(error => {

                            console.log(error);

                        })

                } else {
                    let errormessage = {
                        title: 'Empty form',
                        text: 'Fill in your e-mal & password'
                    }
                    this.errorMessage(errormessage)

                }

            },

            errorMessage(message) {
                this.$store.commit('modalStatus', {message})
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
                                this.$store.commit('setLocalUserData', response.data)
                                this.$store.commit('isLoggedIn', response.data.authenticate)
                                this.$store.dispatch('commitNinjaUserData');

                                if (window.localStorage.getItem('Authenticated')) {
                                    this.$router.push('/consumers/profile')
                                } else {
                                    this.$router.push('/consumers/login')
                                }

                            } else {
                                console.log(response.data.error);
                            }
                            console.log(response.data);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    let errormessage = {
                        title: 'Empty form',
                        text: 'Fill in your e-mal & password'
                    }
                    this.errorMessage(errormessage)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/consumer/login__consumer.scss';
</style>