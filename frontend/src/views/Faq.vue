<template>
    <div>
        <Header :image="header"></Header>
        <section class="main">
            <div class="uk-container">
                <div class="uk-child-width-1-1" uk-grid>
                    <div>
                        <h2>Ninja</h2>
                        <ul uk-accordion="multiple: true">
                            <li>
                                <a class="uk-accordion-title" href="#">Why installing the Ninja App requires permission
                                    to
                                    “Read and change all data on websites you visit”?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        For the Ninja App to work properly it needs to have access to the information
                                        about
                                        the website you are visiting to know if you’re on one of our partners’ sites. In
                                        short, the Ninja App downloads the list of partner shops, then works in the
                                        background, comparing the website you’re viewing against the downloaded list,
                                        and if
                                        there is a match, it shows our CO₂ok button. The information about visited
                                        websites
                                        does not leave your computer, so your privacy is protected. The Ninja App has an
                                        open code available at Github so anyone can view and audit it to make sure it is
                                        safe to use.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">Does the Ninja App track my purchases or internet
                                    activity?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        No! We don’t need your Data to fight climate change and therefore we don’t
                                        collect
                                        or save any personal shopping data. Our goal is to make the world a better place
                                        and
                                        not collecting data. We do get information about what kind of products are
                                        purchased
                                        and how many items are bought each month, but we do not track individual users’
                                        purchases & don’t store them!
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">What stores does the Ninja App work with?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        We have partnered with several big e-commerce businesses such as Ebay, Bol.com,
                                        Booking.com, CoolBlue, Aliexpress, Etsy, and over 22000 others. See the list of
                                        all
                                        participating stores.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">How do shops benefit from being in CO₂ok Ninja
                                    program?</a>
                                <div class="uk-accordion-content">
                                    <ol class="list__faq">
                                        <li>Our users are clients who have a strong incentive to buy from our partner
                                            shops
                                            and not their competition.
                                        </li>
                                        <li>We are preparing multiple new features such as highlighting partners’
                                            websites
                                            in search results. These features directly drive new consumers to partners’
                                            stores.
                                        </li>
                                        <li>Thanks to CO₂ok the brands of the shops are associated with a great cause.
                                            They
                                            show that climate and our environment matters to them as well and with this
                                            they
                                            boost their image.
                                        </li>
                                    </ol>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">How big is your piece of the cake?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        We invest 75% of the commission in the CO₂ compensation. The remaining 25% are
                                        much
                                        needed to keep CO₂ok going. We just started and our margin doesn’t even cover
                                        the
                                        costs. Our goal is to make an impact and give everybody the chance to easily
                                        fight
                                        climate change. Eventually, we will reduce our margin – we are not in this to
                                        become
                                        rich. We will always be open and transparent and therefore we will report our
                                        income
                                        and spending each year.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">I only shop at Amazon and already use Amazon
                                    Smile
                                    program, is there any reason for me to install the Ninja App?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        First of all, our partners usually donate 2-12 times more through the Ninja App
                                        (1-6%) than Amazon does through Amazon Smile (only 0.5% of the final price). So,
                                        if
                                        you care about having as big a positive impact on the world as you can, using
                                        the
                                        Ninja App either instead of or in addition to Amazon Smile is a way to achieve
                                        that.
                                        Moreover, there are a lot of products or services available in our partner
                                        stores
                                        that are not available on Amazon. For example, travel services (hotels, flights,
                                        train tickets, car rentals), financial products, or sport clubs’ official
                                        apparel.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">How can I be sure that the money will be used to
                                    compensate greenhouse gasses?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        Atmosfair and Fair Climate Fund provide us with certificates to prove we
                                        compensated. Additionally, we will report our income and spending each year.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">Does it cost me anything to use the Ninja
                                    App?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        No, the Ninja App is absolutely free to use. The prices in the online stores are
                                        exactly the same whether you use the app or not.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">I am not buying in any of these stores, is there
                                    any
                                    reason for me to install the Ninja App?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        Yes, there are three reasons: 1) We are constantly working on new partnerships,
                                        so
                                        we may partner with stores that you do use in the near future. It’s easier to
                                        have
                                        it already installed rather than regularly check if stores that you use have
                                        been
                                        added. 2) If you even once decide to buy from our partners stores, having the
                                        Ninja
                                        App already installed can be a difference with the output of CO₂ in the world.
                                        It’s
                                        better to have it installed just in case, rather than miss an easy opportunity
                                        to do
                                        a lot of good for free. 3) It is easier to establish new partnerships with a
                                        bigger
                                        user base: the more users the Ninja App has, the easier it is to convince new
                                        stores
                                        to join our initiative. Therefore, by installing the Ninja App, you make it more
                                        probable that we will partner with shops you use in the future.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">How does it work?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        After installing the Ninja app you will see a our “Shop CO₂ok” box whilst
                                        shopping
                                        in one of our partner stores. Simply click this box and you will be redirected
                                        back
                                        to the partner store (exactly where you were before). From then on, whenever you
                                        buy
                                        something, CO₂ok receives a portion of the price you pay (usually between 1% and
                                        6%). We donate our profits to carefully selected organisations such as
                                        Atmosfair.
                                        Some stores will require you to repeat the process after some time. You are a
                                        mobile
                                        Ninja - see here.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">Credits to Altruisto</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        We would like to thank Altruisto for putting their code open source so we could
                                        fork
                                        our own project based on their previous work. Altruisto does a great job at
                                        donating
                                        to charities through online shoppings. Their GitHub repo can be found here:
                                        Altruisto GitHub repository
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Webshops</h2>
                        <ul uk-accordion="multiple: true">
                            <li>
                                <a class="uk-accordion-title" href="#">How does CO2 compensation work?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        Greenhouse gases are emitted during the production and transport of the products
                                        you
                                        purchase. By investing in products that prevent an equal amount of these
                                        greenhouse
                                        gases to be emitted, your purchase can be made climate neutral. <a class="link"
                                                                                                           href="#">(details)</a>
                                        So how do you reduce emissions? By financing renewable energy and emission
                                        reducing
                                        projects, future emissions are prevented: a net reduction. <a class="link"
                                                                                                      href="#">(details)</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">So how do you reduce emissions?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        By financing renewable energy and emission reducing projects, future emissions
                                        are
                                        prevented: a net reduction. <a class="link" href="#">(details)</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">How do you determine the carbon footprint of
                                    products?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        We use manufacturer data whenever we can, since this is the most accurate. If
                                        the
                                        manufacturers don’t know or report this data, we will estimate it, gradually
                                        improving our accuracy. <a class="link" href="#">(details)</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">Will my entire contribution go to CO2
                                    compensation?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        Initially, 75% of your contribution will go to CO2 compensation through
                                        Atmosfair.
                                        Our 25% margin will be used to to make CO2ok sustainable and get all online
                                        stores
                                        to use our plugin to offer CO2 compensation. Eventually, we will reduce our
                                        margin –
                                        we are not in this to become rich. We will report our income and spending each
                                        year.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">What kind of projects will we finance?</a>
                                <div class="uk-accordion-content">
                                    <p>
                                        n addition to renewable energy projects such as solar, wind and hydropower, we
                                        will
                                        also fund projects that increase energy efficiency. For instance, the Save80
                                        cooking
                                        stoves, which are 80% more energy efficient, reduce CO2 emissions and offer a
                                        tremendous health boost.<a class="link" href="#">(View the other projects
                                        here)</a>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    const Header = () => import('@/components/layout/Header')

    export default {
        name: "Faq",
        components: {'Header': Header},

        data() {
            return {
                header: 'faq',
            }
        }
    }
</script>

<style scoped lang="scss">
    .main /deep/ {
        @import "~uikit/dist/css/uikit.min.css";
    }


    @import '../styles/main.scss';
    @import '../styles/faq.scss';

    .list__faq > * {
        border: none !important;
    }

</style>