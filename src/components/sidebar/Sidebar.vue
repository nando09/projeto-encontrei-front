<template>
  <div class="left-side-menu">
    <div class="slimscroll-menu" id="left-side-menu-container">

      <b-navbar-nav id="accordion" class="left-side-menu overflow-auto">
        <sidebar-logo logo="/static/images/logo-light.png" heigth="120"/>
        <sidebar-vue sectionName="Administração">

          <sidebar-item icon="dripicons-meter" link="/" text="DASHBOARD" style="font-size: 1rem !important;"/>

          <sidebar-collapse icon="dripicons-view-list-large" title="CADASTRO" >

            <sidebar-collapse link="/cadastro/lojista-prestador" icon="dripicons-cart" title="Lojista/Prestador de Serviços" >

              <sidebar-item link="/cadastro/lojista-prestador" text="Lojista/Prestador de Serviços"/>
              <sidebar-item link="/cadastro/perfil-comercio-servicos" text="Perfil de Comércio/Serviços"/>
              <sidebar-item link="/cadastro/produtos-servicos" text="Produtos/Serviços"/>
            </sidebar-collapse>
            <sidebar-item link="/cadastro/planos-servico" text="Planos de Serviço"/>
          </sidebar-collapse>

          <sidebar-collapse icon="dripicons-clipboard" title="RELATÓRIOS" >
            <sidebar-item link="/relatorio/usuario" text="Usuário"/>
            <sidebar-item link="/relatorio/parceiro" text="Lojista"/>
            <sidebar-item link="/relatorio/produto" text="Produto"/>
            <sidebar-item link="/relatorio/acesso-lojista-prestador" text="Acesso a lojista/prestador"/>
            <sidebar-item link="/relatorio/acesso-produto-servico" text="Acesso a produtos/serviços"/>
          </sidebar-collapse>

<!--          <sidebar-item icon="dripicons-article" link="" text="CONVERT PAGES"/>-->

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
        name: 'Sidebar',
        props: [''],
        components: {
            SidebarVue,
            SidebarLogo,
            SidebarTitle,
            SidebarItem,
            SidebarCollapse,
            SidebarCollapseItem
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
