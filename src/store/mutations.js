// 直接修改状态数据的方法

// 引入mutetion-types的类型
import {RECEIVE_PRODUCTSSHOW} from './mutation-types'
export default {
  // 首页商品展示
  [RECEIVE_PRODUCTSSHOW](state,productsShow){
    state.productsShow=productsShow
  }
}