<template>
  <div class="wrapper">
    <SidebarClient title="Área do Usuário"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <div class="container-fluid">

          <!-- start page title -->
          <PageTitle home="Encontrei" category="Parceiros" sub-category="Relatório de Acessos" titulo="Relatório de Acessos"/>
          <!-- end page title -->
          <div class="container-fluid" style="background-color: #fff; margin-bottom: 20px">
            <div class="row">
              <div class="col-12">
                <AreaSplineArea/>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="card-body p-0 mb-5">
                <div class="row no-gutters">
                  <CardBody title="Quantidade de acessos" value="1845" icon="dripicons-graph-line text-muted"/>
                  <CardBody title="Acessos IOS" value="715" icon="mdi mdi-apple mdi-24px"/>
                  <CardBody title="Acessos Android" value="1130" icon="mdi mdi-android mdi-24px"/>
                  <CardBody title="Data/horário" value="16/10/2019 - 16:58" icon="dripicons-clock text-muted"/>
                </div> <!-- end row -->
              </div>
            </div> <!-- end col-->
          </div>
        </div> <!-- container -->
      </div>

      <Footer/>

    </div>
  </div>
</template>
<script>

    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import SidebarClient from "@/components/Client/SidebarClient";
    import PieSimpleDonut from '@/components/charts/PieSimpleDonut';
    import PageTitle from '@/components/PageTitle';
    import CardBody from '@/components/CardBody';
    import AreaSplineArea from '@/components/charts/AreaSplineArea';

    export default {
        name: 'AccessReport',
        components:{
            SidebarClient,
            TopMenu,
            Footer,
            CardBody,
            PieSimpleDonut,
            PageTitle,
            AreaSplineArea
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
