<template>
  <div class="wrapper">
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
                      class="mb-0"
                    >
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
          { key: 'Anunciante', sortable: true, },
          { key: 'Valor', sortable: true, },
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
        axios.get("https://service.encontrei.online/api/produto", {
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
                Anunciante: produto.anunciante,
                Valor: produto.preco,
              };
              items.push(object);
              console.log(produto.nome);
            }
            this.items = items;
            this.totalRows = this.items.length;
            console.log(this.produtos);
          })
          .catch(e => {
            console.log(e);
            alert("servidor fora de área");
          });
      },
    }

  }
</script>

<style>

</style>
