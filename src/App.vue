<template>
  <div id="app" class="container">
    <nav class="navbar navbar-light bg-light clearfix">
      <img
        src="https://vuejs.org/images/logo.png"
        width="54"
        height="54"
        class="d-inline-block align-top float-left"
        alt=""
      />
      <h3 class="header float-left">Vue.js Todo App</h3>
    </nav>
    <div class="navbar-brand col-md-12">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">List</router-link></li>
        <li class="breadcrumb-item">{{ breadcrumb }}</li>
      </ol>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Todo from "./components/Todo.vue";
export default {
  name: "app",
  data: function() {
    return {
      breadcrumb: this.$route.params.id
    };
  },
  components: {
    Home,
    Todo
  },
  mounted() {
    this.$store.dispatch("getTodos");
  },
  watch: {
    $route(to, from) {
      this.breadcrumb = this.$route.params.id;
    }
  }
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
}
.header {
  margin-bottom: 0px;
  margin-left: 20px;
}

.navbar {
  justify-content: flex-start;
}
.breadcrumb {
  margin-bottom: 0;
  background-color: transparent;
}

.navbar-brand {
  margin: 0;
  padding: 0;
}
</style>
