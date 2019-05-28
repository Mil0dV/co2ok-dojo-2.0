<template>
    <div>
        <Header :image="header"></Header>

        <div class="about__container">
            <!--About content-->
            <div class="about__col-1-wrapper">
                <!--Eerste blok-->
                <div class="about__col-1">
                    <div class="col-1__content col-1__image">
                        <div class="login__info animated fadeInUp" style="animation-delay: 0.4s;">
                            <p class="login__info-text">
                                We help an environmentally-minded consumers
                                and retailers to compensate for products
                                which burden the climate.
                            </p>
                        </div>
                    </div>

                    <div class="col-1__content col-1__text-wrapper">
                        <div class="col-1__text">
                            <p class="col-1--green">Our mission</p>
                            <h1 class="col-1--title">Why we do it</h1>
                            <div>
                                <p>
                                    Impact of climate change on health is ‘the major threat of 21st century’. The
                                    health of
                                    millions of people across the world is already being significantly harmed by
                                    climate change.

                                    Climate change poses a fundamental threat to the places, species and people’s
                                    livelihoods
                                    WWF works to protect. To adequately address this crisis we must urgently reduce
                                    carbon
                                    pollution and prepare for the consequences of global warming, which we are
                                    already
                                    experiencing. WWF works to:
                                    <br>
                                    <transition enter-active-class="animated bounceIn"
                                                leave-active-class="animated bounceOut"
                                                mode="out-in">
                                        <span key="1" @click="moreText = true" v-if="!moreText"
                                              class="link">Read more</span>
                                        <span key="2" @click="moreText = false" v-else class="link">Less</span>
                                    </transition>
                                </p>

                                <br>
                                <transition enter-active-class="animated fadeIn"
                                            leave-active-class="animated fadeOut"
                                            mode="out-in">
                                    <p v-if="moreText">
                                        We are climate fighters, fighting against climate change caused by humans.

                                        Climate change is a serious problem. Trump won’t do anything, the government
                                        isn’t the quickest either. Even though the consumer is willing to compensate for
                                        the impact on the environment, there are limited opportunities which are offered
                                        to the consumer.

                                        When the consumer is able to buy their product in a climate neutral way, CO₂
                                        emission can be reduced. This way the consumer has the means to contribute to a
                                        healthy and pleasant environment for now and future generations. Entrepreneurs
                                        are an important influence through the means of offering such tools. However
                                        there is no easy way for entrepreneurs to offer their products climate neutral
                                    </p>
                                </transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="about__col-2-wrapper">
                <div class="about__col-2">
                    <div class="col-2__header">
                        <p class="col-1--green">Our team</p>
                        <h1 class="col-1--title">Meet the people who make this all happen</h1>
                    </div>


                    <div class="about__crew-wrapper">
                        <div v-for="(person, index) in crew" :key="index" class="uk-card uk-card-default crew__card">
                            <div class="uk-card-header crew__header">
                                <div class="uk-width-auto crew__image-wrapper">
                                    <img class="uk-border-circle crew__image"
                                         :src="require(`@/assets/images/crew/${person.image}`)" :alt="person.image">
                                </div>
                                <div class="uk-width-expand">
                                    <h3 class="uk-margin-remove-bottom crew__title">{{person.name}}</h3>
                                    <p class="uk-margin-remove-top crew__function">{{person.title}}</p>
                                </div>
                            </div>
                            <div class="crew__quote">
                                <p>"{{person.quote}}"</p>
                            </div>
                            <div class="uk-card-footer crew__footer">
                                <div class="social--wrapper">
                                    <a target="_blank"
                                       href="https://twitter.com/CO2ok_eco"
                                       class=" uk-text-capitalize social__text twitter--hover">
                                    <span class="icon__wrapper">
                                        <span uk-icon="twitter"
                                              class="crew__icon">
                                        </span>
                                    </span>
                                        Twitter
                                    </a>

                                    <a target="_blank"
                                       href="https://www.linkedin.com/company/11418867"
                                       class=" uk-text-capitalize social__text linkedin--hover">
                                        <span class="icon__wrapper">
                                            <span uk-icon="linkedin"
                                                  class="crew__icon">

                                            </span>
                                        </span>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    const Header = () => import('@/components/layout/Header')

    export default {
        name: "About",
        components: {'Header': Header},

        data() {
            return {
                moreText: false,
                header: 'about',
                crew: [
                    {
                        name: 'Milo de Vries', title: 'Founder and factotum',
                        quote: 'Saving the climate, one gram at a time',
                        image: 'milo.jpg',
                        twitter: '', facebook: ''
                    },
                    {
                        name: 'Jos van Nieuwburg', title: 'Co-Founder',
                        quote: 'The climate is important and us companies can de a lot with that',
                        image: 'jos.jpg',
                        twitter: '', facebook: ''
                    },
                    {
                        name: 'Maaike Braat', title: 'Scientist',
                        quote: 'It always can be quicker and better and this is a step in the right direction',
                        image: 'maaike.jpg',
                        twitter: '', facebook: ''
                    },
                    {
                        name: 'Michiel van Tienhoven', title: 'Programmer and Graphic Designer',
                        quote: 'More green is always better, after all we only have one planet earth',
                        image: 'michiel-1.jpg',
                        twitter: '', facebook: ''
                    },
                    {
                        name: 'Alham Saber', title: 'Partner manager',
                        quote: 'Silence is evil itself. Not to speak to speak. Not to act is to act',
                        image: 'ahlam.jpg',
                        twitter: '', facebook: ''
                    },
                    {
                        name: 'Sanne Tielemans', title: 'Executive Secretary',
                        quote: 'The greener, the better',
                        image: 'sanne.jpg',
                        twitter: '', facebook: ''
                    },

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/layout/main.scss';


    .about__container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }


    .about__col-1-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #F5FCFF;
    }

    .about__col-1 {
        max-width: 1090px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 150px 0;
    }

    .col-1__content {
        width: 100%;
        max-width: 600px;
    }

    .col-1__content:first-child {
        width: 100%;
        max-width: 490px;
    }

    .col-1__image {
        height: 400px;
        border-radius: 10px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.30);
        background-image: url('../assets/images/crew/group.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .login__info {
        margin-top: 250px;
        margin-left: -5%;
        background: white;
        border-left: 10px solid #10D884;
        width: 80%;
        box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.30);
    }

    .login__info-text {
        margin: 0;
        padding: 20px 40px;
        text-align: left;
    }

    .col-1__text-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .col-1__text {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 70%;
        height: 100%;
        text-align: left;
        overflow: hidden;
    }

    .col-1--green {
        color: #08BA4D;
        padding: 0;
    }

    .col-1--title {
        color: #5d5d5d;
        font-size: 36px;
        font-weight: 600;
        margin-top: 0;
    }


    .about__col-2-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        background: white;
        justify-content: center;
        align-items: center;
    }

    .about__col-2 {
        padding: 100px 0;
        max-width: 1090px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .col-2__header {
        width: 50%;
    }

    .about__crew-wrapper {
        width: 100%;
        margin-top: 75px;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    .crew__card {
        min-height: 300px;
        width: 325px;
        border-radius: 5px;
        margin-bottom: 90px;
        display: flex;
        flex-direction: column;
    }

    .crew__header {
        background: #304C58;
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        flex: 2;
    }

    .crew__image-wrapper {
        margin-top: -60px;
    }

    .crew__image {
        border-radius: 100px;
        width: 112px;
        height: 112px;
    }


    .crew__title {
        margin-top: 10px;
        color: white;
        font-size: 20px;
    }

    .crew__function {
        color: white;
        font-size: 14px !important;
        font-weight: 100 !important;
    }

    .uk-width-expand {
        width: 100%;
    }

    .crew__quote {
        padding: 15px;
        flex: 5;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .crew__footer {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .social--wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }


    .social__text {
        font-size: 12px !important;
        width: 100%;
        color: #BABABA;
        font-weight: 500;
        cursor: pointer;
    }

    .icon__wrapper {
        transition: 0.3s ease-in-out;
        height: 5px;
        padding: 0;
        margin: 0;
        background: #BABABA;
    }

    .crew__icon {
        color: white;
        padding: 0px 3px;
        width: 14px;
        height: 10px;
    }

    .twitter--hover:hover {
        .icon__wrapper {
            transition: 0.3s ease-in-out;

            background: #1DA1F2;
        }
    }

    .linkedin--hover:hover {
        .icon__wrapper {
            transition: 0.3s ease-in-out;

            background: #4875B4;
        }
    }


    @media (max-width: 1120px) {
        .about__col-1 {
            width: 90%;
            padding: 75px 0;
        }

        .col-1--title {
            padding: 0;
            margin-top: 1px;
        }


        .about__crew-wrapper {
            padding: 0 70px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

        .crew__card {
            max-width: 400px;
            width: 100%;
            margin-bottom: 80px;
        }

        .col-1__content:first-child {
            width: 100%;
            max-width: 390px;
        }

        .login__info {
            margin-left: unset;
            width: 100%;
            margin-top: 300px;
        }

        .col-1__text {
            width: 80%;
            height: 100%;
            margin-left: 100px;
            text-align: left;
        }
    }

    @media (max-width: 960px) {
        .about__crew-wrapper {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .crew__card {
            max-width: 500px;
            width: 100%;
            margin-bottom: 140px;
        }

        .col-2__header {
            width: 90%;
        }

        .about__col-1 {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }

        .col-1__content {
            width: 100%;
            max-width: unset;
        }

        .col-1__image {
            width: 100%;
            max-width: unset;
        }

        .col-1__text {
            width: 100%;
            height: auto;
            text-align: left;
            margin-left: unset;
            padding: 30px;
        }

        .about__col-1 {
            padding: 0 0 100px 0;
        }

        .col-1__content:first-child {
            max-width: 700px;
            width: 90%;
            height: 600px;
        }

        .login__info {
            margin-top: 550px;
        }
    }

    @media (max-width: 650px) {
        .crew__card {
            max-width: 550px;
            width: 100%;
            margin-bottom: 100px;
        }

        .about__crew-wrapper {
            padding: 0 20px;
        }

        .crew__social {
            width: 80%;
        }

        .col-1__content:first-child {
            max-width: 700px;
            width: 90%;
            height: 300px;
        }

        .login__info {
            display: none;
        }
    }

    @media (max-width: 650px) {
        .col-1__text {
            font-size: 14px;
        }

        .col-1--title {
            font-size: 28px;
        }

        .col-1__content:first-child {
            max-width: 700px;
            width: 90%;
            height: 200px;
        }

        .about__col-2 {
            padding: 50px 0;
        }

        .crew__image {
            width: 100px;
            height: 100px;
        }

        .crew__title {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        .crew__title h2 {
            margin-top: 10px;
            font-size: 8vw;
        }

        .crew__title p {
            margin-top: -10px;
            font-size: 4vw;
        }
    }

</style>
