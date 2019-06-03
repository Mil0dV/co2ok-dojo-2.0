<template>
    <div class="ninja__container">
        <div class="uk-container ninja__dashboard  uk-container-width">
            <h2>{{locale['title']}}</h2>
            <div class="dashboard__items">
                <div class="dashboard__row-1">
                    <div class="uk-card uk-card-consumer uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
                         uk-grid>
                        <div class="uk-card-media-left uk-cover-container">
                            <img src="../../assets/images/ninja/profile-1.png" alt="profile" uk-cover>
                            <canvas width="362" height="274"></canvas>
                        </div>
                        <div>
                            <div class="uk-card-body">
                                <div>
                                    <p class="main-text">{{locale['card1_title']}}:</p>
                                    <h3 class="main-title">{{co2Counter}} kgs</h3>

                                    <hr>
                                    <div>
                                        <p class="main-text op-text">
                                            {{locale['card1_text']}}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="uk-card uk-card-consumer uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
                         uk-grid>
                        <div class="cause-container">
                            <div class="uk-card-body">
                                <p class="main-sub">{{locale['card2_title']}}</p>
                                <p class="main-text lighter">{{locale['card2_subtitle']}}</p>

                                <div class="cause-wrapper">
                                    <div class="cause" id="biogas" @click="supportedProject_status()">
                                        <img alt="ninja profile 2" class="uk-box-shadow-medium" src="../../assets/images/ninja/profile-2.png">
                                        <p class="main-text cause-text lighter">{{locale['card2_text1']}} <a
                                                href="https://www.atmosfair.de/en/climate-protection-projects/biogas-biomass/"
                                                target="_blank">
                                            <i class="subheading fas fa-info-circle"></i></a></p>
                                    </div>

                                    <div class="cause" id="solar-panel" @click="supportedProject_status()">
                                        <img alt="ninja profile 3" class="uk-box-shadow-medium" src="../../assets/images/ninja/profile-3.png">
                                        <p class="main-text cause-text lighter">{{locale['card2_text2']}}
                                            <i class="subheading fas fa-info-circle"></i></p>
                                    </div>

                                    <div class="cause" id="cookers" @click="supportedProject_status()">
                                        <img class="uk-box-shadow-medium" src="../../assets/images/ninja/profile-4.png">
                                        <p class="main-text cause-text lighter">{{locale['card2_text3']}} <a
                                                href="https://www.atmosfair.de/en/climate-protection-projects/energy_efficiency/"
                                                target="_blank">
                                            <i class="subheading fas fa-info-circle"></i></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="dashboard__row-2">
                    <span class="ninja__stars">
                        <p class="star-title"><i class="far fa-star"></i> {{locale['card3_title']}}</p>
                        <p class="star-title">{{$store.state.ninjaData.profileData.ninjaPoints}}</p>
                    </span>
                    <hr>
                    <div class="ninja-text">
                        <p class="main-text">
                            {{locale['card3_text']}}
                        </p>

                        <p class="green-border">
                            {{this.$store.state.domain}}/{{this.$store.state.ninjaData.userData.id}}</p>

                        <div class="main-text">
                            <p>{{locale['card3_social']}}</p>
                            <p class="social-buttons">
                                <a target="_blank"
                                   :href="`https://www.facebook.com/sharer?u=https%3A%2F%2Fco2ok.ninja%2F${this.$store.state.ninjaData.userData.id}`"><i
                                        class="fab  fa-facebook-f"></i></a>
                                {{locale['card3_or']}}
                                <a target="_blank"
                                   :href="`https://twitter.com/intent/tweet?text=Help%20me%20fight%20climate%20change%20while%20shopping%20-%20easy%20and%20for%20free!%20http%3A%2F%2Fco2ok.ninja%2F${this.$store.state.ninjaData.userData.id}`"><i
                                        class="fab fa-twitter"></i></a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import language from '../../lang/lang_profile'

    export default {
        name: "NinjaProfile",

        data() {
            return {
                locale: language,
                // Authenticated: window.localStorage.getItem('Authenticated'),
                projectsAlert: false,
                // ninjaSupportedProject: $store.state.ninjaData.profileData.supportedProject, //return supported project
                co2Counter: 1300
            }
        },

        created() {
            if (window.localStorage.getItem('Authenticated') == null) {
                this.$router.push('/consumers/login')
            }
            this.$store.dispatch('commitNinjaUserData');
            this.$store.commit('ninjaUserData')
        },

        mounted() {
            this.checkLanguage()
            this.supportedProject('get') //get the current user sopported project
            setInterval(this.co2counter, 2000)
        },

        methods: {
            checkLanguage(lang) {
                if (lang === 'en') {
                    this.locale = language.lang_en_login
                } else {
                    if (this.currentLanguage === 'en') {
                        this.locale = language.lang_en_login
                    } else {
                        this.locale = language.lang_nl_login
                    }
                }
            },

            supportedProject_status() {
                let newProject = event.currentTarget.id

                if (this.$store.state.ninjaData.profileData.supportedProject !== '' && this.$store.state.ninjaData.profileData.supportedProject !== newProject) {

                    this.supportedProject(newProject, function callback(newproject, currentProject) {
                        currentProject.style.border = '0px solid white'
                        newproject.style.border = '5px solid #09BA4E' // change hoosed project border
                    })

                    let message = {
                        title: 'Pick a cause',
                        text: `You now support the ${this.$store.state.ninjaData.profileData.supportedProject} project.`
                    }
                    this.$store.commit('modalStatus', {message})

                } else if (this.$store.state.ninjaData.profileData.supportedProject !== '' && this.$store.state.ninjaData.profileData.supportedProject === newProject) {
                    let message = {
                        title: 'Pick a cause',
                        text: `You now support the ${this.$store.state.ninjaData.profileData.supportedProject} project.`
                    }
                    this.$store.commit('modalStatus', {message})

                } else if (this.$store.state.ninjaData.profileData.supportedProject === '') {

                    this.supportedProject(newProject, function callback(newproject, currentProject) {
                        currentProject.style.border = '0px solid white'
                        newproject.style.border = '5px solid #09BA4E' // change hoosed project border
                    })
                    let message = {
                        title: 'Pick a cause',
                        text: `You now support the ${this.$store.state.ninjaData.profileData.supportedProject} project.`
                    }
                    this.$store.commit('modalStatus', {message})

                }
            },

            supportedProject(project, callback) {

                let self = this
                this.$axios.get(`${this.$store.state.SITE_HOST}/ninja/supported_project/`, {
                    params: {
                        id: window.localStorage.getItem('userId'),
                        project: project
                    },
                    headers: {
                        "X-CSRFToken": `${self.$store.state.userToken}`,
                        Authorization: `token ${window.localStorage.getItem('userToken')}`
                    }
                }).then(response => {
                    // console.log(response.data);
                    if (response.data.update) {
                        self.$store.state.ninjaData.profileData.supportedProject = response.data.newProject//update project name in userProfileData
                        let new_supportedProjectId = document.querySelector(`#${response.data.newProject} img`)
                        let current_supportedProjectId = document.querySelector(`#${response.data.currentProject} img`)
                        new_supportedProjectId.style.border = '5px solid #09BA4E' // change hoosed project border
                        callback(new_supportedProjectId, current_supportedProjectId)
                    } else {
                        if (response.data.currentProject !== '') {

                            let current_supportedProjectId = document.querySelector(`#${response.data.currentProject} img`)
                            current_supportedProjectId.style.border = '5px solid #09BA4E' // change hoosed project border
                        }
                    }
                }).catch(error => {
                    console.log(error);
                })

            },

            co2counter(){
               this.co2Counter = Math.floor(Math.random() * 1000) + 1
            }
        },

        computed: {
            currentLanguage() {
                return this.$store.state.language
            }
        },

        watch: {
            currentLanguage(value) {
                this.checkLanguage(value)
            }
        }
    }
</script>

<style scoped>
    @import '../../styles/consumer/ninja.scss';
</style>