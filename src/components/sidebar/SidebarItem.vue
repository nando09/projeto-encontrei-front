<template>
    <li class="side-nav-item">
        <router-link :to="link" class="side-nav-link">
            <i :class="icon"></i>
            <span> {{text}} </span>
        </router-link>
        <slot> </slot>
    </li>
</template>

<script>

export default {
  name: 'SidebarItem',
  props: [
    'link',
    'icon',
    'text'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>