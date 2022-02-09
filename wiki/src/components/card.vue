<template>
  <div class="card">
    <header>
      <div class="card__userinfo">
        <div class="card__avatar">
          <Avatar/>
        </div>
        <div class="card__username">用户名</div>
      </div>
    </header>
    <article>
      <div class="card__title">标题</div>
      <div class="card__content">内容内容内容内容内容内容</div>
      <div class="card__preview"></div>
    </article>
    <footer>
      <div class="card__data">
        <div class="card__data-item"></div>
      </div>
    </footer>
  </div>
</template>

<script setup lang='ts'>
import Avatar from './avatar.vue'
</script>

<style lang="scss" scoped>
.card{
  width: 100%;
  height: 300px;
  padding: 24px 30px;
  box-sizing: border-box;
  background-color: rgba($color: #fff, $alpha: .7);
  border-radius: 5px;
  &:not(&:first-child){
    border-top: 1px solid #ebebeb;
  }
  &__userinfo{
    width: 100%;
    height: 24px;
  }
  &__avatar{
    display: inline-block;
    width: 24px;
    height: 24px;
  }
  &__username{
    display: inline-block;
    line-height: 24px;
    font-size: 12px;
    color: #666666;
    vertical-align: top;
    margin-left: 10px;
  }
  & article{
    width: 100%;
    height: 176px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px 0;
  }
  &__title{
    width: 100%;
    height: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #333333;
  }
  &__content{
    font-size: 14px;
    color: #999999;
  }
  &__preview{
    width: 100%;
    height: 120px;
  }
}
</style>