<template>
    <v-dialog v-model="$store.state.modalStatus" max-width="500" class="modal__container">
        <v-card class="modal__wrapper">
            <div class="modal__container">
                <h1 class="modal__title">{{$store.state.modalMessage.title}}</h1>


                <div class="edit__form-group">
                    <div class="edit__form">
                        <label class="edit__form-label">
                            <input type="email" v-model="email" class="edit__form-input"
                                   :placeholder="$store.state.modalMessage.text">
                        </label>
                    </div>
                </div>

                <div class="modal__btn--wrapper">
                    <button class="modal__button button-empty" @click="$store.commit('modalStatus', {status: false})">
                        Back
                    </button>

                    <button class="modal__button" @click="sendMail()">
                        Send
                    </button>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import 'vuetify/dist/vuetify.min.css'

    export default {
        name: "ModalContact",

        data() {
            return {
                email: ''
            }
        },


        methods: {
            sendMail() {
                this.$store.commit('modalStatus', {status: false})
                //Hier komt de mailchimp functie
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

    }

    .modal__container {
        padding: 70px 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .modal__title {
        font-size: 36px;
        color: #08BA4D;
        text-align: left;
        width: 80%;
    }

    .modal__button {
        margin-top: 37px;
        padding: 13px 60px;
        max-width: 166px;
        width: 100%;
        border-radius: 5px;
        background: linear-gradient(to bottom, #10DC87, #08BA4D);
        color: white;
        transition: 0.2s ease-in-out;
    }

    .edit__form-group {
        max-width: unset;
        width: 80%;
    }

    .modal__button:hover {
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
        transition: 0.2s ease-in-out;
    }

    .button-empty {
        background: white;
        color: #2F2F2F;
        border: 1px solid #848484;
    }

    .modal__btn--wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 80%;
    }

</style>