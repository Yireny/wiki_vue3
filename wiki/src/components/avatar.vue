<template>
  <div class="avatar">
    <img src="../assets/images/默认头像.png" alt="">
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.avatar{
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 100%;
  cursor: pointer;
  & img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
}
</style>