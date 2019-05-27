<template>
    <div>
        <Header :image="header"></Header>

        <div class="uk-section cause__sect-1">
            <div class="uk-container uk-container-column uk-container-width">
                <div class="sect-1-col-1">
                    <div class="img-wrapper-1 uk-box-shadow-medium">
                        <img class="sect-1__img-1" src="../assets/images/projects/project-1.png" alt="project 1">
                    </div>

                    <p class="main-text">
                        We support a variety of CO₂ compensation projects, coordinated by Atmosfair. 90% of their
                        projects are certified with the CDM Gold Standard, which is the most stringent standard for
                        climate protection projects. In addition, Atmosfair creates micro projects for countries that
                        don’t meet those standards.
                    </p>

                    <div class="img-wrapper-2 uk-box-shadow-medium">
                        <img class="sect-1__img-2" src="../assets/images/projects/project-2.png" alt="project 2">
                    </div>
                </div>

                <div class="sect-1-col-2">
                    <div class="second-img-wrapper-1 hide-desktop">
                        <img class="sect-1__img-3 responsive-img  uk-box-shadow-medium" src="../assets/images/projects/project-1.png" alt="project 1">
                    </div>

                    <div class="second-img-wrapper-2 hide-desktop">
                        <img class="sect-1__img-4 responsive-img uk-box-shadow-medium" src="../assets/images/projects/project-2.png" alt="project 1">
                    </div>

                    <div class="second-img-wrapper-1">
                        <img class="sect-1__img-3 responsive-img uk-box-shadow-medium" src="../assets/images/projects/project-3.png" alt="project 1">
                    </div>

                    <div class="second-img-wrapper-2">
                        <img class="sect-1__img-4 responsive-img uk-box-shadow-medium" src="../assets/images/projects/project-4.png" alt="project 1">
                    </div>
                </div>
            </div>
        </div>


        <div class="uk-section cause__sect-2">
            <div class="uk-container uk-container-row uk-container-width">
                <div class="sect-2-col-1">
                    <div class="content-intro">
                        <h2 class="sub-title">Renewable energy projects</h2>
                        <h1 class="main-title">Projects that get rid of fossil fuels</h1>
                        <p class="main-text">
                            Renewable energy from sources like the sun, wind and water has no negative effect on climate and produces a minimum of greenhouse gas emission and no air pollution. This in contradiction to fossil fuels such as coal, oil and gas. CO₂ok supports are in renewable energy: providing starting funds for solar energy and hydropower projects.
                        </p>

                    </div>

                    <div class="content-row">
                        <div class="row-item">
                            <p class="row-title"><i class="fas fa-wind subheading"></i> Windpower</p>
                            <p>
                                Wind energy is the biggest renewable energy source in the Netherlands. It contributes up to 6% of the total electricity production. The Netherlands is known for innovative use of offshore wind turbines.
                            </p>
                        </div>

                        <div class="row-item">
                            <p class="row-title"><i class="fas fa-solar-panel subheading"></i> Solar energy</p>
                            <p>Solar energy offers a clean, sustainable source of power. However, it is costly to implement and starting funds are often unavailable. That’s why CO₂ok helps funding solar energy projects that require financial support.</p>
                        </div>

                        <div class="row-item">
                            <p class="row-title"><i class="fas fa-tint subheading"></i> Hydropower</p>
                            <p>Hydropower energy is power derived from energy of falling water or fast running water. The disadvantage of a hydroelectric powerstation is the high cost of startup. Because we value this renewable power source, we support hydropower projects.</p>
                        </div>
                    </div>
                </div>

                <div class="sect-2-col-2">
                    <img class="sect-2__img-1  uk-box-shadow-medium" src="../assets/images/projects/project-5.png">
                </div>
            </div>
        </div>


        <div class="uk-section cause__sect-2">
            <div class="uk-container uk-container-row row-reverse uk-container-width">
                <div class="sect-2-col-1">
                    <div class="content-intro">
                        <h2 class="sub-title">Emission reduction</h2>
                        <h1 class="main-title">Emission reduction projects outside the Netherlands</h1>
                        <p class="main-text">
                            Atmosfair’s energy efficiency projects support sustainability development in developing countries by handing over technology, fighting poverty and reducing the emission of CO₂.
                        </p>

                    </div>

                    <div class="content-row">
                        <div class="row-item">
                            <p class="row-title"><i class="fas fa-utensils subheading"></i> Cooking appliances</p>
                            <p>
                                More efficient cooking appliances can save up to 80% of energy (and therefore CO₂ emission) in Africa and India. Thanks to their energy efficiency, these cooking appliances save time used for gathering fuel and reduce deforestation. Their decreased smoke and CO₂ production also contribute to better health.
                            </p>
                        </div>

                        <div class="row-item">
                            <p class="row-title"><i class="far fa-sun subheading"></i> Solar cabins</p>
                            <p>About 70% of the inhabitants of Lesotho, South Africa, live in the countryside, without connection to an electricity power grid. People use fossil-fuel-based candles and petroleum lamps for lighting, harming the climate and human health. Atmosfair and Solar Lights provide solar panels and Solar Home Systems.</p>
                        </div>

                        <div class="row-item row-item__width">
                            <p class="row-title">Why our focus on developing countries?</p>
                            <p>Hydropower energy is power derived from energy of falling water or fast running water. The disadvantage of a hydroelectric powerstation is the high cost of startup. Because we value this renewable power source, we support hydropower projects.</p>
                        </div>
                    </div>
                </div>

                <div class="sect-2-col-2 to-left">
                    <img class="sect-2__img-1  uk-box-shadow-medium" src="../assets/images/projects/project-6.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const Header = () => import('@/components/layout/Header')

    export default {
        name: "Projects",
        components: {'Header': Header},

        data() {
            return {
                header: 'projects'
            }
        }
    }
</script>

<style scoped>
    @import '../styles/projects.scss';
</style>