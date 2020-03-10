<template>
  <div class="home">
    <div class="topbar"></div>
    <!-- 头部 -->
    <header class="home-header">
      <span class="home-header-title">网易严选</span>
      <input type="text" class="iconfont icon-dui" placeholder="搜索商品" />
      <span class="home-header-login">登录</span>
    </header>
    <!-- 导航栏 -->
    <nav>
      <ul>
        <li :class="{ on: $route.path === '/home' }">
          <router-link to="/home">推荐</router-link>
        </li>
        <li :class="{ on: $route.path === '/home/livingAt' }">
          <router-link to="/home/livingAt">居家生活</router-link>
        </li>
        <li :class="{ on: $route.path === '/home/costume' }">
          <router-link to="/home/costume">服饰鞋包</router-link>
        </li>
        <li :class="{ on: $route.path === '/home/cate' }">
          <router-link to="/home/cate">美食美酒</router-link>
        </li>
        <li>各护清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入vue
// import Vue from "vue";
// // 引入swiper
// import Swiper from "swiper";
// // 引入swiper样式
// import "swiper/css/swiper.css";
// // 引入vuex
// import { mapState } from "vuex";
// //  引入moment做时间格式化
// import moment from "moment";
// // 时间格式化
// Vue.filter("formatTimel", value => {
//   return moment(value).format("YYYY-MM-DD hh:mm:ss");
// });

export default {
  name: "Home"

  // 计算属性
  // computed: {
  //   ...mapState(["productsShow"])
  // },
  // 界面渲染完毕
  // async mounted() {
  //   // 发送异步请求,获取首页数据
  //   await this.$store.dispatch("getreqProductsShow");
  //   // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
  //   this.$nextTick(() => {
  //     // 轮播图出现问题是因为数据是发送请求回来的,创建new Swiper的时候可能数据还没有回来
  //     new Swiper(".swiper-container", {
  //       // 自动播放
  //       autoplay: {
  //         delay: 2000,
  //         disableOnTnteraction: true
  //       },
  //       // 循环播放
  //       loop: true,
  //       // 小圆点
  //       pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true
  //       }
  //     });
  //   });
  // }
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
