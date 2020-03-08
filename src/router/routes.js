// 引入路由组件
// 引入Home
import Home from '../pages/Home/Home.vue'
// 引入Classify
import Classify from '../pages/Classify/Classify.vue'
// 引入Purchase
import Purchase from '../pages/Purchase/Purchase.vue'
// 引入ShopPing
import ShopPing from '../pages/ShopPing/ShopPing.vue'
// 引入Personage
import Personage from '../pages/Personage/Personage.vue'

// 暴露routes
export default [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/classify',
    component: Classify,
  },
  {
    path: '/purchase',
    component: Purchase,
  },
  {
    path: '/shopPing',
    component: ShopPing,
  },
  {
    path: '/personage',
    component: Personage,
  },
  {
    path: '/',
    redirect: '/home' // 路由的重定向
  }
]