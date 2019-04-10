<template>
    <div id="app">
        <router-view></router-view>
        <p @click="switchLang('lang_en_home')">Engels</p>
        <p @click="switchLang('lang_nl_home')">Nederlands</p>
        <br>

        <p>{{selectedLang['title']}}</p>
    </div>
</template>

<script>
    import lang_home from './lang/lang_home.json';

    export default {
        name: 'app',

        data() {
            return {
                taal: lang_home,
                selectedLang: null,
            }
        },

        methods: {
          switchLang(lang) {
              this.selectedLang = this.taal[lang]
            }
        },

        mounted(){
            this.selectedLang = this.taal['lang_nl_home']
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>