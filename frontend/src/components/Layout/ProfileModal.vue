<template>
    <v-dialog v-model="$parent.editProfile" max-width="882" class="modal__container">
        <v-card class="modal__wrapper">
            <form>
                <div class="edit__title">
                    <h2>Edit Profile</h2>
                </div>

                <div class="edit__form-group">
                    <div class="edit__form">
                        <h2 class="edit__form-title">Personal Data</h2>

                        <label class="edit__form-label">
                            Full name
                            <input type="text" v-model="name" class="edit__form-input" placeholder="John Doe">
                        </label>

                        <label class="edit__form-label">
                            Email Address
                            <input type="text" v-model="email" class="edit__form-input"
                                   placeholder="example@mail.com">
                        </label>

                        <label class="edit__form-label">
                            Webshop link
                            <input type="text" v-model="link" class="edit__form-input"
                                   placeholder="https://www.john.com">
                        </label>
                    </div>

                    <div class="edit__form">
                        <h2 class="edit__form-title">Address Data</h2>

                        <label class="edit__form-label">
                            Country
                            <input type="text" v-model="country" class="edit__form-input" placeholder="England">
                        </label>

                        <div class="label__group">
                            <label class="edit__form-label">
                                City
                                <input type="text" v-model="city" class="edit__form-input" placeholder="London">
                            </label>

                            <label class="edit__form-label">
                                ZIP-code
                                <input type="text" v-model="zipcode" class="edit__form-input edit__form-small"
                                       placeholder="1000 AA">
                            </label>
                        </div>

                        <div class="label__group">
                            <label class="edit__form-label">
                                Street
                                <input type="text" v-model="street" class="edit__form-input" placeholder="Avenue Road">
                            </label>

                            <label class="edit__form-label">
                                Housenumber
                                <input type="number" v-model="number" class="edit__form-input edit__form-small"
                                       placeholder="10">
                            </label>
                        </div>
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
        name: "ProfileModal",

        data() {
            return {
                name: '',
                email: '',
                password: '',
                passwordExtra: '',
                country: '',
                city: '',
                zipcode: '',
                street: '',
                number: '',
                link: '',
                send: null,
                formActive: false,
                edit: false,
            }
        },

        methods: {
            sendForm() { //Checkt of de velden leeg zijn en of de ww hetzelfde is
                this.formActive = true
                let message = {title: 'Oops... Something went wrong!', text: 'Try again later.'}
                if (this.email !== '' && this.country !== '' && this.city !== '' && this.zipcode !== '' &&
                    this.street !== '' && this.number !== '' && this.name !== '' && this.link !== '') {

                    this.$axios
                        .post('https://shaif.nl/lego-toyfinder/mail/index.php', {
                            name: this.name,
                            email: this.email,
                            country: this.country,
                            city: this.city,
                            zipcode: this.zipcode,
                            street: this.street,
                            number: this.number,
                            link: this.link,
                        })
                        .then(response => {
                            if (response) {
                                message = {
                                    title: 'Edited Profile Successfully!',
                                    text: 'Your profile data was edited successfully.'
                                }
                            }
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }

                this.$parent.closeEdit(message)
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