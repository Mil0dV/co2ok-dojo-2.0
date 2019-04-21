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
                    <input @click.prevent="updateProfile()" class="form__button" type="submit" value="Update">
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
    import Transition from "vuikit/src/library/modal/transition";

    export default {
        name: "EditProfile",
        components: {Transition},
        props: {
            editStatus: Boolean
        },

        data() {
            return {

                email: this.$store.state.userData.userdata.email,
                password: '',
                passwordExtra: '',
                country: this.$store.state.userData.userProfileData.country,
                city: this.$store.state.userData.userProfileData.city,
                zipcode: this.$store.state.userData.userProfileData.zipcode,
                street: this.$store.state.userData.userProfileData.street,
                number: this.$store.state.userData.userProfileData.number,
                send: null,
                formError: false,
                edit: false,
            }
        },

        methods: {
            updateProfile() { //Checkt of de velden leeg zijn en of de ww hetzelfde is
                if (this.email !== '' && this.password !== '' && this.country !== ''
                    && this.city !== '' && this.zipcode !== '' && this.street !== '' && this.number !== ''
                    ) {

                    let modal = {message : 'Your changes had been saved', status: true}
                    this.$store.commit('modalStatus', modal)

                    //TODO Comment dit uit als je aan de koppeling werkt en wijzig het url naar de juiste url
                    //TODO: De bedoeling van deze component is dat de data gewijzigd wordt. Dus de data moet je wizjigen
                    this.$axios
                        .post('http://127.0.0.1:8000/accounts/updateAccount/', {
                            body: {
                               id: this.$store.state.userId,
                               email: this.email,
                               password: this.password,
                               country: this.country,
                               city: this.city,
                               zipcode: this.zipcode,
                               street: this.street,
                               number: this.number
                            },

                            header: {"X-CSRFToken": `token ${this.$store.state.userToken}`,}
                        })
                        .then(response => {
                            if (response) {
                               this.$parent.dialogSuccess = true
                               console.log(response);

                            }
                        })
                        .catch(error => {
                           this.$parent.dialogError = true
                        })
                } else {
                    let modal = {message : 'Something went wrong...', status: true}
                    this.$store.commit('modalStatus', modal)
                }
            },

            deleteAccount(){
                alert();
                let modal = {message : 'Your account has been deleted successfully', status: true}
                this.$store.commit('modalStatus', modal)
                this.$axios
                   .post('http://127.0.0.1:8000/accounts/deleteAccount/', {
                       body: {
                          id: this.$store.state.userId,
                          password: this.password
                       },

                       header: {"X-CSRFToken": `token ${this.$store.state.userToken}`,}
                   })
                   .then(response => {
                       if (response) {
                          this.$parent.dialogSuccess = true
                          console.log(response);

                       }
                   })
                   .catch(error => {
                      this.$parent.dialogError = true
                   })
            }
        }

    }
</script>

<style scoped>
    .modal__wrapper {
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
        max-width: 882px;
        width: 100%;
    }

    form {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 51px 46px;

    }

    .edit__title {
        font-size: 36px;
        text-align: left;
        color: #08BA4D;
    }

    .edit__form-group {
        display: flex;
        max-width: 774px;
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .edit__form {
        max-width: 362px;
        width: 100%;
    }

    .edit__form:first-child {
        margin-right: 27px;
    }

    .edit__form-title {
        color: black;
        font-size: 24px;
        text-align: left;
        margin-bottom: 24px;
    }

    .edit__form-label {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        color: #2F2F2F;
        font-size: 14px;
        margin-bottom: 24px;
    }

    .edit__form-input {
        border: 1px solid #BCBCBC;
        border-radius: 4px;
        padding: 14px 16px;
        max-width: 363px;
        width: 100%;
        color: #999999;
    }

    .label__group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .label__group .edit__form-input {
        width: 100%;
    }

    .edit__form-small {
        max-width: 144px;
        width: 100%;
    }

    .form__button-wrapper {
        margin-top: 30px;
        width: 96%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .form__button {
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        padding: 14px 40px;
        font-size: 17px;
        color: #838383;
        transition: 0.2s ease-in-out;
    }

    .form__button:hover {
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
        transition: 0.2s ease-in-out;
    }

    .button__back {
        border: 2px solid #9F9F9F;
    }

    .button__save {
        max-width: 210px;
        width: 100%;
        border-radius: 5px;
        background: linear-gradient(to bottom, #10DC87, #08BA4D);
        color: white;
    }


</style>
