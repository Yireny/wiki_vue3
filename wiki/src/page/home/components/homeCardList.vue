<template>
  <div class="home-card-list">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>
</template>

<script setup lang='ts'>
import Card from '../../../components/card.vue'
</script>

<style lang="scss" scoped>
.home-card-list{
  width: 100%;
  margin-top: 10px;
}
</style>