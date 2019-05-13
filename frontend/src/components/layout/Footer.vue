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
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About Us</router-link></li>
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
                                <li><router-link to="/about/how-it-works">CO<sub>2</sub>-Compensation</router-link></li>
                                <li><a href="#">Cause Marketing</a></li>
                                <li><a target="_blank" href="https://chrome.google.com/webstore/detail/co2okninja/omlkdocjhkgbllabpihhdggplladfipe">Plugin Installation</a></li>
                            </ul>
                        </li>
                        <li><a href="#">News</a></li>
                        <li><router-link to="/faq">FAQ</router-link></li>
                        <li><router-link to="/privacy">Privacy Policy</router-link></li>
                    </ul>
                </div>
                <div class="uk-width-1-3@m footer-column">
                    <h2>Social</h2>
                    <ul class="social-media-icons">
                        <li><a target="_blank" href="https://www.instagram.com/co2ok.eco/"><i class="fab fa-instagram"></i></a></li>
                        <li><a target="_blank" href="https://www.facebook.com/CO2ok/"><i class="fab fa-facebook-square"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/CO2ok_eco"><i class="fab fa-twitter-square"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/company/11418867"><i class="fab fa-linkedin"></i></a></li>
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

<style scoped lang="scss">

    // VARIABLES FONTS
    $heading: "Poppins", sans-serif;
    $body: "Open Sans", sans-serif;

    // VARIABLES COLORS
    $white: #fff;
    $black: #222;
    $darkgrey: #555;
    $grey: #888;
    $offgrey: #BCBCBC;
    $lightgrey: #ccc;

    $green: #10DC87;
    $darkgreen: #08BA4D;
    $bluegrey: #606468;
    $darkblue: #152439;

    // MIXINS
    @mixin transition {
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -ms-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
    }

    @mixin heading {
        font-family: $heading;
        font-size: 28px;
        font-weight: 500;
    }

    @mixin subheading {
        font-family: $heading;
        font-weight: 700;
    }

    @mixin body {
        font-family: $body;
        font-size: 14px;
        font-weight: 400;
    }

    footer {
        padding: 50px 0;
        background-color: $darkblue;

        .footer-container {
            width: 1090px;
        }

        h2 {
            @include heading;
            color: $white;
            font-weight: 500;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                @include body;
                color: $white;

                ul {
                    margin: 10px;
                    padding: 4px 20px;
                    border-left: 1px solid $white;
                }

                a {
                    @include transition;
                    @include body;
                    color: $white;

                    &:hover {
                        color: $green;
                        text-decoration: none;
                    }
                }
            }
        }

        ul.social-media-icons {
            justify-content: left;
            align-items: left;
            display: flex;

            li {
                padding: 0 20px 0 0;

                a {
                    i {
                        font-size: 30px;
                    }
                }
            }
        }
    }


    // VARIABLES FONTS
    $heading: "Poppins", sans-serif;
    $body: "Open Sans", sans-serif;

    // VARIABLES COLORS
    $white: #fff;
    $black: #222;
    $darkgrey: #555;
    $grey: #888;
    $lightgrey: #ccc;

    $green: #10DC87;
    $darkgreen: #08BA4D;
    $bluegrey: #606468;
    $darkblue: #152439;

    // MIXINS
    @mixin transition {
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -ms-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
    }
    @mixin heading {
        font-family: $heading;
        font-size: 28px;
        font-weight: 500;
    }
    @mixin subheading {
        font-family: $heading;
        font-weight: 700;
    }
    @mixin body {
        font-family: $body;
        font-size: 14px;
        font-weight: 400;
        line-height: 17pt;
    }

    section#nav-desktop {
        width: 100%;
        position: fixed;
        display: block;
    }
    section#nav-mobile {
        display: none;
        position: fixed;
        width: 100%;
        z-index: 500;
        height: 50px;
    }


</style>