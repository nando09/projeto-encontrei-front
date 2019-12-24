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
              <a href="#">
                <span><img src="/static/images/logo-light.jpg" alt="" height="100"></span>
              </a>
            </div>

            <!-- title-->
            <h4 class="mt-0">Cadastre-se agora!</h4>
            <p class="text-muted mb-4">Crie sua conta em 1 minuto.</p>


            <!-- form -->
            <div class="formulario" v-on:keyup.enter="register">
              <div class="form-group">
                <label for="fullname" required>Nome Completo</label>
                <input v-model="name" class="form-control" type="text" id="fullname" placeholder="" required>
              </div>
              <div class="form-group">
                <label for="emailaddress">Email</label>
                <input v-model="email" class="form-control" type="email" id="emailaddress" placeholder="" required>
              </div>
              <div class="form-group">
                <label for="password">Senha</label>
                <input v-model="password" class="form-control" type="password" required id="password"
                       placeholder="">
              </div>
              <div class="form-group">
                <label for="password_confirmation">Confirme a senha</label>
                <input v-model="password_confirmation" class="form-control" type="password" required
                       id="password_confirmation"
                       placeholder="">
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="checkbox-signup" required>
                  <label class="custom-control-label" for="checkbox-signup">Eu lí <a
                    href="javascript: void(0);" class="text-muted"> e concordo com termos e politicas do site.</a></label>
                </div>
              </div>
              <div class="form-group mb-0 text-center">
                <button class="btn btn-primary btn-block" v-on:click="register"><i class="mdi mdi-account-circle"></i>
                  Cadastre-se
                </button>
              </div>
            </div>


            <!-- Footer-->
            <footer class="footer footer-alt">
              <p class="text-muted">Já possui conta?  <Link link="/login" class="btn btn-primary ml-1" text="Entrar"/></p>
              <!--            <p class="text-muted">Já possui conta? <a href="limkr-login.html" class="text-muted ml-1"><b>Entrar</b></a></p>-->
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

    import Link from '@/components/Link'
    import axios from 'axios'

    export default {
        name: 'Cadastro',

        props: [],
        data() {
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                loadingPage: false,
            }
        },
        components:{
            Link
        },
        methods: {
            register() {
                this.loadingPage = true;
                let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }
                // axios.post('http://localhost:8000/api/register_web', data,{
                axios.post('https://service.encontrei.online/api/register_web', data,{
                }).then(response => {

                    if (response.data.token) {
                        this.toast('Cadastrado com sucesso!', '#73b730');
                        this.$router.push('/login');
                    } else if (response.data.email == 'O campo email já está sendo utilizado.') {
                        this.toast('Email já esta sendo utilizado!', '#ec293c');
                    }else{
                        this.toast('Preencher todos os campos corretamente!', '#ec293c');
                    }
                    this.loadingPage = false;
                })
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
