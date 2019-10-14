<template>
  <div class="container-fluid">

    <!-- start page title -->
    <PageTitle home="Início" category="Cadastro" sub-category="Produtos/Serviços" titulo="Cadastro de Produtos/Serviços"/>
    <!-- end page title -->

    <ServicePlansForm/>

  </div> <!-- container -->
</template>

<script>

    import PageTitle from "@/components/PageTitle";
    import ServicePlansForm from "@/components/Cadaster/ServicePlansForm";

    export default {
        name: 'ServicePlansContent',
        props: [],
        components:{
            ServicePlansForm, PageTitle
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
