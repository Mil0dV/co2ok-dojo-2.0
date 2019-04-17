<template>
    <div class="hello form-container">
        <form>

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
<<<<<<< HEAD:frontend/src/components/Form/LoginForm.vue
=======
    import axios from 'axios'
    import $ from "jquery";
>>>>>>> login configuration with vue done:frontend/src/components/Form.vue

    export default {
        name: 'Form',
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
        created (){
        },

        methods: {

            sendForm() {
<<<<<<< HEAD:frontend/src/components/Form/LoginForm.vue
                if (this.email !== '' || this.password !== '') {

                    this.$router.push('dashboard')

                    //TODO Comment dit uit als je aan de koppeling werkt en wijzig het url naar de juiste url
                    // this.$axios
                    //     .post('https://shaif.nl/lego-toyfinder/mail/index.php', {
                    //         email: this.email,
                    //         password: this.password,
                    //     })
                    //     .then(response => {
                    //         if (response) {
                    //            this.send = true
                    //            this.$router.push('dashboard')
                    //         }
                    //     })
                    //     .catch(error => {
                    //        this.send = false
                    //     })
=======
                if (this.email !== '' && this.password !== '') {

                    let self = this;

                    // TODO Comment dit uit als je aan de koppeling werkt en wijzig het url naar de juiste url
                    axios
                        .post('http://127.0.0.1:8000/login/', {
                            body: {
                                email: this.email,
                                password: this.password,
                                sort: 'webshop',
                            },
                            header: { "X-CSRFToken" : 'gZvnzSFeGp7h68WjCzmFky6wMkiJZXDU', }
                           
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
                           console.log('error')
                        })

                }else{
                    alert('vul een email en wachtwoord in');
>>>>>>> login configuration with vue done:frontend/src/components/Form.vue
                }
                else {
                    let modal = {message : 'Something went wrong...', status: true}
                    this.$store.commit('modalStatus', modal)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
        position: relative;
        top: 0px;
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
