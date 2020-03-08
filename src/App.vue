<template>
  <div>
    <!-- <div class="el">222</div> -->
    <!-- <mt-button type="primary">primary</mt-button> -->
    <FooterNav />
    <router-view />
  </div>
</template>

<script>
// 引入FooterNav组件
import FooterNav from './components/FooterNav/FooterNav'
export default {
  name: 'App',
  components: {
    // 注册FooterNav组件
    FooterNav,
  }
 
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  
</style>
