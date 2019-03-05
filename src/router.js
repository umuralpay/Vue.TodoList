import Home from "./components/Home.vue";
import Todo from "./components/Todo.vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/todo/:id", component: Todo }
];

const router = new VueRouter({
  routes
});

export default router;
