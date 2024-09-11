<script setup lang="ts">
import type { Course } from '@/type'
import { reactive, shallowRef, watch } from 'vue'
const course: Course = { id: 10, name: 'Java' }
const courseX: Course = { id: 10, name: 'Vue' }
const courseR = shallowRef<Course>(course)
let courseR2 = reactive(course)
console.log(courseR)
console.log(courseR2)
// 更新shallowRef中响应式对象的引用，响应式
const getCourseF = () => {
  courseR.value = courseX
}
// 更新shallowRef中响应式对象的属性值，非响应式
const updateCourseF = () => {
  courseR2.name = 'web'
}
watch(courseR, () => alert(`watch1被激活。用户对象改变`))
watch(
  () => courseR2.name,
  () => {
    alert('watch2被激活。用户对象的name属性改变')
  }
)
</script>
<template>
  <div>
    <h1>shallowRef()</h1>
    <p>
      shallowRef()函数属于`浅`响应式。即，更新响应式对象的引用时为响应式，而更新对象属性值则不会响应式更新。
      <br />
      shallowRef()，不会为封装的对象创建代理对象，因此其属性的更新为非响应式。
      <br />
      shallowRef()创建的响应式对象更轻量，适合渲染大量`静态`数据。例如后端返回的仅用于渲染而非修改的数据
    </p>
    <button @click="getCourseF">更新shallowRef中响应式对象的引用，响应式</button>
    <br />
    <button @click="updateCourseF">更新shallowRef中响应式对象的属性值，非响应式</button>
    <br />
    {{ courseR?.name }}
    <hr />
    {{ courseR2?.name }}
    <br />
  </div>
</template>
