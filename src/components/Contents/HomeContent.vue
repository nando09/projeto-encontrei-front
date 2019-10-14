<template>
  <!-- Footer Start -->
  <!-- Start Content-->
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
      <div class="col-xl-8">
        <div class="card">
            <div class="card-body">
              <div class="dropdown float-right">
                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown"
                   aria-expanded="false">
                  <i class="mdi mdi-dots-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Weekly Report</a>
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Monthly Report</a>
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Action</a>
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Settings</a>
                </div>
              </div>
              <h4 class="header-title mb-3">Minha Rede</h4>

              <div class="table-responsive">
                <table class="table table-centered table-hover mb-0">
                  <tbody>
                  <tr>
                    <td>
                      <div class="media">
                        <img class="mr-2 rounded-circle"
                             src="/static/images/users/avatar-2.jpg" width="40"
                             alt="Generic placeholder image">
                        <div class="media-body">
                          <h5 class="mt-0 mb-1">Soren Drouin<small
                            class="font-weight-normal ml-3">18 Jan 2019 11:28
                            pm</small></h5>
                          <span class="font-13">Completed "Design new idea"...</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="text-muted font-13">Project</span> <br/>
                      <p class="mb-0">Hyper Mockup</p>
                    </td>
                    <td class="table-action" style="width: 50px;">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle arrow-none card-drop"
                           data-toggle="dropdown" aria-expanded="false">
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right"
                             x-placement="bottom-end"
                             style="position: absolute; transform: translate3d(-140px, 22px, 0px); top: 0px; left: 0px; will-change: transform;">
                          <!-- item-->
                          <a href="javascript:void(0);" class="dropdown-item">Settings</a>
                          <!-- item-->
                          <a href="javascript:void(0);" class="dropdown-item">Action</a>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="media">
                        <img class="mr-2 rounded-circle"
                             src="/static/images/users/avatar-6.jpg" width="40"
                             alt="Generic placeholder image">
                        <div class="media-body">
                          <h5 class="mt-0 mb-1">Anne Simard<small
                            class="font-weight-normal ml-3">18 Jan 2019 11:09
                            pm</small></h5>
                          <span class="font-13">Assigned task "Poster illustation design"...</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="text-muted font-13">Project</span> <br/>
                      <p class="mb-0">Hyper Mockup</p>
                    </td>
                    <td class="table-action" style="width: 50px;">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle arrow-none card-drop"
                           data-toggle="dropdown" aria-expanded="false">
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right"
                             x-placement="bottom-end"
                             style="position: absolute; transform: translate3d(-140px, 22px, 0px); top: 0px; left: 0px; will-change: transform;">
                          <!-- item-->
                          <a href="javascript:void(0);" class="dropdown-item">Settings</a>
                          <!-- item-->
                          <a href="javascript:void(0);" class="dropdown-item">Action</a>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="media">
                        <img class="mr-2 rounded-circle"
                             src="/static/images/users/avatar-3.jpg" width="40"
                             alt="Generic placeholder image">
                        <div class="media-body">
                          <h5 class="mt-0 mb-1">Nicolas Chartier<small
                            class="font-weight-normal ml-3">15 Jan 2019 09:29
                            pm</small></h5>
                          <span class="font-13">Completed "Drinking bottle graphics"...</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="text-muted font-13">Project</span> <br/>
                      <p class="mb-0">Web UI Design</p>
                    </td>
                    <td class="table-action" style="width: 50px;">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle arrow-none card-drop"
                           data-toggle="dropdown" aria-expanded="false">
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right"
                             x-placement="bottom-end"
                             style="position: absolute; transform: translate3d(-140px, 22px, 0px); top: 0px; left: 0px; will-change: transform;">
                          <!-- item-->
                          <a href="javascript:void(0);" class="dropdown-item">Settings</a>
                          <!-- item-->
                          <a href="javascript:void(0);" class="dropdown-item">Action</a>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="media">
                        <img class="mr-2 rounded-circle"
                             src="/static/images/users/avatar-4.jpg" width="40"
                             alt="Generic placeholder image">
                        <div class="media-body">
                          <h5 class="mt-0 mb-1">Gano Cloutier<small
                            class="font-weight-normal ml-3">10 Jan 2019 08:36
                            pm</small></h5>
                          <span class="font-13">Completed "Design new idea"...</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="text-muted font-13">Project</span> <br/>
                      <p class="mb-0">UBold Admin</p>
                    </td>
                    <td class="table-action" style="width: 50px;">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle arrow-none card-drop"
                           data-toggle="dropdown" aria-expanded="false">
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right"
                             x-placement="bottom-end"
                             style="position: absolute; transform: translate3d(-140px, 22px, 0px); top: 0px; left: 0px; will-change: transform;">
                          <!-- item-->
                          <a href="javascript:void(0);" class="dropdown-item">Settings</a>
                          <!-- item-->
                          <a href="javascript:void(0);" class="dropdown-item">Action</a>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="media">
                        <img class="mr-2 rounded-circle"
                             src="/static/images/users/avatar-5.jpg" width="40"
                             alt="Generic placeholder image">
                        <div class="media-body">
                          <h5 class="mt-0 mb-1">Francis Achin<small
                            class="font-weight-normal ml-3">08 Jan 2019 12:28
                            pm</small></h5>
                          <span class="font-13">Assigned task "Hyper app design"...</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="text-muted font-13">Project</span> <br/>
                      <p class="mb-0">Website Mockup</p>
                    </td>
                    <td class="table-action" style="width: 50px;">
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle arrow-none card-drop"
                           data-toggle="dropdown" aria-expanded="false">
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right"
                             x-placement="bottom-end"
                             style="position: absolute; transform: translate3d(-140px, 22px, 0px); top: 0px; left: 0px; will-change: transform;">
                          <!-- item-->
                          <a href="javascript:void(0);" class="dropdown-item">Settings</a>
                          <!-- item-->
                          <a href="javascript:void(0);" class="dropdown-item">Action</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div> <!-- end table-responsive-->

            </div> <!-- end card body-->
        </div> <!-- end card -->
      </div><!-- end col-->








    </div>
  </div> <!-- container -->
</template>

<script>
    import AreaSplineArea from '@/components/charts/AreaSplineArea';
    import PieSimpleDonut from '@/components/charts/PieSimpleDonut';
    import PageTitle from '@/components/PageTitle';
    import CardBody from '@/components/CardBody';

    export default {
        name: 'IndexContent',
        props: [],
        data () {
            return {

            }
        },
        components:{
            CardBody,
            PieSimpleDonut,
            PageTitle,
            AreaSplineArea
        }

    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
