<template>
  <div class="wrapper">
    <div v-if="loadingPage" class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <SidebarClient title="Área do Usuário"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <div class="col-md-12">


          <PageTitle home="Encontrei" category="Parceiros" sub-category="Dados Cadastrais" titulo="Dados Cadastrais"/>

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
                <div class="tab-pane fade show active" id="dados" role="tabpanel" aria-labelledby="dados-tab" v-on:keyup.enter="updateUsuario()">

                  <h4 class="header-title text-muted">Dados Pessoais</h4>
                  <div class="form-row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Nome*</label>
                        <input v-model="nome" type="text" class="form-control" data-toggle="input-mask">
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Email*</label>
                        <input v-model="email" type="email" class="form-control" data-toggle="input-mask">
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
                        <input v-model="cnpj" type="text" class="form-control" data-toggle="input-mask" data-mask-format="00.000.000/0000-00" v-mask-cnpj>
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
                               placeholder="(xx) xxxx-xxxx"
                               data-toggle="input-mask" data-mask-format="(00) 0000-0000" v-mask-phone.br>
                        <!--                        <span class="help-block"><small>Insira o código de país, Ex: +55.</small></span>-->
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>WhatsApp</label>
                        <input v-model="whatsapp" type="text" class="form-control"
                               placeholder="+55 (xx) xxxxx-xxxx"
                               data-toggle="input-mask"
                               data-mask-format="(00) 00000-0000" v-mask-phone.br>
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
                  <h4 class="header-title text-muted">Negócio</h4>
                  <div class="form-row">

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Descrição*</label>
                        <textarea v-model="descricao" rows="8" type="text" class="form-control"/>
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
                             data-toggle="input-mask" data-mask-format="00000-000">
                    </div>

                    <div class="form-group col-md-7">
                      <label for="endereco" class="col-form-label">Endereço*</label>
                      <input v-model="endereco" type="text" class="form-control" id="endereco"
                             placeholder="">
                    </div>

                    <div class="form-group col-md-2">
                      <label for="numero" class="col-form-label">Número*</label>
                      <input v-model="numero" type="text" class="form-control" id="numero"
                             data-toggle="input-mask" data-mask-format="000000">
                    </div>

                    <div class="form-group col-md-2">
                      <label for="complemento" class="col-form-label">Complemento*</label>
                      <input v-model="complemento" type="text" class="form-control" id="complemento"
                             placeholder="">
                    </div>

                    <div class="form-group col-md-4">
                      <label for="bairro" class="col-form-label">Bairro*</label>
                      <input v-model="bairro" type="text" class="form-control" id="bairro">
                    </div>
                    <div class="form-group col-md-4">
                      <label for="cidade" class="col-form-label">Cidade*</label>
                      <input v-model="cidade" type="text" class="form-control" id="cidade">
                    </div>
                    <div class="form-group col-md-2">
                      <label for="estado" class="col-form-label">Estado*</label>
                      <input v-model="estado" type="text" class="form-control text-uppercase" id="estado"
                             data-toggle="input-mask" data-mask-format="AA">
                    </div>

                    <div class="row col-12 justify-content-center">
                      <button type="button" class="btn btn-primary" @click="updateUsuario()">
                        <i class="mdi mdi-reload mr-1"></i>
                        <span>Atualizar</span>
                      </button>
                    </div>

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
        usuario:			JSON.parse(sessionStorage.getItem('usuario')),

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
        loadingPage: true,
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
      // this.$viaCep.buscar(this.cep).then(obj => {
      // 	// console.log(obj);
      // });
    },

    created() {
      this.loadingPage = true;
      let usuarioAux = sessionStorage.getItem('usuario')
      if (usuarioAux) {
        this.usuario = JSON.parse(usuarioAux)
        this.getUsuario();
      } else {
        this.$router.push('/login');
      }
    },
    methods: {
      updateUsuario() {
        // alert("Entrou!");
        this.loadingPage = true;
        let data = {
          nome:						this.nome,
          email:						this.email,
          nome_responsavel:			this.nome_responsavel,
          razao_social:				this.razao_social,
          nome_fantasia:				this.nome_fantasia,
          cnpj:						this.cnpj,
          telefone:					this.telefone,
          whatsapp:					this.whatsapp,
          facebook:					this.facebook,
          instagram:					this.instagram,
          site:						this.site,
          descricao:					this.descricao,
          cep:						this.cep,
          endereco:					this.endereco,
          numero:						this.numero,
          complemento:				this.complemento,
          bairro:						this.bairro,
          cidade:						this.cidade,
          estado:						this.estado,
          uteis_ini: this.uteis_ini,
          uteis_fim: this.uteis_fim,
          sabado_ini: this.sabado_ini,
          sabado_fim: this.sabado_fim,
          domingo_ini: this.domingo_ini,
          domingo_fim: this.domingo_fim,
          feriados_ini: this.feriados_ini,
          feriados_fim: this.feriados_fim,
          photo: this.photo,
        };

        if(this.vertificaCampos()){
          return false;
        }

        // alert("Passou!");

        // console.log(data);

        // axios.put('http://localhost:8000/api/users/'+id, data,{
        axios.put(
          "https://service.encontrei.online/api/prestador/" + this.usuario.id,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.usuario.token
            }
          }
        )
          .then(response => {
            this.loadingPage = false;
            sessionStorage.setItem('usuario', JSON.stringify(response.data))
            this.$router.push('/usuario');
            this.toast("Atualizado com sucesso!", '#73b730');
          });

        // this.loadingPage = false;
      },

      toast(nome, cor){
        const Toast = this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          background: cor,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer)
            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
          }
        });

        Toast.fire({
          icon: 'success',
          title: nome
        });
      },

      vertificaCampos(){
        if (this.nome == null || this.nome == '') {
          this.toast('Campo nome é obrigatório', '#ec293c');
          this.loadingPage = false;
          return true;
        }else if (this.email == null || this.email == '') {
          this.toast('Campo email é obrigatório', '#ec293c');
          this.loadingPage = false;
          return true;
        }else if (this.nome_responsavel == null || this.nome_responsavel == '') {
          this.toast('Campo nome responsável é obrigatório', '#ec293c');
          this.loadingPage = false;
          return true;
        }else if (this.razao_social == null || this.razao_social == '') {
          this.toast('Campo razão social é obrigatório', '#ec293c');
          this.loadingPage = false;
          return true;
        }else if (this.nome_fantasia == null || this.nome_fantasia == '') {
          this.toast('Campo nome fantasia é obrigatório', '#ec293c');
          this.loadingPage = false;
          return true;
        }else if (this.telefone == null || this.telefone == '') {
          this.toast('Campo telefone é obrigatório', '#ec293c');
          this.loadingPage = false;
          return true;
        }else if (this.descricao == null || this.descricao == '') {
          this.toast('Campo descrição é obrigatório', '#ec293c');
          this.loadingPage = false;
          return true;
        }else if (this.cep == null || this.cep == '') {
          this.toast('Campo CEP é obrigatório', '#ec293c');
          this.loadingPage = false;
          return true;
        }else if (this.endereco == null || this.endereco == '') {
          this.toast('Campo endereço é obrigatório', '#ec293c');
          this.loadingPage = false;
          return true;
        }else if (this.numero == null || this.numero == '') {
          this.toast('Campo numero é obrigatório', '#ec293c');
          this.loadingPage = false;
          return true;
        }else if (this.bairro == null || this.bairro == '') {
          this.toast('Campo bairro é obrigatório', '#ec293c');
          this.loadingPage = false;
          return true;
        }else if (this.cidade == null || this.cidade == '') {
          this.toast('Campo cidade é obrigatório', '#ec293c');
          this.loadingPage = false;
          return true;
        }else if (this.estado == null || this.estado == '') {
          this.toast('Campo estado é obrigatório', '#ec293c');
          this.loadingPage = false;
          return true;
        }

        return false;
      },

      getUsuario(){
        this.loadingPage = true;
        axios.get(
          "https://service.encontrei.online/api/myLog",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.usuario.token
            }
          }
        )
          .then(response => {
            response = response.data;
            // console.log(response);

            this.nome									= response.nome;
            this.email								= response.email;
            this.nome_responsavel			= response.nome_responsavel;
            this.razao_social					= response.razao_social;
            this.nome_fantasia				= response.nome_fantasia;
            this.cnpj									= response.cnpj;
            this.telefone							= response.telefone;
            this.whatsapp							= response.whatsapp;
            this.facebook							= response.facebook;
            this.instagram						= response.instagram;
            this.site									= response.site;
            this.descricao						= response.descricao;
            this.cep									= response.cep;
            this.endereco							= response.endereco;
            this.numero								= response.numero;
            this.complemento					= response.complemento;
            this.bairro								= response.bairro;
            this.cidade								= response.cidade;
            this.estado								= response.estado;
            this.uteis_ini = response.uteis_ini;
            this.uteis_fim = response.uteis_fim;
            this.sabado_ini = response.sabado_ini;
            this.sabado_fim = response.sabado_fim;
            this.domingo_ini = response.domingo_ini;
            this.domingo_fim = response.domingo_fim;
            this.feriados_ini = response.feriados_ini;
            this.feriados_fim = response.feriados_fim;
            this.photo = response.photo;
            this.loadingPage = false;
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
    }

  };
</script>

<style>
  .swal2-popup.swal2-toast .swal2-title {
    color: white;
  }

  .swal2-popup.swal2-toast.swal2-show {
    /*background: #73b730;*/
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
