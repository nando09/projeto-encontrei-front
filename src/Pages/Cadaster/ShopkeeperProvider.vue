<template>
  <div class="wrapper">
    <Sidebar title="Administração"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <ShopkeeperProviderContent/>

      </div>
      <Footer/>

    </div>
  </div>
</template>
<script>

    import Sidebar from '@/components/sidebar/Sidebar'
    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import ShopkeeperProviderContent from "@/components/Contents/Cadaster/ShopkeeperProviderContent";

    export default {
        name: 'ShopkeeperProvider',
        components:{
            ShopkeeperProviderContent,
            Sidebar,
            TopMenu,
            Footer
        },

    }
</script>

<style>

</style>
