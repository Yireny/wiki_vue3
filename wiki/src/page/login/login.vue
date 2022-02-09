<template>
  <div class="login-layout">
    <div class="login-layout__wrapper" :class="{'flip':isRotate}">
      <Login/>
      <Register/>
    </div>
    <BtnSwitch @change='change'/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Login from './components/userLogin.vue'
import Register from './components/userRegister.vue'
import BtnSwitch from './components/btnSwitch.vue'

let isRotate  = ref(false)

const change = ()=>{
  isRotate.value = !isRotate.value
}
</script>

<style lang="scss" scoped>
.login-layout{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100vh - 70px);
  min-height: 600px;
  perspective: 800px;
  &__wrapper{
    position: relative;
    width: 400px;
    height: 400px;
    transition: all 1.5s ease;
    transform-style: preserve-3d;
  }
}
.flip{
  transform: rotateY(180deg);
}
</style>