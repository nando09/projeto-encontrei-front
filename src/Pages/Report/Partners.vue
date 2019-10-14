<template>
  <div class="wrapper">
    <Sidebar title="Administração"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <PartnersContent/>

      </div>
      <Footer/>

    </div>
  </div>
</template>
<script>

    import Sidebar from '@/components/sidebar/Sidebar'
    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import PartnersContent from "@/components/Contents/Report/PartnersContent";

    export default {
        name: 'Partners',
        components:{
            PartnersContent,
            Sidebar,
            TopMenu,
            Footer
        },

    }
</script>

<style>

</style>
