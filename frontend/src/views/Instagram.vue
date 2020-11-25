<template>
  <div class="news-container">

    <v-layout column class="feeds-layout">

      <v-flex xs12 sm12 md12 lg12 xlg12 class="feeds-flex mb-5">

        <a href="https://www.instagram.com/co2ok.eco/" target=_blank style="text-decoration: none;">
            <p class="feed-header-p animated fadeInUp">Follow us on Instagram</p>
        </a>
        <!-- <h1 class="mb-3 animated fadeInUp">Follow us on Instagram</h1> -->

        <div class="feeds">
          <!-- <div class="insta-container" style="">
              <a :href="link" target="_blank" style="" class="insta-link">
                  <img :src="image"/>
               </a>
           </div> -->
					<div id="instafeed"></div>
					</div>
				</v-flex>
			</v-layout>
			<!-- add to class below to remove arrows on mobile hidden-md-and-down -->
			<div class="insta-ctrl ">
				<v-icon medium v-if="instaPrev" @click="instaFeedsPrev"
					style="background-color: #08BA4D;color: white;border-radius: 100%;padding: 8px;cursor: pointer;"
					class="insta-ctrl-btn mr-1 fas fa-arrow-left">
				</v-icon>
				<v-icon medium v-if="instaNext" @click="instaFeedsNext"
					style="background-color: #08BA4D;color: white;border-radius: 100%;padding: 8px;cursor: pointer;"
					class="insta-ctrl-btn ml-1 fas fa-arrow-right">
				</v-icon>
			</div>
		</div>
</template>

<script>
	import Vue from 'vue'
	import Vuetify from 'vuetify'
	import 'vuetify/dist/vuetify.min.css'
	import Instafeed from 'instafeed.js'
	import LoadScript from 'vue-plugin-load-script';

	Vue.use(Vuetify, LoadScript);
	export default {
			name: 'instagram',

			data() {
					return {
							blogs: this.$store.state.blogs,
							instaOptions: {
									get: 'user',
									// userId: process.env.INSTA_USER_ID,
									userId: '6780198652',
									limit: 24,
									resolution: 'standard_resolution',
									// height: '500px',
									accessToken: "InstagramToken",
									template: '<div class="insta-container animated zoomIn" style="z-index: 0;width: 400px; height: 400px;display:flex;justify:center;align-items:center;"><a href="{{link}}" target="_blank" style="width: 400px;height:400px;border-radius: 5px;"><img src="{{image}}" style="width: 100%;height:100%;border-radius: 5px;"/></a></div>',
									sortBy: 'most-recent'
									// filter: function(image) {
									//     return image.tags.indexOf('TAG_NAME') >= 0;
									// }
							},
							instaNext: true,
							instaPrev: false,
							slide: 0,
							slideAnimation: 'slideInRight'
					}
			},

			mounted() {
					this.getInstaFeed()

			},

			methods: {
					getInstaFeed() {
							this.$loadScript('https://ig.instant-tokens.com/users/d8ce056d-25a8-421f-8bb2-da6ff5221048/instagram/17841406919567524/token.js?userSecret=jc9z3ww0mjmi6hdd8vc4u').then(() => {
									this.instaOptions["accessToken"] = InstagramToken
									let feed = new Instafeed(
											this.instaOptions
									);
									feed.run();
							})
					},

					stripBlogContent(content) {
							return content.substr(0, 150) + '...'
					},

					formatBlogDate(content) {
							let date = content.substr(0, 10)
							return date
					},

					newsContent(articleId) {

							this.$store.commit('getArticle', articleId)

					},

					instaFeedsNext() {

							let instaContainer = document.querySelector('#instafeed')
							let feedBySlide = 2 //number of image sliding out
							let slideCount = (this.instaOptions.limit / feedBySlide) - 1
							let paginationNumber = 600 // number of pixel moving while sliding
							this.slide += paginationNumber

							if (this.slide <= paginationNumber * slideCount) {

									this.instaPrev = true
									instaContainer.style.transition = 'margin-left 0.5s linear 0s'
									instaContainer.style.marginLeft = `-${this.slide}px`

							} else {
									this.slide = paginationNumber * slideCount
									this.instaNext = false
									this.instaPrev = true
							}

					},

					instaFeedsPrev() {

							let instaContainer = document.querySelector('#instafeed')
							let feedBySlide = 2 //number of image sliding out
							let slideCount = (this.instaOptions.limit / feedBySlide) - 1
							let paginationNumber = 600 // number of pixel moving while sliding
							this.slide -= paginationNumber

							if (this.slide >= paginationNumber) {

									this.instaNext = true
									this.instaPrev = true
									instaContainer.style.transition = 'margin-left 0.5s linear 0s'
									instaContainer.style.marginLeft = `-${this.slide}px`

							} else if (this.slide == paginationNumber) {
									this.slide = paginationNumber
									this.instaNext = true
									this.instaPrev = false
							} else {
									this.instaNext = true
									this.instaPrev = false
									instaContainer.style.transition = 'margin-left 0.5s linear 0s'
									instaContainer.style.marginLeft = `-${this.slide}px`
									this.slide = 0
							}

					}

			}

	}

</script>

<style scoped>
	.news-container {
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
	}

	.news-header {
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

	.news-header h3 {
			margin-left: 200px;
	}

	.feeds-layout {
			width: 55%;
			margin: auto;
			justify-items: center;
			align-items: flex-start;
	}

	.feeds-flex {
			width: 100%;
			margin: auto;
	}

	.feeds-flex .feed-header-p, .blogs-flex .blog-header-p {
			text-align: left;
			font-size: 16px;
			color: #08BA4D;
			margin: 0px;
			padding: 0px;
	}

	.feeds-flex h1, .blog-flex-header {
			font-size: 42px;
			color: #606468;
			text-align: left;
	}

	.feeds {
			/* width: 90%; */
			height: auto;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			overflow-x: scroll;
	}

	::-webkit-scrollbar {
			width: 0px;
	}

	#instafeed {
			width: 50%;
			height: 400px;
			display: flex;
			justify-content: space-between;
			align-items: center;
	}

	.insta-ctrl {
			/* margin: auto; */
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: flex-end;
			z-index: 3;
			position: absolute;
			right: 18%;
	}

	.insta-container {
			border: 1px solid blue;
			width: 100%;
			height: 500px;
			display: flex;
			justify-content: center;
			align-items: center;
	}

	.insta-ctrl-btn:hover {
			transform: scale(0.9, 0.9)
	}

	.feeds a {
			width: 300px;
			height: 500px;
			border: 1px solid green
	}

	.insta-container a img {
			width: 300px;
			height: 500px;
			border: 1px solid magenta
	}

	@media (max-width: 900px) {
		.feeds-flex {
				width: 440px !important;
			}
		.feeds-layout {
			width: 100%;
		}
	}

	@media only screen and (max-width: 800px) {

			.insta-ctrl {
				right: 10%;
				margin-top: 333px;
			}

			.feeds-flex {
				width: 400px !important;
			}

			.feeds-flex .feed-header-p, .blogs-flex .blog-header-p {
					text-align: center;
			}

			.feeds-flex h1, .blog-flex-header {
					text-align: center;
					font-size: 25px;
			}

			.feeds-layout {
					align-items: center;
			}

	}

</style>

