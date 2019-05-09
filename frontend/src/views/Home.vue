<template>

  <div class="home-container">
      <v-layout flex row wrap justify-space-around align-start class="header-layout pa-5">

          <v-flex xs12 sm12 md12 lg7 xlg6 class="header-txt-flex pa-5">
             <p class="white--text mt-3 animated fadeInUp" style="animation-delay:0.2s;">HI WE'RE CO2ok</p>
             <h1 class="white--text font-weight-bold mb-5 animated fadeInUp" style="animation-delay:0.4s;">Become a Ninja and<br> shop climate neutral!</h1>
             <v-btn depressed color="#28123E" class="white--text mb-2 font-weight-bold animated zoomIn" style='animation-delay:0.6s;margin: 0px; padding:0px; font-size: 15px;width: 230px;height: 45px;border-radius: 9px;'>INSTALL THE EXTENSION</v-btn>
             <span class="caption white--text animated fadeInLeft" style="animation-delay:0.7s;">Activate the extension and you’ll be shopping climate neutral without a cost!</span>
          </v-flex>

          <v-flex xs12 sm12 md12 lg5 xlg6 class="header-img-flex">
            <div class="world-ball animated bounceIn" style="animation-delay: 0.9s;"></div>
          </v-flex>

      </v-layout>

      <div class="ninja-work mt-5 mb-5">
          <p style="font-size: 21px; margin: 0px; color: #10DC87;animation-delay:1s;" class="animated zoomIn">HOW IT WORKS</p>
          <h1 style="font-size: 33px;margin:0px;animation-delay:1.2s;" class="font-weight-bold animated zoomIn pb-2" color="#28123E">FOLLOW THESE 3 SIMPLE STEPS</h1>
          <span style="font-size: 9px;margin:0px;animation-delay:1.3s;" class="caption animated zoomIn" color="#28123E">There are no extra costs for you. The CO₂ compensation is fully covered by the shop.</span>
      </div>

      <v-layout row wrap justify-center align-start class="mt-3">

          <v-flex xs12 sm12 md4 lg4 xlg3 v-for="(ninjaExtensionStep,i) in ninjaExtensionSteps" :key="i" class="steps-container mb-5">
              <img :src="ninjaExtensionStep.img" alt="" class="mb-4" data-aos="zoom-in-up" :data-aos-delay="i*50">
              <p class="font-weight-bold" style="font-size:21px; color: #10DC87;margin: 0px;" data-aos="zoom-in-up" :data-aos-delay="i*100">Step{{i+1}}</p>
              <p class="" style="color: #28123E;font-size:15px;margin: 0px;" data-aos="zoom-in-up" :data-aos-delay="i*100">{{ninjaExtensionStep.title}}</p>   
              <p style="color: #28123E;font-size:16px;text-align: center;" data-aos="zoom-in-up" :data-aos-delay="i*100">{{ninjaExtensionStep.content}}</p>
          </v-flex>

      </v-layout>

      <v-btn data-aos="zoom-in-up" depressed class="white--text" style="border-radius: 5px; width: 100%;height: 65px;background: linear-gradient(to right, #10DC87, #08BA4D);font-size:26px;">GET INVOLVED & FIGHT CLIMATE CHANGE</v-btn>
      <div class="transaction-steps mt-5"></div>
      
      <v-layout column justify-center align-center class="mt-5 mb-3 grey lighten-4" style="width: 100%; background-color: #F4F4F4;">
          <v-flex xs12 sm12 md6 lg6 xlg6 class="webshop-txt-flex">
              <p class="" style="text-align: center; font-size: 21px; color: #10DC87; margin: 0px;position: relative; top:10px;">Choose from 22.000+ webshops</p>
              <h3 class="font-weight-bold" style="text-align: center; font-size: 33px; color: #28123E; margin: 0px;">Together we can make a change</h3>
          </v-flex>

          <v-flex xs12 sm12 md6 lg6 xlg6 class="slider-flex">
              <v-carousel hide-controls style="" height="auto" class="pa-3 grey lighten-4">

                <v-carousel-item v-for="(webshop, i) in webshops" :key="i">
                    <div class="webshops-img-container"><img v-for="(webshopIcon, i) in webshop.icons" 
                      :key="i" :src="webshopIcon.src" 
                      alt="" 
                      style="border: 1px solid red; width: 168px;height:168px;"
                      :style="{animationDelay:'0.2'*i+'s'}"
                      class="animated zoomIn"
                    ></div>
                </v-carousel-item>  

              </v-carousel>
          </v-flex>
      </v-layout>

      <v-layout justify-center align-center class="project-layout" style="width: 100%;height: 830px;border: 1px solid red;">

        <v-flex xs12 sm12 md10 lg10 xlg10 class="projects-flex" style="">
          <h2 class="font-weight-bold" style="margin: 0px;font-size: 34px; text-align:center; color: #28123E;">WITH YOUR HELP WE SUPPORT<br> THESE SUSTAINABLE PROJECTS!</h2>
          <p class="caption mb-3"  style="margin: 0px;font-size: 13px; text-align:center;">Check out the various <span style="color:#27B0C7;">projects</span> your clicks finance.</p>
          <v-carousel height="420" class="projects-slider">
            <v-carousel-item style="border: 1px solid red; width:511px;height:306px;">
          
            </v-carousel-item>
            <p class="caption mt-4 mb-4"  style="margin: 0px;font-size: 20px; text-align:center; color: #28123E;">Sustainable energy sources like the sun, wind and hydro power don’t have negative effects on the climate.<br>Very little greenhouse gases are emitted and there is no air polution.</p>
          </v-carousel>
        </v-flex>

      </v-layout>

      <v-layout column justify-center align-center class="mt-2 mb-3 grey lighten-4" style="width: 100%; background-color: #F4F4F4;">
          <v-flex xs12 sm12 md6 lg6 xlg6 class="webshop-txt-flex">
              <p class="" style="text-align: center; font-size: 21px; color: #10DC87; margin: 0px;position: relative; top:10px;">Some of our partners</p>
              <h3 class="font-weight-bold" style="text-align: center; font-size: 33px; color: #28123E; margin: 0px;">Together we can make a change</h3>
          </v-flex>

          <v-flex xs12 sm12 md6 lg6 xlg6 class="slider-flex">
              <v-carousel hide-controls height="auto" class="pa-3 grey lighten-4">

                <v-carousel-item v-for="(partner, i) in partners" :key="i">
                    <div class="webshops-img-container"><img v-for="(partnerIcon, i) in partner.icons" 
                      :key="i" 
                      :src="partnerIcon.src" 
                      alt="" 
                      style="border: 1px solid red; width: 168px;height:168px;"
                      :style="{animationDelay:'0.2'*i+'s'}"
                      class="animated zoomIn"
                    ></div>
                </v-carousel-item>  

              </v-carousel>
          </v-flex>
      </v-layout>

      <v-btn  depressed class="white--text mb-4 mt-2" style="border-radius: 5px; width: 100%;height: 65px;background: linear-gradient(to right, #10DC87, #08BA4D);font-size:26px;">STARTUP CO₂ok MAKES ONLINE SHOPPING CLIMATE NEUTRAL</v-btn>

  </div>
    
