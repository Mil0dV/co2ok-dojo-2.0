<template>
    <v-dialog v-model="$store.state.modalStatus" max-width="290">
        <v-card>
            <v-card-title class="headline">{{$store.state.modalMessage}}</v-card-title>

            <v-card-text>
                *EXTRA TEKST*
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

</style>