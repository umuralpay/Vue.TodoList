<template>
  <form class="row d-block">
    <div class="form-group col-md-12 clearfix">
      <div class="float-left col-lg-7 col-md-5">
        <input
          type="text"
          class="form-control"
          v-model="todoName"
          placeholder="Add New Todo"
        />
      </div>
      <div class="float-left col-lg-3 col-md-4">
        <add-todo-category v-model="selectedCategory"></add-todo-category>
      </div>
      <div class="float-left col-lg-2 col-md-3">
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
      let id = this.$store.getters.getNextTodoId;
      this.$store.dispatch("addTodo", {
        id: id,
        name: this.todoName,
        status: "todo",
        category: this.selectedCategory.name
      });
      this.todoName = "";
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
