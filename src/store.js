import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
    category: [],
    filter: [],
    visibleTodos: []
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    },
    setFilter(state, payload) {
      let type = state[payload[1]];
      let item = payload[0];
      if (type.indexOf(item) > -1) {
        type.splice(type.indexOf(item), 1);
      } else {
        type.push(item);
      }
    },
    setTodos(state, payload) {
      state.todos = payload;
      state.visibleTodos = payload;
    },
    filterTodos(state) {
      let f = state.filter;
      let c = state.category;
      let t = state.todos;
      if (f.length > 0 || c.length > 0) {
        if (c.length) {
          let temp = t.filter(todo => {
            if (c.indexOf(todo.category) > -1) {
              return true;
            }
            return false;
          });
          t = temp;
        }

        if (f.length) {
          let temp = t.filter(todo => {
            if (f.indexOf(todo.status) > -1) {
              return true;
            }
            return false;
          });

          t = temp;
        }
      }

      state.visibleTodos = t;
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
    }
  }
});

export default store;
