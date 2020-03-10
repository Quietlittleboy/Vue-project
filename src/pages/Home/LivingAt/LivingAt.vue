<template>
  <div class="livingAt">
    <!-- 轮播图 -->
    <div class="home-recommend">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(focusList, index) in productsShow.focusList"
            :key="index"
          >
            <img :src="focusList.picUrl" alt="" />
          </div>
        </div>
        小圆点
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="product-list">
      <div class="list-title">
        <div class="title">热销爆款</div>
        <div class="text">人气好物放心购</div>
      </div>
      <div class="conter">
        <div class="list-content">
          <div class="content">
            <img src="../../../images/01.jpg" alt="" />
            <div class="essential">出行必备</div>
          </div>
          <div class="name">5条装 男式纯棉女内裤</div>
          <div class="price">￥19.9</div>
          <span>满88顺丰包邮</span>
          <span>满99减10</span>
        </div>
        <div class="list-content">
          <div class="content">
            <img src="../../../images/01.jpg" alt="" />
            <div class="essential">出行必备</div>
          </div>
          <div class="name">5条装 男式纯棉女内裤</div>
          <div class="price">￥19.9</div>
          <span>满88顺丰包邮</span>
          <span>满99减10</span>
        </div>
        <div class="list-content">
          <div class="content">
            <img src="../../../images/01.jpg" alt="" />
            <div class="essential">出行必备</div>
          </div>
          <div class="name">5条装 男式纯棉女内裤</div>
          <div class="price">￥19.9</div>
          <span>满88顺丰包邮</span>
          <span>满99减10</span>
        </div>
        <div class="list-content">
          <div class="content">
            <img src="../../../images/01.jpg" alt="" />
            <div class="essential">出行必备</div>
          </div>
          <div class="name">5条装 男式纯棉女内裤</div>
          <div class="price">￥19.9</div>
          <span>满88顺丰包邮</span>
          <span>满99减10</span>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper
import Swiper from "swiper";
// 引入swiper样式
import "swiper/css/swiper.css";
// 引入vuex
import { mapState } from "vuex";
export default {
  name: "LivingAt",
  // 计算属性
  computed: {
    ...mapState(["productsShow"])
  },
  // 界面渲染完毕
  async mounted() {
    // 发送异步请求,获取首页数据
    await this.$store.dispatch("getreqProductsShow");
    // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
    this.$nextTick(() => {
      // 轮播图出现问题是因为数据是发送请求回来的,创建new Swiper的时候可能数据还没有回来
      new Swiper(".swiper-container", {
        // 自动播放
        autoplay: {
          delay: 2000,
          disableOnTnteraction: true
        },
        // 循环播放
        loop: true,
        // 小圆点
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.livingAt
  overflow hidden
  height 1000px
  .home-recommend //轮播图
    margin-top 10px
    height 200px
    background #000
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          img
            width 100%
            height 100%
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
  .product-list
    width 100%
    margin-top 10px
    background-color #fff
    padding 10px
    font-size 16px
    .list-title
      text-align center
      .title
        font-size 18px
      .text
        font-size 14px
        margin 10px 0
        color #999
  .conter
    display flex
    flex-wrap wrap
    .list-content
      width 172px
      margin 0 10px 20px 0
      .content
        background-color #F1ECE2
        height 200px
        img
          width 100%
          height 172px
          background-color red
        .essential
          font-size 14px
          line-height -10px
          padding 5px 
      .name
        margin 8px 0
        font-size 14px
      .price
        margin-bottom 8px
        color red
      span
        font-size 12px
        border 1px solid red
        border-radius 30px
        padding 0px 5px
        margin-right 5px
</style>
