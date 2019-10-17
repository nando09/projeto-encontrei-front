<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-body">


        <ul class="nav nav-tabs nav-justified nav-bordered mb-3">
          <li class="nav-item">
            <a href="#acesso" data-toggle="tab" aria-expanded="false"
               class="nav-link active">
              <i class="mdi mdi-home-variant d-lg-none d-block mr-1"></i>
              <span class="d-none d-lg-block">Dados</span>
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane show active" id="acesso">

            <h4 class="header-title">Dados Pessoais</h4>
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Nome</label>
                  <input v-model="username" type="text" class="form-control" data-toggle="input-mask" data-mask-format="(00) 00000-0000">
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label>Email</label>
                  <input v-model="username" type="text" class="form-control" data-toggle="input-mask" data-mask-format="(00) 00000-0000">
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label>País</label>
                  <select v-model="selectedCountry" class="form-control select2" data-toggle="select2">
                    <option selected>Brasil</option>
                    <option>%Nome do País%</option>
                    <option>%Nome do País%</option>
                    <option>%Nome do País%</option>
                    <option>%Nome do País%</option>
                    <option>%Nome do País%</option>
                    <option>%Nome do País%</option>
                  </select>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label>Tipo de Cadastro</label>
                  <select v-model="selectedCadasterType" class="form-control">
                    <option>Pessoa Fisica</option>
                    <option>Pessoa Juridica</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Dados PESSOA JURIDICA -->
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Razão Social</label>
                  <input v-model="corporateNumber" type="text" class="form-control">
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label>Nome Fantasia</label>
                  <input v-model="corporateName" type="text" class="form-control">
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label>Data Nascimento</label>
                  <input v-model="birthDate" type="date" class="form-control"
                         data-toggle="input-mask" data-mask-format="(00) 0000-0000">
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label>CNPJ</label>
                  <input v-model="fantasyName" type="text" class="form-control"
                         data-toggle="input-mask"
                         data-mask-format="00.000.000/0000-00">
                  <span class="help-block"><small>Após verificação de sua conta na limkr, você não poderá mais alterar o CNPJ.</small></span>
                </div>
              </div>



            </div>

            <hr>
            <h4 class="header-title">Dados para Contato</h4>
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Celular</label>
                  <input v-model="cellphoneNumber" type="text" class="form-control"
                         placeholder="+55 (xx) xxxxx-xxxx"
                         data-toggle="input-mask"
                         data-mask-format="+00 (00) 00000-0000">
                  <span class="help-block"><small>Insira o código de país, Ex: +55.</small></span>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label>Telefone</label>
                  <input v-model="phoneNumber" type="text" class="form-control"
                         placeholder="+55 (xx) xxxx-xxxx"
                         data-toggle="input-mask" data-mask-format="(00) 0000-0000">
                  <span class="help-block"><small>Insira o código de país, Ex: +55.</small></span>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label>Facebook</label>
                  <input v-model="facebook" type="text" class="form-control"
                         placeholder="ex.: https://facebook.com/seuusuario">
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label>Skype</label>
                  <input v-model="skype" type="text" class="form-control"
                         placeholder="ex.: https://skype.com/seuusuario">
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label>Twitter</label>
                  <input v-model="twitter" type="text" class="form-control"
                         placeholder="ex.: https://twitter.com/seuusuario">
                </div>
              </div>
            </div>

            <hr>
            <h4 class="header-title">Endereço</h4>

            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputZip" class="col-form-label">CEP</label>
                <input v-model="zipcode" type="text" class="form-control" id="inputZip"
                       data-toggle="input-mask" data-mask-format="00000-000">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-8">
                <label for="inputAddress99" class="col-form-label">Endereço</label>
                <input v-model="address" type="text" class="form-control" id="inputAddress99"
                       placeholder="">
              </div>

              <div class="form-group col-md-1">
                <label for="inputAddress98" class="col-form-label">Número</label>
                <input v-model="addressNumber" type="text" class="form-control" id="inputAddress98"
                       data-toggle="input-mask" data-mask-format="000000">
              </div>

              <div class="form-group col-md-3">
                <label for="inputAddress2" class="col-form-label">Complemento</label>
                <input v-model="complement" type="text" class="form-control" id="inputAddress2"
                       placeholder="">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-5">
                <label for="inputBlock" class="col-form-label">Bairro</label>
                <input v-model="district" type="text" class="form-control" id="inputBlock">
              </div>
              <div class="form-group col-md-5">
                <label for="inputCity" class="col-form-label">Cidade</label>
                <input v-model="city" type="text" class="form-control" id="inputCity">
              </div>
              <div class="form-group col-md-2">
                <label for="inputState" class="col-form-label">Estado</label>
                <input v-model="state" type="text" class="form-control text-uppercase" id="inputState"
                       data-toggle="input-mask" data-mask-format="AA">
              </div>

              <button type="button" class="btn btn-primary" v-on:click="update">
                <i class="mdi mdi-content-save-outline mr-1"></i>
                <span>Salvar </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import PieSimpleDonut from '@/components/charts/PieSimpleDonut';
    import PageTitle from '@/components/PageTitle';
    import CardBody from '@/components/CardBody';
    import AreaSplineArea from '@/components/charts/AreaSplineArea';

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
