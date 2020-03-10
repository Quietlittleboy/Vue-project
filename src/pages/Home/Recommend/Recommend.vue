<template>
  <div class="recommend">
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
    <!-- 简介 -->
    <div class="home-introduce">
      <ul>
        <li
          v-for="(policyDescList, index) in productsShow.policyDescList"
          :key="index"
        >
          <img :src="policyDescList.icon" alt="" />
          <span>{{ policyDescList.desc }}</span>
        </li>
      </ul>
    </div>

    <!-- 商品区 -->
    <div class="home-contnet">
      <div
        class="commodity-content"
        v-for="(kingKongList, index) in productsShow.kingKongModule
          .kingKongList"
        :key="index"
      >
        <img :src="kingKongList.picUrl" alt="" />
        <span>{{ kingKongList.text }}</span>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="home-list">
      <!-- 特惠 -->
      <div class="home-preference">
        <div class="preference-title"></div>
        <div class="preference-content"></div>
      </div>
      <!-- 新人礼 -->
      <div class="list-new">
        <div class="new-title">新人专享礼</div>
        <div class="new-content">
          <div class="new-left">新人专享礼</div>
          <div class="new-right">
            <div
              class="new-top"
              v-for="(newtop, index) in productsShow.indexActivityModule"
              :key="index"
            >
              <div>
                {{ newtop.title }}
              </div>
              <div>
                {{ newtop.subTitle ? newtop.subTitle : newtop.tag }}
              </div>
              <img :src="newtop.showPicUrl" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- 热销 -->
      <div class="list-hot">
        <div class="hot-title">
          {{ productsShow.categoryHotSellModule.title }}
        </div>
        <div class="hot-content">
          <div
            class="content-detail"
            v-for="(categoryList, index) in productsShow.categoryHotSellModule
              .categoryList"
            :key="index"
          >
            <span>{{ categoryList.categoryName }}</span>
            <img :src="categoryList.picUrl" alt="" />
          </div>
        </div>
      </div>
      <!-- 限时购 -->
      <div class="list-limit">
        <span class="limit-title"
          >限时购:{{
            productsShow.flashSaleModule.nextStartTime | formatTimel
          }}</span
        >
        <span class="limit-more">更多></span>
        <div class="limit-content">
          <div
            class="content-detail"
            v-for="(itemList, index) in productsShow.flashSaleModule.itemList"
            :key="index"
          >
            <div class="limit-img">
              <img :src="itemList.showPicUrl" alt="" />
            </div>
            <span class="price1">￥{{ itemList.activityPrice }}</span>
            <span class="price2">￥{{ itemList.originPrice }}</span>
          </div>
        </div>
      </div>
      <div class="list-newproduct"></div>
      <!-- 底部商品 -->
      <div class="list-footer">
        <div
          class="footer-goods"
          v-for="(styleItems,
          index) in productsShow.sceneLightShoppingGuideModule"
          :key="index"
        >
          <div class="goods-title">{{ styleItems.styleItem.title }}</div>
          <div class="goods-text">{{ styleItems.styleItem.desc }}</div>
          <div class="goods-img">
            <img
              :src="picUrlLists"
              alt=""
              v-for="(picUrlLists, index) in styleItems.styleItem.picUrlList"
              :key="index"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer class="hoem-footer">
      <div class="download">
        <div>下载App</div>
        <div>电脑版</div>
      </div>
      <div class="copyright">网易公司版权所有 © 1997-2020</div>
      <div class="copyright">食品经营许可证：JY13301080111719</div>
    </Footer>
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
//  引入moment做时间格式化
import moment from "moment";
// 时间格式化
Vue.filter("formatTimel", value => {
  return moment(value).format("YYYY-MM-DD hh:mm:ss");
});

export default {
  name: "Recommend",
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
.recommend
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

  .home-introduce //简介
    margin 10px 0
    ul
      display flex
      justify-content space-around
      li
        font-size 12px
        display:flex;
        align-items: center;
        img
          width  20px
          height 20px
          color #be4141
  .home-contnet //中间商品
    width 100%
    height 190px
    display flex
    flex-direction column
    align-items center
    justify-content: center;
    flex-wrap wrap
    .commodity-content
      display flex
      flex-direction:column
      &:nth-child(odd)
        margin-bottom 23px
      img
        width 50px
        height 50px
        border-radius 15px
        vertical-alian middle
      span
        font-size 12px
        margin-top 5px


  .home-list //商品列表
    width 100%
    background-color #ccc
    overflow hidden
    .home-preference
      width 100%
      height 330px
      .preference-title
        height 120px
        width 100%
        background url('../../../images/1hoem.gif')
        background-size 100% 100%
      .preference-content
        width 100%
        height 200px
        background-color pink
    .list-new
      width 100%
      font-size 14px
      padding 10px 0
      margin-bottom 10px
      background-color #fff
      .new-title
        font-size 18px
        text-align center
        margin-bottom 10px
      .new-content
        width 100%
        display flex
        justify-content center
        .new-left
          width 46%
          height 200px
          background-color pink
          margin-right 2px
        .new-right
          width 46%
          .new-top
            width 100%
            height 99px
            background-color skyblue
            margin-top 1px
          img
            width 80px
    .list-hot
      width 100%
      font-size 16px
      padding 13px
      margin-bottom 10px
      background-color #fff
      *zoom 1
      &::after
        content ''
        display block
        clear both
      .hot-title
        font-size 18px
        margin-bottom 10px
      .hot-content
        width 100%
        .content-detail
          width 84px
          height 90px
          float left
          margin 4px 4px 0 0
          background-color #F5F5F5
          display flex
          flex-direction column
          align-items center
          font-size 12px
          span
            text-align center
            margin 8px 0 10px 0
          img
            width 50px
            height 50px
          &:nth-child(1),&:nth-child(2)
            width 172px
            height 100px
            font-size 16px
            background-color #F9F3E4
            img
              width 70px
              height 60px
    .list-limit
      width 100%
      font-size 16px
      padding 13px
      margin-bottom 10px
      background-color #fff
      .limit-title
        width 305px
        display: inline-block;
      .limit-content
        width 100%
        margin-top 10px
        *zoom 1
        &::after
          content ''
          display block
          clear both
        .content-detail
          width 110px
          height 130px
          float left
          margin 9px 9px 0 0
          .price1
            text-align center
            font-size 14px
            color red
            margin 0 5px
          .price2
            font-size 12px
            color #666
          .limit-img
            width 100%
            height 100px
            background-color #F5F5F5
            margin-bottom 5px
            position: relative
          img
            width 100px
            height 100px
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-50%)
    .list-footer
      width 100%
      font-size 16px
      padding 13px
      margin-bottom 10px
      background-color #fff
      *zoom 1
      &::after
        content ''
        display block
        clear both
      .footer-goods
        width 158px
        height 135px
        float left
        margin 2px 2px 0 0
        background-color #F5F5F5
        padding 15px 0 0 15px
        .goods-title
          font-size 16px
          margin-bottom 5px
        .goods-text
          font-size 12px
          color #666
        .goods-img
          display flex
          margin-top 15px
          img
            margin-left 5px
            width 60px
            height 60px
  .hoem-footer
    width 100%
    background-color #333
    font-size 12px
    color #fff
    padding 30px 0 10px 0
    .download
      display flex
      justify-content center
      margin-bottom 25px
      div
        border 1px solid #999
        padding  8px 20px
        margin 0 20px
    .copyright
      font-size 10px
      text-align center
      margin-bottom 5px
      color #999
</style>
