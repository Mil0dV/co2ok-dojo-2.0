<template>
    <div id="app">
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
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

    input {
        border: 1px solid gray !important;
    }

</style>