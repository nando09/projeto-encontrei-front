<template>
	<div class="wrapper">
		<div v-if="loadingPage" class="lds-facebook">
			<div></div>
			<div></div>
			<div></div>
		</div>
		<div id="loadAguarde">
			<p>Aguarde...</p>
		</div>
		<SidebarClient title="Área do Usuário"/>
		<div class="content-page">

			<div class="content">
				<TopMenu/>
				<div class="container-fluid">

					<!-- start page title -->
					<PageTitle home="Início" category="Relatórios" sub-category="Produtos" titulo="Pagamento"/>
					<!-- end page title -->
					<!-- <button @click="pagamento()">Pagar</button> -->

					<form v-on:submit.prevent="onSubmit">
						<label>Numero do cartão</label>
						<input v-model="cartao" type="text" name="numCartao" id="numCartao">
					</form>

					<div class="meio-pag">
					</div>
				</div> <!-- container -->

			</div>

			<Footer/>
		</div>
	</div>
</template>
<script>

	import TopMenu from '@/components/TopMenu'
	import Footer from '@/components/Footer'
	import SidebarClient from "@/components/Client/SidebarClient";
	import PieSimpleDonut from '@/components/charts/PieSimpleDonut';
	import PageTitle from '@/components/PageTitle';
	import CardBody from '@/components/CardBody';
	import AreaSplineArea from '@/components/charts/AreaSplineArea';
	import axios from "axios";

	export default {
		name: 'PagSeguro',
		components:{
			SidebarClient,
			TopMenu,
			Footer,
			CardBody,
			PieSimpleDonut,
			PageTitle,
			AreaSplineArea
		},
		data () {
			return {
				user:	JSON.parse(sessionStorage.getItem('usuario')),
				loadingPage: false,
				cartoes: '',
				cartao: ''
			}
		},
		watch: {
			cartao: function(val){
				this.bandeira(val);
			}
		},
		created() {
			let usuarioAux = sessionStorage.getItem('usuario')
			if (usuarioAux) {
				this.usuario = JSON.parse(usuarioAux)
				this.pagamento();
				// this.pagamento();
			} else {
				this.$router.push('/login');
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
			},
		},
		methods: {
			onSubmit(){
			},

			pagamento(){
				axios.get("https://service.encontrei.online/api/pagSeguro",
				// axios.post('http://localhost:8000/api/mercadoPago',
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + this.usuario.token
						}
					}
				).then(response => {
					console.log(response.data.id);
					PagSeguroDirectPayment.setSessionId(response.data.id);
					this.listaPag();
				});
			},

			listaPag(){
				PagSeguroDirectPayment.getPaymentMethods({
					amount: 500.00,
					success: function(retorno) {
						$('.meio-pag').append("<div>Cartão de Crédito</div>");
						$.each(retorno.paymentMethods.CREDIT_CARD.options, function(i, obj){
							$('.meio-pag').append("<span class='img-band'><img src='https://stc.pagseguro.uol.com.br" + obj.images.SMALL.path + "'></span>");
						});

						$('.meio-pag').append("<div>Boleto</div>");
						$('.meio-pag').append("<span class='img-band'><img src='https://stc.pagseguro.uol.com.br" + retorno.paymentMethods.BOLETO.options.BOLETO.images.SMALL.path + "'><span>");

						$('.meio-pag').append("<div>Débito Online</div>");
						$.each(retorno.paymentMethods.ONLINE_DEBIT.options, function(i, obj){
							$('.meio-pag').append("<span class='img-band'><img src='https://stc.pagseguro.uol.com.br" + obj.images.SMALL.path + "'></span>");
						});

						// console.log(retorno);
						this.cartoes = retorno.paymentMethods.CREDIT_CARD.options;
						// Retorna os meios de pagamento disponíveis.
					},
					error: function(retorno) {
						console.log("error");
						console.log(retorno);
						// Callback para chamadas que falharam.
					},
					complete: function(retorno) {
						console.log("complete");
						console.log(retorno);
						// Callback para todas chamadas.
					}
				});
			},

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

			bandeira(val){
				var numCartao = val;
				var qntNumero = numCartao.length;

				if (qntNumero == 6) {
					PagSeguroDirectPayment.getBrand({
						cardBin: numCartao,
						success: function (retorno) {
							//console.log(retorno);
							$('#msg').empty();
							var imgBand = retorno.brand.name;
							$('.bandeira-cartao').html("<img src='https://stc.pagseguro.uol.com.br/public/img/payment-methods-flags/42x20/" + imgBand + ".png'>");
						},
						error: function (retorno) {
							$('.bandeira-cartao').empty();
							$('#msg').html("Cartão inválido");
						},
						complete: function (retorno) {
							//tratamento comum para todas chamadas
						}
					});
				}
			}
		}

	};
</script>

<style>
	#loadAguarde{
		/*display: inline-block;*/
		display: none;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 9999;
		text-align: center;
		background: rgba(40, 167, 69, 0.1);
	}

	#loadAguarde p{
		display: inline-block;
		margin-top: 40vh;
		font-size: 30px;
		font-weight: bold;
	}

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
