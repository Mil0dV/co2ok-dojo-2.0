<template>
    <div class="login__container">
        <div class="login__col-1">
            <div class="login__info">
                <p class="login__info-text">
                    With an account you will get acces to information how much you’ve contributed to fighting climate change
                </p>
            </div>
        </div>
        <form class="login__col-2">

            <div class="form__group">
                <p>Email:</p>
                <input type="text" v-model="email">
            </div>

            <div class="form__group">
                <p>Password:</p>
                <input type="password" v-model="password">
            </div>

            <div class="form__group">
                <p class="form__group__forgot">Forgot password?</p>
            </div>
            <br>

            <div class="form__group">
                <input @click.prevent="sendForm()" class="form__button" type="submit" value="Login">
            </div>

            <div v-if="send !== null" class="form__group">
                <transition enter-active-class="animated slideInUp"
                            leave-active-class="animated slideOutDown"
                            mode="out-in">
                    <p v-if="send === true">Data gestuurd👍</p>
                    <p v-else>Data niet gestuurd 👎</p>
                </transition>
            </div>
        </form>
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
                email: '',
                password: '',
                send: null,
            }
        },
        created() {
        },

        methods: {

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
                                this.send = true
                                this.$router.push('dashboard')
                                console.log(response);

                            }
                        })
                        .catch(error => {
                            this.send = false
                            let modal = {message: 'Something went wrong...', status: true}
                            this.$store.commit('modalStatus', modal)
                        })
                } else {
                    let modal = {message: 'Something went wrong...', status: true}
                    this.$store.commit('modalStatus', modal)
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
    }

    .login__col-1 {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login__col-2 {
        flex: 1;
    }

    .login__info {
        margin-bottom: -40%;
        background: white;
        border-left: 5px solid #00DE84;
        max-width: 422px;
        box-shadow: 0 0px 30px 0 rgba(0, 0, 0, 0.10);

    }

    .login__info-text {
        max-width: 361px;
        margin: 0;
        padding: 20px 40px;
        text-align: left;
    }

    form {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .form__group {
        width: 400px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .form__button {
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        background: #2BC65C;
        border: 1px solid #2BC65C;
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }

    .form__button:hover {
        top: -5px;
        color: #2BC65C;
        background: white;
        transition: 0.2s ease-in-out;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.10);
    }

    .form__group__forgot {
        color: #2BC65C;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    .form__group__forgot:hover {
        transition: 0.3s ease-in-out;
        color: green;
    }
</style>
