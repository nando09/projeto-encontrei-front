<template>
    <b-list-group class="metismenu side-nav">

        <sidebar-title :title="sectionName"/>

        <slot></slot>

    </b-list-group>
    <!-- Left Sidebar End -->
</template>

<script>
import SidebarLogo from '@/components/sidebar/SidebarLogo'
import SidebarTitle from '@/components/sidebar/SidebarTitle'
import SidebarItem from '@/components/sidebar/SidebarItem'


export default {
  name: 'SidebarVue',
  props: ['sectionName'],
  components:{
      SidebarLogo,
      SidebarTitle,
      SidebarItem,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
