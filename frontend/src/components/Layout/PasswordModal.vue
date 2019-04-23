<template>
    <v-dialog v-model="$parent.editPassword" max-width="618" class="modal__container">
        <v-card class="modal__wrapper">
            <form>
                <div class="edit__title">
                    <p>Change Password</p>
                </div>

                <div class="edit__form-group">
                    <div class="edit__form">

                        <label class="edit__form-label">
                            Old Password
                            <input type="password" v-model="currentPassword" class="edit__form-input" placeholder="John Doe">
                        </label>

                        <label class="edit__form-label">
                            New password
                            <input type="password" v-model="newPassword" class="edit__form-input"
                                   placeholder="Password...">
                            <span class="form__small-text">Must contain at least 1 capital and 1 number or special symbol</span>
                        </label>

                        <label class="edit__form-label">
                            Repeat new password
                            <input type="password" v-model="passwordExtra" class="edit__form-input"
                                   placeholder="Password...">
                        </label>
                    </div>


                </div>

                <div class="form__button-wrapper">
                    <button class="form__button button__back"
                            @click.prevent="[!formActive ? $parent.closeEdit() :  '']">Cancel
                    </button>

                    <button class="form__button button__save" @click.prevent="sendForm()">
                        <span v-if="formActive">
                            <v-progress-circular indeterminate color="white"></v-progress-circular>
                        </span>

                        <span v-else>
                            Save Changes
                        </span>
                    </button>
                </div>
            </form>

        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "PasswordModal",

        data() {
            return {
                currentPassword: '',
                newPassword: '',
                passwordExtra: '',
                formActive: false,
            }
        },

        methods: {
            sendForm() { //Checkt of de velden leeg zijn en of de ww hetzelfde is
                this.formActive = true
                let message = {title: 'Oops... Something went wrong!', text: 'Fill alle the fields, Try again.'}

                if (this.passwordExtra !== '' && this.newPassword !== '' && this.passwordExtra === this.newPassword) {

                    this.$axios
                        .post('http://127.0.0.1:8000/accounts/updatePassword/', {
                            body: {
                               currentPassword: this.currentPassword,
                               newPassword: this.newPassword,
                               id: this.$store.state.userId
                            }
                        })
                        .then(response => {
                            if (response.data.update) {
                                let successmessage = {
                                    title: 'Edited Profile Successfully!',
                                    text: 'Your password was edited successfully.'
                                }
                                this.$parent.closeEdit(successmessage)
                            }else{
                                let errorMsg = {title: 'Oops... Something went wrong!', text: `${response.data.msg} Try again.`}
                                this.$parent.closeEdit(errorMsg)
                            }
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }else{
                   this.$parent.closeEdit(message)
                }

                // this.$parent.closeEdit(message)
                this.formActive = false
            },


            deleteAccount() {
                let modal = {message: 'Your account has been deleted successfully', status: true}
                this.$store.commit('modalStatus', modal)
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
        font-size: 36px;
        text-align: left;
        color: #08BA4D;
        font-weight: 600;
        margin-bottom: 24px;
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