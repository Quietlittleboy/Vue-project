// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入适配
import '../tools/rem'
// 控制浏览器显示台是否显示提示信息
Vue.config.productionTip = false
// 实例化vue对象
new Vue({
  render: h => h(App),
}).$mount('#app')
