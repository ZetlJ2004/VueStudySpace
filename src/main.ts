import { createAlertDialog } from '@/components/message'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'
import('@/mock/index')

const app = createApp(App)

app.use(router)

app.mount('#app')

app.config.errorHandler = (err) => {
  const message = err as string
  console.error(message)
  createAlertDialog(message)
}
