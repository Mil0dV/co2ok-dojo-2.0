<template>
    <div>
        <Header :image="header"></Header>


    </div>
</template>

<script>
    const Header = () => import('@/components/layout/Header')

    export default {
        name: "About",
        components: {'Header': Header},

        data() {
            return {
                header: 'cause-marketing',
            }
        },
    }
</script>

<style scoped lang="scss">
    .main /deep/ {
        @import "../../../node_modules/uikit/dist/css/uikit.min.css";
    }

    @import '../../styles/main';
    @import '../../styles/cause';

</style>