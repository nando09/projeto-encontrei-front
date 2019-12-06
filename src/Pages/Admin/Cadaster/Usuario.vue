<template>
	<div class="wrapper">
    <SidebarClient title="Área do Usuário"/>
		<div class="content-page">

			<div class="content">
				<TopMenu/>
				<div class="container-fluid">

					<!-- start page title -->
					<PageTitle home="Início" category="Usuário" sub-category="Meus Dados" titulo="Meus dados"/>
					<!-- end page title -->

					<div class="row">
						<div class="col-12">
							<div class="card">

								<div class="card-body">
									<!--            <h4 class="header-title">Usuários</h4>-->

									<!-- <form> -->
									<div class="col-9 form-row float-left">
										<div class="col-md-4">
											<label for="nome">Nome*</label>
											<input v-model="nome" type="text" class="form-control mb-3" id="nome" placeholder="Nome">
										</div>
										<div class="col-md-4">
											<label for="email">Email*</label>
											<input v-model="email" type="email" class="form-control mb-3" id="email" placeholder="Email">
										</div>

                    <div class="col-md-4">
                      <label for="nascimento">Data de nascimento*</label>
                      <input v-model="nascimento" type="date" class="form-control mb-3" id="nascimento" placeholder="Data de nascimento">
                    </div>


                    <div class="col-md-4">
                      <label for="password">Senha*</label>
                      <input v-model="password" type="password" class="form-control mb-3" id="password" placeholder="Nome Fantasia">
                    </div>

                    <div class="col-md-4">
                      <label for="password_confirmation">Confirmar Senha*</label>
                      <input v-model="password_confirmation" type="password" class="form-control mb-3" id="password_confirmation" placeholder="Confirmar Senha">
                    </div>

                    <div class="col-md-4">
                      <label for="cidade_moradia">Cidade onde mora*</label>
                      <input v-model="cidade_moradia" type="text" class="form-control mb-3" id="cidade_moradia" placeholder="Cidade onde mora">
                    </div>

                    <div class="col-md-4">
                      <label for="cidade_trabalho">Cidade onde trabalha*</label>
                      <input v-model="cidade_trabalho" type="text" class="form-control mb-3" id="cidade_trabalho" placeholder="Cidade onde trabalha">
                    </div>


                    <div class="col-md-4">
                      <label for="sexo">Sexo</label>
                      <select v-model="sexo" id="sexo" class="form-control mb-3">
                        <option selected>Selecionar...</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                      </select>
                    </div>

                    <div class="col-md-4">
                      <label for="celular">Celular*</label>
                      <input v-model="celular" type="text" class="form-control mb-3" id="celular" placeholder="Celular">
                    </div>
									</div>

                  <div class="col-3 float-right">
                    <div class="col-md-12">
                      <label>Foto</label>
                      <p class="text-center">
                        <img
                          id="photo"
                          :src="photo||'http://imagem.service.weblo.com.br/product/produto-sem-imagem.png'"
                          width="132"
                        />
                      </p>
                      <br />

                      <div class="input-group">
                        <div class="custom-file">
                          <input
                            @change="uploadImage"
                            type="file"
                            class="custom-file-input"
                            id="inputGroupFile04"
                            ref="files"
                            accept="image"
                          />
                          <label class="custom-file-label" for="inputGroupFile04">Selecionar Arquivo</label>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="row col-12 justify-content-center mt-2">
									  <button type="submit" class="btn btn-primary" @click="cadastraUsuario()">Cadastrar</button>
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

    import SidebarClient from "@/components/Client/SidebarClient";
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
              password:			'',
              password_confirmation:		'',
              nascimento:		'',
              cidade_moradia:			'',
              cidade_trabalho:			'',
              sexo:			'',
              celular:	'',
              photo: '',
						}
				},
				components:{
						SidebarClient,
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

						// this.$http.get('http://localhost:8000/api/usuario').then(function(data){
						this.$http.get('https://service.encontrei.online/api/usuario').then(function(data){
								this.prestadores = data.body.slice(0, 10);
						});
						this.getUsuario();
				},
				computed: {

				},
				methods: {
						cadastraUsuario(){
								let data = {
                nome					:	this.nome,
                email					:	this.email,
                password						:	this.password,
                password_confirmation			:	this.password_confirmation,
                nascimento			:	this.nascimento,
                cidade_moradia				:	this.cidade_moradia,
                cidade_trabalho				:	this.cidade_trabalho,
                sexo			:	this.sexo,
                celular			:	this.celular,
                photo : this.photo,
            };

								console.log(data);

								// axios.post('http://localhost:8000/api/usuario', data, {
								axios.post('https://service.encontrei.online/api/usuario', data, {
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

						getUsuario(){
								// axios.get('http://localhost:8000/api/usuario', {
								axios.get('https://service.encontrei.online/api/usuario', {
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
