import Home from "./views/Home.vue";
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: "/", name: "home", component: Home },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router
  