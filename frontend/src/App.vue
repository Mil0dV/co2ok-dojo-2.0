<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    // import lang_home from './lang/lang_home.json';
    //
    // export default {
    //     name: 'app',
    //
    //     data() {
    //         return {
    //             lang: lang_home,
    //             selectedLang: null,
    //         }
    //     },
    //
    //     methods: {
    //         switchLang(lang) {
    //             this.selectedLang = this.lang[lang]
    //         }
    //     },
    //
    //     mounted() {
    //         this.selectedLang = this.lang['lang_en_home']
    //     }
    //
    // }
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