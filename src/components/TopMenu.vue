<template>
  <div class="navbar-custom">
    <ul class="list-unstyled topbar-right-menu float-right mb-0">

<!--      <li class="dropdown notification-list topbar-dropdown">-->
<!--        <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown"-->
<!--           href="" role="button"-->
<!--           aria-haspopup="false" aria-expanded="false">-->
<!--          <i class="dripicons-meter"></i> <span-->
<!--          class="align-middle">Dashboard</span> <i class="mdi mdi-chevron-down"></i>-->
<!--        </a>-->
<!--        <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu">-->

<!--          &lt;!&ndash; item&ndash;&gt;-->
<!--          <a href="" class="dropdown-item notify-item">-->
<!--            <i class="dripicons-store"></i>-->
<!--            <span class="align-middle">Loja</span>-->
<!--          </a>-->

<!--          &lt;!&ndash; item&ndash;&gt;-->
<!--          <a href="" class="dropdown-item notify-item">-->
<!--            <i class="dripicons-article"></i>-->
<!--            <span class="align-middle">Convert Pages</span>-->
<!--          </a>-->

<!--        </div>-->
<!--      </li>-->

      <li class="dropdown notification-list">
        <a class="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" href="#"
           role="button" aria-haspopup="false" aria-expanded="false">
          <span class="account-user-avatar">
              <img :src="imgAvatar" alt="user-image" class="rounded-circle">
          </span>
          <span>
              <span class="account-user-name">{{ nomeUsuario }}</span>
              <!-- <span class="account-position">%Status%</span> -->
          </span>
        </a>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
          <!-- item-->
          <div class=" dropdown-header noti-title">
            <h6 class="text-overflow m-0">Seja bem vindo !</h6>
          </div>

          <!-- item-->
<!--          <router-link to="/afiliado-dados-cadastro" class="dropdown-item notify-item">-->
<!--            <i class="mdi mdi-account-circle mr-1"></i>-->
<!--            <span class="align-middle">Dados Cadastrais</span>-->
<!--          </router-link>-->

<!--          <router-link to="/bloquear-tela" class="dropdown-item notify-item">-->
<!--            <i class="mdi mdi-lock-outline mr-1"></i>-->
<!--            <span class="align-middle">Bloquear Tela</span>-->
<!--          </router-link>-->

          <!-- item-->
          <button v-on:click="logout" class="dropdown-item notify-item">
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

    import axios from 'axios'
    import TopMenuLink from '@/components/TopMenuLink'

    export default {
        name: 'TopMenu',
        props: [],
        data() {
            return {
                nomeUsuario: '',
                imgAvatar: '',
                usuario: JSON.parse(sessionStorage.getItem('usuario')),
            }
        },
        created(){
            let usuarioAux = sessionStorage.getItem('usuario');
            if(usuarioAux){
                this.usuario = JSON.parse(usuarioAux);
                this.nomeUsuario = this.usuario.name;
                this.imgAvatar = 'https://image.service.encontrei.online/' + this.usuario.mais.photo;
            }
            // // axios.get('http://localhost:8000/api/users/'+this.usuario.id, {
            // axios.get('https://service.encontrei.online/api/users/'+this.usuario.id, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         Authorization: "Bearer " + this.usuario.token
            //     }
            // })
            // .then(response => {
            //     console.log(response.data)
            //     this.nomeUsuario = response.data.name
            // })
        },
        methods: {
            logout() {
                sessionStorage.clear();
                this.$router.push('/logout')
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
