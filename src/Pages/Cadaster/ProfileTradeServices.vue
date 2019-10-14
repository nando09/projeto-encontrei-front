<template>
  <div class="wrapper">
    <Sidebar title="Administração"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <ProfileTradeServicesContent/>

      </div>
      <Footer/>

    </div>
  </div>
</template>
<script>

    import Sidebar from '@/components/sidebar/Sidebar'
    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import ProfileTradeServicesContent from "@/components/Contents/Cadaster/ProfileTradeServicesContent";

    export default {
        name: 'ProfileTradeServices',
        components:{
            ProfileTradeServicesContent,
            Sidebar,
            TopMenu,
            Footer
        },

    }
</script>

<style>

</style>
