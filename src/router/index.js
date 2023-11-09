import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ProblemsView from "../views/ProblemsView.vue";
import ScoreView from "../views/ScoreView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/problems",
    name: "Problems",
    component: ProblemsView,
  },
  {
    path: "/score",
    name: "Score",
    component: ScoreView,
  },

];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // const token = localStorage.getItem('token')
  const token = sessionStorage.getItem('token')
  if (token || to.name === 'Login') {
    next();
  } else {
    next({ name: 'Login' })
  }

})



export default router;
