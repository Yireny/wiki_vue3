<template>
  <div class="home-news-item">
    <span class="home-news-item__label">活动</span>
    <span class="home-news-item__content">咨询咨询咨询咨询咨询咨询咨询咨询咨询咨询</span>
  </div>
</template>

<script setup lang=ts>
</script>

<style lang="scss" scoped>
.home-news-item{
  width: 100%;
  height: 16px;
  &:not(&:first-child){
    margin-top: 15px;
  }
  &__label{
    display: inline-block;
    width: 32px;
    height: 16px;
    text-align: center;
    line-height: 16px;
    font-size: 12px;
    color: #fff;
    background-color: #c3ccd9;
    border-radius: 3px;
    user-select: none;
  }
  &__content{
    display: inline-block;
    width: calc( 100% - 32px);
    height: 16px;
    line-height: 16px;
    padding-left: 10px;
    font-size: 14px;
    color: #333333;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
  }
}
</style>