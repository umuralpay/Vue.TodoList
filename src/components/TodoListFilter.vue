<template>
  <div class="todo-list-filter-wrapper clearfix">
    <div class="todo-list-categories col-sm-12 col-md-6 float-left">
      <button
        class="btn"
        v-for="(cat, index) in categories"
        v-bind:key="index"
        v-on:click="applyFilter($event);"
        v-bind:class="{
          'btn-primary': cat.status === 'active',
          'btn-light': cat.status === 'inactive'
        }"
      >
        {{ cat.name }}
      </button>
    </div>
    <div class="todo-list-filters col-sm-12 col-md-6 float-right text-right">
      <button
        class="btn"
        v-on:click="applyFilter($event);"
        v-bind:class="{
          'btn-primary': filter.status === 'active',
          'btn-light': filter.status === 'inactive'
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
        { id: 1, name: "cat1", status: "active" },
        { id: 2, name: "cat2", status: "active" },
        { id: 3, name: "cat3", status: "active" },
        { id: 4, name: "cat4", status: "active" }
      ],
      filters: [
        { id: 1, name: "To Do", status: "active" },
        { id: 2, name: "Done", status: "inactive" },
        { id: 3, name: "Removed", status: "inactive" }
      ]
    };
  },
  methods: {
    applyFilter: function(e) {
      this.isActive = !this.isActive;
    }
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
