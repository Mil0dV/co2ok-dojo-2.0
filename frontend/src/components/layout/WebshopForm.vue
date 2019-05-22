<template>
    <div class="uk-section section-1">
        <div class="uk-container form__section uk-container-width">
            <div class="uk-flex uk-flex-wrap uk-flex-wrap-around col-1" uk-grid>
                <div class="uk-width-1-2 to-left">
                    <div class="uk-card uk-card-body section-1__col-1 final__section">
                        <h2 class="main-title--large">{{content.title}}</h2>
                        <p class="main-text--large">
                            {{content.text}}
                        </p>
                    </div>
                </div>

                <div class="uk-width-1-2 to-right">
                    <div class="uk-card col-2-card uk-card-default uk-card-body">
                        <form class="login__form">
                            <div class="login__group">
                                <label class="login__group">
                                    Name
                                    <input class="login__group-input"
                                           type="email" placeholder="Fill in your name...">
                                </label>

                                <label class="login__group">
                                    <span>E-mail<span class="asterik">*</span></span>
                                    <input class="login__group-input"
                                           type="email" placeholder="Fill in your e-mail..">
                                </label>

                                <label class="login__group">
                                    Phone number
                                    <input class="login__group-input"
                                           type="email" placeholder="Fill in your phone number..">
                                </label>

                                <label class="login__group">
                                    E-commerce platform
                                    <input class="login__group-input"
                                           type="email" placeholder="Fill in the name of the platform..">
                                </label>
                            </div>

                            <div style="width: 100%; text-align: left;" class="login__buttons">
                                <a class="button button-empty btn-large">Empty form</a>
                                <a  class="button btn-large">Submit</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WebshopForm",
        props: {
            content: Object
        }
    }
</script>

<style scoped lang="scss">
    .main /deep/ {
        @import "../../../node_modules/uikit/dist/css/uikit.min.css";
    }

    @import '../../styles/main';
    @import '../../styles/webshops/webshop__form';
</style>