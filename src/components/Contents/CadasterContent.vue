<template>
  <div class="auth-fluid">
    <!--Auth fluid left content -->
    <div class="auth-fluid-form-box">
      <div class="align-items-center d-flex h-100">
        <div class="card-body">
          <!-- Logo -->
          <div class="auth-brand text-center text-lg-left">
            <a href="/">
              <span><img src="/static/images/logo-light.jpg" alt="" height="50"></span>
            </a>
          </div>

          <!-- title-->
          <h4 class="mt-0">Cadastre-se agora!</h4>
          <p class="text-muted mb-4">Crie sua conta em 1 minuto.</p>

          <!-- form -->
<!--          <form action="#">-->
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
                  href="javascript: void(0);" class="text-muted"> e concordo com termos e politicas do
                  site.</a></label>
              </div>
            </div>
            <div class="form-group mb-0 text-center">
              <button class="btn btn-primary btn-block" v-on:click="register"><i class="mdi mdi-account-circle"></i>
                Cadastre-se
              </button>
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
          Área restrita a afilados
        </p>
      </div> <!-- end auth-user-testimonial-->
    </div>
    <!-- end Auth fluid right content -->
  </div>
  <!-- end auth-fluid-->
</template>

<script>
    import Link from '@/components/Link'
    import axios from 'axios'

    export default {
        name: 'CadasterContent',
        props: [],
        data() {
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            }
        },
        components:{
            Link
        },
        methods: {
            register() {
                let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }
                // axios.post('https://localhost:8000/api/register', data,{
                axios.post('https://service.encontrei.online/api/register', data,{
                }).then(response => {

                    console.log(response);
                    if (response.data.token) {
                        alert('Cadastrado com sucesso!');
                        this.$router.push('/login')
                    } else {
                        console.log("erros de validação");
                        let erros = '';
                        for (let erro of Object.values(response.data)) {
                            erros += erro + "\n";
                        }
                        alert(erros);
                    }

                    // if (response.data.name) {
                    //     this.name_error = JSON.stringify(response.data.name).replace(/[\[\]/'"]+/g, '');
                    // }
                    // if (response.data.email) {
                    //     this.email_error = JSON.stringify(response.data.email).replace(/[\[\]/'"]+/g, '')
                    // }
                    // if (response.data.password) {
                    //     this.password_error = JSON.stringify(response.data.password).replace(/[\[\]/'"]+/g, '')
                    // }
                    // this.postloading = false
                })

                // .catch(e => {
                //     this.push(e)
                // })

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
