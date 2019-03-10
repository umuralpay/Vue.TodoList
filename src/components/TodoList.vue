<template>
  <div class="todo-list-wrapper col-md-12">
    <todo-list-filter></todo-list-filter>
    <div class="list-group">
      <router-link
        :to="`/todo/${todo.id}`"
        v-for="(todo, index) in filtered"
        :key="index"
        :name="index"
        class="list-group-item list-group-item-action"
      >
        {{ todo.name }}
        <span
          class="badge float-right"
          :class="{
            'badge-warning': todo.status === 'todo',
            'badge-danger': todo.status === 'removed',
            'badge-success': todo.status === 'done'
          }"
          >{{ todo.status }}</span
        >
        <span class="badge badge-primary float-right">{{ todo.category }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TodoListFilter from './TodoListFilter.vue';

export default {
  name: 'todo-list',
  components: {
    TodoListFilter
  },
  computed: {
    filtered() {
      return this.$store.getters.getTodos;
    }
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
