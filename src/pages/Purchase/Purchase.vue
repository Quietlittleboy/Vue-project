<template>
  <div class="purchase">
    <div class="topbar"></div>
    <div class="purchase-header">
      <router-link class="btn" to="/home">首页</router-link>
      <div class="header-title">网易严选</div>
      <div class="search-shoppin">
        <span class="search">搜索</span>
        <span class="shopping">购物车</span>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="purchase-bg">
      <img src="../../images/bj.png" alt="" />
      <div class="purchase-content">
        <span class="content-title">值得买，严选好物，用心生活</span>
        <div class="purchase-swiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(purchaseNavArr,index) in purchaseNavArrs" :key="index">
                <div class="swiper-goods" v-for="(purchaseNav,index) in purchaseNavArr" :key="index">
                  <img :src="purchaseNav.picUrl" alt="" />
                  <div class="slide-title">{{purchaseNav.mainTitle}}</div>
                  <div class="slide-text">{{purchaseNav.viceTitle}}</div>
                </div>
              </div>
            </div>
            小圆点
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 瀑布流 -->
    <div class="product-list">
      <div class="list-content">
        <img src="../../images/01.jpg" alt="" />
        <div class="content-text">严选4周年经典榜</div>
        <div class="content-user">
          <div class="user">
            <img src="../../images/vr.png" alt="" />
            <span>选妹</span>
          </div>
          <div class="look">
            <img src="../../images/wx.png" alt="" />
            <span>3562</span>
          </div>
        </div>
      </div>
      <div class="list-content">
        <img src="../../images/01.jpg" alt="" />
        <div class="content-text">严选4周年经典榜</div>
        <div class="content-user">
          <div class="user">
            <img src="../../images/vr.png" alt="" />
            <span>选妹</span>
          </div>
          <div class="look">
            <img src="../../images/wx.png" alt="" />
            <span>3562</span>
          </div>
        </div>
      </div>
      <div class="list-content">
        <img src="../../images/01.jpg" alt="" />
        <div class="content-text">严选4周年经典榜</div>
        <div class="content-user">
          <div class="user">
            <img src="../../images/vr.png" alt="" />
            <span>选妹</span>
          </div>
          <div class="look">
            <img src="../../images/wx.png" alt="" />
            <span>3562</span>
          </div>
        </div>
      </div>
      <div class="list-content">
        <img src="../../images/01.jpg" alt="" />
        <div class="content-text">严选4周年经典榜</div>
        <div class="content-user">
          <div class="user">
            <img src="../../images/vr.png" alt="" />
            <span>选妹</span>
          </div>
          <div class="look">
            <img src="../../images/wx.png" alt="" />
            <span>3562</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入vue
import Vue from "vue";
// 引入swiper
import Swiper from "swiper";
// 引入swiper样式
import "swiper/css/swiper.css";
// 引入vuex
import { mapState } from "vuex";

export default {
  name: "Purchase",

  // 计算属性
  computed: {
    ...mapState(["purchaseNav",'purchaseList']),
    // 定义方法
    purchaseNavArrs() {
      const { purchaseNav } = this;
      // 定义大数组
      let purchaseArrs = [];
      // 定义小数组
      let purchaseArr = [];
      // 刷新页面判断purchaseNav.navList是否有值
      if(purchaseNav.navList){
          // 遍历数据
        purchaseNav.navList.forEach(navItem => {
        // 判断小数组是否有数据
        if (purchaseArr.length === 0) {
          purchaseArrs.push(purchaseArr);
        }
        // 向小数组中添加数据
        purchaseArr.push(navItem);
        // 判断小数组中是否到达2个数据
        if (purchaseArr.length === 2) {
          purchaseArr = [];
        }
      });
      }
      // 返回大数组
      return purchaseArrs;
    },

    // purchaseListArrs(){
    //   purchaseList.forEach()
    // }



  },

  // 界面渲染完毕
  async mounted() {
       // 发送异步请求,获取首页数据
    await this.$store.dispatch("getreqPurchaseNav");
    
    await this.$store.dispatch("getreqPurchaseList");
    

    // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
    this.$nextTick(() => {
      // 轮播图出现问题是因为数据是发送请求回来的,创建new Swiper的时候可能数据还没有回来
      new Swiper(".swiper-container", {
        slidesPerView: 4,
        // 自动播放
        autoplay: {
          delay: 2000,
          disableOnTnteraction: true
        },
        // 循环播放
        // loop: true,
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
.purchase
  width 100%
  height 1000px
  font-size 16px
  background-color #F2F5F4
  overflow hidden
  .topbar
    height 50px
    background-color #be4141
  .purchase-header
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
  .purchase-bg
    position relative
    img
      width 100%
      height 350px
    .purchase-content
      position absolute
      top 30px
      left 50%
      margin-left -178px
      margin-top 10px
      width 95%
      .content-title
        font-size 20px
      .purchase-swiper //轮播图
        width 100%
        height 260px
        margin-top 13px
        background #fff
        border-radius 10px
        overflow hidden
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              .swiper-goods
                text-align center
                margin 15px 0
                img
                  width 60px
                  height 60px
                .slide-title
                  font-size 14px
                  font-weight 700
                  margin 5px 0
                .slide-text
                  font-size 12px
                  color #999
          .swiper-pagination
            >span.swiper-pagination-bullet-active
              background #02a774
  .product-list
    width 100%
    margin-top 10px
    display flex
    flex-wrap wrap
    padding 10px
    font-size 16px
    .list-content
      background-color #fff
      border-radius 10px
      overflow hidden
      width 172px
      margin 10px 10px 0 0
      img
        width 100%
        height 172px
      .content-text
        margin 10px 0 10px 10px
      .content-user
        padding 10px
        display flex
        justify-content: space-between;
        .user,.look
          font-size 14px
        img
          width 15px
          height 15px
          vertical-align middle
</style>
