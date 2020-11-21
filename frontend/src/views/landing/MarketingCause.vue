<template>
	<div class="main">
		<div class="section-4 prefix__section">
			<div class="uk-container uk-container-width">
					<div class="section-2--col-1 section-4--header">
							<h2 class="sub-title dark--color">{{ $t('home2.s3_subTitle') }}</h2>
							<h2 class="main-title">{{ $t('home2.s3_title') }}</h2>
					</div>
					<br><br>

					<div class="graph__section">

							<div class="graph-wrapper">
									<div class="flex-wrapper">
											<div class="single-chart">
													<svg viewBox="0 0 36 36" class="circular-chart green-to-stroke">
															<path class="circle-bg"
																		d="M18 2.0845
		a 15.9155 15.9155 0 0 1 0 31.831
		a 15.9155 15.9155 0 0 1 0 -31.831"
															/>
															<path class="circle"
																		stroke-dasharray="90, 100"
																		d="M18 2.0845
		a 15.9155 15.9155 0 0 1 0 31.831
		a 15.9155 15.9155 0 0 1 0 -31.831"
															/>
															<text x="18" y="20.35" class="percentage">90%</text>
													</svg>
											</div>
									</div>

									<div class="graph__text">
											<h2 class="main-title">{{ $t('home2.s3_consumers') }}</h2>
											<p class="main-text">
													{{ $t('home2.s3_row1_text') }}
											</p>

											<br>
											<a class="link row-link" target="_blank" href="http://www.conecomm.com/research-blog/2015-cone-communications-ebiquity-global-csr-study">
													{{ $t('home2.s3_row1_link') }} <span uk-icon="icon: arrow-right"></span>
											</a>
									</div>
							</div>

							<div class="graph-wrapper">
									<div class="flex-wrapper">
											<div class="single-chart">
													<svg viewBox="0 0 36 36" class="circular-chart green-to-stroke">
															<path class="circle-bg"
																		d="M18 2.0845
		a 15.9155 15.9155 0 0 1 0 31.831
		a 15.9155 15.9155 0 0 1 0 -31.831"
															/>
															<path class="circle"
																		stroke-dasharray="75, 100"
																		d="M18 2.0845
		a 15.9155 15.9155 0 0 1 0 31.831
		a 15.9155 15.9155 0 0 1 0 -31.831"
															/>
															<text x="18" y="20.35" class="percentage">75%</text>
													</svg>
											</div>
									</div>

									<div class="graph__text">
											<h2 class="main-title">{{ $t('home2.s3_respondents') }}</h2>
											<p class="main-text">
													{{ $t('home2.s3_row2_text') }}
											</p>

											<br>
											<a class="link row-link" target="_blank" href="https://www.interbrand.com/wp-content/uploads/2018/02/Best-Global-Brands-2017.pdf">
													{{ $t('home2.s3_row2_link') }} <span uk-icon="icon: arrow-right"></span>
											</a>
									</div>
							</div>

							<div class="graph-wrapper">
									<div class="flex-wrapper">
											<div class="single-chart">
													<svg viewBox="0 0 36 36" class="circular-chart green-to-stroke">
															<path class="circle-bg"
																		d="M18 2.0845
		a 15.9155 15.9155 0 0 1 0 31.831
		a 15.9155 15.9155 0 0 1 0 -31.831"
															/>
															<path class="circle"
																		stroke-dasharray="92, 100"
																		d="M18 2.0845
		a 15.9155 15.9155 0 0 1 0 31.831
		a 15.9155 15.9155 0 0 1 0 -31.831"
															/>
															<text x="18" y="20.35" class="percentage">92%</text>
													</svg>
											</div>
									</div>

									<div class="graph__text">
											<h2 class="main-title">{{ $t('home2.s3_consumers') }}</h2>
											<p class="main-text">
													{{ $t('home2.s3_row3_text') }}
											</p>

											<br>
											<a class="link row-link" target="_blank" href="http://www.conecomm.com/news-blog/2017/5/15/americans-willing-to-buy-or-boycott-companies-based-on-corporate-values-according-to-new-research-by-cone-communications">
													{{ $t('home2.s3_row3_link') }} <span uk-icon="icon: arrow-right"></span>
											</a>
									</div>
							</div>

							<div class="graph-wrapper">
									<div class="flex-wrapper">
											<div class="single-chart">
													<svg viewBox="0 0 36 36" class="circular-chart green-to-stroke">
															<path class="circle-bg"
																		d="M18 2.0845
		a 15.9155 15.9155 0 0 1 0 31.831
		a 15.9155 15.9155 0 0 1 0 -31.831"
															/>
															<path class="circle"
																		stroke-dasharray="66, 100"
																		d="M18 2.0845
		a 15.9155 15.9155 0 0 1 0 31.831
		a 15.9155 15.9155 0 0 1 0 -31.831"
															/>
															<text x="18" y="20.35" class="percentage">66%</text>
													</svg>
											</div>
									</div>

									<div class="graph__text">
											<h2 class="main-title">{{ $t('home2.s3_consumers') }}</h2>
											<p class="main-text">
													{{ $t('home2.s3_row4_text') }}
											</p>

											<br>
											<a class="link row-link" target="_blank" href="https://sproutsocial.com/insights/data/championing-change-in-the-age-of-social-media">
													{{ $t('home2.s3_row4_link') }} <span uk-icon="icon: arrow-right"></span>
											</a>
									</div>
							</div>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MarkingCause'
	}
</script>

<style scoped lang="scss">
	/* @import '../../styles/home.scss'; */
	@import '../../styles/webshops/cause';
</style>