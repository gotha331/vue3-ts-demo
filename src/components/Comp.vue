<template>
  <!-- 标题 -->
  <h1 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h1>

  <div>{{ counter }}</div>
  <div>{{ doubleCounter }}</div>

  <!-- 新增待办 -->
  <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))" />
  <!-- 待办事项列表 -->
  <div v-for="item in items" :key="item.id">{{ item.title }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';


export default defineComponent({
  props: {
    titleInfo: {
      // 泛型
      type: Object as PropType<TitleInfo>,
      required: true
    }
  },
  data() {
    return {
      counter: 666,
      // 断言
      items: [] as Todo[],
      todoName: ""
    }
  },
  created() {
    this.items.push({
      id: 1,
      title: 'vue3 + ts',
      completed: false

    })
  },
  computed: {
    doubleCounter(): number {
      return this.counter * 2
    }
  },
  methods: {
    newTodo(todoName: string): Todo {
      return {
        id: this.items.length + 1,
        title: todoName,
        completed: false
      }
    },

    addTodo(todo: Todo): void {
      this.items.push(todo)
      this.todoName = ''

    }
  }

})

</script>

<style lang="scss" scoped>
</style>
