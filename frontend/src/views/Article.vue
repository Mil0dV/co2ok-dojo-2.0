<template>
   <div class="article-container">
       
       <v-layout row wrap justify-center align-start class="article-layout">

           <v-flex xs12 sm8 md8 lg8 xlg6 class="article-flex">
               <router-link to="/news" class="return mt-5 animated bounceInDown"><div class="return mb-3"><v-icon small color="#818181" style="">arrow_backward</v-icon><p>Go back to the news page</p></div></router-link>
               <div class="article-flex-container" v-for="(article, i) in articles" :key="i">
                    <div class="article-img animated zoomIn" :style="{backgroundImage: `url(${$store.state.SITE_HOST}${article.blog_image})`}"></div>
                    <span class="mt-3 animated fadeInUp">Posted By: Milo de Fries | {{formatBlogDate(article.posted_on)}}</span>
                    <v-divider style="width:100%;"></v-divider>
                    <h2 class="aticle-title mb-2 animated fadeInUp" style="text-align: left;">{{article.blog_title}}</h2>
                    <div class="article-content" style="text-align: left;" v-html="article.blog_content"></div>
               </div>
               <router-link to="/news" class="return"><div class="return mt-3 mb-3"><v-icon small color="#818181" style="">arrow_backward</v-icon><p>Go back to the news page</p></div></router-link>
           </v-flex>

           <v-flex xs12 sm4 md4 lg4 xlg6 class="all-article-flex">
               <span style="color:#08BA4D; text-align: left;" class="animated fadeInUp">Other blogs</span>
               <h1 style="text-align: left;" class="animated fadeInUp">Read also our <br>other blogs</h1>
               <div class="all-article">
                   <div class="other-articles mb-5" :id="blog.id" v-for="(blog,i) in this.$store.state.blogs" :key="i">
                       <div class="blog-img mb-2 animated zoomIn" :style="{backgroundImage: `url(${blog.blog_image})`}"></div>
                       <p class="font-weight-bold" style="text-align: left;margin-bottom:7px;">{{blog.blog_title}}</p>
                       <router-link :to="`/news/${blog.id}`" class="readmore-container" style="position:relative; right: 5px;"><div class="readmore-container" @click="article(blog.id)"><button class="readmore-btn text-capitalize" style="color:#10DC87;margin-top: 0px;">Read more<v-icon small color="#10DC87" class="read-more-arrow" style="position:relative;left:5px;">arrow_forward</v-icon></button></div></router-link>
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

    this.article(this.$route.params.id)
    this.getBlogs()

},

methods: {

    // shift the article that is being read out the other blog
    shiftViewedArticle(index){

        let blogs = this.$store.state.blogs
        blogs[index] = null
        
    },


    stripBlogContent(content){
          return content.substr(0,150)+'...'
    },

    formatBlogDate(content){
          let date = content.substr(0,10)
          return date
    },

    article(id){
        this.$store.commit('getArticle', id)
    },

    getBlogs() {
        
        let self = this
        this.$axios.get(`${this.$store.state.SITE_HOST}/blog/`,{
            headers: {
                // "X-CSRFToken": `${this.$store.state.userToken}`,
                // Authorization: `token ${window.localStorage.getItem('userToken')}`
            }
        }).then(response => {

            self.$store.commit('getBlogs', response.data)
            
        }).catch(error => {
            console.log(error);
            
        })

    },
        
    
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
    padding-left: 48px;
    margin-top: 100px;
}

.all-article{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: auto;
    margin-top: 48px;
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

.readmore-container:hover .read-more-arrow{
    transition: margin-left 0.3s linear 0s;
    margin-left: 3px;
}

@media only screen and (max-width: 800px){

    .article-layout{
        width: 90%;
    }
    .aticle-title{
        font-size: 20px;
    }

    .all-article-flex{
        padding-left: 0px;
        margin-top: 30px;
    }

    .all-article{
        flex-direction: row;
        flex-wrap: wrap;
    }

    .all-article-flex h1{
        font-size: 30px;
    }

    .other-articles .blog-img{
        /* width: 100%;
        height: 190px; */
    }

}

@media only screen and (min-width: 1000px) and (max-width: 1030px){

    .article-layout{
        width:95%;
    }

    .all-article-flex{
        padding-left: 50px;
    }

    .other-articles .blog-img{
        width: 190px;
        height: 150px;
    }

    .all-article-flex h1{
        font-size: 25px;
    }

}


</style>