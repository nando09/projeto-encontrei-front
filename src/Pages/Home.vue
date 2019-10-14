<template>
  <div class="wrapper">
    <Sidebar title="Administração"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <HomeContent/>

      </div>
      <Footer/>

    </div>
  </div>
</template>
<script>

    import Sidebar from '@/components/sidebar/Sidebar'
    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import HomeContent from "@/components/contents/HomeContent";

    export default {
        name: 'Home',
        components:{
            HomeContent,
            Sidebar,
            TopMenu,
            Footer
        },
        created() {

        }
    }
</script>

<style>

</style>
