<template>
   <div class="article-container">
       
       <v-layout row justify-center align-start class="article-layout">

           <v-flex xs10 sm8 md8 lg8 xlg6 class="article-flex">
               <div class="return mb-3" @click="backToBlogs()"><v-icon small color="#818181" style="">arrow_backward</v-icon><p>Go back to the news page</p></div>
               <div class="article-flex-container" v-for="(article, i) in articles" :key="i">
                    <div class="article-img" :style="{backgroundImage: `url(${$store.state.SITE_HOST}${article.blog_image})`}"></div>
                    <span class="mt-3">Posted By: Milo de Fries | {{$parent.formatBlogDate(article.posted_on)}}</span>
                    <v-divider style="width:100%;"></v-divider>
                    <h2 class="aticle-title mb-2">{{article.blog_title}}</h2>
                    <div class="article-content" v-html="article.blog_content"></div>
               </div>
               <div class="return mt-3 mb-3" @click="backToBlogs()"><v-icon small color="#818181" style="">arrow_backward</v-icon><p>Go back to the news page</p></div>
           </v-flex>

           <v-flex xs2 sm4 md4 lg4 xlg6 class="all-article-flex pl-5 mt-5">
               <span style="color:#08BA4D;">Other blogs</span>
               <h1>Read also our <br>other blogs</h1>
               <div class="all-article">
                   <div class="other-articles mb-5" :id="blog.id" v-for="(blog, i) in this.$store.state.blogs" :key="i">
                       <div class="blog-img mb-2" :style="{backgroundImage: `url(${blog.blog_image})`}"></div>
                       <p class="font-weight-bold">{{blog.blog_title}}</p>
                       <div class="readmore-container" @click="$parent.newsContent(blog.id)"><button class="readmore-btn text-capitalize" style="color: #10DC87;">Read more<v-icon small color="#10DC87" style="position:relative;left:0px;">arrow_forward</v-icon></button></div>
                   </div>
               </div>
           </v-flex>

       </v-layout>
       
   </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
export default {
    
data(){
    return{
        articles: this.$store.state.article
    }
},

created(){

    // let viewedArticleIndex = this.$store.state.article[0].id - 1
    // this.shiftViewedArticle(viewedArticleIndex)
    // console.log(this.$parent.hallo());
    
},

methods: {

    // shift the article that is being read out the other blog
    shiftViewedArticle(index){

        let blogs = this.$store.state.blogs
        blogs[index] = null
        
    },

    backToBlogs(){
        this.$store.state.component = 'news'
        this.$parent.getBlogs()
    }
    
}

}
</script>

<style scoped>
    
.article-container{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.return{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.return p{
    color: #818181;
    text-align: left;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    right: 60px;
    bottom: 2px;
}

.return .v-icon{

}

.article-layout {
    width: 80%;
}

.article-flex{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.article-flex-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.article-img{
  width: 100%;
  height: 360px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}

.article-content{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.article-content p{
   text-align: left;
   margin: 0px;
}

.article-content h4{
    margin-bottom: 10px;
}

.all-article-flex{
}

.all-article{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: auto;
}

.other-articles{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: auto;
}

.other-articles .blog-img{
  width: 100%;
  height: 190px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  border-radius: 5px;
}

.readmore-container{
    margin-top: 0px;
}

</style>