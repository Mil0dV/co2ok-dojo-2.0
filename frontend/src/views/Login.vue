<template>
    <div class="login">
        <LoginForm></LoginForm>
    </div>
</template>

<script>
    import LoginForm from '@/components/Form/LoginForm.vue'

    export default {
        name: 'login',
        components: {
            LoginForm
        },
    }
</script>
