<template>
  <div>
    <input type="text" v-model="todoName" @keydown.enter="addTodo" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'
import { key } from '../store'

const store = useStore(key)
const router = useRouter()

let todoName = ref('')

const addTodo = (): void => {
  store.dispatch("todos/addTodo", todoName.value)
  todoName.value = ''

  // 跳转回列表页
  router.push('/')
}

</script>

<style lang="scss" scoped>
</style>
