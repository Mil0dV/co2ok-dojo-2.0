<template>

  <div class="home-container">
      <v-layout flex row wrap justify-space-around align-start class="header-layout pa-5">

          <v-flex xs12 sm12 md12 lg7 xlg6 class="header-txt-flex pa-5">
             <p class="white--text mt-3">HI WE'RE CO2ok</p>
             <h1 class="white--text font-weight-bold mb-5">Become a Ninja and<br> shop climate neutral!</h1>
             <v-btn depressed color="#28123E" class="white--text mb-2 font-weight-bold" style='margin: 0px; padding:0px; font-size: 15px;width: 230px;height: 45px;border-radius: 9px;'>INSTALL THE EXTENSION</v-btn>
             <span class="caption white--text">Activate the extension and you’ll be shopping climate neutral without a cost!</span>
          </v-flex>

          <v-flex xs12 sm12 md12 lg5 xlg6 class="header-img-flex">
            <div class="world-ball"></div>
          </v-flex>

      </v-layout>

      <div class="ninja-work mt-3 mb-5">
          <p style="font-size: 21px; margin: 0px; color: #10DC87">HOW IT WORKS</p>
          <h1 style="font-size: 33px;" class="font-weight-bold" color="#28123E">FOLLOW THESE 3 SIMPLE STEPS</h1>
          <span style="font-size: 9px;" class="caption" color="#28123E">There are no extra costs for you. The CO₂ compensation is fully covered by the shop.</span>
      </div>

      <v-layout row wrap justify-center align-start class="mt-3">

          <v-flex xs12 sm12 md4 lg4 xlg3 v-for="(ninjaExtensionStep,i) in ninjaExtensionSteps" :key="i" class="steps-container mb-5">
              <img :src="ninjaExtensionStep.img" alt="" class="mb-4">
              <p class="font-weight-bold" style="font-size:21px; color: #10DC87;margin: 0px;">Step{{i+1}}</p>
              <p class="" style="color: #28123E;font-size:15px;margin: 0px;">{{ninjaExtensionStep.title}}</p>   
              <p style="color: #28123E;font-size:16px;text-align: center;">{{ninjaExtensionStep.content}}</p>
          </v-flex>

      </v-layout>

      <v-btn depressed class="white--text" style="border-radius: 5px; width: 100%;height: 65px;background: linear-gradient(to right, #10DC87, #08BA4D);font-size:26px;">GET INVOLVED & FIGHT CLIMATE CHANGE</v-btn>
      <div class="transaction-steps mt-5"></div>
      <v-layout column justify-center align-center style="width: 100%, height: auto; background-color: #F9F9F9;">
          <v-flex xs12 sm12 md6 lg6 xlg6 class="partner-txt-flex">
              <p class="" style="text-align: center; font-size: 21px; color: #10DC87;">Choose from 22.000+ webshops</p>
              <h3 class="font-weight-bold" style="text-align: center; font-size: 33px; color: #28123E;">Together we can make a change</h3>
          </v-flex>

          <!-- <v-flex xs12 sm12 md6 lg6 xlg6 class="slider-flex">
              <v-carousel hide-controls v-for="(partner, i) in partners" :key="i">
                  <v-carousel-item 
                    v-for="(icon,i) in partner.icons" 
                    :key="i" 
                    :src:"icon.src"
                    class="slider-items-container"
                  ></v-carousel-item>
              </v-carousel>
          </v-flex> -->
      </v-layout>
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

    partners: [
        {icons: [{src: require('')}, {src: require('')}, {src: require('')}, {src: require('')}]},
        {icons: [{src: require('')}, {src: require('')}, {src: require('')}, {src: require('')}]},
        {icons: [{src: require('')}, {src: require('')}, {src: require('')}, {src: require('')}]}
    ]

  }

},

methods: {

}

}
</script>

<style scoped>

.home-container{
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
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

.partner-txt-flex{
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


</style>


