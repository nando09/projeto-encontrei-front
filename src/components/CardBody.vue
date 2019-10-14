<template>
  <div class="col-sm-6 col-xl-3">
    <div class="card shadow-none m-0 border-left">
      <div class="card-body text-center">
        <i :class="icon" style="font-size: 24px;"></i>
        <h3><span>{{value}}</span></h3>
        <p class="text-muted font-15 mb-0">{{title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'CardBody',
        props: ['title', 'value', 'icon'],
        data () {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
