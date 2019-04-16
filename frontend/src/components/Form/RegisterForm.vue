<template>
    <div class="hello">
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
                <p>Password again:</p>
                <input type="password" v-model="passwordExtra">
            </div>

            <div class="form__group">
                <p>Country:</p>
                <input type="text" v-model="country">
            </div>

            <div class="form__group">
                <p>City:</p>
                <input type="text" v-model="city">
            </div>

            <div class="form__group">
                <p>ZIP Code:</p>
                <input type="text" v-model="zipcode">
            </div>

            <div class="form__group">
                <p>Street:</p>
                <input type="text" v-model="street">
            </div>

            <div class="form__group">
                <p>Number:</p>
                <input type="text" v-model="number">
            </div>
            <br>

            <div class="form__group">
                <input @click.prevent="sendForm()" class="form__button" type="submit" value="Register">
            </div>

            <br>
            <div class="form__group form__login__error">
                <p v-if="formError"
                   class="animated bounceIn">
                    Er is iets misgegaan. Probeer het opnieuw 👎
                </p>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "RegisterForm",

        data() {
            return {
                email: '',
                password: '',
                passwordExtra: '',
                country: '',
                city: '',
                zipcode: '',
                street: '',
                number: '',
                send: null,
                formError: false,
            }
        },

        methods: {
            sendForm() { //Checkt of de velden leeg zijn en of de ww hetzelfde is
                if (this.email !== '' && this.password !== '' && this.passwordExtra !== '' && this.country !== ''
                    && this.city !== '' && this.zipcode !== '' && this.street !== '' && this.number !== ''
                    && this.password === this.passwordExtra) {

                    this.$router.push('login')

                    //TODO Comment dit uit als je aan de koppeling werkt en wijzig het url naar de juiste url
                    // this.$axios
                    //     .post('https://shaif.nl/lego-toyfinder/mail/index.php', {
                    //         email: this.email,
                    //         favorites: this.password,
                    //     })
                    //     .then(response => {
                    //         if (response) {
                    //            this.send = true
                    //            this.$router.push('dashboard')
                    //         }
                    //     })
                    //     .catch(error => {
                    //        this.formError = true
                    //     })
                } else {
                    this.formError = true
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

    .form__login__error {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
