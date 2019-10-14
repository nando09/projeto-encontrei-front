<template>
  <div class="auth-fluid-pages cadasterPage pb-0">
    <LogoutContent/>
  </div>
</template>


<script>
    import LogoutContent from "@/components/contents/LogoutContent"

    export default {
        name: 'Logout',
        data () {
            return {

            }
        },
        components:{
            LogoutContent
        }
    }
</script>

<style>

</style>
