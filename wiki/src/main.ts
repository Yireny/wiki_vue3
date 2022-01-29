import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import router from './router/router'
import { createPinia } from 'pinia'

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')


