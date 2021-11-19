import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import todos, { TodoState } from './modules/todos'

// 1.创建一个 injectionkey
export const key: InjectionKey<Store<State>> = Symbol()

export type State = {
  counter: number,
  todos?: TodoState
}

export default createStore({
  state: {
    counter: 6
  },
  mutations: {
    add(state) {
      state.counter++
    }
  },
  modules: {
    todos
  }
})