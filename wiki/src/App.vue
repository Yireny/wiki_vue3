<template>
  <header class="app__header">
    <Navbar/>
  </header>
  <!--  -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
  <!--  -->
</template>

<script setup lang="ts">
import Navbar from './components/navbar.vue'

</script>

<style>
#app{
  position: relative;
  width: 100%;
  min-width: 1200px;
  min-height: 100vh;
  background: linear-gradient(90deg, #c1ece7, #e9ebb6, #e9cbb7, #d2cbf8, #ebdec1);
  background-size: 500% 500%;
  animation: bg 20s ease infinite;
  background-attachment: fixed;
}

.app__header{
  position: sticky;
  top: 0;
}

main{
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes bg {
  0% {
    background-position: 0% 50%;
  }

  25% {
    background-position: 50% 0%;
  }

  50% {
    background-position: 100% 50%;
  }

  75% {
    background-position: 50% 100%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
