import { Module } from "vuex";
import http from "../../utils/request";
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
      http.get<Todo>('/todos/1').then(res => {
        console.log(res);
        commit("addTodo", res.data)
      })

      // setTimeout(() => {
      //   commit("initTodo", [{
      //     id: 1,
      //     name: 'hello vue3 TS',
      //     completed: false
      //   }])
      // }, 500);
    },
    addTodo({ commit, state }, payload: string) {
      commit("addTodo", {
        id: state.todos.length + 1,
        title: payload,
        completed: false
      } as Todo)
    }
  }
} as Module<TodoState, State>