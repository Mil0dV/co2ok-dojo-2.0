<template>
	<div class="main">

		<TextImgSection
			:title="$t('howItWorks.title')"
			:subTitle="$t('howItWorks.subTitle')"
			:mainText="$t('howItWorks.mainText')"
			:button="$t('howItWorks.button')"
			:imageUrl="require('../assets/images/steps/webshop-cart.png')"
		>
		</TextImgSection>

		<div class="steps__container">
			<h2 class="main-title" style="padding-top: 42px;">
				{{ $t('howItWorks.steps_title') }}
			</h2>
			<h2 class="sub-title">
				{{ $t('howItWorks.steps_subtitle') }}
			</h2>

			<!--Stap 1-->
			<div uk-grid class="steps__intro uk-child-width-expand@s uk-text-center">
				<div class="step__text-wrapper step__img-left">
					<div class="intro__text step__col steps__content steps__content-left uk-padding">
						<div class="steps__wrapper">
							<div class="steps__title-container">
								<i class="fas fa-download step__icon"></i>
								<p class="steps__title">
									{{ $t('howItWorks.s1_title') }}
								</p>
							</div>

							<p class="main-text">
								{{ $t('howItWorks.s1_text') }}
							</p>
						</div>
					</div>
				</div>

				<div class="step__text-wrapper step__img-wrapper">
					<div class="uk-light step__img-right">
						<img class="step__img uk-box-shadow-large" alt="payment"
							src="../assets/images/steps/shopify-store.jpg">
					</div>
				</div>
			</div>

			<!--Stap 2-->
			<div uk-grid class="steps__intro steps__intro-reverse uk-child-width-expand@s uk-text-center">
				<div class="step__text-wrapper  step__img-left step__img-wrapper">
					<div class="uk-light">
						<img class="step__img uk-box-shadow-large" alt="2 factory"
							src="../assets/images/home2/shoppingcart-snippet-nl.png">
					</div>
				</div>

				<div class="step__text-wrapper">
					<div class="intro__text step__col steps__content steps__content-right uk-padding">
						<div class="steps__wrapper">
							<div class="steps__title-container">
								<i class="fas fa-shopping-cart step__icon"></i>
								<p class="steps__title">
									{{ $t('howItWorks.s2_title') }}
								</p>
							</div>

							<p class="main-text">
								{{ $t('howItWorks.s2_text') }}
							</p>
						</div>
					</div>
				</div>
			</div>

			<!--Stap 3-->
			<div uk-grid class="steps__intro uk-child-width-expand@s uk-text-center">
				<div class="step__text-wrapper step__img-left">
					<div class="intro__text step__col steps__content steps__content-left uk-padding">
						<div class="steps__wrapper">
							<div class="steps__title-container">
								<i class="fas fa-check step__icon"></i>
								<p class="steps__title">
									{{ $t('howItWorks.s3_title') }}
								</p>
							</div>

							<p class="main-text">
								{{ $t('howItWorks.s3_text') }}
							</p>
						</div>
					</div>
				</div>

				<div class="step__text-wrapper step__img-wrapper">
					<div class="uk-light step__img-right">
						<img class="step__img  uk-box-shadow-large" alt="solar-panels"
							src="../assets/images/steps/step-2.jpg">
					</div>
				</div>

			</div>


			<!--Stap 4-->
			<div uk-grid class="steps__intro steps__intro-reverse uk-child-width-expand@s uk-text-center">
				<div class="step__text-wrapper  step__img-left step__img-wrapper">
					<div class="uk-light">
						<img class="step__img step__img-4 uk-box-shadow-large" alt="payment"
							src="../assets/images/steps/step-4.jpg">
					</div>
				</div>
				<div class="step__text-wrapper">
					<div class="intro__text step__col steps__content steps__content-right uk-padding">
						<div class="steps__wrapper">
							<div class="steps__title-container">
								<i class="fas fa-solar-panel step__icon"></i>
								<p class="steps__title">
									{{ $t('howItWorks.s4_title') }}
								</p>
							</div>

							<p class="main-text" v-html="$t('howItWorks.s4_text')" >
							</p>
						</div>
					</div>
				</div>

			</div>
		</div>

	<MarketingCause />
	<Partners />
	<WebshopLogos />
	<WebshopForm :content="formContent"/>

	</div>
</template>

<script>
	const TextImgSection = () => import('@/components/layout/TextImgSection')
	const MarketingCause = () => import('@/views/landing/MarketingCause')
	const Partners = () => import('@/views/landing/Partners')
	const WebshopForm = () => import('@/components/layout/WebshopForm')
	const WebshopLogos = () => import('@/components/webshops/WebshopLogos')

	export default {
		name: "HowItWorks",
		components: {
			'TextImgSection': TextImgSection,
			'MarketingCause': MarketingCause,
			'Partners': Partners,
			'WebshopForm': WebshopForm,
			'WebshopLogos': WebshopLogos
		},
		data() {
			return {
				header: 'retailers',
				image: '../../assets/clients/ab-results.png'
			}
		},
	}
</script>

<style scoped lang="scss">
	@import '../styles/layout/main';
	@import '../styles/webshops/webshops';
</style>