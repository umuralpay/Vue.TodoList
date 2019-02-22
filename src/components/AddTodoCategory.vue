<template>
  <select class="form-control">
    <option v-for="cat in categories">{{ cat }}</option>
  </select>
</template>

<script>
export default {
  name: "add-todo-category",
  data: function() {
    return {
      categories: ["cat1", "cat2", "cat3", "cat4"]
    };
  }
};
</script>

<style scoped></style>
