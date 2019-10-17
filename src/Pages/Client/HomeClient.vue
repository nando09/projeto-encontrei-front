<template>
  <div class="wrapper">
    <Sidebar title="Área do Usuário"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <HomeClientContent/>

      </div>
      <Footer/>

    </div>
  </div>
</template>
<script>

    import Sidebar from '@/components/sidebar/Sidebar'
    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import HomeClientContent from "@/components/contents/Client/HomeClientContent";

    export default {
        name: 'HomeClient',
        components:{
            HomeClientContent,
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
