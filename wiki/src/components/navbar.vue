<template>
<nav class="navbar">
  <span class="logo">
    <img class="logo__img" src="../assets/images/logo.png" alt="">
    <span class="logo__title">Arknights·明日方舟</span>
  </span>
  <ul class="nav">
    <li
    class="nav__item"
    :class="{'nav__item--active':isActive === item.id}"
    v-for="item in nav"
    :key="item.id"
    @click="navClick(item.id,item.path)"
    >
    {{item.name}}
    </li>
  </ul>
</nav>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
import { useRouter } from 'vue-router'

interface Nav{
  id:number,
  name:String,
  path:String
}
let nav:Nav[]
let isActive = ref<number>(1)
const router = useRouter()

nav = reactive([{name:'首页',id:1,path:'/home'},
                {name:'百科',id:2,path:'/wiki'},
                {name:'攻略',id:3,path:'/strategy'},
                {name:'社区',id:4,path:'/community'}])

function navClick(index:number,path:string):void{
  isActive.value = index
  router.push(path)
}

</script>

<style lang="scss" scoped>
.navbar{
  position: sticky;
  top: 0;
  width: 1000px;
  height: 60px;
  line-height: 60px;
  padding: 0 calc((100% - 1000px)/2);
  background-color: #00c3ff;
  color: #fff;
  user-select: none;
  .logo{
    display: inline-block;
    width: 270px;
    height: 100%;
    &__img{
      width: 76px;
      vertical-align: middle;
    }
    &__title{
      position: relative;
      width: 180px;
      margin-left: 10px;
      padding-left: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      &::before{
        position: absolute;
        top: 0;
        left: 0;
        height: 15px;
        border-left: 1px solid rgba(255, 255, 255, .3);
        content: '';
      }
    }
  }
  .nav{
    display: inline-flex;
    width: 300px;
    margin: 0;
    padding: 0;
    &__item{
      flex: 1;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      list-style: none;
      &:hover{
        background-color: rgba(255, 255, 255, .16);
      }
      &--active{
        background-color: rgba(255, 255, 255, .16);
      }
    }
  }
}
</style>