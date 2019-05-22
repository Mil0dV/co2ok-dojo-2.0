<template>
    <div class="main">
        <Header :image="header"></Header>

        <WebshopForm :content="formContent" />
    </div>
</template>

<script>
    const Header = () => import('@/components/layout/Header')
    const WebshopForm = () => import('@/components/layout/WebshopForm')

    export default {
        name: "Installation",
        components: {
            'Header': Header,
            'WebshopForm': WebshopForm
        },

        data() {
            return {
                header: 'installation',
                formContent: {
                    title: 'Use a different CMS system?',
                    text: 'Do you use a different e-commerce system? Fill in the form and we will send you a message when we support it! (Just your email address will be enough!)'
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .main /deep/ {
        @import "../../../node_modules/uikit/dist/css/uikit.min.css";
    }

    @import '../../styles/main';
    @import '../../styles/webshops/retailers';
    @import '../../styles/webshops/installation';
</style>