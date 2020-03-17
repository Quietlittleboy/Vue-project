<template>
  <div class="recommend">
    <!-- 轮播图 -->
    <Swiper />
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
        v-for="(kingKongLis, index) in productsShow.kingKongModule
          .kingKongList"
        :key="index"
      >
        <img :src="kingKongLis.picUrl" alt="" />
        <span>{{ kingKongLis.text }}</span>
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
            v-for="(categoryLis, index) in productsShow.categoryHotSellModule
              .categoryList"
            :key="index"
          >
            <span>{{ categoryLis.categoryName }}</span>
            <img :src="categoryLis.picUrl" alt="" />
          </div>
        </div>
      </div>
      <!-- 限时购 -->
      <div class="list-limit">
        <span class="limit-title"
          >限时购:{{
            productsShow.flashSaleModule.nextStartTime
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
// 引入vuex
import { mapState } from "vuex";
//  引入moment做时间格式化
import moment from "moment";
export default {
  name: "Recommend",
  // 计算属性
  computed: {
    ...mapState(["productsShow"])
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./index.stylus";
</style>
