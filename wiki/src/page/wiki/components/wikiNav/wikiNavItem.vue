<template>
  <div class="wiki-nav-item">
    {{navItem.title}}
  </div>
</template>

<script setup lang='ts'>

const props = defineProps({
  navItem:{
    type:Object,
    default:{}
  }
})


</script>

<style lang="scss" scoped>
.wiki-nav-item{
  width: 150px;
  padding: 10px 0;
  border-radius: 10px;
  background-color:rgba(255, 255, 255, 0.08);
  box-shadow: 0px 5px 16px rgba(9, 33, 58, 0.08);
  font-size: 15px;
  text-align: center;
  color: #999;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  transition: transform .1s;
  font-weight: 600;
  &:hover{
    transform: scale(1.05);
    background-color:rgba(255, 255, 255, 0.2);
    box-shadow: 0px 5px 16px rgba(9, 33, 58, 0.16);
  }
  &--active{
    transform: scale(1.1) !important;
    background-color:rgba(255, 255, 255, 0.2) ;
    box-shadow: 0px 5px 16px rgba(9, 33, 58, 0.16);
  }
}
</style>