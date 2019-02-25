<template>
  <div class="todo-list-filter-wrapper clearfix">
    <div class="todo-list-categories col-sm-12 col-md-6 float-left">
      <button
        class="btn"
        v-for="(cat, index) in categories"
        v-bind:key="index"
        v-on:click="cat.isActive = !cat.isActive;"
        v-bind:class="{
          'btn-primary': cat.isActive,
          'btn-light': !cat.isActive
        }"
      >
        {{ cat.name }}
      </button>
    </div>
    <div class="todo-list-filters col-sm-12 col-md-6 float-right text-right">
      <button
        class="btn"
        v-on:click="filter.isActive = !filter.isActive;"
        v-bind:class="{
          'btn-primary': filter.isActive,
          'btn-light': !filter.isActive
        }"
        v-for="(filter, index) in filters"
        v-bind:key="index"
      >
        {{ filter.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-list-filter",
  data: function() {
    return {
      categories: [
        { id: 1, name: "cat1", isActive: true },
        { id: 2, name: "cat2", isActive: true },
        { id: 3, name: "cat3", isActive: true },
        { id: 4, name: "cat4", isActive: true }
      ],
      filters: [
        { id: 1, name: "To Do", isActive: true },
        { id: 2, name: "Done", isActive: false },
        { id: 3, name: "Removed", isActive: false }
      ]
    };
  },
  methods: {
    applyFilter: function(e) {}
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
