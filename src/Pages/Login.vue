<template>
  <div class="auth-fluid-pages cadasterPage pb-0">
    <div v-if="loadingPage" class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="auth-fluid">
      <!--Auth fluid left content -->
      <div class="auth-fluid-form-box">
        <div class="align-items-center d-flex h-100">
          <div class="card-body">

            <!-- Logo -->
            <div class="auth-brand text-center text-lg-left">
              <a href="/">
                <span><img style="margin-bottom: 0px" src="/static/images/logo-light.jpg" alt="" height="150"></span>
              </a>
            </div>

            <!-- title-->
            <h4 class="mt-0">Área Restrita</h4>
            <p class="text-muted mb-4">Insira seu email e senha para acessar sua área de negócios</p>

            <!-- form -->
            <div class="formulario" v-on:keyup.enter="login">
              <div class="form-group">
                <label for="emailaddress">Email</label>
                <input v-model="email" class="form-control" type="email" id="emailaddress" required=""
                       placeholder="Seu email">
              </div>
              <div class="form-group">

                <Link link="/esqueceu-senha" classe="text-muted float-right" text="Esqueceu sua senha?"/>
                <!--              <a href="limkr-esqueceu-senha.html" class="text-muted float-right"><small>Esqueceu sua senha?</small></a>-->
                <label for="password">Senha</label>
                <input v-model="password" class="form-control" type="password" required="" id="password"
                       placeholder="Sua senha">
              </div>
              <div class="form-group mb-3">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="checkbox-signin">
                  <label class="custom-control-label" for="checkbox-signin">Lembrar-me</label>
                </div>
              </div>
              <div class="form-group mb-0 text-center">
                <button class="btn btn-primary btn-block" v-on:click="login"><i class="mdi mdi-login"></i> Entrar
                </button>
              </div>
              <!-- end form-->
            </div>


            <!-- Footer-->
            <footer class="footer footer-alt">

              <!--            <p class="text-muted">Não possui uma conta? <a href="limkr-cadastro.html" class="text-muted ml-1"><b>Cadastre-se</b></a></p>-->
              <p class="text-muted">Não possui uma conta?               <!--              <router-link class="btn btn btn-success" :to="{name: 'EditPost', params: {id: post.id}}">Show</router-link>-->
                <b-button class="btn btn-primary" v-on:click="formCadaster">Cadastre-se</b-button>
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
            Área restrita a afiliados
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
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',
                loadingPage: false
            }
        },
        components: {},
        methods: {
            login() {
              this.loadingPage = true;
                // axios.post('http://localhost:8000/api/login_web', {
                axios.post('https://service.encontrei.online/api/login_web', {
                    email: this.email,
                    password: this.password,
                })
                    .then(response => {
                        if (response.data.token) {
                            sessionStorage.setItem('usuario', JSON.stringify(response.data))
                            this.$router.push('/usuario');
                            this.toast('Logado com sucessso!', '#73b730');
                        }else{
                            this.toast('Login inválido!', '#ec293c');
                        }

                        this.loadingPage = false;
                    })
                    .catch(e => {
                        alert('servidor fora de área')
                    });
            },

            toast(nome, cor){
              const Toast = this.$swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                background: cor,
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

            formCadaster(){
                this.$router.push('/cadastro-usuario')
            }
        },
        created() {
            let usuarioAux = sessionStorage.getItem('usuario')
            if (usuarioAux) {
                this.usuario = JSON.parse(usuarioAux)
                this.$router.push('/')
            }
        }

    };
</script>

<style>
  .swal2-popup.swal2-toast .swal2-title {
    color: white;
  }

  .swal2-popup.swal2-toast.swal2-show {
    /*background: #73b730;*/
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
