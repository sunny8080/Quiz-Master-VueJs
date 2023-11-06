import { createApp } from "vue"
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css"
import './assets/styles.css'

// ================================ Font Awesome Setup start ================================

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faThumbsUp, faArrowRotateRight, faChevronLeft, faChevronRight, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

import './assets/tailwind.css'
import { createStore } from "vuex";

/* add icons to the library */
library.add(faUserSecret, faThumbsUp, faArrowRotateRight, faChevronLeft, faAngleRight, faAngleLeft)

// ================================ Font Awesome Setup end ================================

// ================================ Vuex Store Setup start ================================
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
      isPassed: false
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
    }
  },
  getters: {
  },
  actions: {
  }
})
// ================================ Vuex Store Setup end ================================



const app = createApp(App)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount("#app");
