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
        <li class="on">推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食美酒</li>
      </ul>
    </nav>
    <!-- 轮播图 -->
    <div class="home-recommend">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../images/01.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../../images/02.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../../images/03.jpg" alt="" />
          </div>
        </div>
        小圆点
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 简介 -->
    <div class="home-introduce">
      <ul>
        <li>
          <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
          <span>网易自营品牌</span>
        </li>
        <li>
          <i class="iconfont icon-dui"></i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i class="iconfont icon-jiaoyi"></i>
          <span>48小时快速退款</span>
        </li>
      </ul>
    </div>

    <!-- 商品区 -->
    <div class="home-contnet">
      <div class="commodity-content">
        <img src="../../images/01.jpg" alt="" />
        <span>新品首发</span>
      </div>
      <div class="commodity-content">
        <img src="../../images/01.jpg" alt="" />
        <span>新品首发</span>
      </div>
      <div class="commodity-content">
        <img src="../../images/01.jpg" alt="" />
        <span>新品首发</span>
      </div>
      <div class="commodity-content">
        <img src="../../images/01.jpg" alt="" />
        <span>新品首发</span>
      </div>
      <div class="commodity-content">
        <img src="../../images/01.jpg" alt="" />
        <span>新品首发</span>
      </div>
      <div class="commodity-content">
        <img src="../../images/01.jpg" alt="" />
        <span>新品首发</span>
      </div>
      <div class="commodity-content">
        <img src="../../images/01.jpg" alt="" />
        <span>新品首发</span>
      </div>
      <div class="commodity-content">
        <img src="../../images/01.jpg" alt="" />
        <span>新品首发</span>
      </div>
      <div class="commodity-content">
        <img src="../../images/01.jpg" alt="" />
        <span>新品首发</span>
      </div>
      <div class="commodity-content">
        <img src="../../images/01.jpg" alt="" />
        <span>新品首发</span>
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
            <div class="new-top">福利社</div>
            <div class="new-bottom">新人拼团</div>
          </div>
        </div>
      </div>
      <!-- 热销 -->
      <div class="list-hot">
        <div class="hot-title">类目热销榜</div>
        <div class="hot-top">
          <div class="hot-left">热销榜</div>
          <div class="hot-right">好评榜</div>
        </div>
        <div class="hot-content">
          <div class="content-detail">居家生活</div>
          <div class="content-detail">居家生活</div>
          <div class="content-detail">居家生活</div>
          <div class="content-detail">居家生活</div>
          <div class="content-detail">居家生活</div>
          <div class="content-detail">居家生活</div>
          <div class="content-detail">居家生活</div>
          <div class="content-detail">居家生活</div>
        </div>
      </div>
      <!-- 限时购 -->
      <div class="list-limit">
        <span class="limit-title">限时购：20:40:58</span>
        <span class="limit-more">更多></span>
        <div class="limit-content">
          <div class="content-detail">
            <div class="limit-img">
              <img src="../../images/01.jpg" alt="" />
            </div>
            <div class="price">￥135</div>
          </div>
          <div class="content-detail">
            <div class="limit-img">
              <img src="../../images/01.jpg" alt="" />
            </div>
            <div class="price">￥135</div>
          </div>
          <div class="content-detail">
            <div class="limit-img">
              <img src="../../images/01.jpg" alt="" />
            </div>
            <div class="price">￥135</div>
          </div>
          <div class="content-detail">
            <div class="limit-img">
              <img src="../../images/01.jpg" alt="" />
            </div>
            <div class="price">￥135</div>
          </div>
          <div class="content-detail">
            <div class="limit-img">
              <img src="../../images/01.jpg" alt="" />
            </div>
            <div class="price">￥135</div>
          </div>
          <div class="content-detail">
            <div class="limit-img">
              <img src="../../images/01.jpg" alt="" />
            </div>
            <div class="price">￥135</div>
          </div>
        </div>
      </div>
      <div class="list-newproduct"></div>
      <!-- 底部商品 -->
      <div class="list-footer">
        <div class="footer-goods"></div>
        <div class="footer-goods"></div>
        <div class="footer-goods"></div>
        <div class="footer-goods"></div>
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
// 引入swiper
import Swiper from "swiper";
// 引入swiper样式
import "swiper/css/swiper.css";

export default {
  name: "Home",
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
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
      justify-content space-around
      li
        font-size 14px
        &.on
          color #be4141
          font-weight 700
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
        i
          font-size 14px
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
      span
        font-size 12px
        margin-top 5px


  .home-list //商品列表
    width 100%
    background-color #ccc
    .home-preference
      width 100%
      height 330px
      .preference-title
        height 120px
        width 100%
        background url('../../images/1hoem.gif')
        background-size 100% 100%
      .preference-content
        width 100%
        height 200px
        background-color pink
    .list-new
      width 100%
      font-size 16px
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
          .new-bottom
            width 100%
            height 99px
            margin-top 2px
            background-color blue
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
      .hot-top
        width 100%
        .hot-left
          width 172px
          height 100px
          background-color pink
          margin-right 4px
          float left
        .hot-right
          width 172px
          height 100px
          background-color blue
          float left
      .hot-content
        width 100%
        .content-detail
          width 84px
          height 90px
          float left
          margin 4px 4px 0 0
          background-color #666
    .list-limit
      width 100%
      font-size 16px
      padding 13px
      margin-bottom 10px
      background-color #fff
      .limit-more
        margin-left 180px
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
          height 120px
          float left
          margin 9px 9px 0 0
          background-color pink
          .price
            text-align center
            font-size 14px
          .limit-img
            width 100%
            height 100px
            background-color blue
            margin-bottom 5px
            position: relative
          img
            width 50px
            height 50px
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
        width 173px
        height 135px
        float left
        margin 2px 2px 0 0
        background-color pink
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
