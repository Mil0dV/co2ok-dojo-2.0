<template>
    <div class="main">
        <div class="uk-section section-2" id="webshops">
            <div class="uk-container uk-container-width">
                <div class="section-2--col-1">
                    <h1 class="main-title">{{ $t('webshops.title2') }}</h1>
                    <h2 class="sub-title sub-title--s2">{{ $t('webshops.subTitle2') }}</h2>
                </div>
                <br>

                <div class="section-2--col-2">
                    <a target="_blank" :href="i.link" :style="{'background-image': 'url(' + require(`@/assets/images/webshops/shops/${i.image}.png`) + ')'}"
                         class=" shops--image section-2--shops" v-for="i in webshop" :key="i.link">
                        <div class="section-2--shops shop--image-wrapper ">
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "WebshopLogos",
        props: {
            content: Number
        },

        data() {
            return {
                header: 'webshops',
                webshop: [
                    // {
                    //     image: 'shop-1',
                    //     link: 'https://www.natuurlijk-kleurrijk.nl/'
                    // },
                    {
                        image: 'shop-2',
                        link: 'https://woonliving.nl/'
                    },
                    // {
                    //     image: 'shop-3',
                    //     link: 'http://www.natuurvol.nl/wonen'
                    // },
                    {
                        image: 'shop-4',
                        link: 'https://www.soap7.com/'
                    },
                    {
                        image: 'shop-5',
                        link: 'https://www.myomydogoods.com/'
                    },
                    {
                        image: 'shop-6',
                        link: 'https://www.zaailingen.com/'
                    },
                    {
                        image: 'shop-7',
                        link: 'https://happytowels.nl/'
                    },
                    {
                        image: 'shop-8',
                        link: 'https://www.fairtradeupgrade.shop/'
                    },
                    {
                        image: 'shop-41',
                        link: 'https://naifcare.com/'
                    },
                    {
                        image: 'shop-35',
                        link: 'https://www.urban-goddess.com/'
                    },
                    {
                        image: 'shop-36',
                        link: 'https://willicroft.com/'
                    },
                    {
                        image: 'shop-37',
                        link: 'https://degroenelinde.nl/'
                    },
                    {
                        image: 'shop-9',
                        link: 'http://www.dimlight.nl/'
                    },
                    {
                        image: 'shop-10',
                        link: 'http://www.metpapier.nl/'
                    },
                    // {
                    //     image: 'shop-11',
                    //     link: 'https://bamboedesign.nl/'
                    // },
                    {
                        image: 'shop-12',
                        link: 'http://www.aquaponicsshop.eu/'
                    },
                    // {
                    //     image: 'shop-13',
                    //     link: 'http://helpenderobot.nl/'
                    // },
                    {
                        image: 'shop-14',
                        link: 'https://millersoils.nl/'
                    },
                    // {
                    //     image: 'shop-15',
                    //     link: 'https://www.billenboetiek.nl/'
                    // },
                    {
                        image: 'shop-16',
                        link: 'https://www.bruidenbeautyshop.nl/?v=796834e7a283'
                    },
                    // {
                    //     image: 'shop-17',
                    //     link: 'https://verloskundeshop.nl/'
                    // },
                    {
                        image: 'shop-18',
                        link: 'http://www.studiospatz.nl/'
                    },
                    {
                        image: 'shop-19',
                        link: 'https://www.krnwtr.nl/'
                    },
                    // {
                    //     image: 'shop-20',
                    //     link: 'https://www.myflame.nl/'
                    // },
                    {
                        image: 'shop-21',
                        link: 'https://douchezaak.nl/'
                    },
                    {
                        image: 'shop-22',
                        link: 'https://thuisrecycling.nl/'
                    },
                    {
                        image: 'shop-23',
                        link: 'https://www.nomadcruise.com/'
                    },
                    {
                        image: 'shop-24',
                        link: 'https://zenology.com/'
                    },
                    {
                        image: 'shop-25',
                        link: 'https://hipandhappy.ch/'
                    },
                    {
                        image: 'shop-26',
                        link: 'https://breakthroughbiolabs.com/'
                    },
                    {
                        image: 'shop-27',
                        link: 'https://bouwbesluitshop.nl/'
                    },
                    {
                        image: 'shop-28',
                        link: 'https://littlebabysam.nl/'
                    },
                    {
                        image: 'shop-29',
                        link: 'https://www.lijfgoed.nl/'
                    },
                    // {
                    //     image: 'shop-30',
                    //     link: 'https://food2smile.nl/'
                    // },
                    {
                        image: 'shop-31',
                        link: 'https://www.verifresh.com/'
                    },
                    {
                        image: 'shop-32',
                        link: 'https://www.biolovers.nl/'
                    },
                    {
                        image: 'shop-33',
                        link: 'https://www.ecowings.nl/'
                    },
                    {
                        image: 'shop-34',
                        link: 'https://degroenebillenbode.nl/'
                    },
                    {
                        image: 'shop-38',
                        link: 'https://bio-brouwmaat.nl/'
                    },
                    {
                        image: 'shop-39',
                        link: 'https://makedo.shop/'
                    },
                    {
                        image: 'shop-40',
                        link: 'https://www.ecoloco.nl/'
                    },
                    {
                        image: 'shop-42',
                        link: 'https://kussens.nu/'
                    },
                    {
                        image: 'shop-43',
                        link: 'https://bosbeauty.nl/'
                    },
                    {
                        image: 'shop-44',
                        link: 'https://mekpaardensport.nl/'
                    },
                    {
                        image: 'shop-45',
                        link: 'https://mijnkraamshop.nl/'
                    },
                    {
                        image: 'shop-46',
                        link: 'https://bergco.net/'
                    },
                    {
                        image: 'shop-47',
                        link: 'https://ruigengeroest.nl/'
                    },
                    {
                        image: 'shop-52',
                        link: 'https://fairbowusa.com/'
                    },
                    {
                        image: 'shop-54',
                        link: 'https://handigs.nl/'
                    },
                    {
                        image: 'shop-55',
                        link: 'https://churpi.eu/'
                    },
                    {
                        image: 'shop-56',
                        link: 'https://deschaineandco.com/'
                    },
                    {
                        image: 'shop-57',
                        link: 'https://photounited.nl/'
                    },
                    {
                        image: 'shop-58',
                        link: 'https://purestart.nl/'
                    },
                    {
                        image: 'shop-59',
                        link: 'https://allespuur.shop/'
                    },
                    {
                        image: 'shop-60',
                        link: 'https://nosopatches.com/'
                    },
                    {
                        image: 'shop-61',
                        link: 'https://recynity.com/'
                    },
                    {
                        image: 'shop-62',
                        link: 'https://69sneaker.com/'
                    },
                    {
                        image: 'shop-63',
                        link: 'https://nature-najen.com/'
                    },
                    {
                        image: 'shop-64',
                        link: 'https://exceptionalwine.co.uk/'
                    },
                    {
                        image: 'shop-65',
                        link: 'https://chimps.shop/'
                    }
                ]
            }
        }

    }
</script>

<style scoped lang="scss">
    @import '../../styles/layout/main.scss';
    @import '../../styles/webshops/webshops';
</style>