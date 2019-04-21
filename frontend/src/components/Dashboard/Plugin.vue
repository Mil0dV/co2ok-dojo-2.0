<template>
    <div class="plugin__container">
        <div class="plugin__head">
            <h1 class="plugin__title">Plug-in Settings</h1>
            <img src="../../assets/images/dashboard/edit.svg">
        </div>
        <p class="plugin__header">
            Choose the design you want being displayed on your webshop:
        </p>


        <v-radio-group class="plugin__col-1" v-model="radioGroup" row>
            <div class="plugin__design design-1">
                <p class="design-title">Select Design</p>
                <v-radio label="Option 1" color="#10DC87" value="radio-1"></v-radio>

            </div>

            <div class="plugin__design design-2">
                <p class="design-title">Select Design</p>
                <v-radio label="Option 2" color="#10DC87" value="radio-2"></v-radio>
            </div>
        </v-radio-group>


        <div class="plugin__col-2">
            <div class="col-2__content">
                <p class="col-2__text">
                    Would you like to show GIF’s to the customer, when completing a transactions?
                </p>

                <div class="col-2__switch">
                    <p class="col-2__switch-text switch__text-1">Show GIF's</p>
                    <v-switch class="switch__option" color="#10DC87"
                              v-model="switchGIF"
                    ></v-switch>
                    <p class="col-2__switch-text switch__text-2">{{switchGIF}}</p>
                </div>

            </div>
        </div>

        <div class="plugin__col-2">
            <div class="col-2__content">
                <p class="col-2__text">
                    Do you give CO2ok permission to send the customer an email?
                </p>

                <div class="col-2__switch">
                    <p class="col-2__switch-text switch__text-1">Send Email</p>
                    <v-switch class="switch__option" color="#10DC87"
                              v-model="switchEmail"
                    ></v-switch>
                    <p class="col-2__switch-text switch__text-2">{{switchEmail}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Plugin",

        data() {
            return {
                radioGroup: null,
                switchEmail: false,
                switchGIF: false,
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
    .plugin__container {
        min-width: 1146px;
        width: 100%;
        display: flex;
        background: #FFFFFF;
        flex-direction: column;
        justify-content: flex-start;
        padding: 50px 100px;
    }

    .plugin__head {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .plugin__title {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 36px;
        text-align: left;
        color: #10DC87;
        margin-right: 12px;
    }

    .plugin__header {
        color: #111111;
        font-size: 20px;
        max-width: 460px;
        width: 100%;
        text-align: left;
    }

    .plugin__col-1 {
        margin-top: 30px;
        max-height: 132px;
        height: 100%;
        border-bottom: 1px solid #E2E2E2;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }


    .plugin__design {
        border: 1px solid red;
        max-width: 410px;
        width: 100%;
    }

    .design-title {
        text-align: left;
        font-size: 10px;

    }

    .v-input--radio-group__input{
        width: 100%;
        border: 5px solid red;
        max-width: 410px !important;
    }

    v-input--radio-group--row .v-input--radio-group__input {
        justify-content: space-between;
    }

    .v-input--selection-controls .v-input__control {
        width: 100% !important;
    }


    .plugin__col-2 {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 30px 0;
        border-bottom: 1px solid #E2E2E2;
    }

    .col-2__content {
        max-width: 460px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .col-2__text {
        text-align: left;
        color: #111111;
        font-size: 20px;
        max-width: 460px;
        width: 100%;
    }

    .col-2__switch {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .col-2__switch-text {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 800;
        color: #111111;
        margin: 0;
        padding: 0;
    }

    .switch__text-1 {
        margin-right: 24px;
    }

    .switch__text-2 {
        margin-left: 24px;
    }


</style>