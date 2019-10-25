<template>
  <div class="oneElementTemplateErrorBreak">

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
</template>

<script>

    export default {
        name: 'AccessProductsServicesTable',
        data () {
            return {
                fields: [
                    {
                        key: 'produto',
                        sortable: true
                    },
                    {
                        key: 'codigo',
                        sortable: true
                    },
                    {
                        key: 'servico',
                        sortable: true,
                    },
                    {
                        key: 'segmento',
                        sortable: true,
                    },
                    {
                        key: 'valor',
                        sortable: true,
                    },
                    {
                        key: 'data',
                        sortable: true,
                    }
                ],
                items: [
                    { isActive: true, produto: "%Produto143%", codigo: "%Código68%", servico: "%Serviço%", segmento: "%Segmento%", valor: "%Valor%", data: "%Data%" },
                    { isActive: true, produto: "%Produto124%", codigo: "%Código54%", servico: "%Serviço%", segmento: "%Segmento%", valor: "%Valor%", data: "%Data%" },
                    { isActive: true, produto: "%Produto13%", codigo: "%Código098%", servico: "%Serviço%", segmento: "%Segmento%", valor: "%Valor%", data: "%Data%" },
                    { isActive: true, produto: "%Produto432%", codigo: "%Código54%", servico: "%Serviço%", segmento: "%Segmento%", valor: "%Valor%", data: "%Data%" },
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
            }
        }
    }
</script>

<style>

</style>
