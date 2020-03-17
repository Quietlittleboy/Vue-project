<template>
  <div class="livingAt">
    <!-- 轮播图 -->
    <Swiper/>

    <div class="product-list">
      <div class="list-title">
        <div class="title">热销爆款</div>
        <div class="text">人气好物放心购</div>
      </div>
      <div class="conter">
        <div
          class="list-content"
          v-for="(subCateLis, index) in navBars.subCateList"
          :key="index"
        >
          <div class="content">
            <img :src="subCateLis.wapBannerUrl" alt="" />
            <div class="essential">{{ subCateLis.frontDesc }}</div>
          </div>
          <div class="name">{{ subCateLis.name }}</div>
          <div class="price">￥19.9</div>
          <span>满88顺丰包邮</span>
          <span>满99减10 </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入vuex
import { mapState } from "vuex";
export default {
  name: "LivingAt",
  data() {
    return {
      navBars: {}//定义存储数据的容器
    };
  },

  // 计算属性
  computed: {
    ...mapState(["livingAt"])
  },

  // 界面渲染完毕
  async mounted() {
    // 发送异步请求,获取首页居家生活
    // await this.$store.dispatch("getreqLivingAt");
    // 调用查找数据的方法
    this.nav()
  },
  methods: {
    // 定义查找数据的方法
    nav() {
      const id = this.$route.params.id;
      this.navBars = this.livingAt.find(living => living.id === +id);
      console.log(this.navBars);
      
    }
  },
  watch: {
    $route() {
      // 调用查找数据的方法
     this.nav()
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~./var.styl';
</style>
