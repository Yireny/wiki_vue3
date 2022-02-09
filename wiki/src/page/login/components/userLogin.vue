<template>
  <form class="pop-up">
    <span class="pop-up__title">欢迎回来</span>
    <input class="pop-up__input" type="text"  placeholder="ID">
    <input class="pop-up__input" type="password"  placeholder="密码">
    <button
    class="pop-up__btn"
    @click="login"
    >
    登录</button>
  </form>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import url('../../../assets/css/popUp.css');
</style>