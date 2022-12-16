<template>
  <div>
<NavLanding/>
<RouterView/>
<FooterLanding/>
  </div>
</template>

<script>
import NavLanding from './NavLanding.vue';
import FooterLanding from './FooterLanding.vue';
export default {
components:{
    NavLanding,
    FooterLanding
}
}
</script>

<style>

</style>