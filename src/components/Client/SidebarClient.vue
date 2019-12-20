<template>
  <div class="left-side-menu">
    <div class="slimscroll-menu" id="left-side-menu-container">

      <b-navbar-nav id="accordion" class="left-side-menu overflow-auto">
        <sidebar-logo logo="/static/images/logo-light.png" heigth="120"/>
        <sidebar-vue sectionName="Parceiros">

          <sidebar-item icon="dripicons-meter" link="/usuario/" text="DASHBOARD" style="font-size: 1rem !important;"/>
          <sidebar-item icon="dripicons-stack" link="/usuario/meus-dados" text="DADOS CADASTRAIS" style="font-size: 1rem !important;"/>
          <sidebar-item icon="dripicons-view-list" link="/usuario/produtos" text="PRODUTOS" style="font-size: 1rem !important;"/>
          <sidebar-item icon="dripicons-user-id" link="/usuario/relatorio/produtos" text="RELATÓRIO PRODUTOS" style="font-size: 1rem !important;"/>
          <sidebar-item icon="dripicons-user-id" link="/usuario/relatorio" text="RELATÓRIO PERFIL" style="font-size: 1rem !important;"/>
<!--          <sidebar-item icon="dripicons-user" link="/dados-usuario" text="MEUS DADOS" style="font-size: 1rem !important;"/>-->

          <div class="slimScrollBar" style="background: rgb(158, 165, 171); width: 8px; position: absolute; top: 1px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; height: 731.378px;"></div>
          <div class="slimScrollRail" style="width: 8px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>

        </sidebar-vue>

      </b-navbar-nav>

    </div>
    <!-- Sidebar -left -->

  </div>
  <!-- Left Sidebar End -->

</template>

<script>
    import SidebarVue from '@/components/sidebar/SidebarVue'
    import SidebarLogo from '@/components/sidebar/SidebarLogo'
    import SidebarTitle from '@/components/sidebar/SidebarTitle'
    import SidebarItem from '@/components/sidebar/SidebarItem'
    import SidebarCollapse from '@/components/sidebar/SidebarCollapse'
    import SidebarCollapseItem from '@/components/sidebar/SidebarCollapseItem'

    export default {
        name: 'SidebarClient',
        props: [''],
        components: {
            SidebarVue,
            SidebarLogo,
            SidebarTitle,
            SidebarItem,
            SidebarCollapse,
            SidebarCollapseItem
        },
        data(){
          return {
            user: JSON.parse(sessionStorage.getItem("usuario")),
          };
        },
        created() {
          let usuarioAux = sessionStorage.getItem("usuario");
          if (usuarioAux) {
            this.usuario = JSON.parse(usuarioAux);
            this.autorizacao();
          } else {
            this.$router.push("/login");
          }
        },
        methods: {
          autorizacao(){
            if (this.usuario.type != 'web' && this.usuario.type != 'app') {
              this.$router.push("/");
            }

            if (this.usuario.mais.nome == null || this.usuario.mais.nome == '') {
              this.$router.push("/usuario/meus-dados");
              this.toast('Preencher formulario e salvar!', '#ec293c');
              this.loadingPage = false;
              return true;
            }else if (this.usuario.mais.email == null || this.usuario.mais.email == '') {
              this.$router.push("/usuario/meus-dados");
              this.toast('Preencher formulario e salvar!', '#ec293c');
              this.loadingPage = false;
              return true;
            }else if (this.usuario.mais.nome_responsavel == null || this.usuario.mais.nome_responsavel == '') {
              this.$router.push("/usuario/meus-dados");
              this.toast('Preencher formulario e salvar!', '#ec293c');
              this.loadingPage = false;
              return true;
            }else if (this.usuario.mais.razao_social == null || this.usuario.mais.razao_social == '') {
              this.$router.push("/usuario/meus-dados");
              this.toast('Preencher formulario e salvar!', '#ec293c');
              this.loadingPage = false;
              return true;
            }else if (this.usuario.mais.nome_fantasia == null || this.usuario.mais.nome_fantasia == '') {
              this.$router.push("/usuario/meus-dados");
              this.toast('Preencher formulario e salvar!', '#ec293c');
              this.loadingPage = false;
              return true;
            }else if (this.usuario.mais.telefone == null || this.usuario.mais.telefone == '') {
              this.$router.push("/usuario/meus-dados");
              this.toast('Preencher formulario e salvar!', '#ec293c');
              this.loadingPage = false;
              return true;
            }else if (this.usuario.mais.descricao == null || this.usuario.mais.descricao == '') {
              this.$router.push("/usuario/meus-dados");
              this.toast('Preencher formulario e salvar!', '#ec293c');
              this.loadingPage = false;
              return true;
            }else if (this.usuario.mais.cep == null || this.usuario.mais.cep == '') {
              this.$router.push("/usuario/meus-dados");
              this.toast('Preencher formulario e salvar!', '#ec293c');
              this.loadingPage = false;
              return true;
            }else if (this.usuario.mais.endereco == null || this.usuario.mais.endereco == '') {
              this.$router.push("/usuario/meus-dados");
              this.toast('Preencher formulario e salvar!', '#ec293c');
              this.loadingPage = false;
              return true;
            }else if (this.usuario.mais.numero == null || this.usuario.mais.numero == '') {
              this.$router.push("/usuario/meus-dados");
              this.toast('Preencher formulario e salvar!', '#ec293c');
              this.loadingPage = false;
              return true;
            }else if (this.usuario.mais.bairro == null || this.usuario.mais.bairro == '') {
              this.$router.push("/usuario/meus-dados");
              this.toast('Preencher formulario e salvar!', '#ec293c');
              this.loadingPage = false;
              return true;
            }else if (this.usuario.mais.cidade == null || this.usuario.mais.cidade == '') {
              this.$router.push("/usuario/meus-dados");
              this.toast('Preencher formulario e salvar!', '#ec293c');
              this.loadingPage = false;
              return true;
            }else if (this.usuario.mais.estado == null || this.usuario.mais.estado == '') {
              this.$router.push("/usuario/meus-dados");
              this.toast('Preencher formulario e salvar!', '#ec293c');
              this.loadingPage = false;
              return true;
            }

            // if (this.usuario.mais.) {}
            // console.log(this.usuario.mais);
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
          }
        },

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
