<template>
  <main class="home">
    <div class="home__main">
      <Swiper/>
      <CardList/>
    </div>
    <div class="home__aside">
      <Banner/>
      <News/>
    </div>
  </main>
</template>

<script setup lang='ts'>
import Swiper from './components/homeSwiper.vue'
import CardList from './components/homeCardList.vue'
import Banner from './components/homeBanner.vue'
import News from './components/homeNews.vue'

</script>

<style lang="scss" scoped>
.home{
  display: flex;
  justify-content: space-between;
  &__main{
    width: 700px;
  }
  &__aside{
    width: 280px;
  }
}
</style>
