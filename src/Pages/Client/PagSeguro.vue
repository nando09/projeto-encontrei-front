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
					<input type="text" id="bandeira">
					<span id="msg"></span>
					<form v-on:submit.prevent="onSubmit">
						<label>Numero do cartão</label>
						<input v-model="cartao" type="text" name="numCartao" id="numCartao">
						<select @change="valorParcelaSelect" v-if="select_parcelas" name="qntParcelas" id="qntParcelas" class="select-qnt-parcelas">
							<option value="">Selecione</option>
						</select>

						<label>Valor Parcelas</label>
						<input type="text" name="valorParcelas" id="valorParcelas"><br>
						
						<label>Token do cartão</label>
						<input type="text" name="tokenCartao" id="tokenCartao">

						<label>Identificador com os dados do comprador </label>
						<input type="text" name="hashCartao" id="hashCartao">

						<input type="submit" name="btnComprar" id="btnComprar" value="Comprar">
					</form>

					<div class="bandeira-cartao"></div>

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
				cartao: '',
				amount: 1600.00,
				select_parcelas: false,
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
				PagSeguroDirectPayment.onSenderHashReady(function (retorno) {
					/*if (response.status == 'error') {
						console.log(response.message);
						return false;
					}*/
					$("#hashCartao").val(retorno.senderHash);
				});
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
					amount: this.amount,
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
				this.recupTokemCartao();
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
				var imgBand = $("#bandeira").val();

				if (qntNumero == 6) {
					PagSeguroDirectPayment.getBrand({
						cardBin: numCartao,
						success: function (retorno) {
							//console.log(retorno);
							$('#msg').empty();
							$("#bandeira").val(retorno.brand.name);
							imgBand = retorno.brand.name;
							$('.bandeira-cartao').html("<img src='https://stc.pagseguro.uol.com.br/public/img/payment-methods-flags/42x20/" + imgBand + ".png'>");
						},
						error: function (retorno) {
							$('.bandeira-cartao').empty();
							$("#bandeira").val('');
							$('#msg').html("Cartão inválido");
						},
						complete: function (retorno) {
							//tratamento comum para todas chamadas
						}
					});

				}else if (imgBand && qntNumero == 8){
					this.recupParcelas();
					this.select_parcelas = true;
				}else if (!imgBand) {
					this.select_parcelas = false;
				}
			},

			recupParcelas(){
				var bandeira = $("#bandeira").val();
				console.log(bandeira);
				var amount = this.amount;
				PagSeguroDirectPayment.getInstallments({
					amount: amount,
					maxInstallmentNoInterest: 3,
					brand: bandeira,
					success: function (retorno) {
						console.log(retorno)
						$.each(retorno.installments, function (ia, obja) {
							$.each(obja, function (ib, objb) {
								var valorParcela = objb.installmentAmount.toFixed(2).replace(".", ",");
								// $('#qntParcelas').show().append("<option value='" + objb.installmentAmount + "'>" + objb.quantity + " parcelas de R$ " + valorParcela + "</option>");
								$('#qntParcelas').show().append("<option value='" + objb.quantity + "' data-parcelas='" + objb.installmentAmount + "'>" + objb.quantity + " parcelas de R$ " + valorParcela + "</option>");
							});
						});
					},
					error: function (retorno) {
						console.log(retorno);
						// callback para chamadas que falharam.
					},
					complete: function (retorno) {
						console.log(retorno);
						// Callback para todas chamadas.
					}
				});
			},

			recupTokemCartao: function() {
				console.log("Entrou!");
				PagSeguroDirectPayment.createCardToken({
					cardNumber: '4111111111111111', // Número do cartão de crédito
					brand: 'visa', // Bandeira do cartão
					cvv: '123', // CVV do cartão
					expirationMonth: '12', // Mês da expiração do cartão
					expirationYear: '2030', // Ano da expiração do cartão, é necessário os 4 dígitos.
					success: function (retorno) {
						console.log(retorno)
						$('#tokenCartao').val(retorno.card.token);
					},
					error: function (retorno) {
						// Callback para chamadas que falharam.
					},
					complete: function (retorno) {
						// Callback para todas chamadas.
					}
				});
			},

			valorParcelaSelect(){
				console.log("valorParcela");
				$('#valorParcelas').val($('#qntParcelas').find(':selected').attr('data-parcelas'));
			}
		},


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
	#bandeira{
		display: none;
	}
</style>
