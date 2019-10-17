<template>
  <div class="wrapper">
    <SidebarClient title="Área do Usuário"/>
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

    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import EditDataContent from "@/components/contents/Client/EditDataContent";
    import SidebarClient from "@/components/Client/SidebarClient";

    export default {
        name: 'EditData',
        components:{
            EditDataContent,
            SidebarClient,
            TopMenu,
            Footer
        },
        created() {
            let usuarioAux = sessionStorage.getItem('usuario')
            if (usuarioAux) {
                this.usuario = JSON.parse(usuarioAux)
            } else {
                this.$router.push('/login');
            }
        }
    }
</script>

<style>

</style>
