<template>
    <div class="ninja__container">
        <div class="uk-container ninja__dashboard  uk-container-width">
            <h1>Profile</h1>
            <div class="dashboard__items">
                <div class="dashboard__row-1">
                    <div class="uk-card uk-card-consumer uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                        <div class="uk-card-media-left uk-cover-container">
                            <img src="../../assets/images/ninja/profile-1.png" alt="profile" uk-cover>
                            <canvas width="362" height="274"></canvas>
                        </div>
                        <div>
                            <div class="uk-card-body">
                                <div>
                                    <p class="main-text">You’ve compensated:</p>
                                    <h3 class="main-title">1300 kgs</h3>

                                    <hr>
                                    <div>
                                        <p class="main-text op-text">
                                            (Our developers are working hard to make the CO2 counter work in the near
                                            future)
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="uk-card uk-card-consumer uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                        <div class="cause-container">
                            <div class="uk-card-body">
                                <p class="main-sub">Pick a cause</p>
                                <p class="main-text lighter">Which co2 compensation project would you like to support
                                    when using Co2ok?</p>

                                <div class="cause-wrapper">
                                    <div class="cause">
                                        <img class="uk-box-shadow-medium" src="../../assets/images/ninja/profile-2.png">
                                        <p class="main-text cause-text lighter">Biogas installations <i
                                                class="subheading fas fa-info-circle"></i></p>
                                    </div>

                                    <div class="cause">
                                        <img class="uk-box-shadow-medium" src="../../assets/images/ninja/profile-3.png">
                                        <p class="main-text cause-text lighter">Solar panels <i
                                                class="subheading fas fa-info-circle"></i></p>
                                    </div>

                                    <div class="cause">
                                        <img class="uk-box-shadow-medium" src="../../assets/images/ninja/profile-4.png">
                                        <p class="main-text cause-text lighter">Save80 cookers <i
                                                class="subheading fas fa-info-circle"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="dashboard__row-2">
                    <span class="ninja__stars">
                        <p class="star-title"><i class="far fa-star"></i> Ninja stars obtained:</p>
                        <p>35</p>
                    </span>
                    <hr>
                    <div class="ninja-text">
                        <p class="main-text">
                            Tell your friends and family about the Ninja App and share the link to fight climate change.
                        </p>

                        <p class="green-border">https://www.co2ok.ninja/169</p>

                        <div class="main-text">
                            <p>Share our vision, make others happy with the Ninja App :)</p>
                            <p class="social-buttons">
                                <a target="_blank" href="https://www.facebook.com/CO2ok/"><i class="fab  fa-facebook-f"></i></a>
                                or
                                <a target="_blank" href="https://twitter.com/CO2ok_eco"><i class="fab fa-twitter"></i></a>
                            </p>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NinjaProfile"
    }
</script>

<style scoped>
    @import '../../styles/consumer/ninja.scss';
</style>