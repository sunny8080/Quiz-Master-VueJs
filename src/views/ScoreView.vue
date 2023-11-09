<template >
  <div class="min-h-[calc(100vh-2.5rem)] bg-richblue-700 text-richblue-5">
    <div class="flex flex-col items-center mt-10 gap-y-10 mx-5">
      <h2 class="font-bold text-richblue-50 text-2xl text-center">
        Thank you for submitting this Assessment !
      </h2>

      <div class="flex flex-col md:flex-row gap-5">
        <div
          class="text-richblue-100 text-lg border p-5 px-7 rounded-lg border-richblue-300"
        >
          <p class="text-center text-xl mb-4 font-semibold text-yellow-50">
            Employee :
          </p>

          <p>
            Emp Name :
            <span class="text-yellow-50">{{
              this.$store.state.auth.user
            }}</span>
          </p>

          <p>
            Emp Id :
            <span class="text-yellow-50">{{
              this.$store.state.auth.empId
            }}</span>
          </p>
        </div>

        <div
          class="text-richblue-100 text-lg border p-5 rounded-lg border-richblue-300"
        >
          <p class="text-center text-xl mb-4 font-semibold text-yellow-50">
            Stats :
          </p>

          <p class="mb-3">
            MCQ Assessment :
            <span class="text-yellow-50">{{
              testMcqOptions[this.$store.state.mcqInd].title
            }}</span>
          </p>

          <p>
            Total no of questions :
            <span class="text-yellow-50">{{ ques.length }}</span>
          </p>
          <p>
            Passing Score :
            <span class="text-yellow-50">{{
              Math.floor(ques.length * 0.8)
            }}</span>
          </p>
          <p class="mt-5">
            Total no of correct answer :
            <span class="text-yellow-50">{{
              this.$store.state.correctAns
            }}</span>
          </p>
          <p>
            Your Score :
            <span class="text-yellow-50">{{ this.$store.state.score }}</span>
          </p>
        </div>
      </div>

      <div>
        <p
          v-if="this.$store.state.isPassed"
          class="text-caribbeangreen-200 font-semibold text-xl text-center"
        >
          Congratulations on completing this assessment 🎉
        </p>
        <p v-else class="text-pink-200 font-semibold text-xl text-center">
          You didn't pass this assessment. Try Again !!
        </p>
      </div>

      <div>
        <router-link to="/">
          <button
            class="flex items-center gap-x-2 py-1 px-7 rounded-[4px] text-xl bg-caribbeangreen-200 text-richblack-800 font-semibold hover:scale-90 hover:bg-caribbeangreen-400 hover:text-richblack-900 transition-all duration-300 border-2 border-pink-100"
          >
            ReTry
            <font-awesome-icon
              class="rotate-[50deg]"
              icon="fa-solid fa-arrow-rotate-right"
            />
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import testMcqOptions from "../data/testMcqOptions";

export default {
  data: () => {
    return {
      testMcqOptions: testMcqOptions,
    };
  },
  computed: {
    ques() {
      return this.$store.state.ques;
    },
  },
};
</script>
<style lang="">
</style>
