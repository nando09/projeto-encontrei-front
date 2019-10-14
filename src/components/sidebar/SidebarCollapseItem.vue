<template>
  <div>
        <li>
            <a color="#cedce4" :href="link">{{text}}</a>
        </li>
  </div>
</template>

<script>
export default {
  name: 'SidebarCollapseItem',
  props: ['link', 'text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
