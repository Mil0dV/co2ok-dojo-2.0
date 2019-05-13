<template>

  <div class="home-container">
      <v-layout flex row justify-space-around align-start class="header-layout pa-5">

          <v-flex xs12 sm12 md12 lg6 xlg6 class="header-txt-flex pa-5">
             <p class="white--text animated fadeInUp" style="animation-delay:0.2s;">HI WE'RE CO2ok</p>
             <h1 class="font-weight-bold mb-5 animated fadeInUp" style="animation-delay:0.4s; width: 500px;">Become a Ninja and<br> shop climate neutral!</h1>
             <v-btn depressed color="#28123E" class="white--text mb-2 font-weight-bold animated zoomIn" style='animation-delay:0.6s;margin: 0px; padding:0px; font-size: 15px;width: 230px;height: 45px;border-radius: 9px;'>INSTALL THE EXTENSION</v-btn>
             <span class="caption white--text animated fadeInLeft" style="animation-delay:0.7s;">Activate the extension and you’ll be shopping climate neutral without a cost!</span>
          </v-flex>

          <v-flex xs12 sm12 md12 lg6 xlg6 class="header-img-flex">
            <div class="world-ball animated bounceIn" style="animation-delay: 0.9s;"></div>
             <!-- <img src="../assets/images/home/wereldbol.png" alt=""> -->
          </v-flex>

      </v-layout>

      <div class="ninja-work mt-4 mb-5">
          <p style="font-size: 21px; margin: 0px; color: #10DC87;animation-delay:1s;" class="animated fadeInUp">HOW IT WORKS</p>
          <h1 style="width: 95%;margin:0px;animation-delay:1.2s;" class="font-weight-bold animated fadeInUp pb-2" color="#28123E">FOLLOW THESE 3 SIMPLE STEPS</h1>
          <span style="width: 95%;margin:0px;animation-delay:1.3s;" class="animated fadeInUp" color="#28123E">There are no extra costs for you. The CO₂ compensation is fully covered by the shop.</span>
      </div>

      <v-layout row wrap justify-center align-start class="mt-1">

          <!-- md - lg - xlg display -->
          <v-flex xs12 sm12 md4 lg4 xlg3 v-for="(ninjaExtensionStep,i) in ninjaExtensionSteps" :key="i" class="hidden-sm-and-down steps-container mb-5">
              <!-- <img :src="ninjaExtensionStep.img" alt="" class="mb-4 animated bounceIn" :style="{animationDelay:0.5+i-(i*'0.5')+'s'}" data-aos="zoom-in" :data-aos-delay="i*50"> -->
              <img :src="ninjaExtensionStep.img" alt="" class="mb-4" data-aos="zoom-in" :data-aos-delay="i*50" style="height:237px;">
              <!-- <p class="font-weight-bold animated zoomIn" :style="{animationDelay: 0.7+i-(i*'0.5')+'s'}" style="font-size:21px; color: #10DC87;margin: 0px;" data-aos="zoom-in-up" :data-aos-delay="i*100">Step{{i+1}}</p> -->
              <p class="font-weight-bold mb-1" style="font-size:21px; color: #10DC87;margin: 0px;" data-aos="zoom-in-up" :data-aos-delay="i*100">Step{{i+1}}</p>
              <!-- <p class="animated zoomIn" :style="{animationDelay: 0.9+i-(i*'0.5')+'s'}" style="color: #28123E;font-size:15px;margin: 0px;" data-aos="zoom-in-up" :data-aos-delay="i*100">{{ninjaExtensionStep.title}}</p> -->
              <p class="font-weight-bold" style="color: #28123E;font-size:15px;margin: 0px;" data-aos="zoom-in-up" :data-aos-delay="i*100">{{ninjaExtensionStep.title}}</p>   
              <!-- <p class="animated zoomIn" :style="{animationDelay:1.1+i-(i*'0.5')+'s'}" style="color: #28123E;font-size:16px;text-align: center;" data-aos="zoom-in-up" :data-aos-delay="i*100">{{ninjaExtensionStep.content}}</p> -->
              <p class="steps-content pa-2" style="color: #28123E;text-align: center;" data-aos="zoom-in-up" :data-aos-delay="i*100">{{ninjaExtensionStep.content}}</p>
          </v-flex>

          <!-- mobile - tablet(xsm - sm) display -->
          <v-flex xs12 sm12 class="hidden-md-and-up steps-container mb-3">
            <v-carousel :light="light" interval="10000" hide-controls height="450px" style="">
              <v-carousel-item v-for="(ninjaExtensionStep,i) in ninjaExtensionSteps" :key="i">
                <div class="mobile-spets-items-container">
                  <img :src="ninjaExtensionStep.img" alt="" class="mb-4 animated zoomIn" :style="{animationDelay:i*'0.2'+'s'}" style="height: 237px;">
                  <p class="font-weight-bold mb-1 animated fadeInUp" :style="{animationDelay: i*'0.2'+'s'}" style="font-size:21px; color: #10DC87;margin: 0px;">Step{{i+1}}</p>
                  <p class="font-weight-bold animated fadeInUp" :style="{animationDelay: i*'0.2'+'s'}" style="color: #28123E;font-size:15px;margin: 0px;">{{ninjaExtensionStep.title}}</p>   
                  <p class="steps-content animated fadeInUp" :style="{animationDelay:i*'0.2'+'s'}" style="color: #28123E;text-align: center;">{{ninjaExtensionStep.content}}</p>
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-flex>

      </v-layout>

      <v-btn data-aos="zoom-in-up" data-aos-duration="600" depressed class="white--text involed-btn font-weight-bold" style="background: linear-gradient(to right, #10DC87, #08BA4D);">GET INVOLVED & FIGHT CLIMATE CHANGE</v-btn>
      <div class="transaction-steps" data-aos="zoom-in"></div>
      
      <v-layout column justify-center align-center class="mt-5 mb-3 grey lighten-4" style="width: 100%; background-color: #F4F4F4;">
          <v-flex xs12 sm12 md6 lg6 xlg6 class="webshop-txt-flex mt-3">
              <p data-aos="fade-up" data-aos-duration="600" class="" style="text-align: center; font-size: 21px; color: #10DC87; margin: 0px;position: relative; top:10px;">Choose from 22.000+ webshops</p>
              <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" class="font-weight-bold shops-title" style="">Together we can make a change</h3>
          </v-flex>

          <v-flex xs12 sm12 md6 lg6 xlg6 class="slider-flex">
              <v-carousel :light='carouselLightTheme' hide-controls style="" class="grey lighten-4 slider-carousel pa-1">

                <v-carousel-item v-for="(webshop, i) in webshops" :key="i">
                    <div class="webshops-img-container mt-1 pa-3">
                      <div 
                        v-for="(webshopIcon, i) in webshop.icons"
                        :key="i"
                        :style="{animationDelay:'0.2'*i+'s', backgroundImage: `url(${webshopIcon.src})`}"
                        class="animated zoomIn partners-imgs"
                      ></div>
                    </div>
                </v-carousel-item>  

              </v-carousel>
          </v-flex>
      </v-layout>

      <v-layout justify-start align-center class="project-layout mt-4" style="">

        <div class="project-background">
          <img src="../assets/images/home/homebackground -2.png" alt="">
        </div> 

        <v-flex xs12 sm12 md10 lg10 xlg10 class="projects-flex" style="">
          <h2 class="font-weight-bold support-title" data-aos="fade-up" data-aos-duration="500" style="">WITH YOUR HELP WE SUPPORT<br> THESE SUSTAINABLE PROJECTS!</h2>
          <p class="caption"  style="margin: 0px;font-size: 13px; text-align:center;" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Check out the various <span style="color:#27B0C7;">projects</span> your clicks finance.</p>
          <v-carousel :light='carouselLightTheme' height="470" class="projects-slider">
            <v-carousel-item 
              v-for="(project, i) in projects"
              :key="i"
              class="project-slider-items">    
               <div class="pa-3">
                  <img :src="project.img" alt="">
                  <p class="mt-3 mb-5 animated fadeInUp">{{project.txt}}</p>
                </div> 
            </v-carousel-item>
            <!-- <p class="caption mt-4 mb-5"  style="margin: 0px;font-size: 20px; text-align:center; color: #28123E;">Sustainable energy sources like the sun, wind and hydro power don’t have negative effects on the climate.<br>Very little greenhouse gases are emitted and there is no air polution.</p> -->
          </v-carousel>
        </v-flex>

      </v-layout>

      <v-layout column justify-center align-center class="mt-3 mb-3 grey lighten-4" style="width: 100%; background-color: #F4F4F4;">
          <v-flex xs12 sm12 md6 lg6 xlg6 class="webshop-txt-flex mt-3">
              <p data-aos="fade-up" data-aos-duration="600" class="mb-1" style="text-align: center; font-size: 21px; color: #10DC87; margin: 0px;position: relative; top:10px;">Some of our partners</p>
              <h3 data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" class="font-weight-bold" style="text-align: center; font-size: 33px; color: #28123E; margin: 0px;">Together we can make a change</h3>
          </v-flex>

          <v-flex xs12 sm12 md6 lg6 xlg6 class="slider-flex">
              <v-carousel :light='carouselLightTheme' hide-controls class="pa-1 grey lighten-4 partner-carousel" style="font-size: 10px;">

                <v-carousel-item v-for="(partner, i) in partners" :key="i">
                    <div class="webshops-img-container mt-1 pa-3">
                      <!-- <img v-for="(partnerIcon, i) in partner.icons" 
                       :key="i" 
                       :src="partnerIcon.src" 
                       alt="" 
                       style="border: 1px solid red; width: 168px;height:168px;"
                       :style="{animationDelay:'0.2'*i+'s'}"
                       class="animated zoomIn"
                      > -->
                      <div 
                        v-for="(partnerIcon, i) in partner.icons"
                        :key="i"
                        :style="{animationDelay:'0.2'*i+'s', backgroundImage: `url(${partnerIcon.src})`}"
                        class="animated zoomIn webshops-imgs"
                      ></div>
                    </div>
                </v-carousel-item>  

              </v-carousel>
          </v-flex>
      </v-layout>

      <v-btn depressed class="white--text mb-4 mt-2 shopping-btn font-weight-bold" style="background: linear-gradient(to right, #10DC87, #08BA4D);">STARTUP CO₂ok MAKES ONLINE SHOPPING CLIMATE NEUTRAL</v-btn>

  </div>
    
