<template>
  <div class="oneElementTemplateErrorBreak">
    <div class="row">
      <div class="col-12">
        <div class="card">

          <div class="card-body">
<!--            <h4 class="header-title">Usuários</h4>-->

            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Nome</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Nome">
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Email</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="Email">
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">Endereço</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Endereço">
              </div>
              <div class="form-group">
                <label for="inputAddress2">Endereço 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Endereço 2">
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">Cidade</label>
                  <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">Estado</label>
                  <select id="inputState" class="form-control">
                    <option selected>Selecionar...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">CEP</label>
                  <input type="text" class="form-control" id="inputZip">
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck">
                  <label class="form-check-label" for="gridCheck">
                    Confirmar dados
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Cadastrar</button>
            </form>

          </div> <!-- end card body-->
        </div> <!-- end card -->
      </div><!-- end col-->
    </div>
  </div>
</template>

<script>

    export default {
        name: 'ShopkeeperProviderForm',
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
