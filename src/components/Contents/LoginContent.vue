<template>
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
<!--          <form action="#">-->
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
            <!-- social
            <div class="text-center mt-4">
                <p class="text-muted font-16">Entrar com</p>
                <ul class="social-list list-inline mt-3">
                    <li class="list-inline-item">
                        <a href="javascript: void(0);" class="social-list-item border-primary text-primary"><i
                                class="mdi mdi-facebook"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="javascript: void(0);" class="social-list-item border-danger text-danger"><i
                                class="mdi mdi-google"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="javascript: void(0);" class="social-list-item border-info text-info"><i
                                class="mdi mdi-twitter"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="javascript: void(0);" class="social-list-item border-secondary text-secondary"><i
                                class="mdi mdi-github-circle"></i></a>
                    </li>
                </ul>
            </div>
            -->
<!--          </form>-->
          <!-- end form-->

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
          Área restrita a afilados
        </p>
      </div> <!-- end auth-user-testimonial-->
    </div>
    <!-- end Auth fluid right content -->
  </div>
  <!-- end auth-fluid-->
</template>

<script>
    import axios from 'axios';
    import Cadaster from "../../Pages/Cadaster";

    export default {
        name: 'LoginContent',
        data() {
            return {
                email: '',
                password: '',
            }
        },
        components: {},
        methods: {
            login() {
                // axios.post('https://localhost:8000/api/login', {
                axios.post('https://service.encontrei.online/api/login', {
                    email: this.email,
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
            formCadaster(){
                this.$router.push('/cadastro-usuario')
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
