<template>
  <div class="home">
    <div class="topbar"></div>
    <!-- 头部 -->
    <header class="home-header">
      <span class="home-header-title">网易严选</span>
      <input type="text" class="iconfont icon-dui" placeholder="搜索商品" />
      <router-link to="/personage" class="home-header-login">登录</router-link>
    </header>
    <!-- 导航栏 -->
    <nav>
      <ul>
        <li :class="{ on: $route.path === '/home' }">
          <router-link to="/home">推荐</router-link>
        </li>
        <li
          :class="{ on: $route.path === `/home/livingat/${living.id}` }"
          v-for="(living, index) in livingAt"
          :key="index"
        >
          <router-link :to="`/home/livingat/${living.id}`">{{
            living.name
          }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入vuex
import { mapState } from "vuex";
export default {
  name: "Home",

  // 计算属性
  computed: {
    ...mapState(["livingAt"])
  },
  // 界面渲染完毕
  async mounted() {
    //  发送异步请求,获取首页居家生活
    await this.$store.dispatch("getreqLivingAt");

    // 发送异步请求,获取首页数据
    await this.$store.dispatch("getreqProductsShow");
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home
  // height 3000px
  width 100%
  margin-bottom 50px
  .topbar
    width 100%
    height 80px
    background-color #be4141
  .home-header //头部
    display flex;
    justify-content space-around;
    align-items center
    margin 10px 0
    .home-header-title
      font-weight 700
      font-size 16px
    input
      height 25px
      width 200px
      border 1px solid #999
      border-radius 5px
      font-size 14px
      outline medium
    .home-header-login
      color #be4141
      border 1px solid #be4141
      border-radius 5px
      height 15px
      padding 3px
      font-size 14px
  nav //导航栏
    ul
      display flex;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 0 0.1rem;
      margin-bottom: -.2rem;
      overflow: -moz-scrollbars-none;
      overflow: -moz-scrollbars-none;
      &::-webkit-scrollbar
        display: none;
      li
        font-size 14px
        margin 10px
        padding 0 3px 3px
        &.on
          color #be4141
          border-bottom 2px solid #be4141
          font-weight 700
          .router-link-active
            color #be4141
</style>
