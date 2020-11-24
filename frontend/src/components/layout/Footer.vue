 aria-label="Read more about Seminole tax hike"<template>
    <footer id="footer" style="text-align: left;">
        <div class="uk-container footer-container">
            <div uk-grid>
                <div class="uk-width-1-3@m footer-column">
                    <h2>Contact</h2>
                    <ul>
                        <li>Oudenoord 330</li>
                        <li>3513 EX, Utrecht (LOU)</li>
                        <li>+31 (0) 6 397 65 259</li>
                        <li>info@co2ok.eco</li>
                        <li>© 2019 CO₂ok.</li>
                        <li>{{ $t('footer.kvk') }} 69752753</li>
                    </ul>
                </div>
                <div class="uk-width-1-3@m footer-column">
                    <h2>Sitemap</h2>
                    <ul>
                        <li>
                            <router-link to="/">{{ $t('footer.link1') }}</router-link>
                        </li>
                        <li>
                            <router-link to="/about">{{ $t('footer.link2') }}</router-link>
                        </li>
                        <li>
                            <router-link to="/news">{{ $t('footer.link10') }}</router-link>
                        </li>
                        <li>
                            <router-link to="/webshops">{{ $t('footer.link3') }}</router-link>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <router-link to="/webshops/retailers">{{ $t('footer.link5') }}</router-link>
                                </li>
                                <li>
                                    <router-link to="/webshops/cause-marketing">{{ $t('footer.link6') }}</router-link>
                                </li>
                                <span v-if="$store.state.userStatus">
                                     <li><router-link to="/webshops/dashboard">Dashboard</router-link></li>
                                     <li @click="logout()">Logout</li>
                                </span>
                                <span v-else>
                                    <li><router-link to="/webshops/login">{{ $t('footer.link14') }}</router-link></li>
                                </span>
                            </ul>
                        </li>
                        <li v-if="!$store.state.userStatus">
                            <router-link to="/consumers/login">{{ $t('footer.link9') }}</router-link>
                            <ul>
                                <li>
                                    <router-link to="/co2-compensatie">{{ $t('footer.link4') }}</router-link>
                                </li>
                                <li>
                                    <router-link to="/projects">{{ $t('footer.link7') }}</router-link>
                                </li>
                            </ul>
                        </li>
                        <span v-else>
                            <li><router-link to="/consumers/profile">{{ $t('footer.link13') }}</router-link></li>
                            <li @click="logout()">{{ $t('footer.link15') }}</li>
                        </span>
                        <li>
                            <router-link to="/faq">{{ $t('footer.link11') }}</router-link>
                        </li>
                        <li>
                            <router-link to="/privacy">{{ $t('footer.link12') }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="uk-width-1-3@m footer-column">
                    <h2 style="margin-bottom: 10px; ">Social</h2>
                    <ul class="social-media-icons">
                        <li><a rel="noopener" aria-label="Follow co2ok on Instagram" target="_blank" href="https://www.instagram.com/co2ok.eco/"><i
                                class="fab fa-instagram"></i></a></li>
                        <li><a rel="noopener" aria-label="Like co2ok on Facebook" target="_blank" href="https://www.facebook.com/CO2ok/"><i
                                class="fab fa-facebook-square"></i></a></li>
                        <li><a rel="noopener" aria-label="Follow co2ok on Twitter" target="_blank" href="https://twitter.com/CO2ok_eco"><i
                                class="fab fa-twitter-square"></i></a></li>
                        <li><a rel="noopener" aria-label="Follow co2ok on LinkedIn" target="_blank" href="https://www.linkedin.com/company/11418867"><i
                                class="fab fa-linkedin"></i></a></li>
                    </ul>

                <!-- <Widget/> -->
                <div class="widget-container">
                    <div class="widget-core">
                        <!-- <div class="widget-txt">
                            <h3>Free for Webshops</h3>
                            <p>
                                The first time we got called about the CO₂ok-plugin, we didn’t like the idea at all. (The second, third and fourth times neither, by the way). I knew about the concept of CO₂ compensation already and like the idea. But hey, extra text and images costs visitors – they say. And also: ‘Keep your customer journey short.’ But this plug-in contributes to the sustainable story of my online shop. It enhances our credibility and thus contributes to our revenue. And more customers than expected compensate CO₂. That’s why I’m happy with the CO₂ok-plugin
                            </p>
                        </div> -->
                        <br>
                        <div id="widgetContainer" style="width:250px;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;"></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>
    import axios from 'axios'

    export default {
        name: "Footer",

        mounted() {
            Co2okWidgetXL.merchantCompensations('widgetContainer', '0', 'XL', 'default')
        },

        methods: {
            logout() {
                axios
                    .post('http://app.co2ok.eco/logout/', {
                        // header: {"X-CSRFToken": 'gZvnzSFeGp7h68WjCzmFky6wMkiJZXDU',}
                    })
                    .then(response => {
                        if (response.data.logout) {
                            this.$store.commit('isLoggedIn', false)
                            this.$store.commit('removeLocalUserData')
                            this.$router.push('/')
                        }
                    })
                    .catch(error => {
                        this.errorMessage(error)
                    })
            }

        }
    }
</script>


<style lang="scss">
    @import '../../styles/layout/footer';
</style>