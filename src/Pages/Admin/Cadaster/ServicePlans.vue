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
						<div class="col-12">
							<div class="card">
								<div class="card-body">
									<h4 class="header-title">Planos de Serviço</h4>
									<!--p class="text-muted font-14 mb-3">
											Crie quantas prioridade de formulários desejar.
									</p-->
									<div class="form-row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Plano de Serviço</label>
												<input v-model="nome" type="text" class="form-control">
											</div>
										</div>
										<div class="col-md-6">
											<button type="button" class="btn btn-primary" style="margin-top:30px" @click="cadastraPlano()">
												<i class="mdi mdi-content-save-outline mr-1"></i>
												<span>Salvar </span>
											</button>
										</div>
									</div>
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
									</p -->
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
													<button class="btn btn-sm btn-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Editar">
														<i class="dripicons-document-edit"></i>
													</button>
													<button @click="deletePlano(plano
										.id)" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Excluir">
														<i class="dripicons-cross"></i>
													</button>
												</td>
											</tr>
											</tbody>
										</table>
									</div>
								</div> <!-- end card-body -->
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
				name: 'ServicePlans',
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
								planos				:	'',
						}
				},
				created() {
						let usuarioAux = sessionStorage.getItem('usuario')
						if (usuarioAux) {
								this.usuario = JSON.parse(usuarioAux)
						} else {
								this.$router.push('/login');
						}
						this.getPlanos();
				},
				methods: {
						cadastraPlano(){
								let data = {
										nome				: this.nome,
								};

								// axios.post('http://localhost:8000/api/plano-servico', data, {
								axios.post('https://service.encontrei.online/api/plano-servico', data, {
										headers: {
												'Content-Type': 'application/json',
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
												alert('servidor fora de área')
										});
						},

						deletePlano(id){
							// axios.delete('http://localhost:8000/api/plano-servico/' + id, {
							axios.delete('https://service.encontrei.online/api/plano-servico/' + id, {
								headers: {
										'Content-Type': 'application/json',
										Authorization: "Bearer " + this.user.token
								}
							})
							.then(response => {
								alert(response.data.nome + ' deletado com sucesso!');
								this.getPlanos();
							})
							.catch(e => {
								alert('servidor fora de área')
							});
						},

						getPlanos(){
								// axios.get('http://localhost:8000/api/plano-servico', {
								axios.get('https://service.encontrei.online/api/plano-servico', {
										headers: {
												'Content-Type': 'application/json',
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
												alert('servidor fora de área')
										});
						},
				}
		};
</script>

<style>

</style>
