<template>
  <!-- 标题 -->
  <h1 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h1>

  <div>{{ counter }}</div>

  <!-- 待办事项列表 -->
  <div v-for="item in items" :key="item.id">{{ item.name }}</div>
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
      items: [] as Todo[]
    }
  },
  created() {
    this.items.push({
      id: 1,
      name: 'vue3 + ts',
      completed: false

    })
  }
})

</script>

<style lang="scss" scoped>
</style>
