<template>
    <v-dialog v-model="dialog" max-width="290">
        <v-card>
            <v-card-title class="headline">{{message}}</v-card-title>

            <v-card-text>
                BlaBLa blabla bla...bla.a
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat="flat" @click="$parent.dialogSuccess = false">
                    OK
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "SuccessMessage",
        props:{
            dialog: Boolean,
            message: String
        }
    }
</script>

<style scoped>

</style>