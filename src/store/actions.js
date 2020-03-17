// 间接修改状态数据的方法

// 引入mutetion-types的类型
import { RECEIVE_PRODUCTSSHOW, RECEIVE_LIVINGAt, RECEIVE_CLASSNAV, RECEIVE_CLASSLISTS, RECEIVE_PURCHASENAV, RECEIVE_PURCHASELIST } from './mutation-types'
// 引入api接口
import { reqProductsShow, reqLivingAt, reqClassNav, reqClassLists, reqPurchaseNav, reqPurchaseList } from '../api/index'
export default {
  // 首页商品展示
  async getreqProductsShow({ commit }) {
    // 发送异步请求
    const result = await reqProductsShow()
    // 向mutetions提交,把数据传过去
    commit(RECEIVE_PRODUCTSSHOW, result)
  },
  //首页居家生活
  async getreqLivingAt({ commit }) {
    // 发送异步请求
    const result = await reqLivingAt()
    commit(RECEIVE_LIVINGAt, result)
  },
  // 分类导航
  async getreqClassNav({ commit }) {
    const result = await reqClassNav()
    commit(RECEIVE_CLASSNAV, result)
  },
  // 分类列表
  async getreqClassLists({ commit }) {
    const result = await reqClassLists()
    commit(RECEIVE_CLASSLISTS, result)
  },

  // 值得买轮播图
  async getreqPurchaseNav({ commit }) {
    const result = await reqPurchaseNav()
    // 判断result是否等于200
    if (result.code === "200") {
      // 把数据存到purchaseNav中
      const purchaseNav = result.data
      // 向mutetions提交,把数据传过去
      commit(RECEIVE_PURCHASENAV, purchaseNav)
    }
  },
  // 值得买列表
  async getreqPurchaseList({ commit }) {
    const result = await reqPurchaseList()
    if (result.code === "200") {
      const purchaseList = result.data
      commit(RECEIVE_PURCHASELIST, purchaseList)
    }
  }
}