</template>

<script>
export default {
    
data() {
  
  return{

    carouselLightTheme: false,
    light: true,

     ninjaExtensionSteps: [
      {img: require('../assets/images/home/ninjaDesign_Register_2.png'), title: 'BECOME A CO₂ok NINJA', content: 'Simply register with us and install the app. The app is safe, open source, and respects your privacy'},
      {img: require('../assets/images/home/ninjaDesign_Trolly.png'), title: 'SHOP', content: 'Start shopping in your Ninja suit. After paying we will receive a commission from the shop.'},
      {img: require('../assets/images/home/ninjaDesign_Hadouken.png'), title: 'FIGHT CLIMATE CHANGE', content: 'With this commission we finance projects that directly reduce greenhouse gas emissions. In effect this makes your purchase climate neutral. Thank you 💚.'}
    ],

    webshops: [
        {icons: [{src: require('../assets/images/home/webshops/HP.png')}, {src: require('../assets/images/home/webshops/coolblue.png')}, {src: require('../assets/images/home/webshops/Udemy.png')}, {src: require('../assets/images/home/webshops/Airbnb.png')}]},
        {icons: [{src: require('../assets/images/home/webshops/dx.com.png')}, {src: require('../assets/images/home/webshops/ebay.png')}, {src: require('../assets/images/home/webshops/aliexpress.png')}, {src: require('../assets/images/home/webshops/Bol.png')}]},
        {icons: [{src: require('../assets/images/home/webshops/adobe.com.png')}, {src: require('../assets/images/home/webshops/dell.com.png')}, {src: require('../assets/images/home/webshops/anwb.nl.png')}, {src: require('../assets/images/home/webshops/autodesk.com.png')}]}
    ],

    partners: [
        {icons: [{src: require('../assets/images/home/partners/AtmosFair.png')}, {src: require('../assets/images/home/partners/fairclimatefund.png')}, {src: require('../assets/images/home/partners/starters4.png')}, {src: require('../assets/images/home/partners/sbb.png')}]},
        {icons: [{src: require('../assets/images/home/partners/att.com.png')}, {src: require('../assets/images/home/partners/airfrance.us.png')}, {src: require('../assets/images/home/partners/ideal.png')}, {src: require('../assets/images/home/partners/postnl.nl.png')}]},
        {icons: [{src: require('../assets/images/home/partners//eprimo.de.png')}, {src: require('../assets/images/home/partners/dhl.png')}, {src: require('../assets/images/home/partners/grammarly.com.png')}, {src: require('../assets/images/home/partners/hotels.com.png')}]},
    ],

    projects: [
      {img: require('../assets/images/home/energy.png'), txt: "Sustainable energy sources like the sun, wind and hydro power don't have negative effects on the climate. Very little greenhouse gases are emitted and there is no air polution."},
      {img: require('../assets/images/home/Save80cookingstove.jpg'), txt: 'The Save80 cookers which use 5x less wood, which means 5x less emission.'},
      {img: require('../assets/images/home/climatproject.jpg'), txt: 'A biogas installation under construction'}
    ]

  }

},

create(){

},

mounted() {

 this.carouselCtrlStyle();
  
},

methods: {

  carouselCtrlStyle(){
   
    let controls = document.querySelectorAll('.v-carousel__controls');
    let carousels = document.querySelectorAll('.v-carousel');
    let carouselCtrlNext = document.querySelector('.v-carousel__next .v-icon');
    let carouselCtrlPrev = document.querySelector('.v-carousel__prev .v-icon');
    // let carouselActives = document.querySelectorAll('.v-btn--active');
    let carouselItemsIcons = document.querySelectorAll('.v-item-group .v-btn .v-btn__content .v-icon');

    for (let i = 0; i < controls.length; i++) {      
      let control = controls[i];
      control.style.backgroundColor = 'rgba(255,255,255,0)' 
    }

    for (let i = 0; i < carousels.length; i++) {      
      let carousel = carousels[i];
      carousel.style.boxShadow = 'none' 
    }

    // for (let i = 0; i < carouselsCtrlNext.length; i++) {      
      // let carouselCtrlNext = carouselsCtrlNext[i];
      carouselCtrlNext.style.borderRadius = '100%'
      carouselCtrlNext.style.padding = '10px'
      carouselCtrlNext.style.cursor = 'pointer'
      carouselCtrlNext.style.backgroundColor = '#F1F1F1'
      carouselCtrlNext.style.color = '#10DC87'
      carouselCtrlNext.style.position = 'relative'
      carouselCtrlNext.style.bottom = '30px' 
    // }

    // for (let i = 0; i < carouselsCtrlPrev.length; i++) {      
      // let carouselsCtrlPrev = carouselsCtrlNext[i];
      carouselCtrlPrev.style.borderRadius = '100%'
      carouselCtrlPrev.style.padding = '10px'
      carouselCtrlPrev.style.cursor = 'pointer'
      carouselCtrlPrev.style.backgroundColor = '#FFFFFF'
      carouselCtrlPrev.style.color = '#10DC87'
      carouselCtrlPrev.style.position = 'relative'
      carouselCtrlPrev.style.bottom = '30px' 
    // }

    if(this.$vuetify.breakpoint.xs){
      carouselCtrlPrev.style.display = 'none'
      carouselCtrlNext.style.display = 'none'
    }else{
      carouselCtrlPrev.style.display = 'block'
      carouselCtrlNext.style.display = 'block'
    }

    // for (let i = 0; i < carouselActives.length; i++) {      
    //   let carouselActive = carouselActives[i];
    //   carouselActive.style.opacity = '1'
    //   carouselActive.style.color = 'green'
    //   console.log(carouselActive);   
    // }

  }

}

}

