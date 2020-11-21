<template>
	<div class="main">
		<div class="prefix__section">
		 <div class="uk-card shop__card uk-card-default uk-card-body" style="border-radius: 10px;">
			 <div class="uk-container-width testimonial-container" style="padding: 10px !important;">
				 <div class="img-text">
					 <img alt="retailer icon 3" :src="imageUrl">
					 <p><strong> {{ name }} </strong><br> {{ company }} </p>
				 </div>
				 <div class="testimonial-wrapper">
					 <p class="main-title" style="font-weight: bold;font-size: 20px;margin: 0px;">
						{{ title }}
						</p>
						<p class="content-text">
							{{ mainText }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Testimonials",
		props: {
			name: String,
			position: String,
			title: String,
			mainText: String,
			imageUrl: String
		}
	}
</script>

<style scoped lang="scss">
	@import '../../styles/home.scss';
</style>