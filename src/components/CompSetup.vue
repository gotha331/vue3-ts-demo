<template>
  <!-- 标题 -->
  <h1 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h1>

  <div>{{ counter }}</div>
  <div>{{ doubleCounter }}</div>

  <!-- 新增待办 -->

  <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))" />
  <!-- 待办事项列表 -->
  <div v-for="item in items" :key="item.id">{{ item.name }}</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { PropType } from 'vue'

// 属性声明
defineProps({
  titleInfo: {
    // 泛型
    type: Object as PropType<TitleInfo>,
    required: true
  }
})

const counter = ref(1)
const doubleCounter = computed(() => counter.value * 2)
const items = ref([] as Todo[])
items.value.push({
  id: 1,
  name: 'vue3',
  completed: false
})
let todoName = ref('')

const newTodo = (todoName: string): Todo => {
  return {
    id: items.value.length + 1,
    name: todoName,
    completed: false
  }
}

const addTodo = (todo: Todo): void => {
  items.value.push(todo)
  todoName.value = ''
}

</script>

<style lang="scss" scoped>
</style>
