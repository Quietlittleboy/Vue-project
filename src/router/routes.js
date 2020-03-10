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

// 二级路由
import Recommend from '../pages/Home/Recommend/Recommend.vue'
import LivingAt from '../pages/Home/LivingAt/LivingAt.vue'
import Costume from '../pages/Home/Costume/Costume.vue'
import Cate from '../pages/Home/Cate/Cate.vue'

// 暴露routes
export default [
  {
    path: '/home',
    component: Home,
    children:[
      {
        path:'/home',
        component:Recommend
      },
      {
        path:'/home/livingAt',
        component:LivingAt
      },
      {
      path:'/home/costume',
      component:Costume
      },
      {
      path:'/home/cate',
      component:Cate
      },
    ]
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