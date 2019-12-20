<template>
  <div class="wrapper">
    <div v-if="loading" class="lds-facebook">
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
          <PageTitle home="Início" category="Relatórios" sub-category="Acesso" titulo="Produtos/Serviço"/>
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
                    empty-text="Não encontramos nenhum Produtos/Serviço cadastrado!"
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
    import PageTitle from "@/components/PageTitle";
    import axios from "axios";

    export default {
        name: 'AccessProductsServices',
        components:{
            PageTitle,
            Sidebar,
            TopMenu,
            Footer
        },
        created() {
            let usuarioAux = sessionStorage.getItem('usuario')
            if (usuarioAux) {
                this.usuario = JSON.parse(usuarioAux)
            } else {
                this.$router.push('/login');
            }
        },
        data () {
            return {
                user:     JSON.parse(sessionStorage.getItem('usuario')),
                fields: [
                    { key: 'Produto', sortable: true },
                    { key: 'Anunciante', sortable: true, },
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
                loading: false,
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

            getProdutos(){
              this.loading = true;
              // alert("Entrou!");
              // axios.get('http://localhost:8000/api/produto', {
              axios.get('https://service.encontrei.online/api/produto', {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer " + this.user.token
                }
              })
                .then(response => {
                  console.log(response);
                  this.loading = false;

                  this.produtos = response.data;
                  let items = [];
                  let produtos = this.produtos;

                  for (let produto of produtos) {
                    let object = {
                      Produto:      produto.nome,
                      Anunciante:   produto.provide
                    };
                    items.push(object);
                    // console.log(produto.nome);
                  }
                  this.items = items;
                  this.totalRows = this.items.length;
                  this.loading = false;
                  // console.log(this.produtos);
                })
                .catch(e => {
                  console.log(e);
                  alert('Servidor fora de área!')
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
