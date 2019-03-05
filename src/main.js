import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import store from "./store";
import router from "./router";

Vue.use(VueRouter);

new Vue({
  el: "#app",
  template: "<App />",
  router,
  store,
  components: { App }
});
