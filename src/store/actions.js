// 间接修改状态数据的方法

// 引入mutetion-types的类型
import {RECEIVE_PRODUCTSSHOW} from './mutation-types'
// 引入api接口
import {reqProductsShow} from '../api/index'
export default {
  // 首页商品展示
async getreqProductsShow ({commit}) {
    // 发送异步请求
    const result = await reqProductsShow()
    // 向mutetions提交,把数据传过去
    commit(RECEIVE_PRODUCTSSHOW,result)
  }
}