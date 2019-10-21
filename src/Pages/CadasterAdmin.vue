<template>
  <div class="auth-fluid-pages cadasterPage pb-0">
    <CadasterContent/>
  </div>
</template>


<script>
    import CadasterContent from "@/components/contents/CadasterContent"

    export default {
        name: 'CadasterAdmin',
        data () {
            return {

            }
        },
        components:{
            CadasterContent
        }
    }
</script>

<style>

</style>
