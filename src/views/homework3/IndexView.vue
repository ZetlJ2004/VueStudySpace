<script setup lang="ts">
import { ref } from 'vue'
import CourseTableVue from './CourseTableVue.vue'
import { listCourses } from './service'
import type { Course } from './type'
const courses = listCourses()
const selectCourseR = ref<Course>()
</script>
<template>
  <div>
    <h1>Homework - Slot插槽</h1>
    <p>
      选择的课程：
      <span style="color: red; font-weight: bold">{{ selectCourseR?.name }}</span>
    </p>
    <p>
      教师：
      <CourseTableVue :courses="courses">
        <template #title>
          <th>操作</th>
        </template>
        <template #action="row">
          <td><button @click="selectCourseR = row.course">EDIT</button></td>
        </template>
      </CourseTableVue>
    </p>
    <br />
    <hr />
    学生：
    <p>
      <CourseTableVue :courses="courses" />
    </p>
  </div>
</template>
