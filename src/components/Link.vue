<template>
    <router-link :to="link" :class="classe"><a :href="link"></a>
      <b>{{text}}</b>
    </router-link>
</template>

<script>

export default {
  name: 'Link',
  props: [
    'link',
    'classe',
    'text'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
