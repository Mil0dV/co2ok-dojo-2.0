<template>
  
<div class="news-container">

    <div class="news-header">
        <h3>News</h3>
    </div>

    <v-layout column class="feeds-layout" style=" border:1px solid blue;">

        <v-flex xs12 sm12 md12 lg12 xlg12 class="feeds-flex mb-5">

           <p>Instagram feed</p>
           <h1 class="mb-3">Follow us on Instagram</h1>

           <div class="feeds"></div>

        </v-flex>

        <v-flex xs12 sm12 md6 lg6 xlg6 class="blogs-flex mb-5">
            <p>Our blog</p>
            <h1 class="mb-3">Read our stories, tips and more</h1>

            <div class="blog-header mb-4">
                <h5 class="font-weight-bold">Love for the climate | 6 tips for sustainable<br> festivals in the Netherlands 2018</h5>
                <p>Sustainable festivals in the Netherlands 2018. The festival season is in full swing!<br> With the tips below you can visit sustainable festivals with love for the climate… </p>
            </div>

            <div class="blog-content">

                <div class="blog-items" v-for="(blog, i) in blogs" :key="i">
                    <div class="blog-img mb-4"
                      :style="{backgroundImage: `url(${blog.blog_image})`}"
                    ></div>
                    <span>Posted By: Milo de Fries | {{blog.posted_on}} 16:49</span>
                    <p class='blog-title'>{{blog.blog_title}}</p>
                    <v-divider></v-divider>
                    <p class="blog-content-txt">{{blog.blog_content}}</p>
                    <v-btn depressed flat>Read more<v-icon small></v-icon></v-btn>
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

Vue.use(Vuetify);
export default {
    name: 'blog',

    data() {
        return {

         blogs: this.$store.state.blog

        }
    },

    created(){
        this.getBlogs()
        console.log(this.blogs)
    },

    methods: {

      getBlogs() {
        
        let self = this
        this.$axios.get(`${this.$store.state.SITE_HOST}/blog/`,{
            headers: {
                "X-CSRFToken": `${this.$store.state.userToken}`,
                Authorization: `token ${window.localStorage.getItem('userToken')}`
            }
        }).then(response => {
            self.$store.commit('getBlogs', response.data)
            console.log(response);
            
        }).catch(error => {
            console.log(error);
            
        })

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
    /* background-image: url('../assets/images/home/homebackground 1.png'); */
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100% 100%;
    margin-bottom: 55px;
    border: 1px solid yellow;

}

.feeds-layout{
    width: 100%;
    justify-items: center;
    align-items: start;
}

.feeds-flex {
    width: 70%;
    margin: auto;
}

.feeds-flex p, .blogs-flex p{
  text-align: left;
  font-size: 16px;
  color: #08BA4D;
  margin: 0px;
  padding: 0px;
}

.feeds-flex h1, .blogs-flex h1{
    font-size: 42px;
    color: #606468;
    text-align: left;
}

.feeds{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid red;
}

.blogs-flex{
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid green;
}


.blog-header{
    width: 100%;
    height: 490px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background-image: url('../assets/images/blog/festival.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 3px;
    border: 1px solid magenta;
}


.blog-header h5{
    font-size: 24px;
    text-align: left;
    color: white;
    margin-bottom: 0px;
    margin-left: 30px;
}

.blog-header p{
    font-size: 16px;
    text-align: left;
    color: white;
    margin-left: 30px;
    margin-bottom: 30px;
}

.blog-content{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    border: 1px solid black;
}

.blog-items{
    width: 49%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 5px;
    border: 1px solid red;
}

.blog-img{
    width: 100%;
    height: 218px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.blog-items span{
    font-size: 15px;
}

.blog-items span, .blog-items p{
    margin: auto;
    width: 80%
}

.blog-content-txt{
    font-size: 16px;
    color: black;
    text-align: left;
}


 
</style>

