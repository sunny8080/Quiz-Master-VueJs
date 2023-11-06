<template >
  <div class="w-full h-[2.5rem] bg-richblue-900 text-white my-auto flex flex-col justify-center">
    <div class="flex justify-between items-center mx-5">
      <router-link to="/"><img class="h-[2.2rem]" :src="logo" alt="" /></router-link>
      <router-link class="hidden md:block" to="/"><img class="h-[2.2rem]" :src="logo" alt="" /></router-link>
      <router-link class="hidden md:block" to="/"><img class="h-[2.2rem]" :src="logo" alt="" /></router-link>
      <router-link to="/"><img class="h-[2.2rem]" :src="logo" alt="" /></router-link>
    </div>
  </div>
</template>
<script>
import logo from '../../assets/logo.png';

export default {
  data() {
    return {
      logo: logo,
    };
  },
};
</script>
<style lang=""></style>

QuizMaster
