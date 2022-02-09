<template>
  <div class="switch">
    <span class="switch__description">没有/已有账号？</span>
    <button class="switch__btn" @click="$emit('change')">切换</button>
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['change'])
</script>

<style lang="scss" scoped>
.switch{
  width: 400px;
  height: 150px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255,.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__description{
    width: 300px;
    height: 50px;
    color: #999;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    user-select: none;
  }
  &__btn{
    width: 300px;
    height: 50px;
    background-color: rgba($color: #00c3ff, $alpha: .5);
    border-radius: 15px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    user-select: none;
    cursor: pointer;
    border: none;
    outline: none;
    &:hover{
      background-color: rgba($color: #00c3ff, $alpha: .7);
    }
  }
}
</style>