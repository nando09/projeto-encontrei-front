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

					<PageTitle home="Início" category="Relatórios" sub-category="Produtos" titulo="Pagamento"/>


					<div class="row">
						<div class="col-xl-12">
							<div class="card">
								<div class="card-body" v-on:keyup.enter="cadastrarProduto()">

									<h4 class="header-title mb-3">Novo Produto</h4>

									<!-- start page title -->
									<!-- end page title -->
									<!-- <button @click="pagamento()">Pagar</button> -->
									<input type="text" id="bandeira">



									<span id="msg"></span>
									<span class="bandeira-cartao"></span>
									<form name="formPagamento" class="row" action="" id="formPagamento" v-on:submit.prevent="onSubmit">

										<div class="col-4 p-2">
											<label>Numero do cartão</label>
											<input class="form-control" v-model="cartao" type="text" name="numCartao" id="numCartao">
										</div>
										<br>

										<input type="hidden" name="paymentMethod" id="paymentMethod" v-model="paymentMethod">
										<input type="hidden" name="receiverEmail" id="receiverEmail" v-model="email_loja">
										<input type="hidden" name="currency" id="currency" v-model="moeda_pagamento">
										<input type="hidden" name="extraAmount" v-model="extraAmount" id="extraAmount">
										<input type="hidden" name="itemId1" v-model="itemId1" id="itemId1">
										<input type="hidden" name="itemDescription1" v-model="itemDescription1" id="itemDescription1">
										<input type="hidden" name="itemAmount1" v-model="itemAmount1" id="itemAmount1">
										<input type="hidden" name="itemQuantity1" v-model="itemQuantity1" id="itemQuantity1">
										<input type="hidden" name="notificationURL" v-model="notificationURL" id="notificationURL">
										<input type="hidden" name="reference" v-model="reference" id="reference" value="1001">
										<input type="hidden" name="shippingAddressRequired" v-model="shippingAddressRequired" id="shippingAddressRequired">
										<input type="hidden" name="noIntInstalQuantity" id="noIntInstalQuantity" value="2">
										<input type="hidden" name="billingAddressCountry" id="billingAddressCountry" value="BRL">
<!--                    <br>-->

										<input type="hidden" v-model="billingAddressStreet" name="billingAddressStreet" id="billingAddressStreet" placeholder="Av. Rua" value="Av. Brig. Faria Lima" required>
										<input type="hidden" name="billingAddressNumber" v-model="billingAddressNumber" id="billingAddressNumber" placeholder="Número" value="1384" required>
										<input type="hidden" v-model="billingAddressComplement" name="billingAddressComplement" id="billingAddressComplement" placeholder="Complemento" value="5o andar">
										<input type="hidden" v-model="billingAddressDistrict" name="billingAddressDistrict" id="billingAddressDistrict" placeholder="Bairro" value="Jardim Paulistano">
										<input type="hidden" v-model="billingAddressPostalCode" name="billingAddressPostalCode" id="billingAddressPostalCode" placeholder="CEP sem traço" value="01452002" required>
										<input type="hidden" v-model="billingAddressCity" name="billingAddressCity" id="billingAddressCity" placeholder="Cidade" value="Sao Paulo" required>
										<input type="hidden" v-model="billingAddressState" name="billingAddressState" id="billingAddressState" placeholder="Sigla do Estado" value="SP" required>



