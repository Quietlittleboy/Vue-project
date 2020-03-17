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
// 引入ClassNav 
import ClassList from '../pages/Classify/ClassList/ClassList.vue'

// 二级路由
import Recommend from '../pages/Home/Recommend/Recommend.vue'
import LivingAt from '../pages/Home/LivingAt/LivingAt.vue'

// 暴露routes
export default [

  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    },
    children: [
      {
        path: '/home',
        component: Recommend,
        meta: {
          isShowFooter: true
        },
      },
      {
        path: '/home/livingat/:id',
        component: LivingAt,
        meta: {
          isShowFooter: true
        },
      },
    ]
  },
  {
    path: '/classify',
    component: Classify,
    meta: {
      isShowFooter: true
    },
    children: [

      {
        path: '/classify/classlist/:id',
        component: ClassList,
        meta: {
          isShowFooter: true
        },
      },
      {
        path: '/classify',
        redirect: '/classify/classlist/11',
        meta: {
          isShowFooter: true
        }
      },


    ]
  },
  {
    path: '/purchase',
    component: Purchase,
    meta: {
      isShowFooter: true
    },
  },
  {
    path: '/shopPing',
    component: ShopPing,
    meta: {
      isShowFooter: true
    },
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