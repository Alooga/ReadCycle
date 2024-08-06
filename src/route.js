import Home from "./views/Home.vue";
import OfferBooks from "./views/OfferBooks.vue";
import BookView from './views/BookView.vue';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/book/:id", name: 'BookView', component: BookView, props: true },
    { path: "/offer-book", name: "offerBooks", component: OfferBooks },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router
  