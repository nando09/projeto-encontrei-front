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
												<input v-model='nome' type="text" class="form-control" required/>
											</div>
										</div>

										<div class="col-md-6">
											<div class="form-group">
												<label>Valor:</label>
												<input v-model='preco' type="number" class="form-control" required/>
											</div>

										</div>

<!-- 										<div class="col-md-12">
											<div class="form-group">
												<label>Foto</label>
												<input type="file" class="form-control" required/>
											</div>
										</div>
 -->
										<div class="row col-md-12 justify-content-center">
											<button @click="cadastraProduto()" class="btn btn-primary">Cadastrar</button>
										</div>

									</div>
									<!-- end row-->
								</div> <!-- end card-body-->
							</div> <!-- end card-->
						</div> <!-- end col -->
					</div>
					<div class="table-responsive-sm">
						<table class="table table-centered mb-0">
							<thead>
								<tr>
									<th width="45%">Nome</th>
									<th width="45%">Preço</th>
									<th>Ação</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in items">
									<td>{{ item.nome }}</td>
									<td>{{ item.preco }}</td>
									<td>
										<button class="btn btn-sm btn-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Editar">
										<i class="dripicons-document-edit"></i>
										</button>
										<button @click="deleteProduto(item
										.id)" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Excluir">
										<i class="dripicons-cross"></i>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
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
					preco					:	'',
					items					:	[],
				}
			},
			created() {
				let usuarioAux = sessionStorage.getItem('usuario')
				if (usuarioAux) {
					this.usuario = JSON.parse(usuarioAux);
					this.getProduto();
				} else {
					this.$router.push('/login');
				}
			},
			methods: {
				cadastraProduto(){
					let data = {
						nome	:	this.nome,
						preco	:	this.preco,
					};

					// console.log(data);

					// axios.post('http://localhost:8000/api/produto', data, {
					axios.post('https://service.encontrei.online/api/produto', data, {
						headers: {
								'Content-Type': 'application/json',
								Authorization: "Bearer " + this.user.token
						}
					})
					.then(response => {
						// console.log(response.data);
						alert(response.data.nome + " cadastrado com sucesso!");
						this.responsavel = response.data;
						this.getProduto();
						this.nome	=	'';
						this.preco	=	'';
					})
					.catch(e => {
							// console.log(e);
							alert('servidor fora de área')
					});
				},

				deleteProduto(id){
					console.log(id);
					// axios.delete('http://localhost:8000/api/produto/' + id, {
					axios.delete('https://service.encontrei.online/api/produto/' + id, {
						headers: {
								'Content-Type': 'application/json',
								Authorization: "Bearer " + this.user.token
						}
					})
					.then(response => {
						alert(response.data.nome + ' deletado com sucesso!');
						this.getProduto();
					})
					.catch(e => {
						alert('servidor fora de área')
					});
				},

				getProduto(){
					// axios.get('http://localhost:8000/api/produto', {
					axios.get('https://service.encontrei.online/api/produto', {
						headers: {
								'Content-Type': 'application/json',
								Authorization: "Bearer " + this.user.token
						}
					})
					.then(response => {
						// console.log(response.data);
						this.items = response.data;
					})
					.catch(e => {
						// console.log(e);
						alert('servidor fora de área')
					});
				},

				showModal() {
					this.$refs['my-modal'].show()
				},
				hideModal() {
					this.$refs['my-modal'].hide()
				},
				toggleModal() {
					// We pass the ID of the button that we want to return focus to
					// when the modal has hidden
					this.$refs['my-modal'].toggle('#toggle-btn')
				}
			}
		};
</script>

<style>

</style>
