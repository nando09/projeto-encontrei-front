<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="header-title">Dados do Usuario</h4>
          <!-- p class="text-muted font-14 mb-3">
              Paragrafo pos titulo.
          </p -->
          <div class="form-row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Campo 01</label>
                <input type="text" class="form-control">
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label>Campo 02</label>
                <input type="number" class="form-control"
                       data-toggle="input-mask" data-mask-format="00">
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label>Campo 03</label>
                <input type="text" class="form-control"
                       data-toggle="input-mask" data-mask-format="0,00">
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label>Campo 04</label>
                <input type="number" class="form-control"
                       data-toggle="input-mask" data-mask-format="000,00">
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label>Campo 05</label>
                <select class="form-control">
                  <option>SIM</option>
                  <option>NÃO</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Campo 06</label>
                <input type="text" class="form-control"
                       data-toggle="input-mask" data-mask-format="(00) 00000-0000">
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>Campo 07</label>
                <input type="email" class="form-control">
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputZip" class="col-form-label">Campo 08</label>
              <input type="text" class="form-control" id="inputZip"
                     data-toggle="input-mask" data-mask-format="00000-000">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-8">
              <label for="inputAddress99" class="col-form-label">Campo 09</label>
              <input type="text" class="form-control" id="inputAddress99" placeholder="">
            </div>

            <div class="form-group col-md-1">
              <label for="inputAddress98" class="col-form-label">Campo 10</label>
              <input type="text" class="form-control" id="inputAddress98"
                     data-toggle="input-mask" data-mask-format="000000">
            </div>

            <div class="form-group col-md-3">
              <label for="inputAddress2" class="col-form-label">Campo 11</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-5">
              <label for="inputBlock" class="col-form-label">Campo 12</label>
              <input type="text" class="form-control" id="inputBlock">
            </div>
            <div class="form-group col-md-5">
              <label for="inputCity" class="col-form-label">Campo 13</label>
              <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-2">
              <label for="inputState" class="col-form-label">Campo 14</label>
              <input type="text" class="form-control text-uppercase" id="inputState"
                     data-toggle="input-mask" data-mask-format="AA">
            </div>
          </div>

          <hr>
          <div class="form-row">
            <div class="col-md-3">
              <div class="form-group">
                <label>Campo 15</label>
                <select class="form-control">
                  <option>SIM</option>
                  <option>NÃO</option>
                </select>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Campo 16</label>
                <select class="form-control">
                  <option>SIM</option>
                  <option>NÃO</option>
                  <option>NÃO SEI</option>
                </select>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Campo 17</label>
                <select class="form-control">
                  <option>SIM</option>
                  <option>NÃO</option>
                </select>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Campo 18</label>
                <select class="form-control">
                  <option>SIM</option>
                  <option>NÃO</option>
                </select>
              </div>
            </div>
          </div>

          <button type="button" class="btn btn-primary">
            <i class="mdi mdi-content-save-outline mr-1"></i>
            <span>Gravar </span>
          </button>

        </div>
      </div>
    </div>
  </div>
  <!-- end row -->
</template>

<script>

    export default {
        name: 'ProfileTradeServicesForm',
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
