<template>
  <div class="navbar-custom">
    <ul class="list-unstyled topbar-right-menu float-right mb-0">

      <li class="dropdown notification-list topbar-dropdown">
        <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown"
           href="" role="button"
           aria-haspopup="false" aria-expanded="false">
          <i class="dripicons-meter"></i> <span
          class="align-middle">Dashboard</span> <i class="mdi mdi-chevron-down"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu">

          <!-- item-->
          <a href="" class="dropdown-item notify-item">
            <i class="dripicons-store"></i>
            <span class="align-middle">Loja</span>
          </a>

          <!-- item-->
          <a href="limkr-afiliado-convert-page.html" class="dropdown-item notify-item">
            <i class="dripicons-article"></i>
            <span class="align-middle">Convert Pages</span>
          </a>

        </div>
      </li>

      <li class="dropdown notification-list">
        <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button"
           aria-haspopup="false" aria-expanded="false">
          <i class="dripicons-bell noti-icon"></i>
          <span class="noti-icon-badge"></span>
        </a>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">

          <!-- item-->
          <div class="dropdown-item noti-title">
            <h5 class="m-0">
              <!-- span class="float-right">
                  <a href="javascript: void(0);" class="text-dark">
                      <small>Limpar Todas</small>
                  </a>
              </span -->
              Notificações
            </h5>
          </div>

          <div class="slimscroll" style="max-height: 230px;">
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <div class="notify-icon bg-primary">
                <i class="mdi mdi-comment-account-outline"></i>
              </div>
              <p class="notify-details">Caleb Flakelar commented on Admin
                <small class="text-muted">1 min ago</small>
              </p>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <div class="notify-icon bg-info">
                <i class="mdi mdi-account-plus"></i>
              </div>
              <p class="notify-details">New user registered.
                <small class="text-muted">5 hours ago</small>
              </p>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <div class="notify-icon">
                <img src="/static/images/users/avatar-2.jpg" class="img-fluid rounded-circle"
                     alt=""/></div>
              <p class="notify-details">Cristina Pride</p>
              <p class="text-muted mb-0 user-msg">
                <small>Hi, How are you? What about our next meeting</small>
              </p>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <div class="notify-icon bg-primary">
                <i class="mdi mdi-comment-account-outline"></i>
              </div>
              <p class="notify-details">Caleb Flakelar commented on Admin
                <small class="text-muted">4 days ago</small>
              </p>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <div class="notify-icon">
                <img src="/static/images/users/avatar-4.jpg" class="img-fluid rounded-circle"
                     alt=""/></div>
              <p class="notify-details">Karen Robinson</p>
              <p class="text-muted mb-0 user-msg">
                <small>Wow ! this admin looks good and awesome design</small>
              </p>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <div class="notify-icon bg-info">
                <i class="mdi mdi-heart"></i>
              </div>
              <p class="notify-details">Carlos Crouch liked
                <b>Admin</b>
                <small class="text-muted">13 days ago</small>
              </p>
            </a>
          </div>

          <!-- All-->
          <a href="javascript:void(0);"
             class="dropdown-item text-center text-primary notify-item notify-all">
            Ver todas
          </a>

        </div>
      </li>

      <li class="dropdown notification-list">
        <a class="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" href="#"
           role="button" aria-haspopup="false" aria-expanded="false">
          <span class="account-user-avatar">
              <img src="/static/images/users/avatar-1.jpg" alt="user-image" class="rounded-circle">
          </span>
          <span>
              <span class="account-user-name">%nomeAfiliado%</span>
              <span class="account-position">%Status%</span>
          </span>
        </a>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
          <!-- item-->
          <div class=" dropdown-header noti-title">
            <h6 class="text-overflow m-0">Seja bem vindo !</h6>
          </div>

          <!-- item-->
          <router-link to="/afiliado-dados-cadastro" class="dropdown-item notify-item">
            <i class="mdi mdi-account-circle mr-1"></i>
            <span class="align-middle">Dados Cadastrais</span>
          </router-link>

          <router-link to="/afiliado-saque" class="dropdown-item notify-item">
            <i class="mdi mdi-account-edit mr-1"></i>
            <span class="align-middle">Saque</span>
          </router-link>

          <router-link to="/" class="dropdown-item notify-item">
            <i class="mdi mdi-lifebuoy mr-1"></i>
            <span class="align-middle">Cartão Pré-pago</span>
          </router-link>

          <router-link to="/lock-screen" class="dropdown-item notify-item">
            <i class="mdi mdi-lock-outline mr-1"></i>
            <span class="align-middle">Bloquear Tela</span>
          </router-link>

          <!-- item-->
          <button v-on:click="logout"class="dropdown-item notify-item">
            <i class="mdi mdi-logout mr-1"></i>
            <span>Sair</span>
          </button>

        </div>
      </li>

    </ul>
    <button class="button-menu-mobile open-left disable-btn">
      <i class="mdi mdi-menu"></i>
    </button>
    <!--
    <div class="app-search">
        <form>
            <div class="input-group">
                <input type="text" class="form-control" placeholder="buscar...">
                <span class="mdi mdi-magnify"></span>
                <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">Buscar</button>
                </div>
            </div>
        </form>
    </div>
    -->
  </div>
  <!-- end Topbar -->
</template>

<script>
    import TopMenuLink from '@/components/TopMenuLink'

    export default {
        name: 'TopMenu',
        props: [],
        data() {
            return {}
        },
        methods: {
            logout() {
                sessionStorage.clear()
                this.$router.push('/logout')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
