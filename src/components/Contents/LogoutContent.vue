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
          <div class="text-center">
            <h4 class="mt-0">Vejo você em breve!</h4>
            <p class="text-muted mb-4">Você desconectou do sistema Encontrei, para entrar novamente realize novo login.</p>
          </div>

          <!-- Logout icon -->
          <div class="logout-icon m-auto">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 161.2 161.2" enable-background="new 0 0 161.2 161.2" xml:space="preserve">
                                <path class="path" fill="none" stroke="#0acf97" stroke-miterlimit="10" d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4
                                    c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5
                                    c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z"/>
              <circle class="path" fill="none" stroke="#0acf97" stroke-width="4" stroke-miterlimit="10"
                      cx="80.6" cy="80.6" r="62.1"/>
              <polyline class="path" fill="none" stroke="#0acf97" stroke-width="6" stroke-linecap="round"
                        stroke-miterlimit="10" points="113,52.8
                                    74.1,108.4 48.2,86.4 "/>

              <circle class="spin" fill="none" stroke="#0acf97" stroke-width="4" stroke-miterlimit="10"
                      stroke-dasharray="12.2175,12.2175" cx="80.6" cy="80.6" r="73.9"/>
                            </svg>
          </div>
          <!-- end logout-icon-->

          <!-- Footer-->
          <footer class="footer footer-alt">

            <p class="text-muted">Voltar a <Link link="/login" classe="text-muted ml-1" text="Entrar"/></p>
<!--            <p class="text-muted">Voltar a <a href="limkr-login.html" class="text-muted ml-1"><b>Entrar</b></a></p>-->
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
        name: 'LogoutContent',
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
