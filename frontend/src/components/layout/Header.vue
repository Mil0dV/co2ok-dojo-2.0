<template>
    <vk-grid gutter="small" class="uk-child-width-expand@s uk-text-center header__container">
        <div class="header__image">
            <vk-card class="header__inner">Item</vk-card>
        </div>
    </vk-grid>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header__container {
        box-shadow: none;
    }

    .header__image {
        background: url("../../assets/images/header/steps.jpg") fixed  bottom no-repeat;
        background-size: cover;
        height: 354px;
        width: 100%;
    }

    .header__inner {
        background: rgba(0, 0, 0, 0.5);
        box-shadow: none;
        height: 100%;
        color:white;
    }

</style>