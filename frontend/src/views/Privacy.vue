<template>
    <section id="projects">
        <div class="uk-container" style="max-width: 1090px; width: 100%; margin-bottom: 100px;">

            <div uk-grid style="text-align: left;">
                <div  class="uk-width-1-4@m">
                    <div id="privacyMenu" class="privacy-policy-menu">
                        <ul>
                            <li><a @click="activeTitle(1)" :class="[activeClass === 1 ? 'active' : '']" href="#A">Privacy Policy</a></li>
                            <li><a @click="activeTitle(2)" :class="[activeClass === 2 ? 'active' : '']" href="#B">Information Collection and Use</a></li>
                            <li><a @click="activeTitle(3)" :class="[activeClass === 3 ? 'active' : '']" href="#C">Personal Data</a></li>
                            <li><a @click="activeTitle(4)" :class="[activeClass === 4 ? 'active' : '']" href="#D">Usage Data</a></li>
                            <li><a @click="activeTitle(5)" :class="[activeClass === 5 ? 'active' : '']" href="#E">Tracking &amp; Cookies Data</a></li>
                            <li><a @click="activeTitle(6)" :class="[activeClass === 6 ? 'active' : '']" href="#F">Use of Data</a></li>
                            <li><a @click="activeTitle(7)" :class="[activeClass === 7 ? 'active' : '']" href="#G">Transfer of Data</a></li>
                            <li><a @click="activeTitle(8)" :class="[activeClass === 8 ? 'active' : '']" href="#H">Disclousure of Data</a></li>
                            <li><a @click="activeTitle(9)" :class="[activeClass === 9 ? 'active' : '']" href="#I">Security of Data</a></li>
                            <li><a @click="activeTitle(10)" :class="[activeClass === 10 ? 'active' : '']" href="#J">Service Provider</a></li>
                            <li><a @click="activeTitle(11)" :class="[activeClass === 11 ? 'active' : '']" href="#K">Links of Other Sites</a></li>
                            <li><a @click="activeTitle(12)" :class="[activeClass === 12 ? 'active' : '']" href="#L">Children's Privacy</a></li>
                            <li><a @click="activeTitle(13)" :class="[activeClass === 13 ? 'active' : '']" href="#M">Change of this Policy</a></li>
                            <li><a @click="activeTitle(14)" :class="[activeClass === 14 ? 'active' : '']" href="#N">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="uk-width-expand@m">
                    <div class="privacy-policy-content">
                        <p class="intro">
                            Effective date: October 15, 2018
                            <br><br>
                            CO₂ok (“us”, “we”, or “our”) operates the https://co2ok.eco website (the “Service”).
                            <br><br>
                            This page informs you of our policies regarding the collection, use, and disclosure of
                            personal data when you use our Service and the choices you have associated with that data.
                            Our Privacy Policy for CO₂ok is managed through Free Privacy Policy.
                            <br><br>
                            We use your data to provide and improve the Service. By using the Service, you agree to the
                            collection and use of information in accordance with this policy. Unless otherwise defined
                            in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our
                            Terms and Conditions, accessible from https://co2ok.eco
                        <p>

                        <h3 id="B">Information Collection and Use</h3>
                        <p>
                            We collect several different types of information for various purposes to provide and
                            improve our Service to you.
                        </p>

                        <h5>Types of Data</h5>
                        <h6 id="C">Personal Data</h6>
                        <p>
                            While using our Service, we may ask you to provide us with certain personally identifiable
                            information that can be used to contact or identify you (“Personal Data”). Personally
                            identifiable information may include, but is not limited to: Cookies and Usage Data
                        </p>

                        <h6 id="D">Usage Data</h6>
                        <p>
                            We may also collect information how the Service is accessed and used (“Usage Data”). This
                            Usage Data may include information such as your computer’s Internet Protocol address (e.g.
                            IP address), browser type, browser version, the pages of our Service that you visit, the
                            time and date of your visit, the time spent on those pages, unique device identifiers and
                            other diagnostic data.
                        </p>

                        <h6 id="E">Tracking &amp; Cookies Data</h6>
                        <p>
                            We use cookies and similar tracking technologies to track the activity on our Service and
                            hold certain information.
                            <br><br>
                            Cookies are files with small amount of data which may include an anonymous unique
                            identifier. Cookies are sent to your browser from a website and stored on your device.
                            Tracking technologies also used are beacons, tags, and scripts to collect and track
                            information and to improve and analyze our Service.
                            <br><br>
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                            sent. However, if you do not accept cookies, you may not be able to use some portions of our
                            Service.
                            <br><br>
                            Examples of Cookies we use:
                            <br><br>
                            <b>Session Cookies.</b> We use Session Cookies to operate our Service. <br>
                            <b>Preference Cookies.</b> We use Preference Cookies to remember your preferences and
                            various settings. <br>
                            <b>Security Cookies.</b> We use Security Cookies for security purposes. <br>
                        </p>

                        <h3 id="F">Use of Data</h3>
                        <p>CO₂ok uses the collected data for various purposes:</p>
                        <ul>
                            <li>To provide and maintain the Service</li>
                            <li>To notify you about changes to our Service</li>
                            <li>To allow you to participate in interactive features of our Service when you choose to do
                                so
                            </li>
                            <li>To provide customer care and support</li>
                            <li>To provide analysis or valuable information so that we can improve the Service</li>
                            <li>To monitor the usage of the Service</li>
                            <li>To detect, prevent and address technical issues</li>
                        </ul>

                        <h3 id="G">Transfer of Data</h3>
                        <p>
                            Your information, including Personal Data, may be transferred to — and maintained on —
                            computers located outside of your state, province, country or other governmental
                            jurisdiction where the data protection laws may differ than those from your jurisdiction.
                            <br><br>
                            If you are located outside Netherlands and choose to provide information to us, please note
                            that we transfer the data, including Personal Data, to Netherlands and process it there.
                            <br><br>
                            Your consent to this Privacy Policy followed by your submission of such information
                            represents your agreement to that transfer.
                            <br><br>
                            CO₂ok will take all steps reasonably necessary to ensure that your data is treated securely
                            and in accordance with this Privacy Policy and no transfer of your Personal Data will take
                            place to an organization or a country unless there are adequate controls in place including
                            the security of your data and other personal information.
                        </p>

                        <h3 id="H">Disclosure of Data</h3>
                        <h5>Legal Requirements</h5>
                        <p>CO₂ok may disclose your Personal Data in the good faith belief that such action is necessary
                            to: </p>
                        <ul>
                            <li>To comply with a legal obligation</li>
                            <li>To protect and defend the rights or property of CO₂ok</li>
                            <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                            <li>To protect the personal safety of users of the Service or the public</li>
                            <li>To protect against legal liability</li>
                        </ul>

                        <h3 id="I">Security of Data</h3>
                        <p>The security of your data is important to us, but remember that no method of transmission
                            over the Internet, or method of electronic storage is 100% secure. While we strive to use
                            commercially acceptable means to protect your Personal Data, we cannot guarantee its
                            absolute security.</p>

                        <h3 id="J">Service Providers</h3>
                        <p>We may employ third party companies and individuals to facilitate our Service (“Service
                            Providers”), to provide the Service on our behalf, to perform Service-related services or to
                            assist us in analyzing how our Service is used.
                            <br><br>
                            These third parties have access to your Personal Data only to perform these tasks on our
                            behalf and are obligated not to disclose or use it for any other purpose.</p>

                        <h5>Analytics</h5>
                        <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>

                        <h6>Google Analytics</h6>
                        <p>Google Analytics is a web analytics service offered by Google that tracks and reports website
                            traffic. Google uses the data collected to track and monitor the use of our Service. This
                            data is shared with other Google services. Google may use the collected data to
                            contextualize and personalize the ads of its own advertising network.
                            <br><br>
                            You can opt-out of having made your activity on the Service available to Google Analytics by
                            installing the Google Analytics opt-out browser add-on. The add-on prevents the Google
                            Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google
                            Analytics about visits activity.
                            <br><br>
                            For more information on the privacy practices of Google, please visit the Google Privacy &
                            Terms web page:</p>
                        <a class="google-link" href="https://policies.google.com/privacy?hl=en">Google Privacy &amp;
                            Terms<i class="fas fa-long-arrow-alt-right"></i></a>

                        <h3 id="K">Links to other Sites</h3>
                        <p>Our Service may contain links to other sites that are not operated by us. If you click on a
                            third party link, you will be directed to that third party’s site. We strongly advise you to
                            review the Privacy Policy of every site you visit.
                            <br><br>
                            We have no control over and assume no responsibility for the content, privacy policies or
                            practices of any third party sites or services.</p>

                        <h3 id="L">Children's Privacy</h3>
                        <p>Our Service does not address anyone under the age of 18 (“Children”).
                            <br><br>
                            We do not knowingly collect personally identifiable information from anyone under the age of
                            18. If you are a parent or guardian and you are aware that your Children has provided us
                            with Personal Data, please contact us. If we become aware that we have collected Personal
                            Data from children without verification of parental consent, we take steps to remove that
                            information from our servers.</p>

                        <h3 id="M">Changes to this Privacy Policy</h3>
                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by
                            posting the new Privacy Policy on this page.
                            <br><br>
                            We will let you know via email and/or a prominent notice on our Service, prior to the change
                            becoming effective and update the “effective date” at the top of this Privacy Policy.
                            <br><br>
                            You are advised to review this Privacy Policy periodically for any changes. Changes to this
                            Privacy Policy are effective when they are posted on this page.</p>

                        <h3 id="N">Contact Us</h3>
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
                        <a class="contact-link" href="#">Contact Us</a>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import Vue from 'vue'
    import Vuikit from 'vuikit'
    import '@vuikit/theme'

    Vue.use(Vuikit)
    export default {
        name: "Privacy",

        data() {
            return {
                activeClass: 1,
            }
        },

        methods: {
            activeTitle(number){
                this.activeClass = number
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/privacy.scss';

</style>