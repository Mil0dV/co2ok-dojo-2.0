<template>
    <div class="login__container">
        <div class="login__col-1 ">
            <div class="login__info" style="animation-delay: 1s;">
                <p class="login__info-text">
                    With an account you will get acces to information how much you’ve contributed to fighting climate
                    change
                </p>
            </div>
        </div>

        <div class="login__col-2">
            <v-form v-model="valid" class="login__form">
                <div class="login__header-group">
                    <p class="login__form-header">Account</p>
                    <p class="login__form-title">Login to access to more information!</p>
                </div>

                <div class="login__group">

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

                <button type="submit" @keyup.enter="login()" @click.prevent="login()"
                        class="login__submit">
                    <span v-if="send === false">Login</span>
                    <v-progress-circular v-else indeterminate color="white">
                    </v-progress-circular>
                </button>
            </v-form>
        </div>

        <PasswordForgotModal/>
    </div>
</template>

<script>
    const PasswordForgotModal = () => import('@/components/Layout/PasswordForgotModal')

    import axios from 'axios'

    export default {
        name: 'LoginForm',
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
                                this.send = false
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
                                        // this.$router.push('login')
                                        alert('not authenticated')
                                        window.location.href = '/login'
                                    }
                                }else{
                                    let errormessage = {title: 'Oops... Something went wrong!', text: rsponse.data.error}
                                    this.errorMessage(errormessage)
                                }
                            }
                        })
                        .catch(error => {
                            this.errorMessage(message)
                        })
                }

                // this.errorMessage(message)
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
        background: url('../../assets/images/login/loginscreen.png') no-repeat center center;
        background-size: cover;
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

    .login__col-2 {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;

    }

    .login__form {
        padding: 0 0 0 80px;
        max-width: 555px;
        max-height: 458px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 50px;
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
        font-family: 'Poppins', sans-serif;
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

    .login__submit {
        font-family: 'Poppins', sans-serif;
        margin-top: 20px;
        color: white;
        background: linear-gradient(to right, #10DC87, #08BA4D);
        padding: 10px 50px;
        border-radius: 3px;
        top: 0px;
        position: relative;
        transition: 0.2s ease-in-out;
        font-size: 17px;
    }

    .login__submit:hover {
        top: -5px;
        transition: 0.2s ease-in-out;
    }

    .forgot__password {
        cursor: pointer;
        text-decoration: underline;
    }

</style>
