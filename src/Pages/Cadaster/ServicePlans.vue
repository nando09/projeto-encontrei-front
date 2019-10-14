<template>
  <div class="wrapper">
    <Sidebar title="Administração"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <ServicePlansContent/>

      </div>
      <Footer/>

    </div>
  </div>
</template>
<script>

    import Sidebar from '@/components/sidebar/Sidebar'
    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import ServicePlansContent from "@/components/Contents/Cadaster/ServicePlansContent";

    export default {
        name: 'ServicePlans',
        components:{
            ServicePlansContent,
            Sidebar,
            TopMenu,
            Footer
        },

    }
</script>

<style>

</style>
