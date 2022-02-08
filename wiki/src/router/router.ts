import { createRouter , createWebHistory , RouteRecordRaw } from "vue-router";

const Home = ()=> import('../page/home/home.vue')
const Wiki = ()=> import('../page/wiki/wiki.vue')
const Strategy = ()=> import('../page/strategy/strategy.vue')
const Community = ()=> import('../page/community/community.vue')
const Profile = ()=> import('../page/profile/profile.vue')
const Login = ()=> import('../page/login/login.vue')


const routes: Array<RouteRecordRaw> = [
  { path: '/', name:'default' , component: Home},
  { path: '/home' , name: 'home' , component: Home},
  { path: '/wiki' , name: 'wiki' , component: Wiki},
  { path: '/strategy' , name: 'strategy' , component: Strategy},
  { path: '/community' , name: 'community' , component: Community},
  { path: '/profile' , name: 'profile' , component: Profile},
  { path: '/login' , name: 'login' , component: Login}
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router