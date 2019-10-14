<template>
  <div class="container-fluid">

    <!-- start page title -->
    <PageTitle home="Início" category="Cadastro" sub-category="Perfil do Comércio/Serviços" titulo="Cadastro de Perfil do Comércio/Serviços"/>
    <!-- end page title -->

    <ProfileTradeServicesForm/>

  </div> <!-- container -->
</template>

<script>

    import PageTitle from "@/components/PageTitle";
    import ProfileTradeServicesForm from "@/components/Cadaster/ProfileTradeServicesForm";

    export default {
        name: 'ProfileTradeServicesContent',
        props: [],
        components:{
            ProfileTradeServicesForm, PageTitle
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
