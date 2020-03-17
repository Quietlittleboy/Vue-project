// 直接修改状态数据的方法

// 引入mutetion-types的类型
import { RECEIVE_PRODUCTSSHOW, RECEIVE_LIVINGAt, RECEIVE_CLASSNAV, RECEIVE_CLASSLISTS, RECEIVE_PURCHASENAV, RECEIVE_PURCHASELIST } from './mutation-types'
export default {
  // 首页商品展示
  [RECEIVE_PRODUCTSSHOW](state, productsShow) {
    state.productsShow = productsShow
  },
  //首页居家生活
  [RECEIVE_LIVINGAt](state, livingAt) {
    state.livingAt = livingAt
  },

  // 分类导航
  [RECEIVE_CLASSNAV](state, classNavs) {
    state.classNavs = classNavs
  },
  // 分类列表
  [RECEIVE_CLASSLISTS](state, classLists) {
    state.classLists = classLists
  },

  //值得买轮播图
  [RECEIVE_PURCHASENAV](state, purchaseNav) {
    state.purchaseNav = purchaseNav
  },
  // 值得买列表
  [RECEIVE_PURCHASELIST](state, purchaseList) {
    state.purchaseList = purchaseList
  }
}