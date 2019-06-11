<template>
    <div>
        <Header :image="header"></Header>
        <section class="main">
            <div class="uk-container">
                <div class="uk-child-width-1-1" uk-grid>
                    <div>
                        <h2>Ninja</h2>
                        <ul uk-accordion="multiple: true">
                            <li v-for="i in 9" :key="i">
                                <a class="uk-accordion-title" href="#">{{locale[`faq${i}_title`]}}</a>
                                <div class="uk-accordion-content">
                                    <p v-html="locale[`faq${i}_text`]">
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Webshops</h2>
                        <ul uk-accordion="multiple: true">
                            <li v-for="i in 7" :key="i">
                                <a class="uk-accordion-title" href="#">{{locale[`faq${i+9}_title`]}}</a>
                                <div class="uk-accordion-content">
                                    <p v-html="locale[`faq${i+9}_text`]">
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
    import language from '../lang/lang_faq'

    export default {
        name: "Faq",
        components: {'Header': Header},

        data() {
            return {
                header: 'faq',
                locale: language,
            }
        },


        mounted() {
            this.checkLanguage()
        },

        methods: {
            checkLanguage(lang) {
                if(lang === 'en'){
                    this.locale = language.lang_en_faq
                } else {
                    if (this.currentLanguage === 'en') {
                        this.locale = language.lang_en_faq
                    } else {
                        this.locale = language.lang_nl_faq
                    }
                }
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

<style scoped lang="scss">
    @import '../styles/faq.scss';

    .list__faq > * {
        border: none !important;
    }

</style>