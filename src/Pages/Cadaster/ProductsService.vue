<template>
  <div class="wrapper">
    <Sidebar title="Administração"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <ProductsServiceContent/>

      </div>
      <Footer/>

    </div>
  </div>
</template>
<script>

    import Sidebar from '@/components/sidebar/Sidebar'
    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import ProductsServiceContent from "@/components/Contents/Cadaster/ProductsServiceContent";

    export default {
        name: 'ProductsService',
        components:{
            ProductsServiceContent,
            Sidebar,
            TopMenu,
            Footer
        },

    }
</script>

<style>

</style>
