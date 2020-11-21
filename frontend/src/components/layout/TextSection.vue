<template>
	<div class="main">
		<div class="uk-card shop__card uk-card-default uk-card-body">
			<div class=" uk-container-width testimonial-container" style="padding: 10px !important; margin: auto;">
					<div class="section-text-wrapper">
							<h2 class="section-main-title" style="font-weight: bold;font-size: 20px;margin: 0px;">{{ title }}</h2>

							<p class="content-text">
									{{ mainText }}
							</p>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TextSection',
		props: {
			title: String,
			mainText: String
		}
	}
</script>

<style scoped lang="scss">
	@import '../../styles/layout/section.scss';
</style>