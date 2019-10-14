<template>
  <div class="container-fluid">

    <!-- start page title -->
    <PageTitle home="Início" category="Relatórios" sub-category="Produtos" titulo="Relatório de Produtos"/>
    <!-- end page title -->

    <ProductTable/>

  </div> <!-- container -->
</template>

<script>

    import PageTitle from "@/components/PageTitle";
    import ProductTable from "@/components/Report/ProductTable";

    export default {
        name: 'ProductContent',
        props: [],
        components:{
            ProductTable, PageTitle
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
