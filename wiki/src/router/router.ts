import { createRouter , createWebHistory , RouteRecordRaw } from "vue-router";

const Home = ()=> import('../page/home/home.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/', name:'default' , component: Home},
  { path: '/home' , name: 'home' , component: Home}
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router