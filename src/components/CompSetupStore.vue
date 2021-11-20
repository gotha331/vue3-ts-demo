<template>
  <!-- 标题 -->
  <h1 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h1>

  <div>{{ counter }}</div>
  <div>{{ doubleCounter }}</div>
  <button @click="$store.commit('add')">增加一个数</button>

  <!-- 新增待办 -->
  <!-- <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))" /> -->
  <!-- 待办事项列表 -->
  <div v-for="item in todos" :key="item.id">{{ item.name }}</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { PropType } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'

// 定义属性
defineProps({
  titleInfo: {
    // 泛型
    type: Object as PropType<TitleInfo>,
    required: true
  }
})

const store = useStore(key)
const counter = computed(() => store.state.counter)
const doubleCounter = computed(() => counter.value * 2)

// const items = ref([] as Todo[])
// items.value.push({
//   id: 1,
//   name: 'vue3',
//   completed: false
// })
const todos = computed(() => store.state.todos?.todos)
let todoName = ref('')


const newTodo = (todoName: string): Todo => {
  return {
    id: todos.value!.length + 1,
    name: todoName,
    completed: false
  }
}

const addTodo = (todo: Todo): void => {
  todos.value!.push(todo)
  todoName.value = ''
}

</script>

<style lang="scss" scoped>
</style>
