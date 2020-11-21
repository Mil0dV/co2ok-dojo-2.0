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

						<div class="uk-section section-2 section--content" style="margin-left:24px; margin-top: -32px !important;">
							<div class=" uk-container-width section-2-content col-2 bb-icon-text">
								<img alt="retailer icon 1" src="../../assets/images/webshops/retailers/retailer-icon-1.png">
								<div class="content--wrapper">
									<h2 class="main-title">{{ $t('retailers.row1') }} </h2>
									<p class="content-text">
										Besides the plugin, Co2ok offers various services which can assist you in building a solid MVO strategy. Did you know that broadening your CSR strategy is likely to be more efficient than advertising?
									</p>
								</div>
							</div>
						</div>

						<div class="bb-cta">
							<a href="/#home_form" class="button"> Join the climate fight</a>
						</div>

						<div style="display: flex;">
							<div class="bb-text-left">
								<h2 class="main-title">
									{{ $t('home2.bb-section-title') }}
								</h2>
								<p class="main-text">
									{{ $t('home2.bb-section-text') }}
								</p>
								<br>
							</div>
							<div class="section-2__row-2" style="margin: auto;padding: 16px;">
								<img alt="retailer icon 2"  src="../../assets/images/home2/bb-dashboard.png">
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
	@import '../../styles/layout/section.scss';
  @import '../../styles/webshops/retailers';
	@import '../../styles/landing/bbapi.scss';
</style>