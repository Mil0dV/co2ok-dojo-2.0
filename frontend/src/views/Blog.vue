<template>
  
<div class="news-container">

    <div class="news-header animated fadeIn">
        <h3 class="display-3 white--text font-weight-bold mb-5 animated fadeInUp">News</h3>
    </div>

    <component :is="this.$store.state.component"></component>
</div>

</template>


<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Blog from '../components/blog/blogComponent.vue'
import News from '../components/blog/newsComponent.vue'

Vue.use(Vuetify);
export default {
    name: 'blog',

    data() {
        return {

         component: 'blog'

        }
    },

    created(){
        
    },

    components: {
        'blog': Blog,
        'news': News
    },

    computed: {

    },

    methods: {


    }
}
</script>

<style scoped>

.news-container{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.news-header{
    width: 100%;
    height: 354px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    background-image: url('../assets/images/blog/iStock.png');
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100% 100%;
    margin-bottom: 55px;
}

.news-header h3{
    margin-left: 150px;
}


</style>

