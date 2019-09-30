<template>
    <div class="welcome-container">
        
        <div class="welcome-header mb-4">
            <h3 class="animated fadeInUp mb-3 white--text" style="animation-delay: 0.5s;animation-duration:1s;"><span class="font-weight-bold">You can help fight climate change! </span> <span>Help us reach anyone who shops online!</span></h3>
            <div cklass="social-btn">
                <a href="https://www.facebook.com/sharer?u=https%3A%2F%2Fco2ok.eco/ninja%2F" target="_blank"><v-btn depressed class="white--text facebook-btn text-uppercase animated bounceIn" style=" background-color: #3B5998;animation-delay: 0.7s;animation-duration:1s;">share on facebook</v-btn></a>
                <a href="https://twitter.com/intent/tweet?text=Install%20a%20browser%20extension%20and%20when%20you%20purchase%20stuff%20online%2C%20you%20help%20fight%20against%20climate%20change!%20Check%20out%3A%20https%3A%2F%2Fco2ok.eco/ninja%2F" target="_blank"><v-btn depressed class="white--text twitter-btn text-uppercase animated bounceIn" style=" background: #1DA1F2;animation-delay: 0.8s;animation-duration:1s;">share on twitter</v-btn></a>
            </div>
        </div>

        <div class="welcome-core">
            <h2 class="animated fadeInUp" style="animation-delay: 0.8s;animation-duration:1s;">How it works:</h2>

            <v-layout row wrap justify-center align-center class="welcome-layout">
                <v-flex xs12 sm6 md6 lg6 xlg6 class="welcome-flex-img">
                    <div class="add-to-chrome animated fadeInLeft" style="animation-delay: 0.9s;animation-duration:1s;"></div>
                </v-flex>

                <v-flex xs12 sm6 md6 lg6 xlg6 class="welcome-flex-txt">
                    <h3 class="animated fadeInUp" style="animation-delay: 0.9s;animation-duration:1s;">1. YOU INSTALL THE EXTENSION</h3>
                    <p class="animated fadeInUp" style="animation-delay: 1s;animation-duration:1s;">It doesn’t get easier! Just click the button below and then click “add to chrome”. Want to know more? Go to <router-link :to="faq" style="color: #17BE58;">FAQ</router-link></p>
                    <a :href="this.$store.state.ninjaExtensionLink" :target="this.$store.state.extensionLinkTarget" class="btn-link animated zoomIn" style="color: #17BE58;"><v-btn depressed class="text-capitalize white--text" style="font-size: 16px;"><img style="width: 20px;height:20px;position:relative;right:10px;" :src="require(`../../assets/images/app/${this.$store.state.browserLogo}`)">Click Here</v-btn></a>
                </v-flex>
            </v-layout>

             <v-layout row justify-center align-center wrap class="welcome-layout">
                 <v-flex xs12 sm6 md6 lg6 xlg6 class="welcome-flex-txt">
                    <h3 class="" data-aos="fade-up" data-aos-duration="1000" >2. WHEN YOU VISIT ONE OF OUR PARTNER’S STORES, YOU CAN START RAISING MONEY</h3>
                    <p class="" data-aos="fade-up" data-aos-duration="1000" >At the top of our partners’ online shops you will see a button giving you an opportunity to start raising money for the benefit of the environment from your purchases in that shop. Want to know more? Go to: <router-link :to="faq" style="color: #17BE58;">FAQ</router-link></p>
                </v-flex>

                <v-flex xs12 sm6 md6 lg6 xlg6 class="welcome-flex-img">
                    <div class="extension"  data-aos="fade-left" data-aos-duration="1000" style=""></div>
                </v-flex>
            </v-layout>

             <v-layout row justify-center align-center wrap class="welcome-layout">
                <v-flex xs12 sm6 md6 lg6 xlg6 class="welcome-flex-img">
                    <div class="confirm" data-aos="fade-right" data-aos-duration="1000"  style=""></div>
                </v-flex>

                <v-flex xs12 sm6 md6 lg6 xlg6 class="welcome-flex-txt">
                    <h3 class="" data-aos="fade-up" data-aos-duration="1000" >3. YOU BUY SOMETHING APPEALING, WE FINANCE THE CERTIFIED PARTNERS IN FIGHTING CLIMATE CHANGE</h3>
                    <p class="" data-aos="fade-up" data-aos-duration="1000" >Using CO₂ok Ninja means you only have to press the button which says “Shop CO₂ok” and then you will be redirected back to the store. So when you buy something, CO₂ok receives a commission (usually between 1% and 5%), depending on the store and we finance our certified partners in fighting climate change. We keep a quarter of the commission – not to get rich – but we need it to grow and to make as much impact in the fight against climate change as possible. Want to know more? Go to <router-link :to="faq" style="color: #17BE58;">FAQ</router-link></p>
                </v-flex>
            </v-layout>

             <v-layout row justify-center align-center wrap class="welcome-layout">
                <v-flex xs12 sm6 md6 lg6 xlg6 class="welcome-flex-txt">
                    <h3 class="" data-aos="fade-up" data-aos-duration="1000" >4. CHARITIES FIGHT CLIMATE CHANGE!</h3>
                    <p class="" data-aos="fade-up" data-aos-duration="1000" >The amount the online shop donates is used to finance sustainable energy and CO₂-emission reduction projects (via our certified partners). These projects actively reduce the amount of emitted CO₂, thereby making your purchase climate friendly. In fact, the compensation amount sometimes generates surplus, so in fact your purchase could help reducing CO₂ emissions, beyond the CO₂ emitted during the production and shipping of your products. This way you’re making a real difference benefiting the environment!<br>Read more about our certified partners:</p>
                    <div class="certificate-btn-container">
                        <a target="_blank" href="https://www.atmosfair.de/en" data-aos="zoom-in" data-aos-duration="1000"  class=""><v-btn class="font-weight-bold text-capitalize" depressed>Atmosfair</v-btn></a>
                        <a target="_blank" href="https://www.fairclimatefund.nl/en" data-aos="zoom-in" data-aos-duration="1000"  class=""><v-btn class="font-weight-bold text-capitalize" depressed>Fair Climate Fund</v-btn></a>
                    </div>
                </v-flex>

                <v-flex xs12 sm6 md6 lg6 xlg6 class="welcome-flex-img">
                    <div class="save" data-aos="fade-left" data-aos-duration="1000"  style=""></div>
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
 Vue.use(Vuetify);

