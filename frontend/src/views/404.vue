<template>
    
  <h1 class="display-3 font-weigth-bold" style="color: red; width: 80%; text-align: center;margin: auto;">{{msg}}</h1>

</template>

<script>
export default {
    data(){
        return{
            route: this.$route.path,
            msg: ''
        }
    },

    mounted(){
        if(this.route == '/register/'){
            this.msg = 'Authorization denied, No id provides, contact the site maseter'
        }
        
    }
}
</script>

