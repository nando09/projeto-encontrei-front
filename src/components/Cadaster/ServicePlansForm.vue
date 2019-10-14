<template>
  <div class="oneElementTemplateErrorBreak">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Planos de Serviço</h4>
            <!--p class="text-muted font-14 mb-3">
                Crie quantas prioridade de formulários desejar.
            </p-->
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Plano de Serviço</label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="col-md-6">
                <button type="button" class="btn btn-primary" style="margin-top:30px">
                  <i class="mdi mdi-content-save-outline mr-1"></i>
                  <span>Salvar </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Edição de Plano de Serviço</h4>
            <!-- p class="text-muted font-14 mb-3">
                Paragrafo pos titulo.
            </p -->
            <div class="table-responsive-sm">
              <table class="table table-centered mb-0">
                <thead>
                <tr>
                  <th width="80%">Nome do Plano de Serviço</th>
                  <th>Ação</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>%Plano de Serviço 01%</td>
                  <td>
                    <button class="btn btn-sm btn-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Editar">
                      <i class="dripicons-document-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Excluir">
                      <i class="dripicons-cross"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>%Plano de Serviço 02%</td>
                  <td>
                    <button class="btn btn-sm btn-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Editar">
                      <i class="dripicons-document-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Excluir">
                      <i class="dripicons-cross"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>%Plano de Serviço 03%</td>
                  <td>
                    <button class="btn btn-sm btn-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Editar">
                      <i class="dripicons-document-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Excluir">
                      <i class="dripicons-cross"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>%Plano de Serviço 04%</td>
                  <td>
                    <button class="btn btn-sm btn-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Editar">
                      <i class="dripicons-document-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Excluir">
                      <i class="dripicons-cross"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>%Plano de Serviço 05%</td>
                  <td>
                    <button class="btn btn-sm btn-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Editar">
                      <i class="dripicons-document-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Excluir">
                      <i class="dripicons-cross"></i>
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div> <!-- end card-body -->
        </div> <!-- end card-->
      </div> <!-- end col -->
    </div>

  </div>
</template>



<script>
    export default {
        name: 'ServicePlansForm',
        data () {
            return {

            }
        },
        components:{
        }
    }
</script>

<style>

</style>
