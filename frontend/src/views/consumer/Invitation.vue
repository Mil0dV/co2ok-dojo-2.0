<template>

<div class="invitation-container">

    <div class="invitation-header">
        <h3 class="font-weight-bold animated fadeInUp">You've been invited by an anonymous Ninja!</h3>
        <p class="white--text animated fadeInUp">Become a CO₂ok Ninja with our Ninja App. You shop and the store pays a CO₂ compensation at no extra cost for you. Fighting climate change was never this easy.</p>
        <span class="caption white--text animated fadeInUp">(We're going to make this a little less impersonal in the future)</span>
        <h1 class="white--text display-3 font-weight-bold animated fadeInUp">Sign up</h1>
    </div>

    <v-layout column class="steps-layout">
        <v-flex xs12 sm4 md4 lg4 xsl4 v-for="(ninjaExtensionStep,i) in ninjaExtensionSteps" :key="i" class="steps-container pa-3">
                <img :src="ninjaExtensionStep.img" alt="" class="mb-2" data-aos="zoom-in" :data-aos-delay="i*50" data-aos-duration="1000">
                <!-- <div :style="{backgroundImage: `url(${ninjaExtensionStep.img})`}" class="mb-4 steps-img" data-aos="zoom-in" :data-aos-delay="i*50" data-aos-duration="1000"></div> -->
                <p class="font-weight-bold mb-1" style="font-size:21px; color: #10DC87;margin: 0px;"
                   data-aos="fade-up" :data-aos-delay="i*100" data-aos-duration="1000">Step{{i+1}}</p>
                <p class="font-weight-bold" style="color: #28123E;font-size:15px;margin: 0px;" data-aos="fade-up"
                   :data-aos-delay="i*100" data-aos-duration="1000">{{ninjaExtensionStep.title}}</p>
                <!-- <p class="steps-content pa-2" style="color: #28123E;text-align: center;" data-aos="fade-up"
                   :data-aos-delay="i*100" data-aos-duration="1000">{{ninjaExtensionStep.content}}</p> -->
        </v-flex>
    </v-layout>

    <v-layout column justify-center align-center class="pt-5 pb-5 mb-5 signup-layout" style="">
        <v-flex xs12 sm12 md8 lg6 xlg6 class="input-fields-flex pt-4 pb-3">
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="">E-mail</p>
            <input type="email" v-model="email" placeholder="Fill your e-mail" class="pt-4 pb-4 mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="">Password</p>
            <input type="password" v-model="password" placeholder="Fill your password" class="pt-4 pb-4 mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        </v-flex>

        <v-flex xs12 sm12 md8 lg6 xlg6 class="submit-flex">
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                We won't share your email adress or other <br>
                user data, read here about our <router-link to="/privacy" class="privacy">Privacy Policy</router-link>
            </p>
            <v-btn depressed class="submit-btn text-capitalize" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" @click="register()">Make an account</v-btn>
        </v-flex>
    </v-layout>

</div>
    
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
 Vue.use(Vuetify);
export default {
    
name: 'invitation',

data() {
    return{

        inviterId: this.$route.params.id,
        ninjaExtensionSteps: [
            {
                img: require('../../assets/images/home/ninjaDesign_Register_2.png'),
                title: 'BECOME A CO₂ok NINJA',
                content: 'Simply register with us and install the app. The app is safe, open source, and respects your privacy'
            },
            {
                img: require('../../assets/images/home/ninjaDesign_Trolly.png'),
                title: 'SHOP',
                content: 'Start shopping in your Ninja suit. After paying we will receive a commission from the shop.'
            },
            {
                img: require('../../assets/images/home/ninjaDesign_Hadouken.png'),
                title: 'FIGHT CLIMATE CHANGE',
                content: 'With this commission we finance projects that directly reduce greenhouse gas emissions. In effect this makes your purchase climate neutral. Thank you 💚.'
            }
        ],
        emauil: '',
        password: ''
    }
},

created() {
    this.$store.commit('generateUserName')
    this.checkId()
},

methods: {

    // check if inviter id exist in the db
    checkId(){

        let self = this
        this.$axios.post(`${this.$store.state.SITE_HOST}/check_inviter_id/`,{
            body: {
                id : self.inviterId
            }
        }).then(response => {
            console.log(response.data);
            if(!response.data.exist){
                self.$router.push('/')
            }
        }).catch(error => {
            console.log(error);
        })

    },

    register(){

        let self = this
        if(this.email != '' && this.password != ''){

            this.$axios.post(`${self.$store.state.SITE_HOST}/invitation_signup/`,{
                body: {
                    email: self.email,
                    password: self.password,
                    inviterId: self.inviterId,
                    username: self.$store.state.generatedNinjaName
                },
            }).then(response => {

                if(response.data.authenticate){

                    this.$store.dispatch('commitSaveUser', response.data)
                    this.$store.commit('setLocalUserData', response.data)
                    this.$store.commit('isLoggedIn', response.data.authenticate)
                    this.$store.dispatch('commitNinjaUserData')
                    self.$router.push('/consumers/profile')

                }else{
                    console.log(response.data.error);

                }
                console.log(response.data);

            }).catch(error => {
                console.log(error);
            })

        }else{
            console.log('fill email and password');

        }

    }

}

}
</script>

<style scoped>

    .invitation-container{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .invitation-header{
        width: 100%;
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url('../../assets/images/invitation/invite.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .invitation-header h3{
        color: #2FC569;
        text-align: center;
        width: 80%;
    }

    .invitation-header p, .invitation-header span{
        width: 80%;
        text-align: center;
    }

    .invitation-header p{
        font-size: 16px;
    }

    .invitation-header h1{
        /* color: #2FC569; */
    }

   .steps-layout {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 48px;
    }

    .steps-container{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 30%;
    }

    .steps-container img{
        /* width: 200px; */
        height: 150px;
        /* background-size: contain;
        background-position: center;
        background-repeat: no-repeat; */
    }

    .steps-container p{
        width: 100%;
    }

    .steps-content {
        font-size: 16px;
        margin-top: 5px;
    }

    .signup-layout{
        width: 80%;
        /* box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.30); */
        box-shadow: 0 5px 15px rgba(0,0,0,.08);
        border-radius: 5px;
        /* background-color: #F5FCFF; */
        margin-top: 48px;
    }

    .input-fields-flex{
        width: 70%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: auto;
    }

    .input-fields-flex input{
        width: 98%;
        height: 20px;
        border: 1px solid #BCBCBC;
        border-radius: 3px;
        padding-left: 2%;
    }

    .input-fields-flex p{
        margin: 0px;
        margin-bottom: 5px;
        padding: 0px;
    }

    .submit-flex{
        width: 70%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin: auto;
    }

    .submit-flex p{
        text-align: left;
    }

    .submit-flex .privacy{
        text-decoration: none;
        color: #10dc87;
    }

    .submit-btn{
        background: linear-gradient(to bottom, #10dc87 0%, #08ba4d 100%);
        color: white;
        /* padding: 12px 25px; */
        height: 50px;
        width: 160px;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
        right: 7px;
    }

    @media only screen and (max-width: 500px) {
        .invitation-header h3{
            font-size: 20px;
        }

        .invitation-header p, .invitation-header span{
            font-size: 14px;
            width: 90%;
        }

        .steps-layout{
            /* flex-direction: column; */
            justify-content: center;
            align-items: center;
        }

        .steps-container{
            /* width: 90%; */
            justify-content: center;
            margin-bottom: 20px;
        }

        .signup-layout{
          margin-top: 18px;
          width: 100%;
        }

        .input-fields-flex, .submit-flex{
            width: 92%;
            padding: 0px;
        }

        .submit-flex{
            flex-direction: column-reverse;
        }

        .submit-flex p{
            font-size: 14px;
            margin-top: 10px;
            width: 95%;
        }
    }

    @media only screen and (max-width: 800px) {
        .steps-container{
            /* width: 29%; */
        }

        .input-fields-flex, .submit-flex{
            width: 92%;
        }
    }

</style>
  