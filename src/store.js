import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
    filters: [],
    visibleTodos: []
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    },
    setFilter(state, payload) {
      if (state.filters.indexOf(payload) > -1) {
        state.filters.splice(state.filters.indexOf(payload), 1);
      } else {
        state.filters.push(payload);
      }
    },
    setTodos(state, payload) {
      state.todos = payload;
      state.visibleTodos = payload;
    },
    filterTodos(state) {
      state.visibleTodos =
        state.filters.length > 0
          ? state.todos.filter(todo => {
              if (
                state.filters.indexOf(todo.category) > -1 ||
                state.filters.indexOf(todo.status) > -1
              ) {
                return true;
              }
              return false;
            })
          : state.todos;
    }
  },
  actions: {
    addTodo(context, payload) {
      context.commit("addTodo", payload);
      context.commit("filterTodos");
    },
    getTodos({ commit }) {
      axios.get("https://www.mocky.io/v2/5c7e2ea5310000770037613e").then(r => {
        commit("setTodos", r.data);
      });
    },
    setFilter(context, payload) {
      context.commit("setFilter", payload);
      context.commit("filterTodos");
    }
  },
  getters: {
    getTodos: state => {
      return state.visibleTodos;
    },
    getNextTodoId: state => {
      return state.todos.length > 0
        ? state.todos[state.todos.length - 1].id + 1
        : 0;
    }
  }
});

export default store;
