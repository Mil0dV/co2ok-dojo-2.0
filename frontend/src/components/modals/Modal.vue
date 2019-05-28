<template>
    <v-dialog v-model="$store.state.modalStatus" max-width="500" class="modal__container">
        <v-card class="modal__wrapper">
            <div class="modal__container">
                <h1 class="modal__title">{{$store.state.modalMessage.title}}</h1>

                <v-card-text class="modal__body">
                    {{$store.state.modalMessage.text}}
                </v-card-text>


                <button class="modal__button" @click="$store.commit('modalStatus', {status: false})">
                    Back
                </button>

            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import 'vuetify/dist/vuetify.min.css'

    export default {
        name: "Modal",
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
        color: #08BA4D;
        width: 100%;
        max-width: 360px !important;
    }

    .modal__body {
        font-size: 18px;
        color: #171717;
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

    .modal__button:hover {
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
        transition: 0.2s ease-in-out;
    }

</style>