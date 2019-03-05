<template>
  <div>
    <add-todo></add-todo>
    <todo-list></todo-list>
  </div>
</template>

<script>
import AddTodo from "./AddTodo.vue";
import TodoList from "./TodoList.vue";
export default {
  name: "home",
  components: {
    AddTodo,
    TodoList
  }
};
</script>

<style></style>
