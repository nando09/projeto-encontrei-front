<template>
  <div class="auth-fluid">
    <!--Auth fluid left content -->
    <div class="auth-fluid-form-box">
      <div class="align-items-center d-flex h-100">
        <div class="card-body">

          <!-- Logo -->
          <div class="auth-brand text-center text-lg-left">
            <a href="/">
              <span><img src="/static/images/logo.png" alt="" height="18"></span>
            </a>
          </div>

          <!-- title-->
          <h4 class="mt-0">Recuperar Senha</h4>
          <p class="text-muted mb-4">Insira abaixo o seu email de cadastro e clique em Recuperar Senha.</p>

          <!-- form -->
          <form action="#">
            <div class="form-group mb-3">
              <label for="emailaddress">Email</label>
              <input class="form-control" type="email" id="emailaddress" required=""
                     placeholder="Seu email">
            </div>
            <div class="form-group mb-0 text-center">
              <button class="btn btn-primary btn-block" type="submit"><i class="mdi mdi-lock-reset"></i> Recuperar Senha
              </button>
            </div>

          </form>
          <!-- end form-->

          <!-- Footer-->
          <footer class="footer footer-alt">


            <p class="text-muted">Voltar ao <Link link="/login" classe="text-muted ml-1" text="Entrar"/></p>
<!--            <p class="text-muted">Voltar ao <a href="limkr-login.html" class="text-muted ml-1"><b>Entrar</b></a></p>-->
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


    export default {
        name: 'ForgotPasswordContent',
        props: [],
        data () {
            return {

            }
        },
        components:{
            Link
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
