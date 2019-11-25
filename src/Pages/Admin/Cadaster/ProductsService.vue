<template>
  <div class="wrapper">
    <Sidebar title="Administração"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <div class="container-fluid">

          <!-- start page title -->
          <PageTitle home="Início" category="Cadastro" sub-category="Produtos/Serviços" titulo="Cadastro de Produtos/Serviços"/>
          <!-- end page title -->

          <div class="row">
            <div class="col-xl-12">
              <div class="card">
                <div class="card-body">

                  <h4 class="header-title mb-3">Novo Produto</h4>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Nome do Produto:</label>
                        <input type="text" class="form-control" required/>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Valor:</label>
                        <input type="text" class="form-control" required/>
                      </div>

                    </div>

                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Foto</label>
                        <input type="file" class="form-control" required/>
                      </div>
                    </div>

                    <div class="row col-md-12 justify-content-center">
                      <button class="btn btn-primary">Cadastrar</button>
                    </div>

                  </div>
                  <!-- end row-->
                </div> <!-- end card-body-->
              </div> <!-- end card-->
            </div> <!-- end col -->
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
        name: 'ProductsService',
        components:{
            Sidebar,
            TopMenu,
            Footer,
            PageTitle
        },
        data () {
            return {
                user					:	JSON.parse(sessionStorage.getItem('usuario')),
                nome					:	'',
                descricao				:	'',
                formato					:	'',
                tipo_de_cobranca		:	'',
                tipo_de_precificacao	:	'',
                preco					:	'',
                disponivel				:	'',
                quantidade_max			:	'',
                garantia				:	'',
                email					:	'',
                categoria				:	'',
                confirmar_dados			:	'',
                gratis					:	'',
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
        methods: {
            cadastraProduto(){
                let data = {
                    nome					:	this.nome,
                    descricao				:	this.descricao,
                    formato					:	this.formato,
                    tipo_de_cobranca		:	this.tipo_de_cobranca,
                    tipo_de_precificacao	:	this.tipo_de_precificacao,
                    preco					:	this.preco,
                    disponivel				:	this.disponivel,
                    quantidade_max			:	this.quantidade_max,
                    garantia				:	this.garantia,
                    email					:	this.email,
                    categoria				:	this.categoria,
                    confirmar_dados			:	(this.confirmar_dados == "") ? '0' : '1',
                    gratis					:	(this.gratis == "") ? '0' : '1',
                };

                console.log(data);

                // axios.post('https://localhost:8000/api/produto', data, {
                axios.post('https://service.encontrei.online/api/produto', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + this.user.token
                    }
                })
                    .then(response => {
                        console.log(response.data);
                        alert(response.data.nome + " cadastrado com sucesso!");
                        this.responsavel = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                        alert('servidor fora de área')
                    });
            }
        }
    };
</script>

<style>

</style>
