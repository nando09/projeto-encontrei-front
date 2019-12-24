<template>
  <div class="wrapper">
    <div v-if="loadingPage" class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
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
                        <input v-model="nome" type="text" class="form-control" data-toggle="input-mask" >
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Email*</label>
                        <input v-model="email" type="email" class="form-control" data-toggle="input-mask" >
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Nome Responsável*</label>
                        <input v-model="nome_responsavel" type="text" class="form-control" >
                      </div>
                    </div>

                    <!-- Dados PESSOA JURIDICA -->
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Razão Social*</label>
                        <input v-model="razao_social" type="text" class="form-control" >
                      </div>
                    </div>


                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Nome Fantasia*</label>
                        <input v-model="nome_fantasia" type="text" class="form-control" >
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label>CNPJ</label>
                        <input v-model="cnpj" type="text" class="form-control" data-toggle="input-mask" data-mask-format="00.000.000/0000-00" v-mask-cnpj >
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
                               data-toggle="input-mask" data-mask-format="(00) 0000-0000" v-mask-phone.br>
                        <!--                        <span class="help-block"><small>Insira o código de país, Ex: +55.</small></span>-->
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>WhatsApp</label>
                        <input v-model="whatsapp" type="text" class="form-control"
                               data-toggle="input-mask"
                               data-mask-format="(00) 00000-0000" v-mask-phone.br >
                        <!--                        <span class="help-block"><small>Insira o código de país, Ex: +55.</small></span>-->
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
                        >
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Instagram</label>
                        <input v-model="instagram" type="text" class="form-control"
                        >
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Site</label>
                        <input v-model="site" type="text" class="form-control"
                        >
                      </div>
                    </div>
                  </div>


                  <hr style="margin: 30px 0">
                  <h4 class="header-title text-muted">Negócio</h4>
                  <div class="form-row">

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Descrição*</label>
                        <textarea v-model="descricao" rows="8" type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="col-12">
                        <label>Imagem</label>
                        <p class="text-center">
                          <img
                            id="photo"
                            :src="photo||'http://imagem.service.weblo.com.br/product/produto-sem-imagem.png'"
                            width="132"
                          />
                        </p>
                        <br/>

                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              @change="uploadImage"
                              type="file"
                              class="custom-file-input"
                              id="inputGroupFile04"
                              ref="files"
                              accept="image"
                            />
                            <label class="custom-file-label" for="inputGroupFile04">Selecionar Arquivo</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr />
                    <h4 class="header-title">Informe o horário de funcionamento</h4>
                    <div class="form-row col-12">
                      <div class="form-group col-md-3">
                        <label class="col-form-label">
                          Segunda à Sexta*
                        </label>
                        <input v-model="uteis_ini" type="text" class="form-control" data-toggle="input-mask" placeholder="17:00" maxlength="5" v-mask="'##:##'"/> as
                        <input
                          v-model="uteis_fim"
                          type="text"
                          class="form-control"
                          data-toggle="input-mask"
                          placeholder="00:00"
                          maxlength="5"
                          v-mask="'##:##'"
                        />
                      </div>
                      <div class="form-group col-md-3">
                        <label class="col-form-label">
                          Sábado*
                        </label>
                        <input v-model="sabado_ini" type="text" class="form-control" data-toggle="input-mask" placeholder="17:00" maxlength="5" v-mask="'##:##'"/> as
                        <input
                          v-model="sabado_fim"
                          type="text"
                          class="form-control"
                          data-toggle="input-mask"
                          placeholder="00:00"
                          maxlength="5"
                          v-mask="'##:##'"
                        />
                      </div>
                      <div class="form-group col-md-3">
                        <label class="col-form-label">
                          Domingo*
                        </label>
                        <input v-model="domingo_ini" type="text" class="form-control" data-toggle="input-mask" placeholder="17:00" maxlength="5" v-mask="'##:##'"/> as
                        <input
                          v-model="domingo_fim"
                          type="text"
                          class="form-control"
                          data-toggle="input-mask"
                          placeholder="00:00"
                          maxlength="5"
                          v-mask="'##:##'"
                        />
                      </div>
                      <div class="form-group col-md-3">
                        <label class="col-form-label">
                          Feriados*
                        </label>
                        <input
                          v-model="feriados_ini"
                          type="text"
                          class="form-control"
                          data-toggle="input-mask"
                          placeholder="17:00"
                          maxlength="5"
                          v-mask="'##:##'"
                        /> as
                        <input
                          v-model="feriados_fim"
                          type="text"
                          class="form-control"
                          data-toggle="input-mask"
                          placeholder="00:00"
                          maxlength="5"
                          v-mask="'##:##'"
                        />
                      </div>
                    </div>
                  </div>



                  <hr style="margin: 30px 0">
                  <h4 class="header-title text-muted">Endereço</h4>

                  <div class="form-row">
                    <div class="form-group col-md-3">
                      <label for="cep" class="col-form-label">CEP*</label>
                      <input v-model="cep" type="text" class="form-control" id="cep" v-on:blur="buscar()"
                             data-toggle="input-mask" data-mask-format="00000-000" >
                    </div>

                    <div class="form-group col-md-7">
                      <label for="endereco" class="col-form-label">Endereço</label>
                      <input v-model="endereco" type="text" class="form-control" id="endereco"
                      >
                    </div>

                    <div class="form-group col-md-2">
                      <label for="numero" class="col-form-label">Número</label>
                      <input v-model="numero" type="text" class="form-control" id="numero"
                             data-toggle="input-mask" data-mask-format="000000" >
                    </div>

                    <div class="form-group col-md-2">
                      <label for="complemento" class="col-form-label">Complemento</label>
                      <input v-model="complemento" type="text" class="form-control" id="complemento"
                      >
                    </div>

                    <div class="form-group col-md-4">
                      <label for="bairro" class="col-form-label">Bairro</label>
                      <input v-model="bairro" type="text" class="form-control" id="bairro" >
                    </div>
                    <div class="form-group col-md-4">
                      <label for="cidade" class="col-form-label">Cidade</label>
                      <input v-model="cidade" type="text" class="form-control" id="cidade" >
                    </div>
                    <div class="form-group col-md-2">
                      <label for="estado" class="col-form-label">Estado</label>
                      <input v-model="estado" type="text" class="form-control text-uppercase" id="estado"
                             data-toggle="input-mask" data-mask-format="AA" >
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
                          <template v-slot:cell(Ação)="data">
                            <button @click="viewPrestador(data.value)" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Excluir">
                              <i class="dripicons-preview"></i>
                            </button>
                            <button @click="deletePrestador(data.value)" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title data-original-title="Excluir">
                              <i class="dripicons-cross"></i>
                            </button>
                          </template>
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
          { key: 'Nome', sortable: true},
          { key: 'RazãoSocial', sortable: true},
          { key: 'Email', sortable: true},
          { key: 'Telefone', sortable: true},
          { key: 'Ação', sortable: false},
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
        uteis_ini: "" ,
        uteis_fim: "" ,
        sabado_ini: "" ,
        sabado_fim: "" ,
        domingo_ini: "" ,
        domingo_fim: "" ,
        feriados_ini: "" ,
        feriados_fim: "" ,
        photo: "",
        loadingPage:	true,
        password:	'',
        password_confirmation:	'',
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
      this.getPrestadores();
      this.totalRows = this.items.length;

      this.$viaCep.buscar(this.cep).then(obj => {
        // console.log(obj);
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

      // cadastraPrestador(){
      // 	this.loadingPage = true;
      // 	let data = {
      // 		name:					this.nome,
      // 		email:					this.email,
      // 		nome_responsavel:		this.nome_responsavel,
      // 		razao_social:			this.razao_social,
      // 		nome_fantasia:			this.nome_fantasia,
      // 		cnpj:					this.cnpj,
      // 		telefone:				this.telefone,
      // 		whatsapp:				this.whatsapp,
      // 		facebook:				this.facebook,
      // 		instagram:				this.instagram,
      // 		site:					this.site,
      // 		descricao:				this.descricao,
      // 		cep:					this.cep,
      // 		endereco:				this.endereco,
      // 		numero:					this.numero,
      // 		complemento:			this.complemento,
      // 		bairro:					this.bairro,
      // 		cidade:					this.cidade,
      // 		estado:					this.estado,
  //       uteis_ini: this.uteis_ini,
  //       uteis_fim: this.uteis_fim,
  //       sabado_ini: this.sabado_ini,
  //       sabado_fim: this.sabado_fim,
  //       domingo_ini: this.domingo_ini,
  //       domingo_fim: this.domingo_fim,
  //       feriados_ini: this.feriados_ini,
  //       feriados_fim: this.feriados_fim,
  //       photo: this.photo,
      // 		password:				this.password,
      // 		password_confirmation:	this.password_confirmation,
      // 	};

      // 	// console.log(data);

      // 	// axios.post('http://localhost:8000/api/prestador', data, {
      // 	axios.post('https://service.encontrei.online/api/prestador', data, {
      // 		headers: {
      // 			'Content-Type': 'application/json',
      // 			Authorization: "Bearer " + this.user.token
      // 		}
      // 	})
      // 		.then(response => {
      // 			// console.log(response.data);
      // 			if (response.data.id) {
      // 				alert(response.data.nome_fantasia + " cadastrado com sucesso!");
      // 				this.prestador = response.data;

      // 				this.nome						=	'';
      // 				this.email						=	'';
      // 				this.nome_responsavel			=	'';
      // 				this.razao_social				=	'';
      // 				this.nome_fantasia				=	'';
      // 				this.cnpj						=	'';
      // 				this.telefone					=	'';
      // 				this.whatsapp					=	'';
      // 				this.facebook					=	'';
      // 				this.instagram					=	'';
      // 				this.site						=	'';
      // 				this.descricao					=	'';
      // 				this.cep						=	'';
      // 				this.endereco					=	'';
      // 				this.numero						=	'';
      // 				this.complemento				=	'';
      //         this.bairro						=	'';
      //         this.cidade						=	'';
      //         this.uteis_ini = "";
      //         this.uteis_fim = "";
      //         this.sabado_ini = "";
      //         this.sabado_fim = "";
      //         this.domingo_ini = "";
      //         this.domingo_fim = "";
      //         this.feriados_ini = "";
      //         this.feriados_fim = "";
      //         this.photo= "";
    //           this.estado						=	'';
    //           this.password					=	'';
    //           this.password_confirmation		=	'';

  // 				this.getPrestadores();

  // 			}else{
  // 				let errs = '';

  // 				if(response.data.email){
  // 					errs = errs + response.data.email;
  // 					errs = errs + '\n';
  // 				}

  // 				if(response.data.nome_responsavel){
  // 					errs = errs + response.data.nome_responsavel;
  // 					errs = errs + '\n';
  // 				}

  // 				if(response.data.razao_social){
  // 					errs = errs + response.data.razao_social;
  // 					errs = errs + '\n';
  // 				}

  // 				if(response.data.nome_fantasia){
  // 					errs = errs + response.data.nome_fantasia;
  // 					errs = errs + '\n';
  // 				}

  // 				if(response.data.telefone){
  // 					errs = errs + response.data.telefone;
  // 					errs = errs + '\n';
  // 				}

  // 				if(response.data.descricao){
  // 					errs = errs + response.data.descricao;
  // 					errs = errs + '\n';
  // 				}

  // 				if(response.data.cep){
  // 					errs = errs + response.data.cep;
  // 					errs = errs + '\n';
  // 				}

  // 				if(response.data.endereco){
  // 					errs = errs + response.data.endereco;
  // 					errs = errs + '\n';
  // 				}

  // 				if(response.data.numero){
  // 					errs = errs + response.data.numero;
  // 					errs = errs + '\n';
  // 				}

  // 				if(response.data.bairro){
  // 					errs = errs + response.data.bairro;
  // 					errs = errs + '\n';
  // 				}

  // 				if(response.data.cidade){
  // 					errs = errs + response.data.cidade;
  // 					errs = errs + '\n';
  // 				}

  // 				if(response.data.estado){
  // 					errs = errs + response.data.estado;
  // 					errs = errs + '\n';
  // 				}


  // 				alert(errs);

  // 				// console.log(errs);
  // 			}

  // 			this.loadingPage = false;
  // 		})
  // 		.catch(e => {
  // 			// console.log(e);
  // 			alert('servidor fora de área')
  // 		});
  // },

  getPrestadores(){
    this.loadingPage = true;
    // axios.get('http://localhost:8000/api/prestador', {
    axios.get('https://service.encontrei.online/api/prestador', {
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
            RazãoSocial: usuario.razao_social,
            Email: usuario.email,
            Telefone: usuario.telefone,
            Ação: usuario,
          };
          items.push(object);
          // console.log(usuario.nome);
        }
        this.items = items;
        this.totalRows = this.items.length;
        // console.log(this.usuarios);
        this.loadingPage = false;
      })
      .catch(e => {
        // console.log(e);
        alert('servidor fora de área')
      });
  },

  getPrestador(){
    this.loadingPage = true;
    // axios.get('http://localhost:8000/api/prestador', {
    axios.get('https://service.encontrei.online/api/prestador', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + this.user.token
      }
    })
      .then(response => {
        // console.log(response.data);
        this.prestadores = response.data;
        this.loadingPage = false;
      })
      .catch(e => {
        // console.log(e);
        alert('servidor fora de área')
      });
  },

  buscar() {
    axios.get('https://viacep.com.br/ws/' + this.cep + '/json')
      .then(response => {
        // console.log(response.data)
        this.cep = response.data.cep;
        this.endereco = response.data.logradouro;
        this.bairro = response.data.bairro;
        this.cidade = response.data.localidade;
        this.estado = response.data.uf;

        if (!this.cep) {
          alert('CEP não encontrado!');
        }
      })
  },

  viewPrestador(id){
    this.loadingPage = true;
    // axios.get('http://localhost:8000/api/prestador', {
    axios.get('https://service.encontrei.online/api/prestador/' + id.id, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + this.user.token
      }
    })
      .then(response => {
        this.nome						=	response.data.nome;
        this.email						=	response.data.email;
        this.nome_responsavel			=	response.data.nome_responsavel;
        this.razao_social				=	response.data.razao_social;
        this.nome_fantasia				=	response.data.nome_fantasia;
        this.cnpj						=	response.data.cnpj;
        this.telefone					=	response.data.telefone;
        this.whatsapp					=	response.data.whatsapp;
        this.facebook					=	response.data.facebook;
        this.instagram					=	response.data.instagram;
        this.site						=	response.data.site;
        this.descricao					=	response.data.descricao;
        this.cep						=	response.data.cep;
        this.endereco					=	response.data.endereco;
        this.numero						=	response.data.numero;
        this.complemento				=	response.data.complemento;
        this.bairro						=	response.data.bairro;
        this.cidade						=	response.data.cidade;
        this.estado						=	response.data.estado;
        this.password					=	response.data.password;
        this.password_confirmation		=	response.data.password_confirmation;

        console.log(response.data);
        this.loadingPage = false;
      })
      .catch(e => {
        // console.log(e);
        alert('servidor fora de área')
      });
  },

  uploadImage(event) {
    let input = event.target;
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.photo = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
    //   console.log(this.$refs.files.files[0].toDataURL());
    //   this.photo = this.$refs.files.files[0];
    this.image = this.$refs.files.files;
  },

  deletePrestador(prestador){
    // console.log(prestador);
    this.$swal.fire({
      title: 'Você tem certeza que deseja excluir '+ prestador.nome +'?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apague!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        axios.delete('https://service.encontrei.online/api/prestador/' + prestador.id, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + this.user.token
          }
        })
          .then(response => {
            this.$swal.fire(
              'Excluída!',
              'Prestador ' + response.data.name + ' foi deletado.',
              'success'
            ).then(ok => {
              this.getPrestadores();
            });

          })
          .catch(e => {
            alert("servidor fora de área");
          });
      }
    })
  }
  }
  };
</script>

<style>
  .swal2-popup.swal2-toast .swal2-title {
    color: white;
  }

  .swal2-popup.swal2-toast.swal2-show {
    background: #73b730;
  }

  .lds-facebook {
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 9999;
    background: rgba(40, 167, 69, 0.1);
    left: 0;
  }

  .lds-facebook div {
    display: inline-block;
    position: fixed;
    left: 8px;
    width: 16px;
    background-color: rgba(0, 128, 0, 1);
    -webkit-animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    text-align: center;
    margin: 0 auto;
    margin-top: 40vh;
  }

  .lds-facebook div:nth-child(1) {
    right: 8px;
    animation-delay: -0.24s;
  }

  .lds-facebook div:nth-child(2) {
    right: 50px;
    animation-delay: -0.12s;
  }

  .lds-facebook div:nth-child(3) {
    right: 95px;
    animation-delay: 0;
  }

  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
  }
</style>

