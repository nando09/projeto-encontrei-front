<template xmlns="http://www.w3.org/1999/html">
	<div class="wrapper">
		<div v-if="loading" class="lds-facebook">
			<div></div>
			<div></div>
			<div></div>
		</div>
		<Sidebar title="Administração" />
		<div class="content-page">
			<div class="content">
				<TopMenu />
				<div class="container-fluid">
					<!-- start page title -->
					<PageTitle
						home="Início"
						category="Cadastro"
						sub-category="Planos de Serviço"
						titulo="Cadastro de Planos de Serviço"
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
											<div class="col-3">
												<label>Preço</label>
												<input v-model="plano" type="text" class="form-control" v-mask-decimal.br="2"/>
											</div>
											<div class="col-3">
												<label>Quantidade de produto</label>
												<input v-model="quantidade" type="number" class="form-control"/>
											</div>
										</div>
										<div class="col-12 mt-2">
											<label>Descrição</label>
											<textarea v-model="descricao" type="text" class="form-control"/>
										</div>

										<div class="col-12">
											<button
												type="button"
												class="btn btn-primary float-right"
												style="margin-top:30px"
												@click="cadastraPlano()"
											>
												<i class="mdi mdi-content-save-outline mr-1"></i>
												<span>Cadastrar</span>
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
													<th width="50%">Nome do Plano de Serviço</th>
													<th width="15%">Preço</th>
													<th width="15%">Quantidade</th>
													<th>Ação</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="plano in planos">
													<td>{{ plano.nome }}</td>
													<td>{{ formatPrice(plano.preco) }}</td>
													<td>{{ plano.quantidade }}</td>
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
															@click="deletePlano(plano)"
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
																					v-model="updatePlano"
																				/>
																			</div>
																			<input type="hidden" v-model="updateId" />
																			<div class="col-3">
																				<label for>Preço</label>
																				<input
																					type="text"
																					class="form-control"
																					v-model="updatePreco"
																					v-mask-decimal.br="2"
																				/>
																			</div>
																			<div class="col-3">
																				<label for>Quantidade</label>
																				<input
																					type="number"
																					class="form-control"
																					v-model="updateQuantidade"
																				/>
																			</div>
																		</div>
																		<div class="col-12 mt-2">
																			<label for>Descrição</label>
																			<textarea v-model="updateDescricao" type="text" class="form-control"/>
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
																		@click="updatePlan()"
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
			loading: false,
			quantidade: "",
			descricao: "",
			updatePlano: "",
			updatePreco: "",
			updateDescricao: "",
			updateQuantidade:	"",
			updateId: "",
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
			// this.loading = true;
			let data = {
				nome: this.nome,
				preco: this.plano,
				descricao: this.descricao,
				quantidade: this.quantidade
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
					if (response.data.id) {
						this.toast('Cadastro do plano ' + response.data.nome, '#73b730');
						this.getPlanos();
					}else{
						if(response.data.nome){
							this.toast(response.data.nome[0], '#ec293c');
						}else if(response.data.preco){
							this.toast(response.data.preco[0], '#ec293c');
						}else if(response.data.quantidade){
							this.toast(response.data.quantidade[0], '#ec293c');
						}
					}
				})
				.catch(e => {
					console.log(e);
					alert("servidor fora de área");
				});
		},

		deletePlano(id) {
			// axios.delete('http://localhost:8000/api/plano-servico/' + id, {
			this.$swal.fire({
				title: 'Você tem certeza que deseja excluir '+ id.nome +'?',
				text: "Você não poderá reverter isso!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Sim, apague!',
				cancelButtonText: 'Cancelar'
			}).then((result) => {
				if (result.value) {
					axios.delete("https://service.encontrei.online/api/plano-servico/" + id.id, {
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
							this.getPlanos();
						});
					})
					.catch(e => {
						alert("servidor fora de área");
					});
				}
			});
		},

		editarPlano(id) {
			this.loading = true;
			this.updatePlano				=	'';
			this.updatePreco				=	'';
			this.updateDescricao			=	'';
			this.updateId					=	'';
			this.updateQuantidade			=	'';

			axios.get("https://service.encontrei.online/api/plano-servico/" + id, {
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + this.user.token
					}
				})
				.then(response => {
					//   this.items = response.data;
					this.updatePlano				=	response.data.nome;
					this.updatePreco				=	response.data.preco;
					this.updateDescricao			=	response.data.descricao;
					this.updateId					=	response.data.id;
					this.updateQuantidade			=	response.data.quantidade;

					console.log(response.data);
					this.loading = false;
				})
				.catch(e => {
					alert("servidor fora de área");
				});
		},

		getPlanos() {
			// axios.get('http://localhost:8000/api/plano-servico', {
			this.loading = true;
			axios
				.get("https://service.encontrei.online/api/plano-servico", {
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + this.user.token
					}
				})
				.then(response => {
					this.planos = response.data;
					this.loading = false;
				})
				.catch(e => {
					console.log(e);
					alert("servidor fora de área");
				});
		},

		formatPrice(value) {
			let val = (value/1).toFixed(2).replace('.', ',')
			return 'R$ ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
		},

		updatePlan(){
			let data = {
				nome: this.updatePlano,
				preco: this.updatePreco,
				descricao: this.updateDescricao,
				quantidade: this.updateQuantidade
			};

			axios.put("https://service.encontrei.online/api/plano-servico/" + this.updateId, data, {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + this.user.token
				}
			})
			.then(response => {
				if (response.data.id) {
					this.toast('Plano ' + response.data.nome + ' atualizado!', '#73b730');
					this.getPlanos();
				}else{
					if(response.data.nome){
						this.toast(response.data.nome[0], '#ec293c');
					}else if(response.data.preco){
						this.toast(response.data.preco[0], '#ec293c');
					}else if(response.data.quantidade){
						this.toast(response.data.quantidade[0], '#ec293c');
					}
				}
			})
			.catch(e => {
				alert("servidor fora de área");
			});
		},

		toast(nome, cor){
			console.log('Entreou ');
			const Toast = this.$swal.mixin({
				toast: true,
				position: 'top-end',
				background: cor,
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
