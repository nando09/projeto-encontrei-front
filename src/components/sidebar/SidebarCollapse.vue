<template>
<div>
      <li class="side-nav-item">
        
            <b-button v-b-toggle="title" variant="sidemenu" class="side-nav-link">
                <i :class="icon"></i>
                {{title}} 
                <div class="menu-arrow" style="display:inline-block; position:unset"></div>
            </b-button>
            
        </li>

        <b-collapse :id="title" class="side-nav-second-level">

            <slot> </slot>
        

        </b-collapse> 
</div>
</template>

<script>
export default {
  name: 'SidebarCollapse',
  props: ['title', 'icon']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>