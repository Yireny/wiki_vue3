<template>
  <main class="home">
    <div class="home__main">
      <div>轮播图</div>
      <div>帖子</div>
    </div>
    <div class="home__aside">
      侧边栏
    </div>
  </main>
</template>

<script setup lang='ts'>

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
