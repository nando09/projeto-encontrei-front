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
        <div class="container-fluid">

          <!-- start page title -->
          <PageTitle home="Início" category="Relatórios" sub-category="Produtos" titulo="Relatório de Produtos"/>
          <!-- end page title -->

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
                      class="mb-0">
                      <b-input-group size="sm" class="mb-2">
                        <b-form-input
                          v-model="filter"
                          type="search"
                          id="filterInput"
                          placeholder="Clique para pesquisar"
                        />
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
                    empty-text="Não encontramos nenhum produto cadastrado!"
                    :current-page="currentPage"
                    :per-page="perPage"
                    :filter="filter"
                    :filterIncludedFields="filterOn"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    :sort-direction="sortDirection"
                    @filtered="onFiltered"
                    id="basic-datatable" class="table dt-responsive nowrap" width="100%" responsive :fields="fields" :items="items">
                    <template v-slot:cell(Imagem)="data">
                      <img
                        v-bind:src="data.value"
                        alt="contact-img"
                        title="contact-img"
                        class="rounded mr-3"
                        height="48"
                      />
                    </template>
                    <template v-slot:cell(Ação)="data">
                      <button
                        @click="editarProduto(data.value)"
                        class="btn btn-sm btn-info mr-2"
                        data-toggle="modal"
                        data-placement="top"
                        title
                        data-original-title="Editar"
                        type="button"
                        data-target="#modalEdit"
                      >
                        <i class="dripicons-document-edit"></i>
                      </button>
                      <button @click="deleteProduto(data.value)" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title data-original-title="Excluir">
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
                        />
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
                      />
                    </b-col>
                  </b-row>


                </div> <!-- end card body-->
              </div> <!-- end card -->
            </div><!-- end col-->
          </div>

          <div
            class="modal fade"
            id="modalEdit"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Editar Produto</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Fechar"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form action class="form-group">
                    <div class="col-12 d-inline-flex">
                      <div class="col-12">
                        <label for>Nome</label>
                        <input type="text" class="form-control" v-model="updateNome" v-on:keyup.enter="updateProduto()"/>
                      </div>
                      <input type="hidden" v-model="updateId" />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >Fechar</button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                    @click="updateProduto()"
                  >Salvar mudanças</button>
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

  import TopMenu from '@/components/TopMenu'
  import Footer from '@/components/Footer'
  import SidebarClient from "@/components/Client/SidebarClient";
  import PieSimpleDonut from '@/components/charts/PieSimpleDonut';
  import PageTitle from '@/components/PageTitle';
  import CardBody from '@/components/CardBody';
  import AreaSplineArea from '@/components/charts/AreaSplineArea';
  import axios from "axios";

  export default {
    name: 'RelatorioProdutosCliente',
    components:{
      SidebarClient,
      TopMenu,
      Footer,
      CardBody,
      PieSimpleDonut,
      PageTitle,
      AreaSplineArea
    },
    data () {
      return {
        user:	JSON.parse(sessionStorage.getItem('usuario')),
        fields: [
          { key: 'Nome', sortable: true, },
          { key: 'Imagem', sortable: false, },
          { key: 'Ação', sortable: false, },
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
        loadingPage: true,

        updateNome: '',
        updatePreco: '',
        updateId: '',
        photoUrl: 'https://image.service.encontrei.online/',
      }
    },
    created() {
      let usuarioAux = sessionStorage.getItem('usuario')
      if (usuarioAux) {
        this.usuario = JSON.parse(usuarioAux)
      } else {
        this.$router.push('/login');
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
    mounted() {
      this.getProdutos();
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },

      getProdutos() {
        this.loadingPage = true;
        axios.get("https://service.encontrei.online/api/productsProvider/" + this.usuario.id, {
          // axios.get('http://localhost:8000/api/produto', {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.user.token
          }
        })
          .then(response => {
            this.produtos = response.data;
            let items = [];
            let produtos = this.produtos;

            for (let produto of produtos) {
              let object = {
                Nome: produto.nome,
                Imagem: this.photoUrl + produto.images[0].image,
                Ação: {
                  id: produto.id,
                  nome: produto.nome
                },
              };
              items.push(object);
              // console.log(produto.nome);
            }
            this.items = items;
            this.totalRows = this.items.length;
            this.loadingPage = false;
            // console.log(this.produtos);
          })
          .catch(e => {
            // console.log(e);
            alert("servidor fora de área");
          });
      },

      deleteProduto(produto) {
        // axios.delete('http://localhost:8000/api/produto/' + id, {

        this.$swal.fire({
          title: 'Você tem certeza que deseja excluir '+ produto.nome +'?',
          text: "Você não poderá reverter isso!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim, apague!',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.value) {
            axios.delete("https://service.encontrei.online/api/produto/" + produto.id, {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.user.token
              }
            })
              .then(response => {
                this.$swal.fire(
                  'Excluída!',
                  'Seu produto ' + response.data.nome + ' foi deletado.',
                  'success'
                ).then(response => {
                  this.getProdutos();
                });

              })
              .catch(e => {
                alert("servidor fora de área");
              });
          }
        })
      },

      editarProduto(id) {
        this.loadingPage = true;

        this.updateNome = '';
        this.updatePreco = '';
        axios
          .get("https://service.encontrei.online/api/produto/" + id.id, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.user.token
            }
          })
          .then(response => {
            //   this.items = response.data;
            this.updateNome = response.data.nome;
            this.updatePreco = response.data.preco;
            this.updateId = response.data.id;

            this.loadingPage = false;
          })
          .catch(e => {
            alert("servidor fora de área");
          });
      },

      updateProduto() {
        this.loadingPage = true;
        let data = {
          nome: this.updateNome,
          preco: this.updatePreco
        };
        let id = this.updateId;

        axios.put("https://service.encontrei.online/api/produto/" + id, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.user.token
          }
        })
          .then(res => {
            this.getProdutos();
            if (res.data.id) {
              this.toast(res.data.nome + " alterado com sucesso!");
            }else{
              this.toast('Preecher todos os campos!');
            }
            // alert("Produto alterado com sucesso.");
          })
          .catch(e => alert(e));
      },

      toast(nome){
        const Toast = this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
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
