<template>
    <div class="register">
        <RegisterForm></RegisterForm>
    </div>
</template>

<script>
    import RegisterForm from '@/components/Form/RegisterForm.vue'

    export default {
        name: 'Register',
        components: {
            RegisterForm
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
