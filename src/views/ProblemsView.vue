<template>
  <div class="min-h-[calc(100vh-2.5rem)] bg-richblue-700 text-richblue-5">
    <div v-if="loading" class="h-[calc(100vh-5rem)]"><SpinnerComp /></div>

    <div v-if="!loading && this.$store.state.ques.length === 0">
      <p class="text-xl font-semibold text-center text-pink-400 mt-10">
        No problem found
      </p>
    </div>

    <div v-if="!loading && this.$store.state.ques.length !== 0" class="mx-5">
      <ProblemCard
        :que="this.$store.state.ques[this.$store.state.currentQue]"
        :studSelected="
          this.$store.state.ques[this.$store.state.currentQue]['studSelected']
        "
        :submitAndPreviousQuestion="submitAndPreviousQuestion"
        :submitAndNextQuestion="submitAndNextQuestion"
        :submitTest="submitTest"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, watch, watchEffect } from "vue";
import SpinnerComp from "../components/common/SpinnerComp.vue";
import ProblemCard from "../components/core/Problems/ProblemCard.vue";
import { fetchQuestions } from "../services/operations";

export default {
  data: () => {
    return {
      loading: true,
    };
  },
  methods: {
    async loadQuestions() {
      this.loading = true;
      const res = await fetchQuestions.bind(this)();

      if (res) {
        this.$store.commit("setQuestions", { value: res });
      }
      this.loading = false;
    },
    submitAndNextQuestion(selected) {
      this.$store.state.ques[this.$store.state.currentQue]["studSelected"] =
        selected;
      this.$store.commit("goToNextQuestion");
    },
    submitAndPreviousQuestion(selected) {
      this.$store.state.ques[this.$store.state.currentQue]["studSelected"] =
        selected;
      this.$store.commit("goToPreviousQuestion");
    },
    submitTest(selected) {
      this.$store.state.ques[this.$store.state.currentQue]["studSelected"] =
        selected;

      let correctAns = 0;
      for (let que of this.ques) {
        if (
          que["G"] &&
          que["studSelected"] &&
          que["G"] === que["studSelected"]
        ) {
          correctAns++;
        }
      }

      this.$store.commit("setCorrectAns", { value: correctAns });
      this.$store.commit("setScore", { value: correctAns });
      this.$store.commit("setIsPassed", {
        value: correctAns >= Math.floor(0.8 * this.ques.length),
      });
      this.$router.push("/score");
    },
  },
  components: {
    ProblemCard,
    SpinnerComp,
  },
  mounted() {
    this.loadQuestions();
  },
  computed: {
    ques() {
      return this.$store.state.ques;
    },
  },
};
</script>
<style lang=""></style>
