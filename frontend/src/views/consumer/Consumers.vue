<template>
	<div class="main">
		<div class="uk-section section-1" style="background-color: white !important;">
			<Instagram />
		</div>
		<WebshopLogos />
	</div>
</template>

<script>

	const Instagram = () => import('@/views/Instagram')
	const WebshopLogos = () => import('@/components/webshops/WebshopLogos')

	export default {
		name: "Webshops",
		components: {
			'Instagram': Instagram,
			'WebshopLogos': WebshopLogos
		}
	}
</script>

<style scoped lang="scss">
	@import '../../styles/layout/main';
	@import '../../styles/webshops/webshops.scss';

	@media (max-width: 1045px) {
		.section-1 {
			display: flex !important;
			flex-direction: column !important;
		}
	}

</style>