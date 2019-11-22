<template>
  <div class="container-fluid">

    <!-- start page title -->
    <PageTitle home="Início" category="Cadastro" sub-category="Anunciante/Prestador" titulo="Cadastro de Anunciante/Prestador"/>
    <!-- end page title -->

    <ShopkeeperProviderForm/>

  </div> <!-- container -->
</template>

<script>

    import PageTitle from "@/components/PageTitle";
    import ShopkeeperProviderForm from "@/components/Cadaster/ShopkeeperProviderForm";

    export default {
        name: 'ShopkeeperProviderContent',
        props: [],
        components:{
            ShopkeeperProviderForm, PageTitle
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
