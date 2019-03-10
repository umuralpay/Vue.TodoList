import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
    categories: [
      { id: 1, name: 'cat1', isActive: false },
      { id: 2, name: 'cat2', isActive: false },
      { id: 3, name: 'cat3', isActive: false },
      { id: 4, name: 'cat4', isActive: false }
    ],
    filters: [
      { id: 1, name: 'todo', isActive: false },
      { id: 2, name: 'done', isActive: false },
      { id: 3, name: 'removed', isActive: false }
    ],
    visibleTodos: []
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    },
    setFilter(state, payload) {
      let type = state[payload[1]];
      let item = payload[0];
      let index = type.findIndex(x => x.name === item);
      type[index].isActive = !type[index].isActive;
    },
    setTodos(state, payload) {
      state.todos = payload;
      state.visibleTodos = payload;
    },
    filterTodos(state) {
      let activeFilters = state.filters.filter(i => i.isActive === true);
      let activeCategories = state.categories.filter(i => i.isActive === true);
      let remainingTodoList = state.todos;
      if (activeCategories.length) {
        let temp = remainingTodoList.filter(todo => {
          if (activeCategories.find(x => x.name === todo.category)) {
            return true;
          }
          return false;
        });
        remainingTodoList = temp;
      }

      if (activeFilters.length) {
        let temp = remainingTodoList.filter(todo => {
          if (activeFilters.find(x => x.name === todo.status)) {
            return true;
          }
          return false;
        });

        remainingTodoList = temp;
      }
      state.visibleTodos = remainingTodoList;
    }
  },
  actions: {
    addTodo(context, payload) {
      context.commit('addTodo', payload);
      context.commit('filterTodos');
    },
    getTodos({ commit }) {
      axios.get('https://www.mocky.io/v2/5c7e2ea5310000770037613e').then(r => {
        commit('setTodos', r.data);
      });
    },
    setFilter(context, payload) {
      context.commit('setFilter', payload);
      context.commit('filterTodos');
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
    },
    getCategories: state => {
      return state.categories;
    },
    getFilters: state => {
      return state.filters;
    }
  }
});

export default store;
