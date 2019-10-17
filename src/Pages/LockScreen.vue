<template>
  <div class="auth-fluid-pages cadasterPage pb-0">
    <LockScreenContent/>
  </div>
</template>


<script>
    import LockScreenContent from "@/components/contents/LockScreenContent"

    export default {
        name: 'LockScreen',
        data () {
            return {

            }
        },
        components:{
            LockScreenContent
        },
        created() {
            let usuarioAux = sessionStorage.getItem('usuario')
            if (usuarioAux) {
                this.usuario = JSON.parse(usuarioAux)
            } else {
                this.$router.push('/login');
            }
        }
    }
</script>

<style>

</style>
