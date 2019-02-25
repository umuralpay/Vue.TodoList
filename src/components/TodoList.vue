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
        <span
          class="badge float-right"
          v-bind:class="{
            'badge-warning': todo.status === 'todo',
            'badge-danger': todo.status === 'removed',
            'badge-success': todo.status === 'done'
          }"
          >{{ todo.status }}</span
        >
        <span class="badge badge-primary float-right">{{ todo.category }}</span>
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
          name: "Todo 1",
          status: "todo",
          category: "cat1"
        },
        {
          id: 2,
          name: "Todo 2",
          status: "todo",
          category: "cat1"
        },
        {
          id: 3,
          name: "Todo 3",
          status: "todo",
          category: "cat2"
        },
        {
          id: 4,
          name: "Todo 4",
          status: "todo",
          category: "cat2"
        },
        {
          id: 5,
          name: "Todo Done",
          status: "done",
          category: "cat3"
        },
        {
          id: 6,
          name: "Todo Removed",
          status: "removed",
          category: "cat4"
        }
      ]
    };
  },
  components: {
    TodoListFilter
  },
  mounted() {
    this.$root.$on("todoAdded", todo => {
      this.todos.push({
        id: this.todos.length + 1,
        name: todo.name,
        status: "todo",
        category: todo.selectedCategory.name
      });
    });
  }
};
</script>

<style scoped>
.list-group {
  margin-top: 30px;
}
.badge {
  margin-right: 5px;
}
</style>
