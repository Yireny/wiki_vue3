<template>
  <div class="home-news">
    <span class="home-news__title">最新资讯</span>
    <div class="home-news__list">
      <HomeNewsItem/>
      <HomeNewsItem/>
      <HomeNewsItem/>
    </div>
  </div>
</template>

<script setup lang='ts'>
import HomeNewsItem from './homeNewsItem.vue'
</script>

<style lang="scss" scoped>
.home-news{
  width: 100%;
  height: 500px;
  margin-top: 10px;
  background-color: rgba($color: #fff, $alpha: .7);
  border-radius: 5px;
  &__title{
    display: block;
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    padding: 17px 20px;
    border-bottom: 1px solid #ebebeb;
    box-sizing: border-box;
  }
  &__list{
    padding: 10px 20px;
  }
}
</style>