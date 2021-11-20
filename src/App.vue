<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <button>
    <router-link to="/">todo</router-link>
  </button>
  <button>
    <router-link to="/add">add</router-link>
  </button>

  <router-view></router-view>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from './store'
const store = useStore(key)


// todos初始化

store.dispatch('todos/initTodo')

</script>

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
