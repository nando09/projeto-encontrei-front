<template>
  <div class="oneElementTemplateErrorBreak">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
<!--            <h4 class="header-title">Usuários</h4>-->

            <table id="basic-datatable" class="table dt-responsive nowrap" width="100%">
              <thead>
              <tr>
                <th>Data</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Segmento</th>
                <th>Acesso maior</th>
                <th>Acesso menor</th>
                <th>Sexo</th>
                <th>Idade</th>
              </tr>
              </thead>


              <tbody>
              <tr>
                <td>%Data%</td>
                <td>%Cidade%</td>
                <td>%Estado%</td>
                <td>%Segmento%</td>
                <td>%AcessoMaior%</td>
                <td>%AcessoMenor%</td>
                <td>%Sexo%</td>
                <td>%Idade%</td>
              </tr>
              <tr>
                <td>%Data%</td>
                <td>%Cidade%</td>
                <td>%Estado%</td>
                <td>%Segmento%</td>
                <td>%AcessoMaior%</td>
                <td>%AcessoMenor%</td>
                <td>%Sexo%</td>
                <td>%Idade%</td>
              </tr>
              <tr>
                <td>%Data%</td>
                <td>%Cidade%</td>
                <td>%Estado%</td>
                <td>%Segmento%</td>
                <td>%AcessoMaior%</td>
                <td>%AcessoMenor%</td>
                <td>%Sexo%</td>
                <td>%Idade%</td>
              </tr>
              <tr>
                <td>%Data%</td>
                <td>%Cidade%</td>
                <td>%Estado%</td>
                <td>%Segmento%</td>
                <td>%AcessoMaior%</td>
                <td>%AcessoMenor%</td>
                <td>%Sexo%</td>
                <td>%Idade%</td>
              </tr>
              <tr>
                <td>%Data%</td>
                <td>%Cidade%</td>
                <td>%Estado%</td>
                <td>%Segmento%</td>
                <td>%AcessoMaior%</td>
                <td>%AcessoMenor%</td>
                <td>%Sexo%</td>
                <td>%Idade%</td>
              </tr>
              <tr>
                <td>%Data%</td>
                <td>%Cidade%</td>
                <td>%Estado%</td>
                <td>%Segmento%</td>
                <td>%AcessoMaior%</td>
                <td>%AcessoMenor%</td>
                <td>%Sexo%</td>
                <td>%Idade%</td>
              </tr>
              </tbody>
            </table>

          </div> <!-- end card body-->
        </div> <!-- end card -->
      </div><!-- end col-->
    </div>
  </div>
</template>

<script>

    export default {
        name: 'AccessTenantProviderTable',
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
