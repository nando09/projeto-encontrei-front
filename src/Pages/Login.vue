<template>
  <div class="auth-fluid-pages cadasterPage pb-0">
    <LoginContent/>
  </div>
</template>


<script>
    import LoginContent from "@/components/contents/LoginContent"

    export default {
        name: 'Login',
        data () {
            return {

            }
        },
        components:{
            LoginContent
        },
        created() {
            let usuarioAux = sessionStorage.getItem('usuario')
            if (usuarioAux) {
                this.usuario = JSON.parse(usuarioAux)
                this.$router.push('/')
            }
        }
    }
</script>

<style>

</style>
