<template>
    <div>
        <Header :image="header"></Header>
        <section class="main">
            <div class="uk-container">
                <div class="uk-child-width-1-1" uk-grid>
                    <div>
                        <ul uk-accordion="multiple: true">
                            <li v-for="i in 7" :key="i">
                                <a class="uk-accordion-title" href="#">{{ $t(`faq.faq${i+9}_title`) }}</a>
                                <div class="uk-accordion-content">
                                    <p v-html=" $t(`faq.faq${i+9}_text`) ">
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Ninja</h2>
                        <ul uk-accordion="multiple: true">
                            <li v-for="i in 9" :key="i">
                                <a class="uk-accordion-title" href="#">{{ $t(`faq.faq${i}_title`) }}</a>
                                <div class="uk-accordion-content">
                                    <p v-html=" $t(`faq.faq${i}_text`) ">
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
                header: 'faq'
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