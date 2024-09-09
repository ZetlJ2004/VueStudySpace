<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarView from './views/SidebarView.vue'

SidebarView
</script>

<template>
  <SidebarView id="sidebar" />
  <RouterView />
</template>
<style>
#app {
  display: flex;
}
#sidebar {
  border: 1px solid red;
  min-width: 200px;
}
#main {
  border: 1px solid red;
  flex: 1;
}
</style>
