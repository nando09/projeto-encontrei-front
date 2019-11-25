<template>
  <div class="wrapper">
    <Sidebar title="Administração"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <div class="container-fluid">

          <!-- start page title -->
          <PageTitle home="Início" category="Relatórios" sub-category="Parceiros" titulo="Relatório de Parceiros"/>
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
                    :current-page="currentPage"
                    :per-page="perPage"
                    :filter="filter"
                    :filterIncludedFields="filterOn"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    :sort-direction="sortDirection"
                    @filtered="onFiltered"
                    id="basic-datatable" class="table dt-responsive nowrap" width="100%" responsive :fields="fields" :items="myProvider()">

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
    import axios from 'axios';
    import PageTitle from "@/components/PageTitle";

    export default {
        name: 'Partners',
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
            // this.getLojista();
        },
        data () {
            return {
                fields: [
                    {
                        key: 'segmento',
                        sortable: true,
                    },
                    {
                        key: 'dataCadastro',
                        sortable: true,
                    },
                    {
                        key: 'regiao',
                        sortable: true,
                    },
                    {
                        key: 'estado',
                        sortable: true,
                    },
                    {
                        key: 'cidade',
                        sortable: true,
                    }
                ],
                items: [],
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
            // Set the initial number of items
            this.totalRows = this.items.length
        },



        methods: {
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            },

            getLojista(){
                // axios.get('https://localhost:8000/api/prestador', {
                axios.get('https://service.encontrei.online/api/prestador', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + this.user.token
                    }
                })
                    .then(response => {
                        console.log(response.data);
                        this.items = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                        alert('servidor fora de área')
                    });
            },

            myProvider(ctx) {
                // axios.get('https://localhost:8000/api/prestador', {
                axios.get('https://service.encontrei.online/api/prestador', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + this.user.token
                    }
                })
                    .then(response => {
                        console.log(response.data);
                        this.items = response.data;
                        return this.items;
                    })
                    .catch(e => {
                        console.log(e);
                        alert('servidor fora de área')
                    });



                // // Here we don't set isBusy prop, so busy state will be
                // // handled by table itself
                // // this.isBusy = true
                // let promise = axios.get('/some/url')

                // return promise.then((data) => {
                // 	const items = data.items
                // 	// Here we could override the busy state, setting isBusy to false
                // 	// this.isBusy = false
                // 	return(items)
                // }).catch(error => {
                // 	// Here we could override the busy state, setting isBusy to false
                // 	// this.isBusy = false
                // 	// Returning an empty array, allows table to correctly handle
                // 	// internal busy state in case of error
                // 	return []
                // })
            }
        }

    }
</script>

<style>

</style>
