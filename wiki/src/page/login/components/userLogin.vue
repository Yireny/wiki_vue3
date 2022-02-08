<template>
  <form class="user-login">
    <div class="user-login__title">欢迎回来</div>
    <input class="user-login__input" type="text"  placeholder="ID">
    <input class="user-login__input" type="password"  placeholder="密码">
    <div
    class="user-login__btn"
    @click="login"
    >
    登录</div>
  </form>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.user-login{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255,.7);
  transition: all 1.5s ease;
  transform-style: preserve-3d;
  &__title{
    height: 60px;
    line-height: 60px;
    color: #999;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    user-select: none;
  }
  &__input{
    background-color: rgba($color: #fff, $alpha: .08);
    width: 70%;
    height: 48px;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 0 16px;
    font-size: 18px;
    color: #999;
    font-weight: 500;
    outline: none;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(78, 73, 79, .2);
    &:hover{
      box-shadow: 0 4px 8px 0 rgba(78, 73, 79, .5);
    }
    &:focus{
    box-shadow: 0 4px 8px 0 rgba(78, 73, 79, .5);
    }
  }
  &__btn{
    background-color: rgba($color: #00c3ff, $alpha: .5);
    width: 280px;
    height: 40px;
    padding: 6px 0;
    box-sizing: border-box;
    font-size: 24px;
    font-weight: 600;
    color: white;
    text-align: center;
    border-radius: 8px;
    margin-top: 15px;
    cursor: pointer;
    user-select: none;
    &:hover{
      background-color: rgba($color: #00c3ff, $alpha: .7);
    }
  }
}
</style>