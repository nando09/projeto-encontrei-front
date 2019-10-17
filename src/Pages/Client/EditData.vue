<template>
  <div class="wrapper">
    <Sidebar title="Área do Usuário"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <EditDataContent/>

      </div>
      <Footer/>

    </div>
  </div>
</template>
<script>

    import Sidebar from '@/components/sidebar/Sidebar'
    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import EditDataContent from "@/components/contents/Client/EditDataContent";

    export default {
        name: 'EditData',
        components:{
            EditDataContent,
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
