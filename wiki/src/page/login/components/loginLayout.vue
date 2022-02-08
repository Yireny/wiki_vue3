<template>
  <div class="login-layout">
    <Login/>
    <Register/>
  </div>
</template>

<script setup lang="ts">
import Login from './userLogin.vue'
import Register from './userRegister.vue'

</script>

<style lang="scss" scoped>
.login-layout{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100vh - 70px);
  min-height: 600px;
  perspective: 800px;
}
</style>