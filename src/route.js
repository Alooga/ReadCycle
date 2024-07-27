import { createWebHistory, createRouter } from 'vue-router'

import Home from "./views/Home.vue";
import User from "./views/CreateUser.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/User", name: "CreateUser", component: User },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router
  