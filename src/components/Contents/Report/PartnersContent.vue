<template>
  <div class="container-fluid">

    <!-- start page title -->
    <PageTitle home="Início" category="Relatórios" sub-category="Parceiros" titulo="Relatório de Parceiros"/>
    <!-- end page title -->

    <PartnersTable/>

  </div> <!-- container -->
</template>

<script>

    import PageTitle from "@/components/PageTitle";
    import PartnersTable from "@/components/Report/PartnersTable";

    export default {
        name: 'PartnersContent',
        props: [],
        components:{
            PartnersTable, PageTitle
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
