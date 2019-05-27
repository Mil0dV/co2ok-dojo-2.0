<template>

<v-layout column class="feeds-layout" style="">

        <v-flex xs12 sm12 md12 lg12 xlg12 class="feeds-flex mb-5">

           <p class="feed-header-p animated fadeInUp">Instagram feed</p>
           <h1 class="mb-3 animated fadeInUp">Follow us on Instagram</h1>

           <div class="feeds"></div>

        </v-flex>

        <v-flex xs12 sm12 md6 lg6 xlg6 class="blogs-flex mb-5">
            <p class="blog-header-p">Our blog</p>
            <h1 class="blog-flex-header mb-3">Read our stories, tips and more</h1>

            <div class="blog-header mb-4" style="border: 1px solid grey;background-color:grey;" data-aos="zoom-in" data-aos-duration="1000">
                <h5 class="font-weight-bold" data-aos="fade-up" data-aos-duration="1000">Love for the climate | 6 tips for sustainable<br> festivals in the Netherlands 2018</h5>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Sustainable festivals in the Netherlands 2018. The festival season is in full swing!<br> With the tips below you can visit sustainable festivals with love for the climate… </p>
            </div>

            <div class="blog-content">

                <div class="blog-items pb-4 mb-3" :id="blog.id" v-for="(blog, i) in this.$store.state.blogs" :key="i" data-aos="zoom-in-up"
                      data-aos-duration="1000"
                      :data-aos-delay="i*200">
                    <div class="blog-img mb-4"
                      :style="{backgroundImage: `url(${blog.blog_image})`}"
                    ></div>
                    <div class='blog-contents-container pa-1'>
                        <span>Posted By: Milo de Fries | {{formatBlogDate(blog.posted_on)}} 16:49</span>
                        <p class='blog-title' v-html="blog.blog_title"></p>
                        <v-divider style="width:85%;"></v-divider>
                        <p class="blog-content-txt" v-html="stripBlogContent(blog.blog_preface)"></p>
                        <div :class="[blog.id]" class="readmore-container" @click="newsContent()"><button class="readmore-btn text-capitalize mt-3">Read more<v-icon small color="#10DC87" style="position:relative;left:10px;">arrow_forward</v-icon></button></div>
                    </div>
                </div>

            </div>
        </v-flex>    
            
    </v-layout>

</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
export default {

data(){
    return {
        blogs: this.$store.state.blogs,
    }
},

created(){
    this.getBlogs()
    console.log(this.blogs)
},

mounted(){
     this.getBlogs()
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

      newsContent(){
        // this.$store.state.component = 'content'
        let articleId = event.currentTarget.classList
        console.log(articleId);
        
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
    background-image: url('../../assets/images/blog/iStock.png');
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100% 100%;
    margin-bottom: 55px;
}

.news-header h3{
    margin-left: 150px;
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

.feeds-flex .feed-header-p, .blogs-flex .blog-header-p{
  text-align: left;
  font-size: 16px;
  color: #08BA4D;
  margin: 0px;
  padding: 0px;
}

.feeds-flex h1, .blog-flex-header{
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
}

.blogs-flex{
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}


.blog-header{
    width: 100%;
    height: 490px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background-image: url('../../assets/images/blog/festival.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 3px;
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
}

.blog-items{
    width: 49%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)
}

.blog-img{
    width: 100%;
    height: 218px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 5px 5px 0px 0px;
}

.blog-contents-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;

}

.blog-items span{
    font-size: 15px;
    color: #959595;
}

.blog-items span, .blog-items p{
    margin: 0px;
    width: 85%;
    text-align: left;
}

.blog-title{
    font-size: 21px;
}

.blog-content-txt{
    font-size: 16px;
    color: black;
    text-align: left;
}

.readmore-container{
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    width: 100%;
    height: auto;
}

.readmore-container .readmore-btn{
    margin-left: 35px;
    color: #10DC87;
}

</style>

