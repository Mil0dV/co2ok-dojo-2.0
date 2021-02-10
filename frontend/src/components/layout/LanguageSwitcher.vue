<template>
  <div>
    <ul class="uk-navbar-nav lang-nav-bar">
      <img :id="image.id" class="language-icon image" :src="image.src" :alt="image.alt">
      <span class="nav__triangle" uk-icon="icon: triangle-down"></span>
    </ul>
    <!-- <transition enter-acitve-class="animated bounceIn" leave-active-class="animated bounceOut" mode="out-in"> -->
    <div class="nav-bar-menu dropdown__menu-wrapper" uk-dropdown="offset: -15" style="min-width: 150px; margin: auto; height: 45px; padding: 8px;">
        <ul class="lang-flags uk-nav uk-dropdown-nav dropdown__nav">
          <li class="dutch-flag" @click="switchLocale('nl')" style="cursor: pointer">
            <img alt="nl-icon" class="language-icon nl icon"
              src="../../assets/images/nav/dutch-icon.png">
          </li>

          <li class="english-flag" @click="switchLocale('en')" style="cursor: pointer">
            <img alt="en-icon" class="language-icon en icon"
              src="../../assets/images/nav/english-icon.png">
          </li>

          <li class="german-flag" @click="switchLocale('de')" style="cursor: pointer">
            <img alt="de-icon" class="language-icon de icon" style="margin-bottom: 15px;"
            src="../../assets/images/nav/german-icon.png">
          </li>
        </ul>
      </div>
    <!-- </transition> -->
  </div>
</template>

<script>
  export default {
    name: 'LanguageSwitcher',

    mounted() {
      this.switchImage();
    },

    methods: {

      switchImage() {
        var index = 0;
        var code = this.$i18n.locale
        while (index < this.images.length) {
          if (this.images[index].id == code) {
            this.image = this.images[index]
            break ;
          }
          index++;
        }
      },

      switchLocale(locale) {
        if (this.$i18n.locale !== locale) {
          this.$i18n.locale = locale;
          // $( document ).ready(function() {
          //   console.log($(".lang-nav-bar").attr("aria-expanded","false"))
          //   $(".lang-nav-bar").attr("aria-expanded","false")[0];

          //   $(".lang-nav-bar").attr("aria-expanded","false")[1];
          // })
          this.switchImage()
        }
      }
    },

    data() {
      return {
        image: '',
        images: [{
            id: 'nl',
            src: require("../../assets/images/nav/dutch-icon.png" ),
            alt: "dutch-flag"
          },
          {
            id: 'en',
            src: require("../../assets/images/nav/english-icon.png" ),
            alt: "english-flag"
          },
          {
            id: 'de',
            src: require("../../assets/images/nav/german-icon.png" ),
            alt: "german-flag"
          }
        ],
        locales: ['nl', 'en', 'de']
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/layout/nav';

</style>
