<template>
    <div>
        <Header/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Vuikit from 'vuikit'
    import VuikitIcons from '@vuikit/icons'
    import '@vuikit/theme'
    import Header from '../components/layout/Header'

    Vue.use(VuikitIcons)
    Vue.use(Vuikit)
    export default {
        name: "Steps",
        components: {Header}

    }
</script>

<style scoped>

</style>