</template>

<script>
export default {
    
data() {
  
  return{

     ninjaExtensionSteps: [
      {img: require('../assets/images/home/ninjaDesign_Register_2.png'), title: 'BECOME A CO₂ok NINJA', content: 'Simply register with us and install the app. The app is safe, open source, and respects your privacy'},
      {img: require('../assets/images/home/ninjaDesign_Trolly.png'), title: 'SHOP', content: 'Start shopping in your Ninja suit. After paying we will receive a commission from the shop.'},
      {img: require('../assets/images/home/ninjaDesign_Hadouken.png'), title: 'BECOME A CO₂ok NINJA', content: 'With this commission we finance projects that directly reduce greenhouse gas emissions. In effect this makes your purchase climate neutral. Thank you 💚.'}
    ],

    webshops: [
        {icons: [{src: require('../assets/images/home/ninjaDesign_Register_2.png')}, {src: require('../assets/images/home/ninjaDesign_Register_2.png')}, {src: require('../assets/images/home/ninjaDesign_Register_2.png')}, {src: require('../assets/images/home/ninjaDesign_Register_2.png')}]},
        {icons: [{src: ''}, {src: ''}, {src: ''}, {src: ''}]},
        {icons: [{src: ''}, {src: ''}, {src: ''}, {src: ''}]}
        // {icons: [{src: require('')}, {src: require('')}, {src: require('')}, {src: require('')}]},
        // {icons: [{src: require('')}, {src: require('')}, {src: require('')}, {src: require('')}]}
    ],

    partners: [
        {icons: [{src: require('../assets/images/home/ninjaDesign_Register_2.png')}, {src: require('../assets/images/home/ninjaDesign_Register_2.png')}, {src: require('../assets/images/home/ninjaDesign_Register_2.png')}, {src: require('../assets/images/home/ninjaDesign_Register_2.png')}]},
        {icons: [{src: ''}, {src: ''}, {src: ''}, {src: ''}]},
        {icons: [{src: ''}, {src: ''}, {src: ''}, {src: ''}]}
        // {icons: [{src: require('')}, {src: require('')}, {src: require('')}, {src: require('')}]},
        // {icons: [{src: require('')}, {src: require('')}, {src: require('')}, {src: require('')}]}
    ]

  }

},

methods: {

}

}

</script>

<style scoped>

body{
  background-color:red;
}

.home-container{
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    /* background-color:white; */
}

.header-layout{
    width: 100%;
    height: 480px;
    background-image: url('../assets/images/home/homebackground 1.png');
    background-repeat: no-repeat; 
    background-position: top;
    background-size:100% 100%;
}

.header-txt-flex{
    /* width: 1197px; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.header-txt-flex p{
    text-align: left;
    font-size: 21px;
}

.header-txt-flex h1{
    text-align: left;
    font-size: 43px;
    /* height: 157px; */
    height: auto;
}
.header-txt-flex span{
    text-align: left;
    font-size: 12px;
}

.header-img-flex{
    /* width: 1197px; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.world-ball{
    width: 509px;
    height: 340px;
    background-image: url('../assets/images/home/wereldbol.png');
    background-position: right;
    background-size: 100% 100%;
    position: relative;
    right: 50px;
}

.ninja-work{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.ninja-work *{
    text-align: center;
}

.steps-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.transaction-steps{
    width: 90%;
    height: 692px;
    background-image: url('../assets/images/home/transactionsteps.png');
    background-position: center;
    background-size: 100% 100%;
}

.webshop-txt-flex{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.slider-flex{
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.slider-items-container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  border: 1px solid red;
}

.webshops-img-container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
}

.project-layout{
   background-image: url('../assets/images/home/homebackground.svg');
   background-position: left;
   background-size: contain;
}

.projects-flex{
   
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.projects-slider{
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>


