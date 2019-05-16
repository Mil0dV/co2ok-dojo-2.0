<template>
    <h1 class="black--text display-5 font-weight-bold">blog page</h1>
</template>


<script>
export default {
    name: 'blog',

    data() {
        return {



        }
    },

    created(){
        this.getBlogs()
    },

    methods: {

      getBlogs() {

        this.$axios.get(`${this.$store.state.SITE_HOST}/blog/`,{
            headers: {
                "X-CSRFToken": `${this.$store.state.userToken}`,
                Authorization: `token ${window.localStorage.getItem('userToken')}`
            }
        }).then(response => {
            console.log(response);
            
        }).catch(error => {
            console.log(error);
            
        })

      }

    }
}
</script>

<style scoped>

</style>

