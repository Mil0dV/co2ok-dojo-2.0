<template>
	<div class="main" id="cfd-bb">

		<!-- BB API -->
		<div class="co2ok-section section-1">
			<div class="uk-container uk-container-width">
				<div class="uk-width-expand">
					<div class="main-section-title">
							<h2>Climate Friendly Delivery</h2>
							<br>
					</div>
				</div>

				<div class="prefix__section">
					<div class="section__white-square">

						<div class="uk-section section--content bbapi-content-top">
							<div class=" uk-container-width section-2-content col-2 bb-icon-text">
								<img class="cfd-png" alt="retailer icon 1" src="../../assets/images/webshops/retailers/heart_plane.png">
								<div class="content--wrapper">
									<h2 class="main-title">Greenify your shipping </h2>
									<p class="content-text">
										With CFD your delivery is climate Friendly - compensation of the emissions is included in our service! Also you get insight in your impact and can give your consumers the choice to choose the most environmentally friendly delivery option.
									</p>
								</div>
							</div>
						</div>

						<div class="bb-cta">
							<router-link to="/webshops/get-started" class="button">Join the climate fight</router-link>
						</div>

						<div class="section-2__content">
							<div class="section-2__row-1">
									<h2 class="main-title">
										{{ $t('home2.bb-section-title') }}
									</h2>
									<p class="main-text">
										{{ $t('home2.bb-section-text') }}
									</p>
									<br>
							</div>
							<div class="section-2__row-2">
								<img class="section-2__image" alt="retailer icon 2"  style="width: 532px; height:280px;" src="../../assets/images/home2/bb-dashboard.png">
							</div>
						</div>

					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
			name: "BBApi",
	}
</script>

<style scoped lang="scss">
	@import '../../styles/layout/main.scss';
	@import '../../styles/home.scss';

	@import '../../styles/layout/section.scss';
  @import '../../styles/webshops/retailers';
	@import '../../styles/landing/bbapi.scss';
</style>