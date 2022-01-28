<template>
<header class="header">
  <span class="icon"></span>
  <nav class="nav">
    <span
    class="nav__item"
    :class="{'nav__item--active':isActive === item.id}"
    v-for="item in nav"
    :key="item.id"
    @click="navClick(item.id)"
    >
    {{item.name}}
    </span>
  </nav>
  <span class="avatar"></span>
</header>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'

interface Nav{
  name:String,
  id:number
}
let nav:Nav[]
let isActive = ref(1)


nav = reactive([{name:'首页',id:1},
                {name:'百科',id:2},
                {name:'攻略',id:3},
                {name:'社区',id:4}])

function navClick(index:number):void{
  isActive.value = index
}

</script>

<style lang="scss" scoped>
.header{
  width: 1000px;
  height: 60px;
  line-height: 60px;
  padding: 0 calc((100% - 1000px)/2);
  background-color: #00c3ff;
  user-select: none;
  .icon{
    display: inline-block;
    width: 200px;
  }
  .nav{
    display: inline-flex;
    width: 300px;
    &__item{
      flex: 1;
      font-weight: bold;
      color: #fff;
      text-align: center;
      cursor: pointer;
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