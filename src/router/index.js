// 引入vue
// import Vue from 'vue'
// // 引入VueRouter
// import VueRouter from 'vue-router'
// // 引入routes
// import routes from './routes'
// // 声明使用
// Vue.use(VueRouter)
// // 实例化路由并暴露出去
// export default new VueRouter({
//   mode:'history',
//   // 路由配置
//   routes
// })

// 书写路由相关的代码
// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入routers
import routes from './routes.js'
// 声明使用插件
Vue.use(VueRouter)
// 向外暴露一个路由器对象
export default new VueRouter({
  mode: 'history',
  // 进行路由的配置
  routes

})