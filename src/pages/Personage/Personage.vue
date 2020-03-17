<template>
  <div class="personage">
    <div class="topbar"></div>
    <div class="personage-header">
      <router-link class="btn" to="/home">首页</router-link>
      <div class="header-title">网易严选</div>
      <div class="search-shoppin">
        <span class="search">搜索</span>
        <span class="shopping">购物车</span>
      </div>
    </div>
    <div class="personage-text">
      <img src="../../images/01.jpg" alt="" />
      <span class="text-title">网易严选</span>
    </div>
    <div class="personage-login">
      <div class="login">手机号快捷登录</div>
      <div class="mali">邮箱账号登录</div>
    </div>
    <div class="other-login">
      <span>微信</span>
      <span>QQ</span>
      <span>微博</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personage"
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.personage
  width 100%
  font-size 16px
  background-color #F2F5F4
  .topbar
    height 50px
    background-color #be4141
  .personage-header
    display: flex;
    justify-content: space-between
    align-items center
    background-color #fff
    height 40px
    .btn
      height 30px
      line-height 30px
      margin 0 30px 0 10px
      background-color #ccc
    .search-shoppin
      span 
        margin-right 10px
  .personage-text
    display flex
    justify-content center
    width 100% 
    margin 100px auto
    img
      width 50px
      height 50px
      vertical-align middle
    .text-title
      font-size 28px
      line-height 50px
  .personage-login
    margin-bottom 150px
    .login,.mali
      width 80%
      border 1px solid red
      font-size 20px
      padding 10px
      margin 0 auto
      text-align center
    .login
      margin-bottom 20px
      background-color red
  .other-login
    width 100%
    display flex
    justify-content center
    span 
      margin 29px 15px

</style>
