<template>
  <div>
    <h1>v-if</h1>
    <button @click="changelevel">changelevel</button>
    <p v-if="userRef.level && userRef.level >= 4">此内容仅level >=4 可见</p>
    <p>vue3.0，input组件默认不会被复用了</p>
    <button type="button" v-on:click="changeInput">切换</button>
    <br />
    <template v-if="userNameLoginRef">
      <input placeholder="Enter your username" />
      <br />
      <input type="password" placeholder="Enter your password" />
    </template>
    <template v-else>
      <input placeholder="Enter your KEY" />
    </template>
    <hr />
    <h1>v-show</h1>
    <button type="button" v-on:click="changeClose">切换</button>
    <!-- <button v-on:click="close = !close">切换</button> -->
    <p v-show="closeRef">此内容仅close为true可见</p>
  </div>
</template>
<script lang="ts" setup>
import type { User } from '@/type'
import { ref } from 'vue'
const userRef = ref<User>({ name: 'BO', level: 5 })
const closeRef = ref(true)
const userNameLoginRef = ref(true)
const changeInput = () => {
  userNameLoginRef.value = !userNameLoginRef.value
}
const changeClose = () => {
  closeRef.value = !closeRef.value
}
const changelevel = () => {
  userRef.value.level = 2
}
</script>
