<template>
  <div class="container-fluid">

    <!-- start page title -->
    <PageTitle home="Início" category="Relatórios" sub-category="Acesso" titulo="Produtos/Serviço"/>
    <!-- end page title -->

    <AccessProductsServicesTable/>

  </div> <!-- container -->
</template>

<script>

    import PageTitle from "@/components/PageTitle";
    import AccessProductsServicesTable from "@/components/Report/AccessProductsServicesTable";

    export default {
        name: 'AccessProductsServicesContent',
        props: [],
        components:{
            AccessProductsServicesTable, PageTitle
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
