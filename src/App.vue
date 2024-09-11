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
html,
body,
#app {
  display: flex;
  margin: 0;
  padding: 0px;
  height: 100%;
}
</style>
