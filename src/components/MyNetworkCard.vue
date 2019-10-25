<template>
  <div class="card">
    <div class="card-body">
      <div class="dropdown float-right">
        <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
          <i class="mdi mdi-dots-vertical"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
          <!-- item-->
          <a href="javascript:void(0);" class="dropdown-item">Relatório Semanal</a>
          <!-- item-->
          <a href="javascript:void(0);" class="dropdown-item">Relatório Mensal</a>
          <!-- item-->
          <a href="javascript:void(0);" class="dropdown-item">Ação</a>
          <!-- item-->
          <a href="javascript:void(0);" class="dropdown-item">Ajustes</a>
        </div>
      </div>
      <h4 class="header-title mb-3">Atividade Recente</h4>

      <div class="table-responsive">
        <table class="table table-centered table-hover mb-0">
          <tbody>
          <tr>
            <td>
              <div class="media">
                <img class="mr-2 rounded-circle" src="/static/images/users/avatar-2.jpg" width="40" alt="Generic placeholder image">
                <div class="media-body">
                  <h5 class="mt-0 mb-1">Funcionário 1<small class="font-weight-normal ml-3">18 Jan 2019 21:28 </small></h5>
                  <span class="font-13">Completou "Tarefa 1"...</span>
                </div>
              </div>
            </td>
            <td>
              <span class="text-muted font-13">Projeto</span> <br/>
              <p class="mb-0">Projeto 1</p>
            </td>
            <td class="table-action" style="width: 50px;">
              <div class="dropdown">
                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                  <i class="mdi mdi-dots-horizontal"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; transform: translate3d(-140px, 22px, 0px); top: 0px; left: 0px; will-change: transform;">
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Ajustes</a>
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Ação</a>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="media">
                <img class="mr-2 rounded-circle" src="/static/images/users/avatar-6.jpg" width="40" alt="Generic placeholder image">
                <div class="media-body">
                  <h5 class="mt-0 mb-1">Funcionário 2<small class="font-weight-normal ml-3">18 Jan 2019 21:09</small></h5>
                  <span class="font-13">Está trabalhando em "Tarefa 2"...</span>
                </div>
              </div>
            </td>
            <td>
              <span class="text-muted font-13">Projeto</span> <br/>
              <p class="mb-0">Projeto 2</p>
            </td>
            <td class="table-action" style="width: 50px;">
              <div class="dropdown">
                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                  <i class="mdi mdi-dots-horizontal"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; transform: translate3d(-140px, 22px, 0px); top: 0px; left: 0px; will-change: transform;">
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Ajustes</a>
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Ação</a>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="media">
                <img class="mr-2 rounded-circle" src="/static/images/users/avatar-3.jpg" width="40" alt="Generic placeholder image">
                <div class="media-body">
                  <h5 class="mt-0 mb-1">Funcionário 3<small class="font-weight-normal ml-3">15 Jan 2019 09:29</small></h5>
                  <span class="font-13">Completou "Tarefa 3"...</span>
                </div>
              </div>
            </td>
            <td>
              <span class="text-muted font-13">Project</span> <br/>
              <p class="mb-0">Projeto 3</p>
            </td>
            <td class="table-action" style="width: 50px;">
              <div class="dropdown">
                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                  <i class="mdi mdi-dots-horizontal"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; transform: translate3d(-140px, 22px, 0px); top: 0px; left: 0px; will-change: transform;">
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Ajustes</a>
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Ação</a>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="media">
                <img class="mr-2 rounded-circle" src="/static/images/users/avatar-4.jpg" width="40" alt="Generic placeholder image">
                <div class="media-body">
                  <h5 class="mt-0 mb-1">Funcionário 4<small class="font-weight-normal ml-3">10 Jan 2019 08:36</small></h5>
                  <span class="font-13">Completou "Tarefa 4"...</span>
                </div>
              </div>
            </td>
            <td>
              <span class="text-muted font-13">Project</span> <br/>
              <p class="mb-0">Projeto 4</p>
            </td>
            <td class="table-action" style="width: 50px;">
              <div class="dropdown">
                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                  <i class="mdi mdi-dots-horizontal"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; transform: translate3d(-140px, 22px, 0px); top: 0px; left: 0px; will-change: transform;">
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Ajustes</a>
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Ação</a>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="media">
                <img class="mr-2 rounded-circle" src="/static/images/users/avatar-5.jpg" width="40" alt="Generic placeholder image">
                <div class="media-body">
                  <h5 class="mt-0 mb-1">Funcionário 5<small class="font-weight-normal ml-3">08 Jan 2019 12:28</small></h5>
                  <span class="font-13">Completou "Tarefa 5"...</span>
                </div>
              </div>
            </td>
            <td>
              <span class="text-muted font-13">Project</span> <br/>
              <p class="mb-0">Projeto 5</p>
            </td>
            <td class="table-action" style="width: 50px;">
              <div class="dropdown">
                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                  <i class="mdi mdi-dots-horizontal"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; transform: translate3d(-140px, 22px, 0px); top: 0px; left: 0px; will-change: transform;">
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Ajustes</a>
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item">Ação</a>
                </div>
              </div>
            </td>
          </tr>

          </tbody>
        </table>
      </div> <!-- end table-responsive-->

    </div> <!-- end card body-->
  </div> <!-- end card -->
</template>

<script>
    export default {
        name: 'MyNetworkCard',
        props: [''],
        data () {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
