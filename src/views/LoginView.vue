<template>
  <div class="flex gap-0 min-h-[calc(100vh-2.5rem)] bg-richblue-700">
    <div
      class="hidden md:w-[40%] md:grid place-items-center text-richblack-25 text-3xl font-semibold border-r border-richblack-50"
    >
      <h1 class="text-richblue-50">QuizMaster</h1>
    </div>

    <div class="w-full md:w-[60%] text-richblue-25">
      <div class="mx-10 my-5">
        <h1 class="font-bold text-xl text-center">Welcome to QuizMaster</h1>

        <InstructionCompVue />

        <form @submit.prevent="handleProceed" class="flex flex-col gap-y-10">
          <div class="flex flex-col">
            <label for="empId" class="mb-2 text-sm text-richblue-5"
              >Enter your Employee id <span class="text-pink-200">*</span>
            </label>
            <input
              type="number"
              required
              id="empId"
              placeholder="Employee id"
              v-model="empId"
              class="w-full rounded-md py-2 px-3 bg-richblue-100 text-richblue-700 placeholder:text-richblue-400 focus:outline-none shadow-[0_2px_0_0] shadow-white/70"
            />
          </div>

          <div class="flex flex-col">
            <label for="name" class="mb-2 text-sm text-richblue-5"
              >Enter your Name <span class="text-pink-200">*</span></label
            >
            <input
              type="text"
              required
              id="name"
              placeholder="Employee Name"
              v-model="name"
              class="w-full rounded-md py-2 px-3 bg-richblue-100 text-richblue-700 placeholder:text-richblue-400 focus:outline-none shadow-[0_2px_0_0] shadow-white/70"
            />
          </div>

          <div class="flex flex-col">
            <label for="mcqInd" class="mb-2 text-sm text-richblue-5"
              >Select MCQ Assessment <span class="text-pink-200">*</span></label
            >
            <select
              v-if="testMcqOptions.length !== 0"
              class="w-full rounded-md py-2 px-3 bg-richblue-100 text-richblue-700 placeholder:text-richblue-400 focus:outline-none shadow-[0_2px_0_0] shadow-white/70 cursor-pointer"
              name="mcqInd"
              id="mcqInd"
              v-model="mcqInd"
              required
            >
              <option
                disabled
                class="bg-richblue-200 text-richblue-500 font-medium tracking-wider cursor-pointer"
                value=""
              >
                Please select one
              </option>

              <option
                v-for="(mcqOption, ind) in testMcqOptions"
                class="bg-richblue-200 text-richblue-800 font-medium tracking-wider cursor-pointer"
                :key="ind"
                :value="ind"
              >
                {{ mcqOption.title }}
              </option>
            </select>
          </div>

          <button
            class="ml-auto mr-2 bg-richblue-200 text-richblue-500 hover:bg-richblue-300 hover:text-richblue-800 w-fit py-3 px-5 rounded-lg font-semibold hover:scale-95 transition-all duration-300"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import InstructionCompVue from "../components/core/Login/InstructionComp.vue";
import { login } from "@/services/operations";
import testMcqOptions from "../data/testMcqOptions";

export default {
  data: () => {
    return {
      empId: "",
      name: "",
      mcqInd: 0,
      testMcqOptions: [],
    };
  },
  components: {
    InstructionCompVue,
  },
  methods: {
    async handleProceed() {
      const res = await login(this.empId, this.name);
      if (res) {
        this.$store.commit("setUser", { value: res });
      }
      this.$store.commit("setCurrentQue", { value: 0 });
      this.$store.commit("setMCQInd", { value: this.mcqInd });
      this.$router.push("/problems");
    },
  },
  mounted() {
    this.testMcqOptions = testMcqOptions;
  },
};
</script>
<style></style>
