// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入适配
import '../tools/rem'

// 引入路由器
import router from './router'

// 控制浏览器显示台是否显示提示信息
Vue.config.productionTip = false
// 生明使用插件
// Vue.use(MintUI)

 // 实例化vue对象
new Vue({
    el:'#app',
    components: {
      App
    },template:'<App/>',
    // 注册路由
    router
  })

 
// new Vue({
//   render: h => h(App),
// }).$mount('#app')