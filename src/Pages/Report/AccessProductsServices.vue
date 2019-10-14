<template>
  <div class="wrapper">
    <Sidebar title="Administração"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <AccessProductsServicesContent/>

      </div>
      <Footer/>

    </div>
  </div>
</template>
<script>

    import Sidebar from '@/components/sidebar/Sidebar'
    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import AccessProductsServicesContent from "@/components/Contents/Report/AccessProductsServicesContent";

    export default {
        name: 'AccessProductsServices',
        components:{
            AccessProductsServicesContent,
            Sidebar,
            TopMenu,
            Footer
        },

    }
</script>

<style>

</style>
