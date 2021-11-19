import { Module } from "vuex";
import { State } from '../index'

const initialState = {
  todos: [] as Todo[]
}

export type TodoState = typeof initialState

export default {
  namespaced: true,
  state: initialState,
  mutations: {
    initTodo(state, payload: Todo[]) {
      state.todos = payload
    },
    addTodo(state, payload: Todo) {
      state.todos.push(payload)
    }
  },
  actions: {
    initTodo({ commit }) {
      setTimeout(() => {
        commit("initTodo", [{
          id: 1,
          name: 'hello vue3 TS',
          completed: false
        }])

      }, 500);
    }
  }
} as Module<TodoState, State>