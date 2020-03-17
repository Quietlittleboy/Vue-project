<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goto('/home')" :class="{on:$route.path ==='/home'}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/classify'&&'/classify/classlist/11')" :class="{on:$route.path ==='/classify'}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/purchase')" :class="{on:$route.path ==='/purchase'}">
      <span class="item_icon">
        <i class="iconfont icon-gouwu"></i>
      </span>
      <span>值得买</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/shopPing')" :class="{on:$route.path ==='/shopPing'}">
      <span class="item_icon">
        <i class="iconfont icon-gouwucheman"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/personage')" :class="{on:$route.path ==='/personage'}">
      <span class="item_icon">
        <i class="iconfont icon-geren3"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
export default {
  name: "FooterNav",
  methods: {
    goto(path) {
      // 判断当前要跳转的路径不等于之前的路径
      if(this.$route.path !== path){
      this.$router.replace(path);
      }
    }
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footer_guide  //footer
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #be4141
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>
