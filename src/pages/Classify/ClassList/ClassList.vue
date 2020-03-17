<template>
  <div class="right-wrapper">
    <div class="classify-content">
      <img src="../../../images/04.jpg" alt="" />
      <div class="content-outside">
        <div class="content-title">爱家爱生活</div>
        <ul class="content-list">
          <li
            class="licontent"
            v-for="(rightList, index) in rightLists.categoryList ||
              rightLists.subCateList"
            :key="index"
          >
            <img :src="rightList.bannerUrl || rightList.wapBannerUrl" alt="" />
            <div class="content-text">{{rightList.name}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// 引入滑动对象
import BScroll from "better-scroll";
// 引入vuex
import { mapState } from "vuex";
export default {
  name: "ClassNav",
  data() {
    return {
      rightLists: {} //定义存储数据的容器
    };
  },
  computed: {
    ...mapState(["classLists"])
  },
  async mounted() {
    // 发送异步请求,获取右侧导航
    await this.$store.dispatch("getreqClassLists");
    let right = new BScroll(".right-wrapper", {
      click: true
    });
    // 调用查找数据的方法
    this.rightlists();
  },
  methods: {
    // 定义查找数据的方法
    rightlists() {
      const id = this.$route.params.id;
      this.rightLists = this.classLists.find(living => living.id === +id);
      console.log(this.rightLists);
    }
  },
  watch: {
    $route() {
      // 调用查找数据的方法
      this.rightlists();
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.right-wrapper
  width 300px
  height 530px
  overflow hidden
  .classify-content
    width 260px
    padding 15px
    img
      width 260px
    .content-outside
      .content-title
        font-weight 700
        border-bottom 1px solid #999
        padding-bottom 5px
        margin 15px 0
      .content-list
        display flex
        flex-wrap wrap
        .licontent
          width 70px
          margin 8px
          img
            width 70px
            height 70px
        .content-text
          font-size 12px
          text-align center
</style>
