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
                        <p @click="openModal()"
                           class="login__form-header forgot__password">
                            I forgot my password
                        </p>
                    </div>
                </div>

                <button type="submit" @click.prevent="sendForm()"
                        class="login__submit">

                    <span v-if="send === false">Login</span>
                    <v-progress-circular v-else indeterminate color="white">
                    </v-progress-circular>
                </button>
            </v-form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'LoginForm',
        props: {
            msg: String
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
                ]
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

            openModal() {
                let modal = {
                    message: 'Forgot your password? It happens.',
                    body: 'Fill in your email so that we can send you a link where you can login again.',
                    input: true,
                    status: true
                }
                this.$store.commit('modalStatus', modal)
            },

            sendForm() {
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
        background: url('../../assets/images/login/loginscreen.png') no-repeat;
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
        margin-top: 30px;
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
    }

</style>
