<template>
  <div class="wiki-nav">
    <NavItem
    v-for="item in wikiNav"
    :key="item.id"
    :navItem='item'/>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'

import NavItem from './wikiNavItem.vue'

interface WikiNav{
  id:number,
  title:string
}

let wikiNav:WikiNav[]
wikiNav = reactive([
  {id:1,title:'干员档案'},
  {id:2,title:'敌人档案'},
  {id:3,title:'道具资料'},
  {id:4,title:'时装回廊'},
  {id:5,title:'关卡一览'}
])
</script>

<style lang="scss" scoped>
.wiki-nav{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba($color: #fff, $alpha: .7);
  border-radius: 10px;
}
</style>