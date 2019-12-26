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
					<form id="pay" name="pay" v-on:submit.prevent="onSubmit">
						<fieldset>
							<ul>
								<li>
									<label for="email">Email</label>
									<input v-model="email" type="email" id="email" name="email" value="test_user_19653727@testuser.com"  placeholder="your email"/>
								</li>
								<li>
									<label for="cardNumber">Credit card number:</label>
									<input v-model="number_card" type="text" id="cardNumber" data-checkout="cardNumber" placeholder="4509 9535 6623 3704" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
								</li>
								<li>
									<label for="securityCode">Security code:</label>
									<input type="text" id="securityCode" data-checkout="securityCode" placeholder="123" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
								</li>
								<li>
									<label for="cardExpirationMonth">Expiration month:</label>
									<input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" placeholder="11" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
								</li>
								<li>
									<label for="cardExpirationYear">Expiration year:</label>
									<input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" placeholder="2025" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
								</li>
								<li>
									<label for="cardholderName">Card holder name:</label>
									<input type="text" id="cardholderName" data-checkout="cardholderName" placeholder="APRO" />
								</li>
								<li>
									<label for="docType">Document type:</label>
									<select id="docType" data-checkout="docType"></select>
								</li>
								<li>
									<label for="docNumber">Document number:</label>
									<input type="text" id="docNumber" data-checkout="docNumber" placeholder="19119119100" />
								</li>
								<li>
									<label for="installments">Installments:</label>
									<select v-model="installments" id="installments" class="form-control" name="installments"></select>
								</li>
							</ul>
							<input v-model="transaction_amount" name="amount" id="amount"/>
							<input v-model="payment_method_id" id="paymentMethodId" name="paymentMethodId" />
							<input name="description"/>
							<input id="token_mercado" name="token_mercado" value="1" v-model="token_mercado"/>
							<input type="submit" value="Pay!" />
						</fieldset>
					</form>
					<!-- end page title -->

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
		name: 'MercadoPago',
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
				doSubmit: false,
				email: '',
				token_mercado: '',
				transaction_amount: 100.00,
				payment_method_id: '',
				installments: '',
				number_card: '',
				tipo_card: '',
			}
		},
		watch: {
			number_card: function (val) {
				console.log(document.getElementById("paymentMethodId").value);
				this.tipo_card = document.getElementById("paymentMethodId").value;
			},
		},
		created() {
			let usuarioAux = sessionStorage.getItem('usuario')
			if (usuarioAux) {
				this.usuario = JSON.parse(usuarioAux)
				this.email = this.usuario.email;
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
				document.getElementById("loadAguarde").style.display = "inline-block";
				console.log(this.tipo_card);
				var email				=	this.email;
				var transaction_amount	=	this.transaction_amount;
				var payment_method_id	=	this.tipo_card;
				var Installments		=	this.installments;
				var usuario				=	this.usuario.token;

				let loopToken = setInterval(function(){
					var token_mercado		=	this.token_mercado.value;
					this.loadingPage = false;

					if (token_mercado) {
						let data = {
							email:					email,
							transaction_amount:		transaction_amount,
							payment_method_id:		payment_method_id,
							token:					token_mercado,
							installments:			installments.value,
						};

						console.log(usuario);
						clearInterval(loopToken);
				        axios.post("https://service.encontrei.online/api/mercadoPago",
						// axios.post('http://localhost:8000/api/mercadoPago',
							data,
							{
								headers: {
									"Content-Type": "application/json",
									Authorization: "Bearer " + usuario
								}
							}
						).then(response => {
							document.getElementById("loadAguarde").style.display = "none";

							if (response.data.status == 'approved') {
								if (response.data.detail == 'accredited')
									alert('Pronto, seu pagamento foi aprovado!');
							}else if(response.data.status == 'in_process'){
								if (response.data.detail == 'pending_contingency')
									alert('Estamos processando o pagamento. Em até 2 dias úteis informaremos por e-mail o resultado.');
								else if(response.data.detail == 'pending_review_manual')
									alert('Estamos processando o pagamento. Em até 2 dias úteis informaremos por e-mail se foi aprovado ou se precisamos de mais informações.');
							}else{
								if(response.data.detail == 'cc_rejected_bad_filled_card_number')
									alert('Confira o número do cartão.');
								else if(response.data.detail == 'cc_rejected_bad_filled_date')
									alert('Confira a data de validade.');
								else if(response.data.detail == 'cc_rejected_bad_filled_other')
									alert('Confira os dados.');
								else if(response.data.detail == 'cc_rejected_bad_filled_security_code')
									alert('Confira o código de segurança.');
								else if(response.data.detail == 'cc_rejected_blacklist')
									alert('Não conseguimos processar seu pagamento.');
								else if(response.data.detail == 'cc_rejected_call_for_authorize')
									alert('Você deve autorizar ao '+ data.payment_method_id +' o pagamento do valor ao Mercado Pago.');
								else if(response.data.detail == 'cc_rejected_card_disabled')
									alert('Ligue para o '+ data.payment_method_id +' para ativar seu cartão. O telefone está no verso do seu cartão.');
								else if(response.data.detail == 'cc_rejected_card_error')
									alert('Não conseguimos processar seu pagamento.');
								else if(response.data.detail == 'cc_rejected_duplicated_payment')
									alert('Você já efetuou um pagamento com esse valor. Caso precise pagar novamente, utilize outro cartão ou outra forma de pagamento.');
								else if(response.data.detail == 'cc_rejected_high_risk')
									alert('Seu pagamento foi recusado. Escolha outra forma de pagamento. Recomendamos meios de pagamento em dinheiro.');
								else if(response.data.detail == 'cc_rejected_insufficient_amount')
									alert('O '+ data.payment_method_id +' possui saldo insuficiente.');
								else if(response.data.detail == 'cc_rejected_invalid_installments')
									alert('O '+ data.payment_method_id +' não processa pagamentos parcelados.');
								else if(response.data.detail == 'cc_rejected_max_attempts')
									alert('Você atingiu o limite de tentativas permitido. Escolha outro cartão ou outra forma de pagamento.');
								else if(response.data.detail == 'cc_rejected_other_reason')
									alert('O '+ data.payment_method_id +' não processou seu pagamento.');
							}
						})

					}
				}, 1000);
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
