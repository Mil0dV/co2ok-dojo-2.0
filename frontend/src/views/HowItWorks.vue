<template>
	<div class="main">
		<Header :image="header"></Header>
		<div class="steps__container">
            <h2 class="main-title">
                {{ $t('home2.steps_title') }}
            </h2>

						 <!--Stap 1z-->
						 <div uk-grid class="steps__intro uk-child-width-expand@s uk-text-center">
							<div class="step__text-wrapper step__img-left">
									<div class="intro__text step__col steps__content steps__content-left uk-padding">
											<div class="steps__wrapper">
													<div class="steps__title-container">
															<i class="fas fa-shopping-cart step__icon"></i>
															<p class="steps__title">
																	Install CO₂ok
															</p>
													</div>

													<p class="main-text">
															Quickly and seamlessly add the CO₂ok plugin to your webstore
													</p>
											</div>
									</div>
							</div>

							<div class="step__text-wrapper step__img-wrapper">
									<div class="uk-light step__img-right">
											<img class="step__img uk-box-shadow-large" alt="payment"
													 src="../assets/images/home2/shoppingcart-snippet-nl.png">
									</div>
							</div>
					</div> 

            <!--Stap 1-->
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
                                <i class="fas fa-smog step__icon"></i>
                                <p class="steps__title">
                                    {{ $t('home2.s2_title') }}
                                </p>
                            </div>

                            <p class="main-text">
                                {{ $t('home2.s2_text') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!--Stap 2-->
            <div uk-grid class="steps__intro uk-child-width-expand@s uk-text-center">
                <div class="step__text-wrapper step__img-left">
                    <div class="intro__text step__col steps__content steps__content-left uk-padding">
                        <div class="steps__wrapper">
                            <div class="steps__title-container">
                                <i class="fas fa-shopping-cart step__icon"></i>
                                <p class="steps__title">
                                    {{ $t('home2.s3a_title') }}
                                </p>
                            </div>

                            <p class="main-text">
                                {{ $t('home2.s3_text') }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="step__text-wrapper step__img-wrapper">
                    <div class="uk-light step__img-right">
                        <img class="step__img uk-box-shadow-large" alt="payment"
                             src="../assets/images/steps/step-3.jpg">
                    </div>
                </div>
            </div> 


            <!--Stap 3-->
            <div uk-grid class="steps__intro steps__intro-reverse uk-child-width-expand@s uk-text-center">
                <div class="step__text-wrapper step__img-left step__img-wrapper">
                    <div class="uk-light step__img-left">
                        <img class="step__img  uk-box-shadow-large" alt="solar-panels"
                             src="../assets/images/steps/step-2.jpg">
                    </div>
                </div>

                <div class="step__text-wrapper">
                    <div class="intro__text step__col steps__content steps__content-right uk-padding">
                        <div class="steps__wrapper">
                            <div class="steps__title-container">
                                <i class="fas fa-solar-panel step__icon"></i>
                                <p class="steps__title">
                                    {{ $t('home2.s4_title') }}
                                </p>
                            </div>

                            <p class="main-text">
                                {{ $t('home2.s4_text') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <!--Stap 4-->
            <div uk-grid class="steps__intro uk-child-width-expand@s uk-text-center">
                <div class="step__text-wrapper step__img-left">
                    <div class="intro__text step__col steps__content steps__content-left uk-padding">
                        <div class="steps__wrapper">
                            <div class="steps__title-container">
                                <i class="fas fa-check step__icon"></i>
                                <p class="steps__title">
                                    {{ $t('home2.s5_title') }}
                                </p>
                            </div>

                            <p class="main-text" v-html="$t('home2.s5_text')" >
                            </p>
                        </div>
                    </div>
                </div>

                <div class="step__text-wrapper step__img-wrapper">
                    <div class="uk-light step__img-right">
                        <img class="step__img step__img-4 uk-box-shadow-large" alt="payment"
                             src="../assets/images/steps/step-4.jpg">
                    </div>
                </div>
							</div>
        </div>

	</div>
</template>

<style scoped lang="scss">
	@import '../styles/home.scss';
</style>