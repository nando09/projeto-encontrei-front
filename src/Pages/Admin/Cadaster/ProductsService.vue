<template>
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
												<option v-bind:value="prestadore.id" v-for="prestadore in prestadores">{{ prestadore.nome_fantasia || prestadore.nome }}</option>
											</select>
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
											<th width="40%">Imagem</th>
											<th>Ação</th>
										</tr>
										</thead>
										<tbody>
										<tr v-for="item in items">
											<td>{{ item.nome }}</td>
											<td>
												<img v-bind:src="urlPhoto + item.images[0].image" alt="contact-img" title="contact-img" class="rounded mr-3" height="48"/>
											</td>
											<td>
											<button
												@click="deleteProduto(item)"
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
											</div>
										</tr>
										</tbody>
									</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- <button @click="showAlert">Hello world</button> -->
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
			items: [],
			urlPhoto: 'https://image.service.encontrei.online/',
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
		toast(nome){
			const Toast = this.$swal.mixin({
				toast: true,
				position: 'top-end',
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

		deleteProduto(id) {
			// axios.delete('http://localhost:8000/api/produto/' + id, {

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
					axios.delete("https://service.encontrei.online/api/produto/" + id.id, {
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
							this.changeProduct();
						});
					})
					.catch(e => {
						alert("servidor fora de área");
					});
				}
			})
		},

		updateProduto() {
			let data = {
				nome: this.updateNome,
				preco: this.updatePreco
			};
			let id = this.updateId;

			axios.put("https://service.encontrei.online/api/produto/" + id, data, {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + this.user.token
				}
			})
			.then(res => {
				this.changeProduct();
				if (res.data.id) {
					this.toast(res.data.nome + " alterado com sucesso!");
				}else{
					this.toast('Preecher todos os campos!');
				}
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
		},

		// showAlert() {
		// 	// this.$swal.fire({
		// 	// 	title: "Are you sure?",
		// 	// 	text: "Once deleted, you will not be able to recover this imaginary file!",
		// 	// 	icon: "warning",
		// 	// 	buttons: true,
		// 	// 	dangerMode: true,
		// 	// })
		// 	// .then((willDelete) => {
		// 	// 	if (willDelete) {
		// 	// 		this.$swal.fire("Poof! Your imaginary file has been deleted!", {
		// 	// 			icon: "success",
		// 	// 		});
		// 	// 	} else {
		// 	// 		this.$swal.fire("Your imaginary file is safe!");
		// 	// 	}
		// 	// });
		// 	// // // Use sweetalert2
		// 	// // this.$swal('Hello Vue world!!!');

		// 	// // this.$swal.fire(
		// 	// //   'Good job!',
		// 	// //   'You clicked the button!',
		// 	// //   'success'
		// 	// // )
		// },
	}
};
</script>

<style>
	.swal2-popup.swal2-toast .swal2-title {
		color: white;
	}

	.swal2-popup.swal2-toast.swal2-show {
		background: #73b730;
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
