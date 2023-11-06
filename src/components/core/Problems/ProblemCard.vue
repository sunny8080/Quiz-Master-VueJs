<template>
  <div class="w-full md:w-[80%] max-w-[900px] mx-auto my-5">
    <div>
      <p class="text-lg">
        <span class="font-bold">Q{{ que["A"] }}. </span>
        <span>{{ que["B"] }}</span>
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-7 my-10">
      <div class="flex gap-x-2 items-center cursor-pointer">
        <input
          class="cursor-pointer"
          v-model="selected"
          type="radio"
          id="op1"
          name="selectedAns"
          :value="1"
          :checked="selected == 1"
        />
        <label class="cursor-pointer" for="op1">{{ que["C"] }}</label>
      </div>

      <div class="flex gap-x-2 items-center cursor-pointer">
        <input
          class="cursor-pointer"
          v-model="selected"
          type="radio"
          id="op2"
          name="selectedAns"
          value="2"
          :checked="selected == 2"
        />
        <label class="cursor-pointer" for="op2">{{ que["D"] }}</label>
      </div>

      <div class="flex gap-x-2 items-center cursor-pointer">
        <input
          class="cursor-pointer"
          v-model="selected"
          type="radio"
          id="op3"
          name="selectedAns"
          :value="3"
          :checked="selected == 3"
        />
        <label class="cursor-pointer" for="op3">{{ que["E"] }}</label>
      </div>

      <div class="flex gap-x-2 items-center cursor-pointer">
        <input
          class="cursor-pointer"
          v-model="selected"
          type="radio"
          id="op4"
          name="selectedAns"
          :value="4"
          :checked="selected == 4"
        />
        <label class="cursor-pointer" for="op4">{{ que["F"] }}</label>
      </div>
    </div>

    <div class="flex justify-between mt-20">
      <button
        v-if="this.$store.state.currentQue !== 0"
        @click="submitAndPreviousQuestion(selected, que['G'])"
        class="flex items-center gap-x-2 bg-richblue-200 text-richblue-500 hover:bg-richblue-300 hover:text-richblue-800 py-1 px-5 rounded-lg font-semibold hover:scale-95 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-richblue-300 disabled:text-richblue-50"
        :disabled="selected === '' || selected === undefined"
      >
        <font-awesome-icon :icon="['fas', 'angle-left']" />
        Prev
      </button>

      <button
        v-if="this.$store.state.currentQue !== ques.length - 1"
        @click="submitAndNextQuestion(selected, que['G'])"
        class="flex items-center gap-x-2 ml-auto bg-richblue-200 text-richblue-500 hover:bg-richblue-300 hover:text-richblue-800 py-1 px-5 rounded-lg font-semibold hover:scale-95 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-richblue-300 disabled:text-richblue-50"
        :disabled="selected === '' || selected === undefined"
      >
        Next
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </button>

      <button
        v-if="this.$store.state.currentQue === ques.length - 1"
        @click="submitTest(selected)"
        class="ml-auto bg-caribbeangreen-200 text-richblack-700 hover:bg-caribbeangreen-300 hover:text-richblack-800 py-1 px-5 rounded-lg font-semibold hover:scale-95 transition-all duration-300 disabled:bg-caribbeangreen-700 disabled:text-richblack-25"
        :disabled="selected === '' || selected === undefined"
      >
        Submit
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      selected: "",
    };
  },
  props: [
    "que",
    "studSelected",
    "submitAndPreviousQuestion",
    "submitAndNextQuestion",
    "submitTest",
  ],
  methods: {},
  watch: {
    que() {
      this.selected = this.studSelected;
    },
  },
  computed: {
    ques() {
      return this.$store.state.ques;
    },
  },
};
</script>
<style lang=""></style>
