<template>
    <div class="login-c__container">
        <div class="login-c__background login-c__row">

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

                <button type="submit"
                        class="login__submit">
                    <span >Login</span>
                </button>

                <p class="social-buttons">
                    <a target="_blank" href="https://www.facebook.com/CO2ok/"><i class="fab  fa-facebook-f"></i></a>
                    or
                    <a target="_blank" href="https://twitter.com/CO2ok_eco"><i class="fab fa-twitter"></i></a>
                </p>
            </div>


            <br><br><br><br>
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

                <button type="submit"
                        class="login__submit">
                    <span >Register</span>
                </button>
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