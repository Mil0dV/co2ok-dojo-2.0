<template>
    <v-dialog v-model="editStatus" max-width="500" class="modal__container">
        <v-card class="modal__wrapper">
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
                    <p>Number: </p>
                    <input type="text" v-model="number">
                </div>
                <br>

                <div class="form__group">
                    <input @click.prevent="sendForm()" class="form__button" type="submit" value="Update">
                </div>
                <br>
                <div class="form__group">
                    <input @click.prevent="deleteAccount()" class="form__button" type="submit" value="Delete Account">
                </div>
                <br>
            </form>


            <v-card-actions>
                <v-btn color="green darken-1" flat="flat"
                       @click="$parent.edit = false">
                    OK
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "EditProfile",

        props: {
          editStatus: Boolean
        },

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
                edit: false,
            }
        },

        methods: {
            // sendForm() { //Checkt of de velden leeg zijn en of de ww hetzelfde is
            //     if (this.email !== '' && this.password !== '' && this.passwordExtra !== '' && this.country !== ''
            //         && this.city !== '' && this.zipcode !== '' && this.street !== '' && this.number !== ''
            //         && this.password === this.passwordExtra) {
            //
            //         let modal = {message : 'Your changes had been saved', status: true}
            //         this.$store.commit('modalStatus', modal)
            //
            //         //TODO Comment dit uit als je aan de koppeling werkt en wijzig het url naar de juiste url
            //         //TODO: De bedoeling van deze component is dat de data gewijzigd wordt. Dus de data moet je wizjigen
            //         // this.$axios
            //         //     .post('https://shaif.nl/lego-toyfinder/mail/index.php', {
            //         //         email: this.email,
            //         //         favorites: this.password,
            //         //     })
            //         //     .then(response => {
            //         //         if (response) {
            //         //            this.$parent.dialogSuccess = true
            //         //         }
            //         //     })
            //         //     .catch(error => {
            //         //        this.$parent.dialogError = true
            //         //     })
            //     } else {
            //         let modal = {message : 'Something went wrong...', status: true}
            //         this.$store.commit('modalStatus', modal)
            //     }
            // },
            //
            // deleteAccount(){
            //     let modal = {message : 'Your account has been deleted successfully', status: true}
            //     this.$store.commit('modalStatus', modal)
            // }
        }

    }
</script>

<style scoped>
    .modal__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
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

    .form__group p {
        padding: 10px;
        margin: 0;
    }

    .form__group [type=text], .form__group [type=password] {
        border: 1px solid black;
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


</style>