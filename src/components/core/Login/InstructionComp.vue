<template>
  <div class="mt-5 mb-10">
    <h1 class="text-richblue-25 font-semibold text-xl">Instructions :</h1>

    <div class="ml-2">
      <ul>
        <li v-for="(ins, ind) in instructions" :key="ind" class="text-richblue-50 text-sm leading-6">
          <span>{{ ind + 1 }}. </span>
          <span>{{ ins }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      instructions: ['Ensure stable internet connectivity during assessment', "Don't refresh the tab during your assessment", "We are monitoring everything, so don't switch browser tabs or window", 'Ensure all notifications are blocked during assessment period', 'Make sure to sit in a well lit room'],
    };
  },
};
</script>
<style></style>
