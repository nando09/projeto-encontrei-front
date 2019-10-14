<template>
    <b-navbar-brand class="logo text-center" style="position:relative">
      <span class="logo-lg">
        <img :src="logo" alt="" :height="heigth || 36">
      </span>
    </b-navbar-brand>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: ['logo', 'heigth']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>