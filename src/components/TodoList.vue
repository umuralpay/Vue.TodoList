<template>
  <div class="todo-list-wrapper col-md-12">
    <todo-list-filter></todo-list-filter>
    <div class="list-group">
      <a
        href="#"
        v-for="(todo, index) in todos"
        v-bind:key="index"
        class="list-group-item list-group-item-action"
      >
        {{ todo.name }}
      </a>
    </div>
  </div>
</template>

<script>
import TodoListFilter from "./TodoListFilter.vue";
export default {
  name: "todo-list",
  data: function() {
    return {
      todos: [
        {
          id: 1,
          name: "Todo 1"
        },
        {
          id: 2,
          name: "Todo 2"
        },
        {
          id: 3,
          name: "Todo 3"
        },
        {
          id: 4,
          name: "Todo 4"
        }
      ]
    };
  },
  components: {
    TodoListFilter
  }
};
</script>

<style scoped>
.list-group {
  margin-top: 30px;
}
</style>
