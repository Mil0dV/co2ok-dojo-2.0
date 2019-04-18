<template>
    <v-dialog v-model="$store.state.modalStatus" max-width="500" class="modal__container">
        <v-card class="modal__wrapper">
            <v-card-title class="headline">{{$store.state.modalMessage.message}}</v-card-title>

            <v-card-text class="modal__body" v-if="$store.state.modalMessage.body">
                {{$store.state.modalMessage.body}}
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="green darken-1" flat="flat"
                       @click="$store.commit('modalStatus', {status: false})">
                    OK
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Modal",
    }
</script>

<style scoped>
    .modal__wrapper{
        border: 2px solid green;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .headline {
        border: 1px solid red;
        margin: 0;
        padding: 0;
        width: 100%;
        font-size: 21px;
    }

    .modal__body {

    }

</style>