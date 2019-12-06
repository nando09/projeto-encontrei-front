<template>
  <div class="wrapper">
    <Sidebar title="Administração" />
    <div class="content-page">
      <div class="content">
        <TopMenu />
        <div class="container-fluid">
          <!-- start page title -->
          <PageTitle
            home="Início"
            category="Cadastro"
            sub-category="Produtos/Serviços"
            titulo="Cadastro de Produtos/Serviços"
          />
          <!-- end page title -->

          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="header-title">Planos de Serviço</h4>
                  <!--p class="text-muted font-14 mb-3">
											Crie quantas prioridade de formulários desejar.
                  </p-->
                  <form class="form-group">
                    <div class="col-12 d-inline-flex p-0">
                      <div class="col-6">
                        <label>Plano de Serviço</label>
                        <input v-model="nome" type="text" class="form-control" />
                      </div>
                      <div class="col-6">
                        <label>Plano</label>
                        <input v-model="plano" type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 mt-2">
                      <label>Descrição</label>
                      <input v-model="descricao" type="text" class="form-control" />
                    </div>

                    <div class="col-12">
                      <button
                        type="button"
                        class="btn btn-primary float-right"
                        style="margin-top:30px"
                        @click="cadastraPlano()"
                      >
                        <i class="mdi mdi-content-save-outline mr-1"></i>
                        <span>Salvar</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="header-title">Edição de Plano de Serviço</h4>
                  <!-- p class="text-muted font-14 mb-3">
											Paragrafo pos titulo.
                  </p-->
                  <div class="table-responsive-sm">
                    <table class="table table-centered mb-0">
                      <thead>
                        <tr>
                          <th width="80%">Nome do Plano de Serviço</th>
                          <th>Ação</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="plano in planos">
                          <td>{{ plano.nome }}</td>
                          <td>
                            <button
                              @click="editarPlano(plano.id)"
                              class="btn btn-sm btn-info mr-2"
                              data-toggle="modal"
                              data-target="#modalEdit"
                              data-placement="top"
                              title
                              data-original-title="Editar"
                            >
                              <i class="dripicons-document-edit"></i>
                            </button>

                            <button
                              @click="deletePlano(plano
										.id)"
                              class="btn btn-sm btn-danger"
                              data-toggle="tooltip"
                              data-placement="top"
                              title
                              data-original-title="Excluir"
                            >
                              <i class="dripicons-cross"></i>
                            </button>
                          </td>

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
                                  <h5 class="modal-title" id="exampleModalLabel">Editar Plano</h5>
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
                                    <div class="col-12 d-inline-flex p-0">
                                      <div class="col-6">
                                        <label for>Plano de Serviço</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          v-model="updatePlanoServico"
                                        />
                                      </div>
                                      <input type="hidden" v-model="updateId" />
                                      <div class="col-6">
                                        <label for>Plano</label>
                                        <input
                                          type="number"
                                          class="form-control"
                                          v-model="updatePlano"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-12 mt-2">
                                      <label for>Descrição</label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        v-model="updateDescricao"
                                      />
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
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- end card-body -->
              </div>
              <!-- end card-->
            </div>
            <!-- end col -->
          </div>
        </div>
        <!-- container -->
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar/Sidebar";
import TopMenu from "@/components/TopMenu";
import Footer from "@/components/Footer";
import axios from "axios";
import PageTitle from "@/components/PageTitle";

export default {
  name: "ServicePlans",
  components: {
    Sidebar,
    TopMenu,
    Footer,
    PageTitle
  },
  data() {
    return {
      user: JSON.parse(sessionStorage.getItem("usuario")),
      nome: "",
      planos: "",
      plano: "",
      descricao: "",
      updatePlano: "",
      updatePlanoServico: "",
      updateDescricao: ""
    };
  },
  created() {
    let usuarioAux = sessionStorage.getItem("usuario");
    if (usuarioAux) {
      this.usuario = JSON.parse(usuarioAux);
    } else {
      this.$router.push("/login");
    }
    this.getPlanos();
  },
  methods: {
    cadastraPlano() {
      let data = {
        nome: this.nome,
        preco: this.plano,
        descricao: this.descricao
      };

      // axios.post('http://localhost:8000/api/plano-servico', data, {
      axios
        .post("https://service.encontrei.online/api/plano-servico", data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.user.token
          }
        })
        .then(response => {
          console.log(response.data);
          alert(response.data.nome + " cadastrado com sucesso!");
          this.getPlanos();
          // this.responsavel = response.data;
        })
        .catch(e => {
          console.log(e);
          alert("servidor fora de área");
        });
    },

    deletePlano(id) {
      // axios.delete('http://localhost:8000/api/plano-servico/' + id, {
      axios
        .delete("https://service.encontrei.online/api/plano-servico/" + id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.user.token
          }
        })
        .then(response => {
          alert(response.data.nome + " deletado com sucesso!");
          this.getPlanos();
        })
        .catch(e => {
          alert("servidor fora de área");
        });
    },

    editarPlano(id) {
      axios
        .get("https://service.encontrei.online/api/plano-servico/" + id, {
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
          console.log(response.data);
        })
        .catch(e => {
          alert("servidor fora de área");
        });
    },

    getPlanos() {
      // axios.get('http://localhost:8000/api/plano-servico', {
      axios
        .get("https://service.encontrei.online/api/plano-servico", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.user.token
          }
        })
        .then(response => {
          this.planos = response.data;
          // console.log(response.data);
          // alert(response.data.nome + " cadastrado com sucesso!");
          // this.responsavel = response.data;
        })
        .catch(e => {
          console.log(e);
          alert("servidor fora de área");
        });
    }
  }
};
</script>

<style>
</style>
