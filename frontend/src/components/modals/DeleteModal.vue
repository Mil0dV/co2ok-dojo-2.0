<template>
    <v-dialog v-model="$parent.deleteAccount" max-width="500" class="modal__container">
        <v-card class="modal__wrapper">
            <div class="modal__container">
                <p class="modal__title">Delete Account</p>

                <v-card-text class="modal__body">
                    Are you absolutely sure you want to delete your Account?
                </v-card-text>

                <span class="form__small-text">You can always create a new account.</span>


                <div class="form__buttons">
                    <button class="form__button button__back" @click.prevent="deleteAccount()">
                        <span v-if="formActive">
                            <v-progress-circular indeterminate color="white"></v-progress-circular>
                        </span>

                        <span v-else>
                            Yes, delete
                        </span>
                    </button>

                    <button class="form__button button__delete"
                            @click.prevent="[!formActive ? $parent.closeEdit() :  '']">
                        No! Back...
                    </button>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Modal",

        data() {
            return  {
                formActive: false,
            }
        },

        methods: {
         
            deleteAccount() {
                let modal = {message: 'Your account has been deleted successfully', status: true}
                this.$store.commit('modalStatus', modal)
                this.$axios
                    .post('http://127.0.0.1:8000/accounts/deleteAccount/', {
                        body: {
                            id: this.$store.state.userId
                            // password: this.password
                        },

                        header: {"X-CSRFToken": `token ${this.$store.state.userToken}`,}
                    })
                    .then(response => {
                        if (response.data.delete) {
                            this.$store.dispatch('commitRemoveLocalUserData')
                            this.$router.push('login')
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
        max-height: 360px;
        width: 100%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 70px 48px;

    }

    .modal__container {
        max-width: 360px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .modal__title {
        font-size: 36px;
        font-weight: 700;
        color: #08BA4D;
        width: 100%;
        max-width: 360px !important;
    }

    .modal__body {
        font-size: 18px;
        color: #171717;
        max-width: 362px;
        width: 100%;
    }


    .button__delete:hover {
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
        transition: 0.2s ease-in-out;
    }

    .form__small-text {
        font-size: 18px;
        color: #999999;
        max-width: 362px;
        width: 100%;
    }

    .form__buttons {
        margin-top: 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .form__button {
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        padding: 14px 38px;
        font-size: 17px;
        color: #838383;
        transition: 0.2s ease-in-out;
        max-width: 166px;
        width: 100%;
    }

    .button__delete{
        transition: 0.3s ease-in-out;
        border-radius: 5px;
        background: linear-gradient(to bottom, #10DC87, #08BA4D);
        color: white;
    }

    .button__back {
        font-size: 16px;
        border: 2px solid #9F9F9F;
    }

    @media (max-width: 600px) {
        .modal__wrapper {
            padding: 50px 40px;
        }

        .modal__title {
            font-size: 30px;
        }

        .modal__body {
            font-size: 14px;
        }

        .form__small-text {
            font-size: 12px;
        }

        .form__button {
            padding: 14px 20px;
            font-size: 14px;
            width: 40%;
        }
    }


</style>