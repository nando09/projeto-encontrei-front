<template>
  <div class="container-fluid">

    <!-- start page title -->
    <PageTitle home="Início" category="Relatórios" sub-category="Usuários" titulo="Relatório de Usuários"/>
    <!-- end page title -->

    <UsersTable/>

  </div> <!-- container -->
</template>

<script>

    import PageTitle from "@/components/PageTitle";
    import UsersTable from "@/components/Report/UsersTable";

    export default {
        name: 'UserContent',
        props: [],
        components:{
            UsersTable, PageTitle
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
