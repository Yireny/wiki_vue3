<template>
  <form class="pop-up">
    <span class="pop-up__title">加入我们</span>
    <input class="pop-up__input" type="text" placeholder="用户名">
    <input class="pop-up__input" type="password" placeholder="密码">
    <input class="pop-up__input" type="password" placeholder="确认密码">
    <button
    class="pop-up__btn"
    @click="register"
    >
    注册
    </button>
  </form>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import url('../../../assets/css/popUp.css');
</style>