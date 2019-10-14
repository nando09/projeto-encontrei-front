<template>
  <div class="container-fluid">

    <!-- start page title -->
    <PageTitle home="Início" category="Cadastro" sub-category="Produtos/Serviços" titulo="Cadastro de Produtos/Serviços"/>
    <!-- end page title -->

    <ProductsServiceForm/>

  </div> <!-- container -->
</template>

<script>

    import PageTitle from "@/components/PageTitle";
    import ProductsServiceForm from "@/components/Cadaster/ProductsServiceForm";

    export default {
        name: 'ProductsServiceContent',
        props: [],
        components:{
            ProductsServiceForm, PageTitle
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
