<template>
  <div>
    <!-- <button @click="btn">测试</button> -->
    <!-- <div class="el">222</div> -->
    <!-- <mt-button type="primary">primary</mt-button> -->
    <FooterNav />
    <router-view />
    
  </div>
</template>

<script>
// 引入FooterNav组件
import FooterNav from './components/FooterNav/FooterNav'
import {reqhome} from './api'
export default {
  name: 'App',
  components: {
    // 注册FooterNav组件
    FooterNav,
  },
  methods: {
    // btn(){
    //   this.$store.dispatch('getreqProductsShow')
    // }
  // async btn(){
  //     const result = await reqhome()
  //     console.log(result);
      
  //   }
  }
 
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  
</style>
