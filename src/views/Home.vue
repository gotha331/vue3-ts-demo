<template>
  <div>
    <h1>Home page</h1>
    <!-- <Comp :title-info="{ value: '待办事项', color: 'green' }"></Comp>
    <CompSetup :title-info="{ value: '待办事项setup', color: 'pink' }"></CompSetup>
    <CompStore :title-info="{ value: '待办事项store', color: 'yellow' }"></CompStore> -->
    <CompSetupStore :title-info="{ value: '待办事项SetupStore', color: 'blue' }"></CompSetupStore>
  </div>
</template>

<script setup lang="ts">
// import Comp from "comps/Comp.vue"
// import CompSetup from "comps/CompSetup.vue"
// import CompStore from "comps/CompStore.vue"
import CompSetupStore from "comps/CompSetupStore.vue"

</script>

<style lang="scss" scoped>
</style>
