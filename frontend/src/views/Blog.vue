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
import News from '../components/blog/News.vue'
import NewsContent from '../components/blog/NewsContent.vue'

Vue.use(Vuetify);
export default {
    name: 'blog',

    data() {
        return {

        }
    },

    created(){

    },

    components: {
        'news': News,
        'newsContent': NewsContent
    },

    computed: {

    },

    methods: {

      getBlogs() {

        let self = this
        this.$axios.get(`${this.$store.state.SITE_HOST}/blog/`,{
            headers: {
                // "X-CSRFToken": `${this.$store.state.userToken}`,
                // Authorization: `token ${window.localStorage.getItem('userToken')}`
            }
        }).then(response => {
            console.log(response.data);

            self.$store.commit('getBlogs', response.data)
            console.log(response);

        }).catch(error => {
            console.log(error);

        })

      },

      stripBlogContent(content){
          return content.substr(0,150)+'...'
      },

      formatBlogDate(content){
          let date = content.substr(0,10)
          return date
      },

      newsContent(articleId){

        this.$store.state.component = 'newsContent'
        // let articleId = event.currentTarget.parentNode.parentNode.id
        this.$store.commit('getArticle', articleId)

      }

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

