<template>
  <form class="row d-block">
    <div class="form-group col-md-6 clearfix">
      <div class="float-left col-md-5">
        <input type="text" class="form-control" placeholder="Add New Todo" />
      </div>
      <div class="float-left col-md-4">
        <add-todo-category></add-todo-category>
      </div>
      <div class="float-left col-md-3">
        <button class="btn btn-primary">Add New</button>
      </div>
    </div>
  </form>
</template>

<script>
import AddTodoCategory from "./AddTodoCategory.vue";
export default {
  name: "add-todo",
  data: function() {
    return {
      selam: ""
    };
  },
  components: {
    AddTodoCategory
  }
};
</script>

<style scoped>
form {
  margin-top: 50px;
}
</style>
