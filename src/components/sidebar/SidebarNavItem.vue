<template>

  <li class="side-nav-item testeRouter">
    <router-link :to="link" router-tag="li">
      <i :class="icon"></i>
      <span>{{title}}</span>
    </router-link>
  </li>
</template>



<script>
    export default {
        name: 'SidebarNavItem',
        props: ['link', 'icon', 'title'],
        data () {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
