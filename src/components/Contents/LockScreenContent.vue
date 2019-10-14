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

          <!-- User pic with title-->
          <div class="text-center w-75 m-auto">
            <img src="/static/images/users/avatar-1.jpg" height="88" alt="user-image"
                 class="rounded-circle shadow">
            <h4 class="text-dark-50 text-center mt-3 font-weight-bold">Olá ! %nomeAfiliado% </h4>
            <p class="text-muted mb-4">Insira sua senha de acesso.</p>
          </div>

          <!-- form -->
          <form action="#">
            <div class="form-group mb-3">
              <label for="password">Senha</label>
              <input class="form-control" type="password" required="" id="password"
                     placeholder="sua senha">
            </div>
            <div class="form-group mb-0 text-center">
              <a href="limkr-login.html">
                <button class="btn btn-primary btn-block" type="submit"><i class="mdi mdi-login"></i> Entrar
                </button>
              </a>
            </div>
            <!-- social
            <div class="text-center mt-4">
                <p class="text-muted font-16">Authentication in with</p>
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
          </form>
          <!-- end form-->

          <!-- Footer-->
          <footer class="footer footer-alt">

            <p class="text-muted">Não é você? volte ao <Link link="/login" classe="text-muted ml-1" text="Entrar"/></p>

<!--            <p class="text-muted">Não é você? volte ao <a href="limkr-login.html" class="text-muted ml-1"><b>Entrar</b></a></p>-->
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
        name: 'LockScreenContent',
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
