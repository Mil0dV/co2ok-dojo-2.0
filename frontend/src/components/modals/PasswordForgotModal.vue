<template>
    <v-dialog v-model="$parent.passReset" max-width="618" class="modal__container">
        <v-card class="modal__wrapper">
            <form>
                <div class="edit__title">
                    <h2 class="main-title--green">Forgot password?</h2>
                </div>

                <v-card-text class="modal__body">
                    Please type in your email, so that we can send you a magic link for creating a new password!
                </v-card-text>

                <div class="edit__form-group">
                    <div class="edit__form">
                        <label class="edit__form-label">
                            <input type="mail" v-model="email" class="edit__form-input"
                                   placeholder="Your email...">
                        </label>
                    </div>
                </div>

                <div class="form__button-wrapper">
                    <button class="form__button button__back"
                            @click.prevent="[!formActive ? $parent.closeEdit() :  '']">Cancel
                    </button>

                    <button class="form__button button__save" @click.prevent="passwordRecoveryEmail()">
                        <span v-if="formActive">
                            <v-progress-circular indeterminate color="white"></v-progress-circular>
                        </span>

                        <span v-else>
                            Send
                        </span>
                    </button>
                </div>
            </form>

        </v-card>
    </v-dialog>
</template>

<script>
    import 'vuetify/dist/vuetify.min.css'

    export default {
        name: "PasswordForgotModal",

        data() {
            return {
                email: '',
                formActive: false,
            }
        },

        methods: {
            passwordRecoveryEmail() { //Checkt of de velden leeg zijn en of de ww hetzelfde is
                this.formActive = true
                let self = this
                let result = 'ninja@pass.'
                let generatedPass = result += Math.random().toString(36).substring(2, 7)
                let message = {title: 'Oops... Something went wrong!', text: 'Fill in the email field and Try again later.'}

                if (this.email !== '') {

                    this.$axios
                        .post(`${this.$store.state.SITE_HOST}/password_recover_mail/`, {
                            body: {
                                temporaryPassword: generatedPass,
                                email: self.email
                            }
                        })
                        .then(response => {
                            console.log(response.data)
                            if (response.data.send) {
                                let successmessage = {
                                    title: 'A mail has been sent to your email-adres!',
                                    text: 'Follow the instructions in your mail.'
                                }
                                this.$parent.closeEdit(successmessage)
                            }else{
                                 let errormessage = {
                                    title: 'Oops... Something went wrong!',
                                    text: `${response.data.error}, Try again later.`
                                }
                                this.$parent.closeEdit(errormessage)
                            }
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }else{
                    this.$parent.closeEdit(message)
                }
                this.formActive = false
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/layout/main.scss';

    .modal__wrapper {
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
        max-width: 618px;
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
        width: 100%;
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
        max-width: 496px;
        width: 100%;
    }
    .modal__body {
        font-size: 18px;
        color: #171717;
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
        width: 100%;
        color: #999999;
    }


    .label__group .edit__form-input {
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


    .form__small-text {
        font-size: 10px;
        color: #BCBCBC;
    }

</style>