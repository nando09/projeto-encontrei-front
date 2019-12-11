<template>
	<div class="wrapper">
		<div id="loading" v-if="loading">
			<div class="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
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
						sub-category="Produtos/Serviços"
						titulo="Cadastro de Produtos/Serviços"
					/>
					<!-- end page title -->

					<div class="row">
						<div class="col-xl-12">
							<div class="card">
								<div class="card-body">
									<h4 class="header-title mb-3">Novo Produto</h4>

									<div class="row mb-2">
										<div class="col-12">
											<label for>Anunciante:</label>
											<select @change="changeProduct()"  class="form-control" name id v-model="id">
												<option v-bind:value="prestadore.id" v-for="prestadore in prestadores">{{ prestadore.nome_fantasia }}</option>
											</select>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Nome do Produto:</label>
												<input v-model="nome" type="text" class="form-control" required />
											</div>
										</div>

										<div class="col-md-6">
											<div class="form-group">
												<label>Valor: (R$)</label>
												<input v-model="preco" min="0" type="text" class="form-control" required v-mask-decimal.br="2"/>
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
								</div>
								<!-- end card-body-->
							</div>
							<!-- end card-->
						</div>
						<!-- end col -->
					</div>
		  <div class="row">
			<div class="col-xl-12">
			  <div class="card">
				<div class="card-body">
				  <div class="table-responsive-sm">
					<table class="table table-centered mb-0">
					  <thead>
						<tr>
						  <th width="40%">Nome</th>
						  <th width="40%">Preço</th>
						  <th>Ação</th>
						</tr>
					  </thead>
					  <tbody>
						<tr v-for="item in items">
						  <td>{{ item.nome }}</td>
						  <td>{{ formatPrice(item.preco) }}</td>
						  <td>
							<button
							  @click="editarProduto(item.id)"
							  class="btn btn-sm btn-info mr-2"
							  data-toggle="modal"
							  data-placement="top"
							  title
							  data-original-title="Editar"
							  type="button"
							  data-target="#modalEdit"
							>
							  <i class="dripicons-document-edit"></i>
							</button>
							<button
							  @click="deleteProduto(item.id)"
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
								  <h5 class="modal-title" id="exampleModalLabel">Editar Produto</h5>
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
									<div class="col-12 d-inline-flex">
									  <div class="col-6">
										<label for>Nome</label>
										<input type="text" class="form-control" v-model="updateNome" />
									  </div>
									  <input type="hidden" v-model="updateId" />
									  <div class="col-6">
										<label for>Preço</label>
										<input type="text" class="form-control" v-model="updatePreco" v-mask-decimal.br="2"/>
									  </div>
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
			  </div>
			</div>
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
	name: "ProductsService",
	components: {
		Sidebar,
		TopMenu,
		Footer,
		PageTitle
	},
	data() {
		return {
			user: JSON.parse(sessionStorage.getItem("usuario")),
			id: "",
			nome: "",
			preco: "",
			updateNome: "",
			updatePreco: "",
			updateId: "",
			prestadores: "",
			loading: false,
			items: []
		};
	},
	created() {
		let usuarioAux = sessionStorage.getItem("usuario");
		if (usuarioAux) {
			this.usuario = JSON.parse(usuarioAux);
			this.getAnunciante();
		} else {
			this.$router.push("/login");
		}
	},
	methods: {
		cadastraProduto() {
			let data = {
				nome:			this.nome,
				preco:			this.preco,
				provider_id:	this.id,
			};

			// // console.log(data);

			// axios.post('http://localhost:8000/api/produto', data, {
			axios
				.post("https://service.encontrei.online/api/produto", data, {
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + this.user.token
					}
				})
				.then(response => {
					// console.log(response.data);
					alert(response.data.nome + " cadastrado com sucesso!");
					this.responsavel = response.data;
					this.changeProduct();

					this.nome = "";
					this.preco = "";
				})
				.catch(e => {
					// console.log(e);
					alert("servidor fora de área");
				});
		},

		deleteProduto(id) {
			console.log(id);
			// axios.delete('http://localhost:8000/api/produto/' + id, {
			axios
				.delete("https://service.encontrei.online/api/produto/" + id, {
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + this.user.token
					}
				})
				.then(response => {
					alert(response.data.nome + " deletado com sucesso!");
					this.changeProduct();
				})
				.catch(e => {
					alert("servidor fora de área");
				});
		},

		updateProduto() {
			let data = {
				nome: this.updateNome,
				preco: this.updatePreco
			};
			let id = this.updateId;
			axios
				.put("https://service.encontrei.online/api/produto/" + id, data, {
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + this.user.token
					}
				})
				.then(res => {
					this.changeProduct();
					// alert("Produto alterado com sucesso.");
				})
				.catch(e => alert(e));
		},

		editarProduto(id) {
			this.updateNome = '';
			this.updatePreco = '';
			axios
				.get("https://service.encontrei.online/api/produto/" + id, {
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

		getAnunciante() {
			this.loading = true;
			// axios.get('http://localhost:8000/api/prestador', {
			axios.get('https://service.encontrei.online/api/prestador', {
				headers: {
						'Content-Type': 'application/json',
						Authorization: "Bearer " + this.user.token
				}
			})
			.then(response => {
				console.log(response.data);
				this.prestadores = response.data;
				this.loading = false;
			})
			.catch(e => {
				console.log(e);
				alert('servidor fora de área')
			});
		},

		// getProduto() {
		// 	this.loading = true;
		// 	// axios.get('http://localhost:8000/api/produto', {
		// 	axios.get("https://service.encontrei.online/api/produto", {
		// 			headers: {
		// 				"Content-Type": "application/json",
		// 				Authorization: "Bearer " + this.user.token
		// 			}
		// 		})
		// 		.then(response => {
		// 			// console.log(response.data);
		// 			this.items = response.data;
		// 			this.loading = false;
		// 		})
		// 		.catch(e => {
		// 			// console.log(e);
		// 			alert("servidor fora de área");
		// 		});
		// },

		showModal() {
			this.$refs["my-modal"].show();
		},
		hideModal() {
			this.$refs["my-modal"].hide();
		},
		toggleModal() {
			this.$refs["my-modal"].toggle("#toggle-btn");
		},

		changeProduct(){
			this.loading = true;
			// axios.get('http://localhost:8000/api/produto', {
			axios.get("https://service.encontrei.online/api/productsProvider/" + this.id, {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + this.user.token
				}
			})
			.then(response => {
				console.log(response.data);
				this.items = response.data;
				this.loading = false;
			})
			.catch(e => {
				// console.log(e);
				alert("servidor fora de área");
			});
		},

		formatPrice(value) {
			let val = (value/1).toFixed(2).replace('.', ',')
			return 'R$ ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
		}
	}
};
</script>

<style>
	#loading{
		position: fixed;
		background: rgba(40, 167, 69, 0.3);
		width: 100%;
		height: 100%;
		z-index: 9999;
	}

	.lds-ring {
		display: inline-block;
		position: fixed;
		width: 100%;
		height: 100%;
	}
	.lds-ring div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 64px;
		height: 64px;
		margin: 8px;
		border: 8px solid #fff;
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: #178a31 transparent transparent transparent;
		left: 50vw;
		top: 40%;
	}
	.lds-ring div:nth-child(1) {
		animation-delay: -0.45s;
	}
	.lds-ring div:nth-child(2) {
		animation-delay: -0.3s;
	}
	.lds-ring div:nth-child(3) {
		animation-delay: -0.15s;
	}
	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
