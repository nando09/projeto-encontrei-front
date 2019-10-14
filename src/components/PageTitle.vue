<template>
  <!-- Footer Start -->
  <div class="row">
    <div class="col-12">
      <div class="page-title-box">
        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">{{home}}</a></li>
            <i class="fas fa-angle-right"></i>
            <li class="breadcrumb-item active"><a href="javascript: void(0);">{{category || ''}}</a></li>
            <i class="fas fa-angle-right"></i>
            <li class="breadcrumb-item active">{{subCategory || ''}}</li>
          </ol>
        </div>
        <h4 class="page-title">{{titulo}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'PageTitle',
        props: ['home', 'category', 'subCategory', 'titulo'],
        data () {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
