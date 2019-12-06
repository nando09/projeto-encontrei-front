<template>
	<div class="wrapper">
		<Sidebar title="Administração"/>
		<div class="content-page">

			<div class="content">
				<TopMenu/>
				<div class="container-fluid">

					<!-- start page title -->
					<PageTitle home="Início" category="Cadastro" sub-category="Anunciante/Prestador" titulo="Cadastro de Anunciante/Prestador"/>
					<!-- end page title -->

					<div class="row">
						<div class="col-12">
							<div class="card">

								<div class="card-body">
									<!--            <h4 class="header-title">Usuários</h4>-->

									<!-- <form> -->
									<div class="form-row">
										<div class="col-md-5">
											<label for="nomefantasia">Nome Fantasia*</label>
											<input v-model="nomefantasia" type="text" class="form-control mb-3" id="nomefantasia" placeholder="Nome Fantasia">
										</div>
										<div class="col-md-5">
											<label for="email">Email*</label>
											<input v-model="email" type="email" class="form-control mb-3" id="email" placeholder="Email">
										</div>

					<div class="col-md-2">
					  <label for="cep">CEP</label>
					  <input v-on:change="buscaCep()" v-model="cep" type="number" class="form-control mb-3" id="cep" placeholder="CEP">
					</div>

					<div class="col-md-4">
					  <label for="endereco">Endereço</label>
					  <input v-model="endereco" type="text" class="form-control mb-3" id="endereco" placeholder="Endereço">
					</div>

					<div class="col-md-4">
					  <label for="bairro">Bairro</label>
					  <input v-model="bairro" type="text" class="form-control mb-3" id="bairro" placeholder="Bairro">
					</div>

					<div class="col-md-4">
					  <label for="cidade">Cidade</label>
					  <input v-model="cidade" type="text" class="form-control mb-3" id="cidade" placeholder="Cidade">
					</div>

					<div class="col-md-2">
					  <label for="estado">Estado</label>
					  <select v-model="estado" id="estado" class="form-control mb-3">
						<option selected>Selecionar...</option>
						<option value="SP">SP</option>
						<option value="MG">MG</option>
						<option value="RJ">RJ</option>
						<option value="RS">RS</option>
						<option value="PE">PE</option>
					  </select>
					</div>

					<div class="col-md-3">
					  <label for="telefone">Telefone*</label>
					  <input v-model="telefone" type="text" class="form-control mb-3" id="telefone" placeholder="Telefone">
					</div>

					<div class="col-md-4">
					  <label for="site">Site*</label>
					  <input v-model="site" type="text" class="form-control mb-3" id="site" placeholder="Site">
					</div>

					<div class="col-md-3">
					  <label for="whatsapp">WhatsApp</label>
					  <input v-model="whatsapp" type="text" class="form-control mb-3" id="whatsapp" placeholder="WhatsApp">
					</div>

					<div class="col-md-4">
					  <label for="facebook">Facebook</label>
					  <input v-model="facebook" type="text" class="form-control mb-3" id="facebook" placeholder="Facebook">
					</div>

					<div class="col-md-4">
					  <label for="instagram">Instagram</label>
					  <input v-model="instagram" type="text" class="form-control mb-3" id="instagram" placeholder="Instagram">
					</div>

					<div class="col-md-4">
					  <label for="descricao">Descrição do Negócio*</label>
					  <input v-model="descricao" type="text" class="form-control mb-3" id="descricao" placeholder="Descrição do Negócio">
					</div>
									</div>

				  <div class="row col-12 justify-content-center mt-2">
									  <button type="submit" class="btn btn-primary" @click="cadastraPrestador()">Cadastrar</button>
				  </div>
									<!-- </form> -->
								</div> <!-- end card body-->
								<!-- <input type="text" v-model="search" placeholder="Pesquisar nome">
								<table>
									<thead>
										<tr>
											<td>Nome</td>
											<td>Email</td>
											<td>Cidade</td>
										</tr>
									</thead>
									<tbody>
										<tr v-for="prestador in prestadores">
											<td>{{ prestador.nome }}</td>
											<td>{{ prestador.email }}</td>
											<td>{{ prestador.cidade }}</td>
										</tr>
									</tbody>
								</table> -->
							</div> <!-- end card -->
						</div><!-- end col-->
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
			name: 'ShopkeeperProvider',
				data () {
					return {
						user:			JSON.parse(sessionStorage.getItem('usuario')),
						nomefantasia:			'',
						email:			'',
						cep:			'',
						endereco:		'',
						bairro:		'',
						cidade:			'',
						estado:			'',
						telefone:	'',
						site:			'',
						whatsapp:	'',
						facebook:			'',
						instagram:	'',
						descricao:			'',
					}
				},
				components:{
					Sidebar,
					TopMenu,
					Footer,
					PageTitle
				},
				created() {
					let usuarioAux = sessionStorage.getItem('usuario')
					if (usuarioAux) {
							this.usuario = JSON.parse(usuarioAux)
					} else {
							this.$router.push('/login');
					}

					// // this.$http.get('http://localhost:8000/api/prestador').then(function(data){
					// this.$http.get('https://service.encontrei.online/api/prestador').then(function(data){
					// 		this.prestadores = data.body.slice(0, 10);
					// });
					// this.getPrestador();
				},
				computed: {

				},
				methods: {
					cadastraPrestador(){
						let data = {
							nomefantasia	:	this.nomefantasia,
							email			:	this.email,
							cep				:	this.cep,
							endereco		:	this.endereco,
							bairro			:	this.bairro,
							cidade			:	this.cidade,
							estado			:	this.estado,
							telefone		:	this.telefone,
							site			:	this.site,
							whatsapp		:	this.whatsapp,
							facebook		:	this.facebook,
							instagram		:	this.instagram,
							descricao		:	this.descricao,
						};

						console.log(data);

						// axios.post('http://localhost:8000/api/prestador', data, {
						axios.post('https://service.encontrei.online/api/prestador', data, {
							headers: {
								'Content-Type': 'application/json',
								Authorization: "Bearer " + this.user.token
							}
						})
						.then(response => {
							console.log(response.data);
							alert(response.data.nome + " cadastrado com sucesso!");
							this.responsavel = response.data;
						})
						.catch(e => {
							console.log(e);
							alert('servidor fora de área')
						});
					},

					getPrestador(){
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
						})
						.catch(e => {
							console.log(e);
							alert('servidor fora de área')
						});
					},

					buscaCep(){
						axios.get('https://viacep.com.br/ws/' + this.cep + '/json')
							.then(response => {
								console.log(response.data)
								this.cep = response.data.cep;
								this.endereco = response.data.logradouro;
								this.bairro = response.data.bairro;
								this.cidade = response.data.localidade;
								this.estado = response.data.uf;
							})
					}
				}
		};
</script>

<style>

</style>
