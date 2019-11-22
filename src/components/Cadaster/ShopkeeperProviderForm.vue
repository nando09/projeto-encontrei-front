<template>
	<div class="oneElementTemplateErrorBreak">
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
				<div class="form-group">
					<label for="inputAddress2">Endereço 2</label>
					<input v-model="endereco2" type="text" class="form-control" id="inputAddress2" placeholder="Endereço 2">
				</div>
				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="inputCity">Cidade</label>
						<input v-model="cidade" type="text" class="form-control" id="inputCity">
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
						<input v-model="cep" type="text" class="form-control" id="inputZip">
					</div>
				</div>
				<div class="form-group">
					<div class="form-check">
						<input v-model="confirma" class="form-check-input" type="checkbox" id="gridCheck">
						<label class="form-check-label" for="gridCheck">
						Confirmar dados
						</label>
					</div>
				</div>
				<button type="submit" class="btn btn-primary" @click="cadastraPrestador()">Cadastrar</button>
			<!-- </form> -->

			</div> <!-- end card body-->
		</div> <!-- end card -->
		</div><!-- end col-->
	</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'ShopkeeperProviderForm',
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
				confirma:		'',
			}
		},
		components:{
		},
		created() {
		},
		methods: {
			cadastraPrestador(){
				let data = {
					nome				:	this.nome,
					email				:	this.email,
					endereco			:	this.endereco,
					endereco2			:	this.endereco2,
					cidade				:	this.cidade,
					estado				:	this.estado,
					cep					:	this.cep,
					confirmar_dados		:	(this.confirma == "") ? '0' : '1',
				};

				console.log(data);

				// axios.post('https://localhost:8000/api/prestador', data, {
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
			}
		}
	};
</script>

<style>

</style>
