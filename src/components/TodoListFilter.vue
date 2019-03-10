<template>
  <div class="todo-list-filter-wrapper clearfix">
    <div class="todo-list-categories col-sm-12 col-md-6 float-left">
      <button
        class="btn"
        v-for="(cat, index) in categories"
        v-bind:key="index"
        v-on:click="applyFilter(cat, 'categories');"
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
        v-on:click="applyFilter(filter, 'filters');"
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
  name: 'todo-list-filter',
  computed: {
    filters() {
      return this.$store.getters.getFilters;
    },
    categories() {
      return this.$store.getters.getCategories;
    }
  },
  methods: {
    applyFilter: function(el, type) {
      this.$store.dispatch('setFilter', [el.name, type]);
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
