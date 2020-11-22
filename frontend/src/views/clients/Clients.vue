<template>
 <div class="main">
	 <Header :image="header"></Header>
	 <TextImgSection
		:title="$t('clients.title')"
		:subTitle="$t('clients.subTitle')"
		:mainText="$t('clients.mainText')"
		:imageUrl="require('../../assets/images/clients/ab-results.png')"
	 >
	 </TextImgSection>
	 <!-- <TextSection
	 	:title="$t('clients.sectionOneTitle')"
		:mainText="$t('clients.sectionOneMainText')"
	 ></TextSection>
	 <TextSection
		:title="$t('clients.sectionOneTitle')"
		:mainText="$t('clients.sectionOneMainText')"
	 ></TextSection> -->
 </div>
</template>

<script>
	const Header = () => import('@/components/layout/Header')
	const TextImgSection = () => import('@/components/layout/TextImgSection')
	const TextSection = () => import('@/components/layout/TextSection')


	export default {
			name: "Clients",
			components: {
					'Header': Header,
					'TextImgSection': TextImgSection,
					'TextSection': TextSection
			},

			data() {
					return {
							header: 'clients'
					}
			}
	}
</script>

<style scoped lang="scss">
	@import '../../styles/layout/main.scss';
	@import '../../styles/webshops/retailers';
</style>