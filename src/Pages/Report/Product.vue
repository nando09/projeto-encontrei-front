<template>
  <div class="wrapper">
    <Sidebar title="Administração"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <ProductContent/>

      </div>
      <Footer/>

    </div>
  </div>
</template>
<script>

    import Sidebar from '@/components/sidebar/Sidebar'
    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import ProductContent from "@/components/Contents/Report/ProductContent";

    export default {
        name: 'Product',
        components:{
            ProductContent,
            Sidebar,
            TopMenu,
            Footer
        },

    }
</script>

<style>

</style>
