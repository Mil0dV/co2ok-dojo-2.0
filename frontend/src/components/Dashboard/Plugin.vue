<template>
    <div>
        <div class="form__group">
            <v-radio-group v-model="radioGroup">
                <v-radio label="Design 1" :value="1"></v-radio>
                <v-radio label="Design 2" :value="2"></v-radio>
            </v-radio-group>
        </div>

        <div class="form__group">
            <input @click.prevent="saveDesign()" class="form__button" type="submit" value="Opslaan">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Plugin",

        data() {
            return {
                radioGroup: 1,
            }
        },

        methods: {
            saveDesign() {
                // this.$axios
                //     .post('https://shaif.nl/lego-toyfinder/mail/index.php', {
                //         design: this.radioGroup,
                //     })
                //     .then(response => {
                //         if (response) {
                //            this.send = true
                //            this.$router.push('dashboard')
                //         }
                //     })
                //     .catch(error => {
                //        this.send = false
                //     })
            }
        }
    }
</script>

<style scoped>
    .form__group {
        width: 400px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .form__button {
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        background: #2BC65C;
        border: 1px solid #2BC65C;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        position: relative;
        top: 0px;
    }
</style>