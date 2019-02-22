<template>
  <div class="todo-list-filter-wrapper clearfix">
    <div class="todo-list-categories col-md-6 float-left">
      <button
        class="btn btn-light"
        v-for="(cat, index) in categories"
        v-bind:key="index"
      >
        {{ cat.name }}
      </button>
    </div>
    <div class="todo-list-filters col-md-6 float-right text-right">
      <button class="btn btn-light">Active</button>
      <button class="btn btn-light">Done</button>
      <button class="btn btn-light">Removed</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-list-filter",
  data: function() {
    return {
      categories: [
        { id: 1, name: "cat1" },
        { id: 2, name: "cat2" },
        { id: 3, name: "cat3" },
        { id: 4, name: "cat4" }
      ]
    };
  }
};
</script>

<style scoped>
.todo-list-filter-wrapper {
  margin-top: 20px;
}
button {
  margin-right: 5px;
}
</style>
