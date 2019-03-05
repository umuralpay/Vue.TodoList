<template>
  <select
    v-model="selectedCategory"
    class="form-control"
    v-on:change="categoryChanged();"
  >
    <option value="">-- Please Select --</option>
    <option
      v-for="cat in categories"
      v-bind:value="cat.name"
      v-bind:key="cat.id"
      >{{ cat.name }}</option
    >
  </select>
</template>

<script>
export default {
  name: "add-todo-category",
  props: ["value"],
  data: function() {
    return {
      selectedCategory: "",
      categories: [
        { id: 1, name: "cat1", isActive: true },
        { id: 2, name: "cat2", isActive: true },
        { id: 3, name: "cat3", isActive: true },
        { id: 4, name: "cat4", isActive: true }
      ]
    };
  },
  methods: {
    categoryChanged: function() {
      this.$emit("input", { name: this.selectedCategory });
    },
    clearSelection: function() {
      this.selectedCategory = "";
    }
  }
};
</script>

<style scoped></style>
