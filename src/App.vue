<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarView from './views/SidebarView.vue'

SidebarView
</script>

<template>
  <SidebarView id="sidebar" />
  <div id="main">
    <RouterView />
  </div>
</template>
<style>
html,
body,
#app {
  display: flex;
  margin: 0;
  padding: 0px;
  height: 100%;
}
#sidebar {
  width: 470px;
  background-color: #f4f4f4;
}
#main {
  flex: 1;
  padding: 10px;
}
</style>
