<script setup lang="ts">
import { ref } from 'vue'

interface ShortDate {
  wDate: boolean
  eDate: boolean
}
const wDates = [1, 2, 3, 4, 5]
const eDates = [6, 7]
//
const dayCheckR = ref<ShortDate>({ wDate: false, eDate: false })
const datesR = ref<number[]>([])
// 当快捷选择
const changeShortDateW = () => {
  // 先保留当前已选中的日期
  const newDates = [...datesR.value]

  // 如果选中了工作日快捷选择，检查并添加所有工作日
  if (dayCheckR.value.wDate) {
    wDates.forEach((date) => {
      if (!newDates.includes(date)) {
        newDates.push(date) // 只有不在 newDates 中时才添加
      }
    })
  } else {
    // 如果取消了工作日快捷选择，移除所有工作日
    wDates.forEach((date) => {
      const index = newDates.indexOf(date)
      if (index !== -1) {
        newDates.splice(index, 1)
      }
    })
  }
  datesR.value = newDates
}
const changeShortDateE = () => {
  const newDates = [...datesR.value]
  // 如果选中了周末快捷选择，检查并添加所有周末
  if (dayCheckR.value.eDate) {
    eDates.forEach((date) => {
      if (!newDates.includes(date)) {
        newDates.push(date) // 只有不在 newDates 中时才添加
      }
    })
  } else {
    // 如果取消了周末快捷选择，移除所有周末
    eDates.forEach((date) => {
      const index = newDates.indexOf(date)
      if (index !== -1) {
        newDates.splice(index, 1)
      }
    })
  }

  // 更新 datesR
  datesR.value = newDates
}

// 当单独选择
const changeDateF = () => {
  dayCheckR.value.wDate = wDates.every((date) => datesR.value.includes(date))
  dayCheckR.value.eDate = eDates.every((date) => datesR.value.includes(date))
}
</script>
<template>
  <div>
    <h1>Homework - Checkbox双向互交绑定</h1>
    <p>
      快捷选择，与单独选择联动，快捷选择优先级高于单独选择。
      <br />
      使用watch监听会形成死循环，且checkbox只能绑定单值，无法从数组中解构元素。只能执行函数，在函数中比较判断实现。
      <br />
      checkbox触发顺序：click - v-model - change。因此监听click事件无法获取值，必须监听change事件。
    </p>
    <p>
      <label>
        <input type="checkbox" v-model="dayCheckR.wDate" @change="changeShortDateW" />
        工作日 |
      </label>
      <label>
        <input type="checkbox" v-model="dayCheckR.eDate" @change="changeShortDateE" />
        周末
      </label>
    </p>
    <template v-for="n of 7" :key="n">
      <label>
        <input type="checkbox" :value="n" v-model="datesR" @change="changeDateF" />
        星期 {{ n }} |
      </label>
    </template>
  </div>
</template>
