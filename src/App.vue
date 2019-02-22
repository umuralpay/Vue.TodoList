<template>
  <div id="app" class="container">
    <h1 class="header">Vue.js Todo App</h1>
    <add-todo></add-todo>
    <todo-list></todo-list>
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";
export default {
  name: "app",
  data: function() {
    return {
      selam: ""
    };
  },
  components: {
    AddTodo,
    TodoList
  }
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
}
.header {
  margin-top: 20px;
}
</style>
