<template>
	<div class="wrapper">
		<div v-if="loadingPage" class="lds-facebook">
			<div></div>
			<div></div>
			<div></div>
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
									<input type="email" id="email" name="email" value="test_user_19653727@testuser.com"  placeholder="your email"/>
								</li>
								<li>
									<label for="cardNumber">Credit card number:</label>
									<input type="text" id="cardNumber" data-checkout="cardNumber" placeholder="4509 9535 6623 3704" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
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
									<select id="installments" class="form-control" name="installments"></select>
								</li>
							</ul>
							<input type="hidden" name="amount" id="amount"/>
							<input type="hidden" name="description"/>
							<input type="hidden" name="paymentMethodId" />
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
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
<script type="text/javascript">
	window.Mercadopago.setPublishableKey("TEST-026ae7c3-3cff-43df-8557-11582630dd75");
	window.Mercadopago.getIdentificationTypes();

	// function addEvent(to, type, fn){
	// 	if(document.addEventListener){
	// 		to.addEventListener(type, fn, false);
	// 	} else if(document.attachEvent){
	// 		to.attachEvent('on'+type, fn);
	// 	} else {
	// 		to['on'+type] = fn;
	// 	}
	// };

	addEvent(document.querySelector('#cardNumber'), 'keyup', guessingPaymentMethod);
	addEvent(document.querySelector('#cardNumber'), 'change', guessingPaymentMethod);

	// function getBin() {
	// 	const cardnumber = document.getElementById("cardNumber");
	// 	return cardnumber.value.substring(0,6);
	// };

	// function guessingPaymentMethod(event) {
	// 	var bin = getBin();

	// 	if (event.type == "keyup") {
	// 		if (bin.length >= 6) {
	// 			window.Mercadopago.getPaymentMethod({
	// 				"bin": bin
	// 			}, setPaymentMethodInfo);
	// 		}
	// 	} else {
	// 		setTimeout(function() {
	// 			if (bin.length >= 6) {
	// 				window.Mercadopago.getPaymentMethod({
	// 					"bin": bin
	// 				}, setPaymentMethodInfo);
	// 			}
	// 		}, 100);
	// 	}
	// };

	// function setPaymentMethodInfo(status, response) {
	// 	if (status == 200) {
	// 		const paymentMethodElement = document.querySelector('input[name=paymentMethodId]');

	// 		if (paymentMethodElement) {
	// 			paymentMethodElement.value = response[0].id;
	// 		} else {
	// 			const input = document.createElement('input');
	// 			input.setAttribute('name', 'paymentMethodId');
	// 			input.setAttribute('type', 'hidden');
	// 			input.setAttribute('value', response[0].id);     

	// 			form.appendChild(input);
	// 		}

	// 		Mercadopago.getInstallments({
	// 			"bin": getBin(),
	// 			"amount": parseFloat(document.querySelector('#amount').value),
	// 		}, setInstallmentInfo);

	// 	} else {
	// 		alert(`payment method info error: ${response}`);  
	// 	}
	// };

	// doSubmit = false;
	// addEvent(document.querySelector('#pay'), 'submit', doPay);
	// function doPay(event){
	// 	alert("Entrou!");
	// 	event.preventDefault();
	// 	if(!doSubmit){
	// 		var $form = document.querySelector('#pay');

	// 		window.Mercadopago.createToken($form, sdkResponseHandler); // The function "sdkResponseHandler" is defined below

	// 		return false;
	// 	}
	// };

	// function sdkResponseHandler(status, response) {
	// 	if (status != 200 && status != 201) {
	// 		alert("verify filled data");
	// 	}else{
	// 		var form = document.querySelector('#pay');
	// 		var card = document.createElement('input');
	// 		card.setAttribute('name', 'token');
	// 		card.setAttribute('type', 'hidden');
	// 		card.setAttribute('value', response.id);
	// 		form.appendChild(card);
	// 		console.log(card);
	// 		// doSubmit=true;
	// 		// form.submit();
	// 	}
	// };
</script>
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
		computed: {
			sortOptions() {
				// Create an options list from our fields
				return this.fields
					.filter(f => f.sortable)
					.map(f => {
						return { text: f.label, value: f.key }
					})
			}
		},
		// mounted() {
		// 	// Set the initial number of items
		// 	this.totalRows = this.items.length
		// },
		methods: {
			// onFiltered(filteredItems) {
			// 	// Trigger pagination to update the number of buttons/pages due to filtering
			// 	this.totalRows = filteredItems.length
			// 	this.currentPage = 1
			// },

			onSubmit(){
				alert("Apertou!");
				event.preventDefault();
				if(!doSubmit){
					var $form = document.querySelector('#pay');

					window.Mercadopago.createToken($form, sdkResponseHandler); // The function "sdkResponseHandler" is defined below

					return false;
				}
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


			addEvent(to, type, fn){
				if(document.addEventListener){
					to.addEventListener(type, fn, false);
				} else if(document.attachEvent){
					to.attachEvent('on'+type, fn);
				} else {
					to['on'+type] = fn;
				}
			},

			// addEvent(document.querySelector('#cardNumber'), 'keyup', guessingPaymentMethod);
			// addEvent(document.querySelector('#cardNumber'), 'change', guessingPaymentMethod);

			getBin() {
				const cardnumber = document.getElementById("cardNumber");
				return cardnumber.value.substring(0,6);
			},

			guessingPaymentMethod(event) {
				var bin = getBin();

				if (event.type == "keyup") {
					if (bin.length >= 6) {
						window.Mercadopago.getPaymentMethod({
							"bin": bin
						}, setPaymentMethodInfo);
					}
				} else {
					setTimeout(function() {
						if (bin.length >= 6) {
							window.Mercadopago.getPaymentMethod({
								"bin": bin
							}, setPaymentMethodInfo);
						}
					}, 100);
				}
			},

			setPaymentMethodInfo(status, response) {
				if (status == 200) {
					const paymentMethodElement = document.querySelector('input[name=paymentMethodId]');

					if (paymentMethodElement) {
						paymentMethodElement.value = response[0].id;
					} else {
						const input = document.createElement('input');
						input.setAttribute('name', 'paymentMethodId');
						input.setAttribute('type', 'hidden');
						input.setAttribute('value', response[0].id);     

						form.appendChild(input);
					}

					Mercadopago.getInstallments({
						"bin": getBin(),
						"amount": parseFloat(document.querySelector('#amount').value),
					}, setInstallmentInfo);

				} else {
					alert(`payment method info error: ${response}`);  
				}
			},

			// doSubmit = false;
			// addEvent(document.querySelector('#pay'), 'submit', doPay);
			doPay(event){
				alert("Entrou!");
				event.preventDefault();
				if(!doSubmit){
					var $form = document.querySelector('#pay');

					window.Mercadopago.createToken($form, sdkResponseHandler); // The function "sdkResponseHandler" is defined below

					return false;
				}
			},

			sdkResponseHandler(status, response) {
				if (status != 200 && status != 201) {
					alert("verify filled data");
				}else{
					var form = document.querySelector('#pay');
					var card = document.createElement('input');
					card.setAttribute('name', 'token');
					card.setAttribute('type', 'hidden');
					card.setAttribute('value', response.id);
					form.appendChild(card);
					console.log(card);
					// doSubmit=true;
					// form.submit();
				}
			},

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
