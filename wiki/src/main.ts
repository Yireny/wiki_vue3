import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import router from './router/router'
import store from './store/index'

createApp(App)
.use(router)
.use(store)
.mount('#app')


