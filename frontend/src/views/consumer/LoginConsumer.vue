<template>
    <div class="login-c__container">
        <div class="login-c__background login-c__row">
            <div class="bkgr__filler"></div>
            <div class="bkgr__filler bkgr__text">
                <div class="green-border__login">
                    <p class="green-border__text">
                        With your account you will get acces to information how much you’ve contributed to fighting climate change.
                    </p>
                </div>
            </div>
        </div>

        <div class="login-c__form-wrapper login-c__row">
            <div class="login__group animated fadeInUp">
                <label class="login__group">
                    E-mail
                    <input class="login__group-input" v-model="email"
                           type="email" placeholder="Fill in your email...">
                </label>

                <div class="login__group-password">
                    <label class="login__group">
                        Password
                        <input class="login__group-input" v-model="password"
                               type="password" placeholder="Fill in your password...">
                    </label>
                    <p @click="passReset = true"
                       class="login__form-header forgot__password">
                        I forgot my password
                    </p>
                </div>
            </div>


            <p>register</p>


            <div class="login__group animated fadeInUp">
                <label class="login__group">
                    E-mail
                    <input class="login__group-input" v-model="email"
                           type="email" placeholder="Fill in your email...">
                </label>

                <div class="login__group-password">
                    <label class="login__group">
                        Password
                        <input class="login__group-input" v-model="password"
                               type="password" placeholder="Fill in your password...">
                    </label>
                    <p @click="passReset = true"
                       class="login__form-header forgot__password">
                        I forgot my password
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginConsumer"
    }
</script>

<style scoped>
    @import '../../styles/consumer/login__consumer.scss';
</style>