<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Comp from "./components/Comp.vue"
import CompSetup from "./components/CompSetup.vue"
import CompStore from "./components/CompStore.vue"
import CompSetupStore from "./components/CompSetupStore.vue"
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Comp :title-info="{ value: '待办事项', color: 'green' }"></Comp>
  <CompSetup :title-info="{ value: '待办事项setup', color: 'pink' }"></CompSetup>
  <CompStore :title-info="{ value: '待办事项store', color: 'yellow' }"></CompStore>
  <CompSetupStore :title-info="{ value: '待办事项SetupStore', color: 'blue' }"></CompSetupStore>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
