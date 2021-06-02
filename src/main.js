import { createApp } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Vecancy from "./pages/Vecancy.vue";
import "./assets/style.css";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/vac", component: Vecancy }
];
const route = createRouter({
  history: createWebHistory(),
  routes
});
const app = createApp(App);
app.use(route);
app.mount("#app");
