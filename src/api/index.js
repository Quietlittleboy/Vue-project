// 引入axios
import ajax from './ajax.js'

export const reqProductsShow = () =>ajax.get(`/api/index`)