export default {
    
name: 'welcome',

data() {
    return {

        browserLogo: '',
        faq: '/faq'

    }
},

created() {
    this.$store.commit('installNinjaButton')
},

methods: {

}

}
</script>

<style scoped>

.welcome-container{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.welcome-header{
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/images/welcome/welcomeheader.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.welcome-core{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
}

.welcome-layout{
    width: 100%;
    padding: 48px;
}

.welcome-layout:nth-child(even){
    padding-left: 0px;
}

.welcome-layout:nth-child(odd){
    padding-right: 0px;
}

.welcome-flex-img div{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 80%;
    height: 300px;
    border-radius: 5px;
    border: 1px solid #EEEEEE;
}

.add-to-chrome{
    background-image: url('../../assets/images/welcome/add_to_chrome.png');
}

.extension{
    background-image: url('../../assets/images/welcome/Screen_extension.png');
}

.confirm {
    background-image: url('../../assets/images/welcome/confirm_and_pay.png');
}

.save{
    background-image: url('../../assets/images/welcome/Save80cookingstove.png');
}

.welcome-flex-img{
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid blue; */
}

.welcome-flex-txt{
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.welcome-flex-txt h3{
    text-align: left;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 7px;
}

.welcome-flex-txt p{
    text-align: left;
    font-size: 16px;
    margin-bottom: 10px;
}

.certificate-btn-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
}

.btn-link{
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.certificate-btn-container .v-btn, .btn-link .v-btn{
    position:relative;
    right: 12px;
    background: linear-gradient(to bottom, #10dc87 0%, #08ba4d 100%);
    height: 50px;
    width: 160px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
}

.facebook-btn, .twitter-btn{
    height: 50px;
    width: 180px;
    border-radius: 5px;
    cursor: pointer;
}

@media only screen and (max-width: 500px) {

   .welcome-flex-txt{
       justify-content: center;
       align-items: center;
   } 

   .welcome-layout{
    padding: 20px;
  }

  .welcome-header h3{
      width: 90%;
  }

  .welcome-layout:nth-child(even){
    padding-left: 20px;
    flex-direction: column-reverse;
  }

  .welcome-layout:nth-child(odd){
      padding-right:20px;
  }

  .welcome-layout .welcome-flex-img{
      margin-bottom: 30px;
      margin-top: 15px;
  }

  .welcome-flex-img{
      width: 100%;
  }

  .welcome-flex-img div{
      width: 100%;
  }

  .welcome-flex-txt h3{
      text-align: center;
  }

  .welcome-flex-txt p{
      text-align: justify;
  }

  .btn-link{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

  }
</style>
