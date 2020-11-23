<template>
	<div class="main prefix__section">

			<div class="uk-section section-2 section--content" style="padding-bottom: 0px;">
					<div class=" uk-container-width section-2-content col-square col-2">
							<img class="retail-icon" alt="retailer icon 1" src="../../assets/images/webshops/retailers/retailer-icon-1.png">

							<div class="content--wrapper">
									<h2 class="main-title">{{ $t('retailLanding.row1') }} </h2>
									<p class="content-text" v-html=" $t('retailLanding.row_text1') "></p>
									<router-link to="/webshops/cause-marketing" class="usp-link">{{ $t('retailLanding.row_button') }}</router-link>
							</div>
					</div>

					<div class=" uk-container-width section-2-content col-square col-2">

							<img class="retail-icon" alt="retailer icon 2" src="../../assets/images/webshops/retailers/retailer-icon-2.png">
							<div class="content--wrapper">
									<h2 class="main-title">{{ $t('retailLanding.row2') }}</h2>
									<p class="content-text" v-html=" $t('retailLanding.row_text2') "></p>
									<!-- <p class="content-text">Up to 15% increased conversion</p> -->
									<router-link to="/clients" class="usp-link">{{ $t('retailLanding.row_button2') }}</router-link>
									<!-- <router-link to="/clients">Check these amazing A/B results</router-link> -->
							</div>
					</div>

			</div>

			<div class="uk-section section-2 section--content">

					<div class="uk-container-width section-2-content col-square col-2">
							<img class="retail-icon truck-icon" alt="retailer icon 3" src="../../assets/images/webshops/retailers/truck.png">

							<div class="content--wrapper">
									<h2 class="main-title">{{ $t('retailLanding.row3') }}</h2>
									<p class="content-text">
											{{ $t('retailLanding.row_text3') }}
									</p>
									<router-link :to="{ path: '/', hash: '#cfd-bb'}" class="usp-link">{{ $t('retailLanding.row_button3') }}</router-link>
							</div>
					</div>

					<div class="uk-container-width section-2-content col-square col-2">

							<img class="retail-icon" alt="retailer icon 4" src="../../assets/images/webshops/retailers/retailer-icon-4.png">
							<div class="content--wrapper">
									<h2 class="main-title">{{ $t('retailLanding.row4') }}</h2>
									<p class="content-text">
											{{ $t('retailLanding.row_text4') }}
									</p>
									<router-link to="/retailers" class="usp-link">{{ $t('retailLanding.row_button4') }}</router-link>
							</div>
					</div>

			</div>

	</div>
</template>

<script>
	export default {
			name: "Retail",
	}
</script>

<style scoped lang="scss">
	@import '../../styles/layout/main.scss';
	@import '../../styles/webshops/retailers';
</style>