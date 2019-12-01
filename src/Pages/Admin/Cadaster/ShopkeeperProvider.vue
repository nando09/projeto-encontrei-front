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
										<div class="form-group col-md-6">
											<label for="inputEmail4">Nome</label>
											<input v-model="nome" type="text" class="form-control" id="inputEmail4" placeholder="Nome">
										</div>
										<div class="form-group col-md-6">
											<label for="inputPassword4">Email</label>
											<input v-model="email" type="email" class="form-control" id="inputPassword4" placeholder="Email">
										</div>
									</div>
									<div class="form-group">
										<label for="inputAddress">Endereço</label>
										<input v-model="endereco" type="text" class="form-control" id="inputAddress" placeholder="Endereço">
									</div>
<!--                  <div class="form-group">-->
<!--                    <label for="inputAddress2">Endereço 2</label>-->
<!--                    <input v-model="endereco2" type="text" class="form-control" id="inputAddress2" placeholder="Endereço 2">-->
<!--                  </div>-->
									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="inputCity">Cidade</label>
											<input v-model="cidade" type="text" class="form-control" id="inputCity" placeholder="Cidade">
										</div>
										<div class="form-group col-md-4">
											<label for="inputState">Estado</label>
											<select v-model="estado" id="inputState" class="form-control">
												<option selected>Selecionar...</option>
												<option value="SP">SP</option>
												<option value="MG">MG</option>
												<option value="RJ">RJ</option>
												<option value="RS">RS</option>
												<option value="PE">PE</option>
											</select>
										</div>
										<div class="form-group col-md-2">
											<label for="inputZip">CEP</label>
											<input v-model="cep" type="text" class="form-control" id="inputZip" placeholder="CEP">
										</div>
									</div>
									<button type="submit" class="btn btn-primary" @click="cadastraPrestador()">Cadastrar</button>
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
								nome:			'',
								email:			'',
								endereco:		'',
								endereco2:		'',
								cidade:			'',
								estado:			'',
								cep:			'',
								prestadores:	'',
								search:			'',
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

						this.$http.get('http://localhost:8000/api/prestador').then(function(data){
						// this.$http.get('https://service.encontrei.online/api/prestador').then(function(data){
								this.prestadores = data.body.slice(0, 10);
						});
						this.getPrestador();
				},
				computed: {

				},
				methods: {
						cadastraPrestador(){
								let data = {
										nome					:	this.nome,
										email					:	this.email,
										endereco			:	this.endereco,
										endereco2			:	this.endereco2,
										cidade				:	this.cidade,
										estado				:	this.estado,
										cep						:	this.cep,
								};

								console.log(data);

								axios.post('http://localhost:8000/api/prestador', data, {
								// axios.post('https://service.encontrei.online/api/prestador', data, {
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
								axios.get('http://localhost:8000/api/prestador', {
								// axios.get('https://service.encontrei.online/api/prestador', {
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
						}
				}
		};
</script>

<style>

</style>
