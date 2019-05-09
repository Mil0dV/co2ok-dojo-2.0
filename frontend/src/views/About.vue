<template>
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
                            </p>

                            <p>
                                Climate change poses a fundamental threat to the places, species and people’s
                                livelihoods
                                WWF works to protect. To adequately address this crisis we must urgently reduce
                                carbon
                                pollution and prepare for the consequences of global warming, which we are
                                already
                                experiencing. WWF works to:
                            </p>
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

                    <div class="crew__card" v-for="(person, index) in crew" :key="index">
                        <div class="crew__title">
                            <div class="crew__image-wrapper">
                                <img :src="require(`@/assets/images/crew/${person.image}`)"
                                     alt="Milo" class="crew__image">
                            </div>

                            <h2 style="color: white;">{{person.name}}</h2>
                            <p>{{person.title}}</p>
                        </div>

                        <div class="crew__quote">
                            <p>"{{person.quote}}"</p>
                        </div>

                        <hr class="crew__spr">

                        <div class="crew__social">
                            <div class="social__wrapper">Twitter</div>
                            <div class="social__wrapper">LinkedIn</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--&lt;!&ndash;Compensation header&ndash;&gt;-->
        <!--<div class="about__header">-->
            <!--<div class="about__header-shade">-->
                <!--<div class="about__title-wrapper">-->
                    <!--<h1 class="about__title animated fadeInUp">CO₂-compensation</h1>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->

        <!--<div class="cmp__container">-->

        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "About",

        data() {
            return {
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

<style scoped>
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
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 150px 0;
    }

    .col-1__content {
        width: 100%;
        max-width: 545px;
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
        width: 100%;
        height: 100%;
    }

    .col-1__text {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 70%;
        height: 100%;
        padding: 30px 10px;
        text-align: left;
    }

    .col-1--green {
        color: #08BA4D;
        padding: 0;
        margin: 0;
    }

    .col-1--title {
        color: #5d5d5d;
        font-size: 36px;
        padding-bottom: 10px;
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
        width: 325px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.30);
        border-radius: 7px;
        margin-bottom: 80px;
    }

    .crew__image-wrapper {
        margin-top: -60px;
    }

    .crew__image {
        border-radius: 100px;
        width: 125px;
        height: 125px;
    }

    .crew__title {
        background: #053742;
        height: 150px;
        width: 100%;
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
        color: white;
    }

    .crew__quote {
        padding: 15px 50px 1px 50px;
    }

    .crew__spr {
        width: 90%;
        border: none;
        border-top: 1px solid darkgrey;
    }

    .crew__social {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        padding: 15px;
    }


    .cmp__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1110px;
        width: 100%;
        border: 1px solid red;
    }

    @media (max-width: 1120px) {
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
            padding: unset;
        }
    }

    @media (max-width: 600px) {
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
    }

</style>
