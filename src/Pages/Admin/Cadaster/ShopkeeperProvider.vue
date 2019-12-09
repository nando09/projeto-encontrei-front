<template>
  <div class="wrapper">
    <Sidebar title="Administração"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <div class="container-fluid">

          <!-- start page title -->
          <PageTitle home="Início" category="Cadastro" sub-category="Anunciante/Prestador" titulo="Cadastro de Anunciante/Prestador"/>
          <!-- end page title -->

          <div class="card mb-5">
            <div class="card-body">


              <ul class="nav nav-tabs nav-justified nav-bordered mb-3" role="tablist">
                <li class="nav-item">
                  <a data-toggle="tab" aria-expanded="false" class="nav-link active" href="dados" id="dados-tab" aria-selected="true" role="tab" aria-controls="dados">
                    <i class="mdi mdi-home-variant d-lg-none d-block mr-1"></i>
                    <h3 class="d-none d-lg-block">Dados</h3>
                  </a>
                </li>
              </ul>



              <div class="tab-content">
                <div class="tab-pane fade show active" id="dados" role="tabpanel" aria-labelledby="dados-tab">

                  <h4 class="header-title text-muted">Dados Pessoais</h4>
                  <div class="form-row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Nome</label>
                        <input v-model="nome" type="text" class="form-control" data-toggle="input-mask" data-mask-format="(00) 00000-0000">
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Email*</label>
                        <input v-model="email" type="text" class="form-control" data-toggle="input-mask" data-mask-format="(00) 00000-0000">
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Nome Responsável*</label>
                        <input v-model="nome_responsavel" type="text" class="form-control">
                      </div>
                    </div>

                  <!-- Dados PESSOA JURIDICA -->
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Razão Social*</label>
                        <input v-model="razao_social" type="text" class="form-control">
                      </div>
                    </div>


                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Nome Fantasia*</label>
                        <input v-model="nome_fantasia" type="text" class="form-control">
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label>CNPJ</label>
                        <input v-model="cnpj" type="text" class="form-control" data-toggle="input-mask" data-mask-format="00.000.000/0000-00">
                      </div>
                    </div>
                  </div>

                  <hr style="margin: 30px 0">
                  <h4 class="header-title text-muted">Dados para Contato</h4>
                  <div class="form-row">

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Telefone*</label>
                        <input v-model="telefone" type="text" class="form-control"
                               placeholder="+55 (xx) xxxx-xxxx"
                               data-toggle="input-mask" data-mask-format="(00) 0000-0000">
                        <span class="help-block"><small>Insira o código de país, Ex: +55.</small></span>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>WhatsApp</label>
                        <input v-model="whatsapp" type="text" class="form-control"
                               placeholder="+55 (xx) xxxxx-xxxx"
                               data-toggle="input-mask"
                               data-mask-format="+00 (00) 00000-0000">
                        <span class="help-block"><small>Insira o código de país, Ex: +55.</small></span>
                      </div>
                    </div>


                  </div>

                  <hr style="margin: 30px 0">
                  <h4 class="header-title">Redes Sociais</h4>
                  <div class="form-row">

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Facebook</label>
                        <input v-model="facebook" type="text" class="form-control"
                               placeholder="ex.: https://facebook.com/seuusuario">
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Instagram</label>
                        <input v-model="instagram" type="text" class="form-control"
                               placeholder="ex.: https://instagram.com/seuusuario">
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Site</label>
                        <input v-model="site" type="text" class="form-control"
                               placeholder="ex.: https://www.seusite.com">
                      </div>
                    </div>
                  </div>


                  <hr style="margin: 30px 0">
                  <h4 class="header-title text-muted">Descrição do Negócio</h4>
                  <div class="form-row">

                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Descrição*</label>
                        <textarea v-model="descricao" type="text" class="form-control"/>
                      </div>
                    </div>
                  </div>



                  <hr style="margin: 30px 0">
                  <h4 class="header-title text-muted">Endereço</h4>

                  <div class="form-row">
                    <div class="form-group col-md-3">
                      <label for="cep" class="col-form-label">CEP*</label>
                      <input v-model="cep" type="text" class="form-control" id="cep" v-on:blur="buscar()"
                             data-toggle="input-mask" data-mask-format="00000-000">
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

                    <div class="row col-12 justify-content-center">
                      <button type="button" class="btn btn-primary" v-on:click="cadastraPrestador">
                        <i class="mdi mdi-content-save-outline mr-1"></i>
                        <span>Salvar </span>
                      </button>
                    </div>

                  </div>
                </div>

                <hr style="border: 1px solid #003300">

                <h3 class="text-center">Anunciantes/Prestadores cadastrados</h3>

                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body">
                        <b-col lg="6" class="my-1">
                          <b-form-group
                            label="Filtro"
                            label-cols-sm="3"
                            label-align-sm="left"
                            label-size="sm"
                            label-for="filterInput"
                            class="mb-0"
                          >
                            <b-input-group size="sm" class="mb-2">
                              <b-form-input
                                v-model="filter"
                                type="search"
                                id="filterInput"
                                placeholder="Clique para pesquisar"
                              ></b-form-input>
                              <b-input-group-append>
                                <b-button :disabled="!filter" @click="filter = ''">Limpar</b-button>
                              </b-input-group-append>
                            </b-input-group>
                          </b-form-group>
                        </b-col>
                        <b-table
                          show-empty
                          small
                          stacked="sm"
                          :current-page="currentPage"
                          :per-page="perPage"
                          :filter="filter"
                          :filterIncludedFields="filterOn"
                          :sort-by.sync="sortBy"
                          :sort-desc.sync="sortDesc"
                          :sort-direction="sortDirection"
                          @filtered="onFiltered"
                          id="basic-datatable" class="table dt-responsive nowrap" width="100%" responsive :fields="fields" :items="items">

                        </b-table>
                        <b-row>
                          <b-col sm="5" md="6" class="my-1">
                            <b-form-group
                              label="Por página"
                              label-cols-sm="6"
                              label-cols-md="4"
                              label-cols-lg="3"
                              label-align-sm="left"
                              label-size="sm"
                              label-for="perPageSelect"
                              class="mb-0"
                            >
                              <b-form-select
                                v-model="perPage"
                                id="perPageSelect"
                                size="sm"
                                :options="pageOptions"
                              ></b-form-select>
                            </b-form-group>
                          </b-col>

                          <b-col sm="7" md="6" class="my-1">
                            <b-pagination
                              v-model="currentPage"
                              :total-rows="totalRows"
                              :per-page="perPage"
                              align="fill"
                              size="sm"
                              class="my-0"
                            ></b-pagination>
                          </b-col>
                        </b-row>
                      </div> <!-- end card body-->
                    </div> <!-- end card -->
                  </div><!-- end col-->
                </div>
              </div>
            </div>
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
  import axios from 'axios';
  import PageTitle from "@/components/PageTitle";


  export default {
    name: 'ShopkeeperProvider',
    data () {
      return {
        user:			JSON.parse(sessionStorage.getItem('usuario')),
        fields: [
          { key: 'Nome', sortable: true, },
          { key: 'Email', sortable: true, },
          { key: 'Sexo', sortable: true, },
          { key: 'DataNascimento', sortable: true, },
          { key: 'Celular', sortable: true, },
          { key: 'OS', sortable: true, }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],

        nome:			'',
        email:			'',
        nome_responsavel:			'',
        razao_social:			'',
        nome_fantasia:			'',
        cnpj:			'',
        telefone:	'',
        whatsapp:	'',
        facebook:			'',
        instagram:	'',
        site:			'',
        descricao:			'',
        cep:			'',
        endereco:		'',
        numero:			'',
        complemento:			'',
        bairro:		'',
        cidade:			'',
        estado:			'',
      }
    },

    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },

    components:{
      Sidebar,
      TopMenu,
      Footer,
      PageTitle
    },

    mounted: function() {
      this.getUsuarios();
      this.totalRows = this.items.length;

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

    methods: {
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },

      cadastraPrestador(){
        let data = {
          nome:	this.nome,
          email: this.email,
          nome_responsavel: this.nome_responsavel,
          razao_social: this.razao_social,
          nome_fantasia: this.nome_fantasia,
          cnpj: this.cnpj,
          telefone: this.telefone,
          whatsapp: this.whatsapp,
          facebook: this.facebook,
          instagram: this.instagram,
          site:this.site,
          descricao: this.descricao,
          cep: this.cep,
          endereco:	this.endereco,
          numero: this.numero,
          complemento: this.complemento,
          bairro: this.bairro,
          cidade: this.cidade,
          estado: this.estado,
        };

        // console.log(data);

        // axios.post('http://localhost:8000/api/prestador', data, {
        axios.post('https://service.encontrei.online/api/prestador', data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + this.user.token
          }
        })
          .then(response => {
            console.log(response.data);
            if (response.data.id) {
              alert(response.data.nome_fantasia + " cadastrado com sucesso!");
              this.prestador = response.data;

              this.nome=			'',
              this.email=			'',
              this.nome_responsavel=			'',
              this.razao_social=			'',
              this.nome_fantasia=			'',
              this.cnpj=			'',
              this.telefone=	'',
              this.whatsapp=	'',
              this.facebook=			'',
              this.instagram=	'',
              this.site=			'',
              this.descricao=			'',
              this.cep=			'',
              this.endereco=		'',
              this.numero=			'',
              this.complemento=		'',
              this.bairro=		'',
              this.cidade=			'',
              this.estado=			''

            }else{
              let errs = '';
              if (response.data.nome_fantasia) {
                errs = errs + response.data.nome_fantasia;
                errs = errs + '\n';
              }
              if (response.data.email) {
                errs = errs + response.data.email;
                errs = errs + '\n';
              }
              if (response.data.telefone) {
                errs = errs + response.data.telefone;
                errs = errs + '\n';
              }
              if (response.data.site) {
                errs = errs + response.data.site;
                errs = errs + '\n';
              }
              if (response.data.descricao) {
                errs = errs + response.data.descricao;
              }

              alert(errs);

              console.log(errs);
            }
          })
          .catch(e => {
            console.log(e);
            alert('servidor fora de área')
          });
      },

      getUsuarios(){
        // axios.get('http://localhost:8000/api/usuario', {
        axios.get('https://service.encontrei.online/api/users', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + this.user.token
          }
        })
          .then(response => {
            this.usuarios = response.data;
            let items = [];
            let usuarios = this.usuarios;

            for (let usuario of usuarios) {
              let object = {
                Nome: usuario.nome,
                Email: usuario.email,
                Sexo: usuario.sexo,
                DataNascimento: usuario.nascimento,
                Celular: usuario.celular,
              };
              items.push(object);
              console.log(usuario.nome);
            }
            this.items = items;
            this.totalRows = this.items.length;
            console.log(this.usuarios);
          })
          .catch(e => {
            console.log(e);
            alert('servidor fora de área')
          });
      },

      getPrestador(){
        // axios.get('http://localhost:8000/api/prestador', {
        axios.get('https://service.encontrei.online/api/prestador', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + this.user.token
          }
        })
          .then(response => {
            console.log(response.data);
            this.prestadores = response.data;
          })
          .catch(e => {
            console.log(e);
            alert('servidor fora de área')
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
  };
</script>

<style>

</style>



