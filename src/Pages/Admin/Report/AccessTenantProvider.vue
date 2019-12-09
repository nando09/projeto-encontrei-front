<template>
  <div class="wrapper">
    <Sidebar title="Administração"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <div class="container-fluid">

          <!-- start page title -->
          <PageTitle home="Início" category="Relatórios" sub-category="Acesso" titulo="Lojista/Prestador"/>
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
        name: 'AccessTenantProvider',
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
                user:			JSON.parse(sessionStorage.getItem('usuario')),
                fields: [
                    { key: 'Nome', sortable: true },
                    { key: 'Nome_Fantasia', sortable: true },
                    { key: 'CNPJ', sortable: true, },
                    { key: 'Email', sortable: true, },
                    { key: 'Telefone', sortable: true, },
                    // { key: 'Ação', sortable: true, },
                    // { key: 'acessoMenor', sortable: true, },
                    // { key: 'sexo', sortable: true, },
                    // { key: 'idade', sortable: true, }
                ],
                // items: [
                //     { isActive: true, data: "%23/10/2018%", cidade: "%Cidade%", estado: "%Estado%", segmento: "%Segmento%", acessoMaior: "%Acesso maior%",
                //         acessoMenor: "%Acesso menor%", sexo: "%Sexo%", idade: "%Idade%"},
                //     { isActive: true, data: "%10/06/1998%", cidade: "%Cidade%", estado: "%Estado%", segmento: "%Segmento%", acessoMaior: "%Acesso maior%",
                //         acessoMenor: "%Acesso menor%", sexo: "%Sexo%", idade: "%Idade%"},
                //     { isActive: true, data: "%04/07/2015%", cidade: "%Cidade%", estado: "%Estado%", segmento: "%Segmento%", acessoMaior: "%Acesso maior%",
                //         acessoMenor: "%Acesso menor%", sexo: "%Sexo%", idade: "%Idade%"},
                //     { isActive: true, data: "%13/04/1999%", cidade: "%Cidade%", estado: "%Estado%", segmento: "%Segmento%", acessoMaior: "%Acesso maior%",
                //         acessoMenor: "%Acesso menor%", sexo: "%Sexo%", idade: "%Idade%"},
                //     { isActive: true, data: "%28/02/2016%", cidade: "%Cidade%", estado: "%Estado%", segmento: "%Segmento%", acessoMaior: "%Acesso maior%",
                //         acessoMenor: "%Acesso menor%", sexo: "%Sexo%", idade: "%Idade%"},
                //     { isActive: true, data: "%16/10/1990%", cidade: "%Cidade%", estado: "%Estado%", segmento: "%Segmento%", acessoMaior: "%Acesso maior%",
                //         acessoMenor: "%Acesso menor%", sexo: "%Sexo%", idade: "%Idade%"},
                //     { isActive: true, data: "%23/01/2017%", cidade: "%Cidade%", estado: "%Estado%", segmento: "%Segmento%", acessoMaior: "%Acesso maior%",
                //         acessoMenor: "%Acesso menor%", sexo: "%Sexo%", idade: "%Idade%"},
                // ],
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
          this.getPrestador();
            // Set the initial number of items
            this.totalRows = this.items.length
        },
        methods: {
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
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
                  this.prestadores = response.data;
                  let items = [];
                  let prestadores = this.prestadores;
                  console.log(prestadores);

                  for (let prestador of prestadores) {
                    let object = {
                      Nome: prestador.nome,
                      Nome_Fantasia: prestador.nomefantasia,
                      CNPJ: prestador.cnpj,
                      Email: prestador.email,
                      Telefone: prestador.telefone,
                    };
                    items.push(object);
                    console.log(prestador.nome);
                  }
                  this.items = items;
                  this.totalRows = this.items.length;
                  console.log(this.prestadores);
                })
                .catch(e => {
                  console.log(e);
                  alert('servidor fora de área')
                });
            },

        }

    }
</script>

<style>

</style>
