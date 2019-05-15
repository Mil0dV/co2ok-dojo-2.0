<template>
    <footer id="footer" style="text-align: left;">
        <div class="uk-container footer-container">
            <div uk-grid>
                <div class="uk-width-1-3@m footer-column">
                    <h2>Contact</h2>
                    <ul>
                        <li>Lange Viestraat 2</li>
                        <li>3511 BK, Utrecht (De Planeet)</li>
                        <li>+31 (0) 6 397 65 259</li>
                        <li>info@co2ok.eco</li>
                        <li>© 2019 CO₂ok.</li>
                        <li>KvK nummer: 69752753</li>
                    </ul>
                </div>
                <div class="uk-width-1-3@m footer-column">
                    <h2>Sitemap</h2>
                    <ul>
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/about">About Us</router-link>
                        </li>
                        <li><a href="#">Webshops</a></li>
                        <li>
                            <ul>
                                <li><a href="#">Retailers-info</a></li>
                                <li><a href="#">Cause Marketing</a></li>
                                <li><a href="#">Plugin Installation</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Consumers</a></li>
                        <li>
                            <ul>
                                <li>
                                    <router-link to="/about/how-it-works">CO<sub>2</sub>-Compensation</router-link>
                                </li>
                                <li><a href="#">Cause Marketing</a></li>
                                <li><a target="_blank"
                                       href="https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe">Plugin
                                    Installation</a></li>
                            </ul>
                        </li>
                        <li><a href="#">News</a></li>
                        <li>
                            <router-link to="/faq">FAQ</router-link>
                        </li>
                        <li>
                            <router-link to="/privacy">Privacy Policy</router-link>
                        </li>
                    </ul>
                </div>
                <div class="uk-width-1-3@m footer-column">
                    <h2>Social</h2>
                    <ul class="social-media-icons">
                        <li><a target="_blank" href="https://www.instagram.com/co2ok.eco/"><i
                                class="fab fa-instagram"></i></a></li>
                        <li><a target="_blank" href="https://www.facebook.com/CO2ok/"><i
                                class="fab fa-facebook-square"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/CO2ok_eco"><i
                                class="fab fa-twitter-square"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/company/11418867"><i
                                class="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>
    export default {
        name: "Footer"
    }
</script>


<style lang="scss" >
    #footer /deep/ {
        @import "~uikit/dist/css/uikit.min.css";
    }
    @import '../../styles/footer.scss';
</style>