import Home from "./views/Home.vue";
import OfferBooks from "./views/OfferBooks.vue";
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/OfrecerLibro", name: "offerBooks", component: OfferBooks },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router
  