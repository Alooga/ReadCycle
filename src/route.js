import Home from "./views/Home.vue";
import { createWebHistory, createRouter } from 'vue-router'
import BookView from './views/BookView.vue'

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/book/:id", name: 'BookView', component: BookView}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router
  