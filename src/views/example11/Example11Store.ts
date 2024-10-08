import type { Course, User } from '@/type'
import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'

export const useExample11Store = createGlobalState(() => {
  // example11-1
  const coursesS = ref<Course[]>([])
  const userS = ref<User>({ name: 'Zz', address: '1304', level: 1 })

  return {
    coursesS,
    userS
  }
})
