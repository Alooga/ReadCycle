import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import router from "/src/route.js";
import { createPinia } from "pinia";


const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
