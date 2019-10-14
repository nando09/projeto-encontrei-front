<template>
  <div class="container-fluid">

    <!-- start page title -->
    <PageTitle home="Início" category="Relatórios" sub-category="Acesso" titulo="Lojista/Prestador"/>
    <!-- end page title -->

    <AccessTenantProviderTable/>

  </div> <!-- container -->
</template>

<script>

    import PageTitle from "@/components/PageTitle";
    import AccessTenantProviderTable from "@/components/Report/AccessTenantProviderTable";

    export default {
        name: 'AccessTenantProviderContent',
        props: [],
        components:{
            AccessTenantProviderTable, PageTitle
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
