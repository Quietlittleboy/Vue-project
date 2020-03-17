<template>
  <div class="classify">
    <div class="topbar"></div>
    <div class="classify-header">
      <input type="text" placeholder="搜索商品" />
    </div>

    <div class="classify-goodslist">
      <div class="left-wrapper">
        <ul class="navlist">
          <li
            class="navleft"
            :class="{
              on: $route.path === `/classify/classlist/${classNav.id}`
            }"
            v-for="(classNav, index) in classNavs.categoryL1List"
            :key="index"
          >
            <router-link :to="`/classify/classlist/${classNav.id}`">{{
              classNav.name
            }}</router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 引入vuex
import { mapState } from "vuex";
// 引入滑动对象
import BScroll from "better-scroll";
export default {
  name: "Classify",
  computed: {
    ...mapState(["classNavs"])
  },
  async mounted() {
    // 发送异步请求,获取左侧导航
    await this.$store.dispatch("getreqClassNav");
    // 发送异步请求,获取右侧导航
    await this.$store.dispatch("getreqClassLists");
    // 首次渲染调用
    if (this.$route.path !=='/classify/classlist/11') {
      this.$router.push("/classify/classlist/11");
    }

    // 创建滑动对象
    let left = new BScroll(".left-wrapper", {
      click: true
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.classify
  width 100%
  font-size 16px
  position relative
  overflow hidden
  .topbar
    width 100%
    height 50px
    background-color #be4141
    position fixed
    top 0
    z-index 99
  .classify-header
    width 100%
    background-color #fff
    border-bottom 1px solid #999
    height 40px
    text-align:center
    line-height 40px
    position fixed
    top 50px
    z-index 99
    input
      width 90%
      background-color #eee
      padding 5px
      outline none
  .classify-goodslist
    width 100%
    margin-top 90px
    display flex
    .left-wrapper
      border-right 1px solid #999
      width 88px
      height 530px
      overflow hidden
      .navlist
        padding-top 3px
        .navleft
          width 85px
          text-align center
          border-left 3px solid transparent
          padding 5px 0
          margin 20px 0
          &.on
            color #be4141
            border-left 3px solid #be4141
</style>
