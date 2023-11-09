import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      auth: {
        user: "Unknown",
        empId: "Unknown",
        token: '1'
      },
      ques: [],
      currentQue: 0,
      correctAns: 0,
      score: 0,
      isPassed: false,
      mcqInd: 0
    }
  },

  mutations: {
    setUser(state, payload) {
      state.auth = payload.value
    },
    setQuestions(state, payload) {
      state.ques = payload.value
    },
    setCurrentQue(state, payload) {
      state.currentQue = payload.value
    },
    goToNextQuestion(state) {
      if (state.currentQue !== state.ques.length - 1) {
        state.currentQue++;
      }
    },
    goToPreviousQuestion(state) {
      if (state.currentQue !== 0) {
        state.currentQue--;
      }
    },
    prevQuestion(state, selected, correct) {
      this.ques[this.currentQue]["studSelected"] = selected;
      if (this.currentQue !== 0) {
        this.currentQue--;
      }
    },
    setCorrectAns(state, payload) {
      state.correctAns = payload.value
    },
    setScore(state, payload) {
      state.score = payload.value
    },
    setIsPassed(state, payload) {
      state.isPassed = payload.value
    },
    setMCQInd(state, payload) {
      state.mcqInd = payload.value
    }
  },
  getters: {
  },
  actions: {
  }
})

export default store
