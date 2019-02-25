<template>
  <form class="row d-block">
    <div class="form-group col-md-12 clearfix">
      <div class="float-left col-md-7">
        <input
          type="text"
          class="form-control"
          v-model="todoName"
          placeholder="Add New Todo"
        />
      </div>
      <div class="float-left col-md-3">
        <add-todo-category v-model="selectedCategory"></add-todo-category>
      </div>
      <div class="float-left col-md-2">
        <button
          class="btn btn-primary btn-block"
          v-on:click.prevent="addTodo();"
        >
          Add New
        </button>
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
      todoName: "",
      selectedCategory: ""
    };
  },
  components: {
    AddTodoCategory
  },
  methods: {
    addTodo: function() {
      this.$root.$emit("todoAdded", {
        name: this.todoName,
        selectedCategory: this.selectedCategory
      });
    }
  }
};
</script>

<style scoped>
form {
  margin-top: 50px;
}
</style>
