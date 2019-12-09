<template>
  <div class="wrapper">
    <SidebarClient title="Área do Usuário"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <div class="col-md-12">


          <PageTitle home="Encontrei" category="Parceiros" sub-category="Dados Cadastrais" titulo="Dados Cadastrais"/>

          <div class="card mb-5">
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
                        <input v-model="nome" type="text" class="form-control" data-toggle="input-mask" data-mask-format="(00) 00000-0000">
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Email</label>
                        <input v-model="email" type="email" class="form-control" data-toggle="input-mask" data-mask-format="(00) 00000-0000">
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>País</label>
                        <select v-model="pais" class="form-control select2" data-toggle="select2">
                          <option selected>Brasil</option>
                          <option>Argentina</option>
                          <option>Uruguai</option>
                          <option>Chile</option>
                          <option>Bolivia</option>
                          <option>Colombia</option>
                          <option>Paraguai</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Tipo de Cadastro</label>
                        <select v-model="tipo" class="form-control">
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
                        <input v-model="razao_social" type="text" class="form-control" >
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Nome Fantasia</label>
                        <input v-model="nome_fantasia" type="text" class="form-control">
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Data Nascimento</label>
                        <input v-model="data_nascimento" type="date" class="form-control"
                               data-toggle="input-mask">
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>CNPJ</label>
                        <input v-model="cnpj" type="text" class="form-control"
                               data-toggle="input-mask"
                               data-mask-format="00.000.000/0000-00" v-mask-cnpj>
                      </div>
                    </div>



                  </div>

                  <hr>
                  <h4 class="header-title">Dados para Contato</h4>
                  <div class="form-row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Celular</label>
                        <input v-model="celular" type="text" class="form-control"
                               placeholder="(xx) xxxxx-xxxx"
                               data-toggle="input-mask"
                               data-mask-format="(00) 00000-0000" v-mask-phone.br>
<!--                        <span class="help-block"><small>Insira o código de país, Ex: +55.</small></span>-->
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Telefone</label>
                        <input v-model="telefone" type="text" class="form-control"
                               placeholder="(xx) xxxx-xxxx"
                               data-toggle="input-mask" data-mask-format="(00) 0000-0000" v-mask-phone.br>
<!--                        <span class="help-block"><small>Insira o código de país, Ex: +55.</small></span>-->
                      </div>
                    </div>

<!--                    <div class="col-md-6">-->
<!--                      <div class="form-group">-->
<!--                        <label>Facebook</label>-->
<!--                        <input v-model="facebook" type="text" class="form-control"-->
<!--                               placeholder="ex.: https://facebook.com/seuusuario">-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    <div class="col-md-6">-->
<!--                      <div class="form-group">-->
<!--                        <label>Skype</label>-->
<!--                        <input v-model="skype" type="text" class="form-control"-->
<!--                               placeholder="ex.: https://skype.com/seuusuario">-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    <div class="col-md-6">-->
<!--                      <div class="form-group">-->
<!--                        <label>Twitter</label>-->
<!--                        <input v-model="twitter" type="text" class="form-control"-->
<!--                               placeholder="ex.: https://twitter.com/seuusuario">-->
<!--                      </div>-->
<!--                    </div>-->
                  </div>

                  <hr>
                  <h4 class="header-title">Endereço</h4>

                  <div class="form-row">
                    <div class="form-group col-md-3">
                      <label for="cep" class="col-form-label">CEP</label>
                      <input v-model="cep" type="text" class="form-control" id="cep"
                             data-toggle="input-mask" data-mask-format="00000-000" v-mask-cep>
                    </div>

                    <div class="form-group col-md-7">
                      <label for="endereco" class="col-form-label">Endereço</label>
                      <input v-model="endereco" type="text" class="form-control" id="endereco"
                             placeholder="">
                    </div>

                    <div class="form-group col-md-2">
                      <label for="numero" class="col-form-label">Número</label>
                      <input v-model="numero" type="text" class="form-control" id="numero"
                             data-toggle="input-mask" data-mask-format="000000">
                    </div>

                    <div class="form-group col-md-2">
                      <label for="complemento" class="col-form-label">Complemento</label>
                      <input v-model="complemento" type="text" class="form-control" id="complemento"
                             placeholder="">
                    </div>

                    <div class="form-group col-md-4">
                      <label for="bairro" class="col-form-label">Bairro</label>
                      <input v-model="bairro" type="text" class="form-control" id="bairro">
                    </div>
                    <div class="form-group col-md-4">
                      <label for="cidade" class="col-form-label">Cidade</label>
                      <input v-model="cidade" type="text" class="form-control" id="cidade">
                    </div>
                    <div class="form-group col-md-2">
                      <label for="estado" class="col-form-label">Estado</label>
                      <input v-model="estado" type="text" class="form-control text-uppercase" id="estado"
                             data-toggle="input-mask" data-mask-format="AA">
                    </div>

                    <button type="button" class="btn btn-primary" @click="updateUsuario(this.user.id)">
                      <i class="mdi mdi-content-save-outline mr-1"></i>
                      <span>Salvar </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
    import axios from "axios";

    export default {
        name: 'EditData',
        data () {
            return {
              user:			JSON.parse(sessionStorage.getItem('usuario')),
              nome:			'',
              email:			'',
              nome_responsavel:			'',
              razao_social:			'',
              nome_fantasia:			'',
              cnpj:			'',
              telefone:	'',
              site:			'',
              descricao:			'',
              cep:			'',
              endereco:		'',
              numero:			'',
              complemento:			'',
              bairro:		'',
              cidade:			'',
              estado:			'',
              pais: '',
              tipo: '',
            }
        },
        components:{
            SidebarClient,
            TopMenu,
            Footer,
            CardBody,
            PieSimpleDonut,
            PageTitle,
            AreaSplineArea
        },

        mounted: function() {
          this.$viaCep.buscar(this.cep).then(obj => {
            console.log(obj);
          });
        },

        created() {
            let usuarioAux = sessionStorage.getItem('usuario')
            if (usuarioAux) {
                this.usuario = JSON.parse(usuarioAux)
            } else {
                this.$router.push('/login');
            }
        },

        updateUsuario(id) {
            console.log(nome);
            let data = {
              nome: this.usuario.nome,
              email: this.usuario.email,
              razao_social: this.usuario.razao_social,
              nome_fantasia: this.usuario.nome_fantasia,
              cnpj: this.usuario.cnpj,
              telefone: this.usuario.telefone,
              cep: this.usuario.cep,
              endereco: this.usuario.endereco,
              numero: this.usuario.numero,
              complemento: this.usuario.complemento,
              bairro: this.usuario.bairro,
              cidade: this.usuario.cidade,
              estado: this.usuario.estado,
              pais: this.usuario.pais,
              tipo: this.usuario.tipo,
            };

            // axios.put('http://localhost:8000/api/users/'+id, data,{
            axios.put(
                "https://service.encontrei.online/api/users/" + id,
                data,
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + this.user.token
                  }
                }
              )
              .then(response => {
                alert("Atualizado com sucesso!");
                console.log(response);
            });
        },

        buscar() {
            axios.get('https://viacep.com.br/ws/' + this.cep + '/json')
              .then(response => {
              console.log(response.data)
              this.cep = response.data.cep;
              this.endereco = response.data.logradouro;
              this.bairro = response.data.bairro;
              this.cidade = response.data.localidade;
              this.estado = response.data.uf;
            })
          }
    }
</script>

<style>

</style>
