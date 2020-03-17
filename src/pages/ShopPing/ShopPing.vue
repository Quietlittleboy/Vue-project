<template>
  <div class="shopping">
    <div class="topbar"></div>
    <div class="shopping-header">
      <span class="header-title">购物车</span>
      <span class="header-text">领卷</span>
    </div>
    <div class="shopping-introduce">
      <span class="introduce-text">30天无忧退货</span>
      <span class="introduce-text">48小时快速退款</span>
      <span class="introduce-text">满88元免邮费</span>
    </div>
    <div class="shopping-shop">
      <img src="../../images/02.jpg" alt="">
      <div class="shop-text">去添加点什么吧</div>
    </div>
    <div class="shopping-login">登录</div>
  </div>
</template>

<script>
export default {
  name: "ShopPing"
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopping
  width 100%
  height 630px
  font-size 16px
  background-color #f4f4f4
  .topbar
    background-color #be4141
    width 100%
    height 50px
  .shopping-header
    height 50px;
    line-height 50px
    background-color #fff
    .header-title
      margin 0 250px 0 20px
      font-size 20px
    .header-text
      color red
  .shopping-introduce
    display flex
    justify-content space-around
    background-color #eee
    .introduce-text
      font-size 12px
      height 30px
      line-height 30px
  .shopping-shop
    text-align center
    margin-top 130px
    img 
      width 120px
      height 120px
    .shop-text
      color #999
  .shopping-login
    width 60%
    height 40px
    line-height 40px
    background-color red
    text-align center
    margin 20px auto 0
    font-size 20px
</style>
