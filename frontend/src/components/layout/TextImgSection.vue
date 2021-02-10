<template>
	<div class="section-1">
		<div class="uk-container uk-container-width">
			<div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>

				<div class="uk-width-expand" style="text-align: left;">
					<div class="uk-card uk-card-body section-1__col-2">
						<h3 v-if="subTitle" class="sub-title">{{ subTitle }}</h3>
						<h2 v-if="title" class="main-title">{{ title }}</h2>
						<p v-if="mainText" class="main-text">
							{{ mainText }}
						</p>
						<br>
						<div v-if="button" class="col-1--links">
							<router-link :to="`/${$i18n.locale}/webshops/get-started`" class="button"> {{ button }} </router-link>
						</div>
					</div>
				</div>

				<div class="uk-width-auto" style="margin: auto; width: 65%;">
					<div class="uk-card uk-card-body ">
							<img class="col-2--image" style="max-height: 100%; max-width: 100%;" :src="imageUrl"
									alt="Protest climate" uk-img>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TextImgSection",
		props: {
			title: String ,
			subTitle: String,
			mainText: String,
			button: String,
			line: String,
			imageUrl: String
		}
	}
</script>

<style scoped lang="scss">
	@import '../../styles/layout/main';
	@import '../../styles/webshops/cause';
</style>