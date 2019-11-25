<template>
  <div class="auth-fluid-pages cadasterPage pb-0">
    <div class="auth-fluid">
      <!--Auth fluid left content -->
      <div class="auth-fluid-form-box">
        <div class="align-items-center d-flex h-100">
          <div class="card-body">

            <!-- Logo -->
            <div class="auth-brand text-center text-lg-left">
              <a href="/">
                <span><img src="/static/images/logo-light.jpg" alt="" height="150"></span>
              </a>
            </div>

            <!-- User pic with title-->
            <div class="text-center w-75 m-auto">
              <img src="/static/images/users/avatar-1.jpg" height="88" alt="user-image"
                   class="rounded-circle shadow">
              <h4 class="text-dark-50 text-center mt-3 font-weight-bold">Olá, <span class="account-user-name">{{ nomeUsuario }}</span> </h4>
              <p class="text-muted mb-4">Insira sua senha de acesso.</p>
            </div>

            <!-- form -->
            <!--          <form action="#">-->
            <div class="form-group mb-3">
              <label for="password">Senha</label>
              <input v-model="password" class="form-control" type="password" required="" id="password"
                     placeholder="sua senha">
            </div>
            <div class="form-group mb-0 text-center">
              <div>
                <button class="btn btn-primary btn-block" v-on:click="login" type="submit"><i class="mdi mdi-login"></i> Entrar
                </button>
              </div>
            </div>
            <!--          </form>-->
            <!-- end form-->

            <!-- Footer-->
            <footer class="footer footer-alt">

              <p class="text-muted">Não é você? volte ao
                <button v-on:click="logout" class="btn btn-primary ml-1" text="Login">Login
                </button>
              </p>

            </footer>

          </div> <!-- end .card-body -->
        </div> <!-- end .align-items-center.d-flex.h-100-->
      </div>
      <!-- end auth-fluid-form-box-->

      <!-- Auth fluid right content -->
      <div class="auth-fluid-right text-center">
        <div class="auth-user-testimonial">
          <h2 class="mb-3">Encontrei</h2>
          <p class="lead"><i class="mdi mdi-format-quote-open"></i> Sistema de Gestão <i
            class="mdi mdi-format-quote-close"></i>
          </p>
          <p>
            Área restrita a afilados
          </p>
        </div> <!-- end auth-user-testimonial-->
      </div>
      <!-- end Auth fluid right content -->
    </div>
    <!-- end auth-fluid-->
  </div>
</template>


<script>

    import axios from 'axios';

    export default {
        name: 'LockScreen',
        data () {
            return {
                usuario: JSON.parse(sessionStorage.getItem('usuario')),
                nomeUsuario: '',
                password: '',
            }
        },
        components:{
        },
        created(){
            let usuarioAux = sessionStorage.getItem('usuario');
            if(usuarioAux){
                this.usuario = JSON.parse(usuarioAux);
            }
            // axios.get('https://localhost:8000/api/users/'+this.usuario.id, {
            axios.get('https://service.encontrei.online/api/users/'+this.usuario.id, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + this.usuario.token
                }
            })
                .then(response => {
                    console.log(response.data)
                    this.nomeUsuario = response.data.name
                })
        },
        methods: {
            login() {
                // axios.post('https://localhost:8000/api/login', {
                axios.post('https://service.encontrei.online/api/login', {
                    email: this.usuario.email,
                    password: this.password,
                })
                    .then(response => {
                        console.log(response)
                        if (response.data.token) {
                            console.log('login com succeso')
                            sessionStorage.setItem('usuario', JSON.stringify(response.data))
                            this.$router.push('/');
                        } else if (response.data.status === false) {
                            console.log('dados invalidos')
                            alert('Login inválido!')
                        } else {
                            console.log('validação')
                            let erros = ''
                            for (let erro of Object.values(response.data)) {
                                erros += erro + " "
                            }
                            alert(erros)
                        }
                    })
                    .catch(e => {
                        console.log(e);
                        alert('servidor fora de área')
                    });
            },
            logout() {
                sessionStorage.clear();
                this.$router.push('/login')
            },
        }
    }
</script>

<style>

</style>
