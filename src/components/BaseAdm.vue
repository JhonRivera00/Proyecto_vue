<template>
  <div>
    <NavAdmin/>
    <div class="row">
      <div class="col-3">
        <MenuLateraladm/>

      </div>
      <div class="col-9">
        <router-view/>

      </div>

    </div>

  </div>
</template>

<script>
import NavAdmin from './NavAdmin.vue';
import MenuLateraladm from './MenuLateraladm.vue';
export default {
components:{
    NavAdmin,
    MenuLateraladm
}
}
</script>

<style>

</style>