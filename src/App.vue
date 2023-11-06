<template>
  <div class="flex flex-col">
    <NavBar />
    <router-view />
  </div>
</template>
  
<script>
import NavBar from "./components/common/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
</style>