</script>

<style scoped>

    .home-container {
        width: 80%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        overflow-x: hidden;
        /* background-color:white; */
    }

    .header-layout {
        width: 100%;
        height: 480px;
        background-image: url('../assets/images/home/homebackground 1.png');
        background-repeat: no-repeat;
        background-position: top;
        background-size: 100% 100%;
    }

    .header-txt-flex {
        /* width: 1197px; */
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .header-txt-flex p {
        text-align: left;
        font-size: 21px;
        position: relative;
        top: 30px;
    }

    .header-txt-flex h1 {
        text-align: left;
        font-size: 43px;
        /* height: 157px; */
        height: auto;
        color: white;
    }

    .header-txt-flex span {
        text-align: left;
        font-size: 12px;
    }

    .header-img-flex {
        /* width: 1197px; */
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .world-ball {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        background-image: url('../assets/images/home/wereldbol.png');
        background-position: right;
        background-size: 100%;
        /* position: relative;
        right: 50px; */
    }

    .ninja-work {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .ninja-work * {
        text-align: center;
    }

    .ninja-work h1 {
        font-size: 33px;
    }

    .ninja-work span {
        font-size: 9px;
    }

    .steps-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .steps-content {
        font-size: 16px;
        margin-top: 5px;
    }

    .mobile-spets-items-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
    }

    .involed-btn, .shopping-btn {
        border-radius: 5px;
        width: 100%;
        height: 65px;
        font-size: 26px;
    }

    .transaction-steps {
        width: 90%;
        height: 692px;
        background-image: url('../assets/images/home/transactionsteps.png');
        background-position: center;
        background-size: contain;
        margin-top: 48px;
    }

    .webshop-txt-flex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
    }

    .webshop-txt-flex .shops-title {
        text-align: center;
        font-size: 33px;
        color: #28123E;
        margin: 0px;
    }

    .slider-flex {
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 270px;
    }

    .slider-flex .slider-carousel {
        max-height: 270px;
        padding: 36px;
    }

.home-container{
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    overflow-x: hidden;
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
    position: relative;
    top: 30px;
}

.header-txt-flex h1{
    text-align: left;
    font-size: 43px;
    /* height: 157px; */
    height: auto;
    color: white;
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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    background-image: url('../assets/images/home/wereldbol.png');
    background-position: right;
    background-size: 100%;
    /* position: relative;
    right: 50px; */
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

.ninja-work h1{
  font-size: 33px;
}

.ninja-work span{
  font-size: 9px;
}

.steps-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.steps-content{
  font-size:16px;
  margin-top: 5px;
}

.mobile-spets-items-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.involed-btn, .shopping-btn{
  border-radius: 5px; 
  width: 100%;
  height: 65px;
  font-size:26px;
}

.transaction-steps{
    width: 90%;
    height: 692px;
    background-image: url('../assets/images/home/transactionsteps.png');
    background-position: center;
    background-size: contain;
    margin-top: 48px;
}

.webshop-txt-flex{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.webshop-txt-flex .shops-title{
  text-align: center; 
  font-size: 33px; 
  color: #28123E; 
  margin: 0px;
}

.slider-flex{
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 270px;
}

.slider-flex .slider-carousel{
  max-height: 270px;
  padding: 36px;
}

.slider-carousel .webshops-img-container{
  padding: 36px;
}

.slider-items-container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
}

.webshops-img-container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
}

.webshops-imgs, .partners-imgs{
  width: 100%;
  height: 168px;
  background-position: center;
  background-size: contain;
}

.project-layout{
   width: 100%;
   height: 835px;
   /* height: 300px; */
}

.project-background{
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   width: 73%;
   height: 835px;
   position: absolute;
   z-index: 1;
}

.project-background img{
   width: 100%;
   height: 100%;
   position: relative;
   right: 67px;
}


.projects-flex{
   
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 75%;
  margin: auto;
  z-index: 2;
}

.support-title{
  margin: 0px;
  font-size: 34px;
  text-align:center; 
  color: #28123E;
}

.projects-slider{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
}

.project-slider-items{
  width:500px;
  height:350px;
  margin:auto;
}

.project-slider-items div{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project-slider-items div img{
  width: 100%;
  height: 100%;
}

.project-slider-items div p{
  margin: 0px;
  font-size: 15px; 
  text-align:center; 
  color: #28123E;
  width: 100%;
  height: auto;
}

.partner-carousel{
  max-height: 270px;
}

/* v-carousel styles */
.v-btn__content{
  border: 1px solid red;
  width: 30px;
}

.slider-flex .v-carousel__controls{
  background-color: rgba(0,0,0,0);
  border: 1px solid red;
}

.v-carousel__next .v-icon{
  border: 1px solid red;
}

.v-item-group .v-btn .v-btn__content .v-icon{
  border: 1px solid red;
}
/*---------------------*/


/* responsive style */

@media only screen and (max-width: 1400px){
  .home-container{
    width: 90%;
  }
}

@media only screen and (max-width: 1000px){
  .home-container{
    width: 100%;
  }

  .header-img-flex{
    position: absolute;
    width: 509px;
    height: 390px;
    z-index: 1;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .world-ball{
    right: 0px;
    background-size: contain;
  }

  .header-txt-flex{
    z-index: 2;
    justify-content: center;
    align-items: center;
  }

  .shopping-btn{
    font-size:17px;
  }

  .slider-flex .slider-carousel, .partner-carousel{
    /* max-height: 200px; */
    padding: 24px;
  }

  .slider-carousel .webshops-img-container{
    padding: 0px;
  }  

  .partners-imgs, .webshops-imgs{
    width: 120px;
    height: 120px;
  } 

  .project-background{
    width: 93%;
  }

  .slider-flex .slider-carousel, .partner-carousel{
    max-height: 230px;
    /* padding: 24px; */
  }

  .involed-btn, .shopping-btn{
    width: 90%;
  }

  /* .shopping-btn{
    width: 90%;
    font-size:10px;
  } */

}

@media only screen and (max-width: 500px){
  .home-container{
    width: 100%;
  }

  .header-txt-flex h1{
    font-size: 30px;
    text-align: center;
    width: 400px;
    margin: 0px;
  }

  .header-txt-flex span{
    width:230px;
  }

  .header-layout{
    height: 400px;
  }

  .world-ball{
    background-position: center;
    height: 70%;
    width: 309px;
    position: relative;
    bottom: 50px;
    background-size: cover;
  }

  .ninja-work p{
    font-size: 11px;
  }

  .ninja-work h1{
    font-size: 23px;
  }

  .ninja-work span{
    font-size: 10px;
  }

  .steps-content{
    font-size: 13px;
    width: 85%;
  }

  .involed-btn{
    width: 90%;
    font-size:14px;
  }

  .shopping-btn{
    width: 90%;
    font-size:10px;
  }

  .transaction-steps{
    width: 100%;
    height: 400px;
    background-position: top;
    margin-bottom: -120px;
    /* margin-top: 0px; */
  }

  .webshop-txt-flex .shops-title{
    font-size: 30px; 
  }

  .partners-imgs, .webshops-imgs{
    width: 70px;
    height: 70px;
  }

  .slider-flex .slider-carousel, .partner-carousel{
    max-height: 150px;
    padding: 24px;
  }

  .slider-carousel .webshops-img-container{
    padding: 0px;
  }   

  .support-title{
    font-size: 30px;
  }

  .project-background{
    width: 100%;
  }

  .project-background img{
    right: 0px;
  }

  .project-slider-items div p{
    width: 70%;
  }

}

</style>


