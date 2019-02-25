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
          v-bind:disabled="!isValid"
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
      formElemsValid: {
        todoName: false,
        selectedCategory: false
      },
      todoName: "",
      selectedCategory: ""
    };
  },
  components: {
    AddTodoCategory
  },
  computed: {
    isValid: function() {
      return (
        this.formElemsValid.todoName && this.formElemsValid.selectedCategory
      );
    }
  },
  methods: {
    checkForm: function() {},
    addTodo: function() {
      this.$root.$emit("todoAdded", {
        name: this.todoName,
        selectedCategory: this.selectedCategory
      });
    }
  },
  watch: {
    todoName: function(n, o) {
      this.formElemsValid.todoName = n === "" ? false : true;
    },
    selectedCategory: function(n, o) {
      this.formElemsValid.selectedCategory = n === undefined ? false : true;
    }
  }
};
</script>

<style scoped>
form {
  margin-top: 50px;
}
</style>
