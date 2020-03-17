<template>
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
</template>

<script>
// 引入swiper
import Swiper from "swiper";
// 引入swiper样式
import "swiper/css/swiper.css";
// 引入vuex
import {mapState} from 'vuex'
export default {
  name:'Swiper',
  computed: {
    ...mapState(['productsShow'])
  },
  // 界面渲染完毕
 async mounted() {
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
  
}
</script>
<style lang="stylus" rel="stylusheet/stylus">
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
</style>