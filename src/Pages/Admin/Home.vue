<template>
  <div class="wrapper">
    <Sidebar title="Administração"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <div class="container-fluid">

          <!-- start page title -->
          <PageTitle home="Encontrei" category="Home" sub-category="Painel" titulo="Painel"/>
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
              <div class="card widget-inline">
                <div class="card-body p-0">
                  <div class="row no-gutters">

                    <CardBody title="Total Afiliados" value="29" icon="dripicons-briefcase text-muted"/>
                    <CardBody title="Total Produtos" value="715" icon="dripicons-checklist text-muted"/>
                    <CardBody title="Co-produtores" value="31" icon="dripicons-user-group text-muted"/>
                    <CardBody title="Faturamento" value="93%" icon="dripicons-graph-line text-muted"/>

                  </div> <!-- end row -->
                </div>
              </div> <!-- end card-box-->
            </div> <!-- end col-->
          </div>

          <div class="row">
            <div class="col-xl-4">
              <div class="card">
                <div class="card-body">
                  <div class="dropdown float-right">
                    <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown"
                       aria-expanded="false">
                      <i class="mdi mdi-dots-vertical"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <!-- item-->
                      <a href="javascript:void(0);" class="dropdown-item">Semanal</a>
                      <!-- item-->
                      <a href="javascript:void(0);" class="dropdown-item">Mensal</a>
                      <!-- item-->
                      <a href="javascript:void(0);" class="dropdown-item">Semestral</a>
                    </div>
                  </div>
                  <h4 class="header-title mb-4">%Grafico (pie 01)</h4>

                  <PieSimpleDonut/>

                  <div class="row text-center mt-2 py-2">
                    <div class="col-4">
                      <i class="mdi mdi-trending-up text-success mt-3 h3"></i>
                      <h3 class="font-weight-normal">
                        <span>64%</span>
                      </h3>
                      <p class="text-muted mb-0">Vendas</p>
                    </div>
                    <div class="col-4">
                      <i class="mdi mdi-trending-down text-primary mt-3 h3"></i>
                      <h3 class="font-weight-normal">
                        <span>26%</span>
                      </h3>
                      <p class="text-muted mb-0"> Indicação</p>
                    </div>
                    <div class="col-4">
                      <i class="mdi mdi-trending-down text-danger mt-3 h3"></i>
                      <h3 class="font-weight-normal">
                        <span>10%</span>
                      </h3>
                      <p class="text-muted mb-0"> Afiliados</p>
                    </div>
                  </div>
                  <!-- end row-->

                </div> <!-- end card body-->
              </div> <!-- end card -->
            </div><!-- end col-->
<!--            <div class="col-xl-8">-->

<!--              <MyNetworkCard/>-->

<!--            </div>&lt;!&ndash; end col&ndash;&gt;-->
          </div>
        </div> <!-- container -->

      </div>
      <Footer/>

    </div>
  </div>
</template>
<script>

    import Sidebar from '@/components/sidebar/Sidebar'
    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import AreaSplineArea from '@/components/charts/AreaSplineArea';
    import PieSimpleDonut from '@/components/charts/PieSimpleDonut';
    import PageTitle from '@/components/PageTitle';
    import CardBody from '@/components/CardBody';
    import MyNetworkCard from "@/components/MyNetworkCard";

    export default {
        name: 'Home',
        components:{
            MyNetworkCard,
            CardBody,
            PieSimpleDonut,
            PageTitle,
            AreaSplineArea,
            Sidebar,
            TopMenu,
            Footer
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
