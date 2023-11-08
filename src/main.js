import { createApp } from "vue"
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css"
import './assets/styles.css'
import store from "./vuex/store.";

// ===================================== Font Awesome Setup start =====================================

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faThumbsUp, faArrowRotateRight, faChevronLeft, faChevronRight, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faThumbsUp, faArrowRotateRight, faChevronLeft, faAngleRight, faAngleLeft)

// ===================================== Font Awesome Setup end =====================================



const app = createApp(App)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount("#app");