<!--                    <div class="col-4 p-2">-->
<!--                      <input type="hidden" name="bandeiraCartao" id="bandeiraCartao"><br>-->
<!--                    </div>-->
<!--                    <br>-->

										<div class="col-4 p-2">
											<label>Nome no Cartão</label>
											<input class="form-control"  type="text" name="creditCardHolderName" v-model="creditCardHolderName" id="creditCardHolderName" placeholder="Nome igual ao escrito no cartão" required>
										</div>
										<br>

										<div class="col-4 p-2">
											<label>Mês de validade</label>
											<input class="form-control"  type="text" value="12" name="mesValidade" id="mesValidade" maxlength="2">
										</div>
										<br>

										<div class="col-4 p-2">
											<label>Ano de validade</label>
											<input class="form-control"  type="text" name="anoValidade" value="2030" id="anoValidade" maxlength="4">
										</div>
										<br>

										<div class="col-4 p-2">
											<label>CVV do cartão</label>
											<input class="form-control"  type="text" value="123" name="cvvCartao" id="cvvCartao" maxlength="3">
										</div>
										<br>

										<div class="col-4 p-2">
											<label>Quantidades de Parcelas</label>
											<select @change="valorParcelaSelect" v-if="select_parcelas" name="qntParcelas" id="qntParcelas" class="form-control select-qnt-parcelas">
												<option value="">Selecione</option>
											</select>
										</div>
										<br>

										<input class="form-control" type="hidden" name="senderEmail" v-model="senderEmail" id="senderEmail" placeholder="E-mail do comprador" required>

										<div class="col-4 p-2">
											<input type="hidden" name="valorParcelas" id="valorParcelas">
											<label>CPF do dono do Cartão</label>
											<input class="form-control"  type="text" name="creditCardHolderCPF" v-model="creditCardHolderCPF" id="creditCardHolderCPF" placeholder="CPF sem traço" required>
										</div>
										<br>

										<div class="col-4 p-2">
											<label>DDD</label>
											<input class="form-control"  type="text" v-model="senderAreaCode" name="senderAreaCode" id="senderAreaCode" maxlength="2" placeholder="DDD" value="11" required>
										</div>

										<br>

										<div class="col-4 p-2">
											<label>Telefone</label>
											<input class="form-control"  type="text" v-model="senderPhone" name="senderPhone" id="senderPhone" maxlength="9" placeholder="Somente número" value="56273440" required>
										</div>

										<br>

										<input type="hidden" name="tokenCartao" id="tokenCartao">
										<input type="hidden" name="hashCartao" id="hashCartao">
										<br>

										<button class="btn btn-primary margin-10" type="submit" name="btnComprar" id="btnComprar" value="Comprar">
											Comprar
										</button>
									</form>


								</div>
							</div>
						</div>
					</div>



					<!-- <div class="meio-pag"></div> -->
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

	function recupHashCartao(){
		console.log('recupHashCartao');
		PagSeguroDirectPayment.onSenderHashReady(function (retorno) {
			if (retorno.status == 'error') {
				console.log(retorno.message);
				return false;
			} else {
				$("#hashCartao").val(retorno.senderHash);
				var dados = $("#formPagamento").serialize();
				console.log(dados);

				$.ajax({
					method: "POST",
					url: "https://service.encontrei.online/api/teste",
					data: dados,
					dataType: 'json',
					success: function(retorna){
						console.log("Sucesso " + JSON.stringify(retorna));
						document.getElementById("loadAguarde").style.display = "none";
					},
					error: function(retorna){
						console.log("Erro");
					}
				});
			}
		});
	};

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
				select_parcelas: false,
				paymentMethod: 'creditCard',
				email_loja: 'encontreiapp@encontrei.online',
				moeda_pagamento: 'BRL',
				extraAmount: '',
				itemId1: '0001',
				itemDescription1: 'Logista do sistema',
				itemAmount1: "600.00",
				itemQuantity1: '1',
				notificationURL: 'https://sualoja.com.br/notifica.html',
				reference: '1001',
				shippingAddressRequired: false,
				creditCardHolderCPF: '22111944785',
				creditCardHolderName: 'Jose Comprador',
				enderecoUrl: 'https://service.encontrei.online/api/',
				senderAreaCode: '',
				senderPhone: '',
				senderCPF: '',
				billingAddressStreet: '',
				billingAddressNumber: '',
				billingAddressComplement: '',
				billingAddressDistrict: '',
				billingAddressPostalCode: '',
				billingAddressCity: '',
				billingAddressState: '',
				senderEmail: 'c64862093590784097173@sandbox.pagseguro.com.br',
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
				this.loadingPage = true;
				this.usuario = JSON.parse(usuarioAux)
				var senderAreaCode = this.usuario.mais.telefone.replace('(', '');
				senderAreaCode = senderAreaCode.replace(')', '');
				this.senderAreaCode = senderAreaCode.substring(0,2);

				var senderPhone = this.usuario.mais.telefone.substring(5,16);
				senderPhone = senderPhone.replace(' ', '');
				this.senderPhone = senderPhone.replace('-', '');

				this.billingAddressStreet = this.usuario.mais.endereco;
				this.billingAddressNumber = this.usuario.mais.numero;
				this.billingAddressComplement = this.usuario.mais.complemento;
				this.billingAddressDistrict = this.usuario.mais.bairro;
				this.billingAddressPostalCode = this.usuario.mais.cep.replace('-', '');
				this.billingAddressCity = this.usuario.mais.cidade;
				this.billingAddressState = this.usuario.mais.estado;

				// this.senderEmail = this.usuario.email;
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
				document.getElementById("loadAguarde").style.display = "inline-block";
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
						recupHashCartao();
					}
				});

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
					amount: this.itemAmount1,
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
				this.loadingPage = false;
				// this.recupTokemCartao();
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
							$('#bandeiraCartao').val(imgBand);
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
				var noIntInstalQuantity = $('#noIntInstalQuantity').val();
				console.log(bandeira);
				var amount = this.itemAmount1;
				PagSeguroDirectPayment.getInstallments({
					amount: amount,
					maxInstallmentNoInterest: noIntInstalQuantity,
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

			recupTokemCartao() {
				console.log("Entrou!");
				PagSeguroDirectPayment.createCardToken({
					cardNumber: $('#numCartao').val(), // Número do cartão de crédito
					brand: $('#bandeiraCartao').val(), // Bandeira do cartão
					cvv: $('#cvvCartao').val(), // CVV do cartão
					expirationMonth: $('#mesValidade').val(), // Mês da expiração do cartão
					expirationYear: $('#anoValidade').val(), // Ano da expiração do cartão, é necessário os 4 dígitos.
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
			},
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

	.margin-10{
		margin: 10px;
	}
</style>
